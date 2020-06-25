import { defineMessages } from 'react-intl';

import { VERSION } from 'containers/App/constants';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: `©2020 The University of Newcastle Australia. v${VERSION}`,
  },
});
