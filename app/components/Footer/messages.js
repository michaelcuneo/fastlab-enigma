import { defineMessages } from 'react-intl';

import { VERSION } from 'containers/App/constants';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: `©2020 The University of Newcastle Australia. v${VERSION}`,
  },
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
    id: `${scope}.areasDetails`,
    defaultMessage:
      'Get a deeper understanding of our research paradigm, and how it can help you',
  },
  exhibits: {
    id: `${scope}.exhibits`,
    defaultMessage: 'Exhibitions',
  },
  exhibitsDetails: {
    id: `${scope}.exhibitsDetails`,
    defaultMessage: `See if we're showing anything local or over VR right now.`,
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
});
