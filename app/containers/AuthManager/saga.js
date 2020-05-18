/**
 * Gets the repositories of the user from Github
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getS3, getCurrentSession } from 'utils/awsLib';

import { API, graphqlOperation } from 'aws-amplify';

import decode from 'jwt-decode';

import userImage from 'images/user.svg';

import { setUser, setLoggedIn } from 'containers/User/actions';
import { AUTH_LOGIN, AUTH_LOGOUT } from './constants';

import { listStaffs } from '../../../src/graphql/queries';
import { updateStaff } from '../../../src/graphql/mutations';

export function* setLogin() {
  let token;
  let decoded;
  let user;

  // Call function to get Userdata from AWS Auth.
  const session = yield call(checkCurrentSession);

  // If the user isn't no current user...
  // Grab the Token, Decode the Token, and pull the username and picture.
  if (session !== 'No current user') {
    // Retrieve the staff list.
    const staff = yield call(getStaffList);

    // Check to see if the current logged in User is in the list of staff.
    const foundStaff = staff.data.listStaffs.items.find(
      currentStaff => currentStaff.email === session.idToken.payload.email,
    );

    // Get the username of the current logged in user
    token = session.idToken.jwtToken;
    decoded = decode(token);

    // If the current logged in user has a staff profile.
    if (foundStaff) {
      // If the current logged in user has a staff profile with their logged in cognitoID Attached set the current user to this user.
      if (foundStaff.cognitoID) {
        const getImage = yield call(getS3Image, foundStaff.mugshot);
        user = {
          id: foundStaff.id,
          firstName: foundStaff.firstName,
          lastName: foundStaff.lastName,
          username: decoded['cognito:username'],
          group: decoded['cognito:groups']
            ? decoded['cognito:groups'][0]
            : 'Administrator',
          name: foundStaff.name,
          bio: foundStaff.bio,
          mugshot: foundStaff.mugshot,
          title: foundStaff.title,
          email: foundStaff.email,
          website: foundStaff.website,
          picture: getImage,
        };
      } else {
        // Otherwise... add the idToken.payload.sub (cognitoID) of the current logged in user, into the found users existing profile.
        addSubToStaff(foundStaff, session.idToken.payload.sub);
        const getImage = yield call(getS3Image, foundStaff.mugshot);
        user = {
          id: foundStaff.id,
          firstName: foundStaff.firstName,
          lastName: foundStaff.lastName,
          username: decoded['cognito:username'],
          group: decoded['cognito:groups']
            ? decoded['cognito:groups'][0]
            : 'Administrator',
          name: foundStaff.name,
          bio: foundStaff.bio,
          mugshot: foundStaff.mugshot,
          title: foundStaff.title,
          email: foundStaff.email,
          website: foundStaff.website,
          picture: getImage,
        };
      }
    } else {
      // If the current logged in user does not have a staff profile yet... just use their logged in username, and the default picture.
      user = {
        username: decoded['cognito:username'],
        group: decoded['cognito:groups']
          ? decoded['cognito:groups'][0]
          : 'Administrator',
        picture: userImage,
      };
    }
  }

  try {
    yield put(setUser(user));
    yield put(setLoggedIn(true));
    yield put(push('/'));
  } catch (err) {
    yield put(setLoggedIn(false, err));
    yield put(push('/'));
  }
}

export function* setLogout() {
  try {
    yield put(setLoggedIn(false));
    yield put(push('/'));
  } catch (err) {
    yield put(setLoggedIn(true, err));
  }
}

async function getS3Image(image) {
  return getS3(image, { expires: 604800 })
    .then(result => result)
    .catch(err => err);
}

async function getStaffList() {
  return API.graphql(graphqlOperation(listStaffs, { limit: 100 }))
    .then(result => result)
    .catch(err => err);
}

async function addSubToStaff(staff, staffCognitoID) {
  const addition = {
    id: staff.id,
    name: staff.name,
    firstName: staff.firstName,
    lastName: staff.lastName,
    mugshot: staff.mugshot,
    title: staff.title,
    bio: staff.bio,
    email: staff.email,
    website: staff.website,
    cognitoID: staffCognitoID,
  };

  return API.graphql(graphqlOperation(updateStaff, { input: addition }))
    .then(result => result)
    .catch(err => err);
}

async function checkCurrentSession() {
  return getCurrentSession().then(result => result);
}

export default function* changeLoggedIn() {
  yield all([
    takeLatest(AUTH_LOGIN, setLogin),
    takeLatest(AUTH_LOGOUT, setLogout),
  ]);
}
