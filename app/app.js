/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import AWS Authentication stuff.
import Amplify, { Auth, I18n } from 'aws-amplify';
import AuthManager from 'containers/AuthManager';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { setAutoFreeze } from 'immer';
import { localForage } from 'localforage';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Import the AWS Configuration and configure.
import awsExports from './aws-exports';

// All my Custom CSS.
import 'video-react/dist/video-react.css';
import 'customType.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';

library.add(faAngleRight);

setAutoFreeze(false);

I18n.setLanguage('en');
const dict = {
  en: {
    'Phone Number': 'Mobile Phone Number',
  },
};

I18n.putVocabularies(dict);

Amplify.configure(awsExports);
Auth.configure({
  authenticationFlowType: 'USER_PASSWORD_AUTH',
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');
let runtime = null;

if (process.env.NODE_ENV === 'production') {
  runtime = require('offline-plugin/runtime'); // eslint-disable-line global-require
}

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistStore(store, { storage: localForage })}
      >
        <LanguageProvider messages={messages}>
          <ConnectedRouter history={history}>
            <AuthManager>
              <App runtime={runtime} />
            </AuthManager>
          </ConnectedRouter>
        </LanguageProvider>
      </PersistGate>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/de.js'),
      ]),
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

window.LOG_LEVEL = 'debug';
