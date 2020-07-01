/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  homeDetails: {
    id: `${scope}.homeDetails`,
    defaultMessage: 'Back to the start.',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  aboutDetails: {
    id: `${scope}.aboutDetails`,
    defaultMessage: 'Find out about FastLab',
  },
  projects: {
    id: `${scope}.projects`,
    defaultMessage: 'Projects',
  },
  projectsDetails: {
    id: `${scope}.projectsDetails`,
    defaultMessage: 'See our amazing projects.',
  },
  areas: {
    id: `${scope}.areas`,
    defaultMessage: 'Rabbit Hole',
  },
  areasDetails: {
    id: `${scope}.projectsDetails`,
    defaultMessage:
      'Get a deeper understanding of our research paradigm, and how it can help you',
  },
  updates: {
    id: `${scope}.updates`,
    defaultMessage: 'Updates',
  },
  updatesDetails: {
    id: `${scope}.updatesDetails`,
    defaultMessage:
      'Get updates on new and existing projects. Plus important news from FastLab.',
  },
  programs: {
    id: `${scope}.programs`,
    defaultMessage: 'Programs',
  },
  programsDetails: {
    id: `${scope}.programsDetails`,
    defaultMessage: 'Programs write up... ',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
  contactDetails: {
    id: `${scope}.contactDetails`,
    defaultMessage: 'Contact FastLab',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  loginDetails: {
    id: `${scope}.login`,
    defaultMessage: 'Login to your account to contribute to FastLab',
  },
});
