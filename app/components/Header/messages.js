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
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  projects: {
    id: `${scope}.projects`,
    defaultMessage: 'Projects',
  },
  updates: {
    id: `${scope}.updates`,
    defaultMessage: 'Updates',
  },
  programs: {
    id: `${scope}.programs`,
    defaultMessage: 'Programs',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
});
