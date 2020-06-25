/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.FeaturePage';

export default defineMessages({
  researchers: {
    id: `${scope}.researchers`,
    defaultMessage: 'Humans of FastLab',
  },
  back: {
    id: `${scope}.back`,
    defaultMessage: 'BACK',
  },
});
