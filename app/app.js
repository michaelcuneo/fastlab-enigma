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
import Amplify from 'aws-amplify';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./images/favicon-16x16.png';
import '!file-loader?name=[name].[ext]!./images/favicon-32x32.png';
import '!file-loader?name=[name].[ext]!./images/apple-touch-icon-57x57.png';
import '!file-loader?name=[name].[ext]!./images/apple-touch-icon-60x60.png';
import '!file-loader?name=[name].[ext]!./images/apple-touch-icon-72x72.png';
import '!file-loader?name=[name].[ext]!./images/apple-touch-icon-76x76.png';
import '!file-loader?name=[name].[ext]!./images/apple-touch-icon-114x114.png';
import '!file-loader?name=[name].[ext]!./images/apple-touch-icon-120x120.png';
import '!file-loader?name=[name].[ext]!./images/apple-touch-icon-144x144.png';
import '!file-loader?name=[name].[ext]!./images/apple-touch-icon-152x152.png';
import '!file-loader?name=[name].[ext]!./images/apple-touch-icon-180x180.png';
import '!file-loader?name=[name].[ext]!./images/android-chrome-36x36.png';
import '!file-loader?name=[name].[ext]!./images/android-chrome-48x48.png';
import '!file-loader?name=[name].[ext]!./images/android-chrome-72x72.png';
import '!file-loader?name=[name].[ext]!./images/android-chrome-96x96.png';
import '!file-loader?name=[name].[ext]!./images/android-chrome-144x144.png';
import '!file-loader?name=[name].[ext]!./images/android-chrome-192x192.png';
import '!file-loader?name=[name].[ext]!./images/android-chrome-256x256.png';
import '!file-loader?name=[name].[ext]!./images/android-chrome-384x384.png';
import '!file-loader?name=[name].[ext]!./images/android-chrome-512x512.png';
import '!file-loader?name=[name].[ext]!./images/mstile-70x70.png';
import '!file-loader?name=[name].[ext]!./images/mstile-144x144.png';
import '!file-loader?name=[name].[ext]!./images/mstile-150x150.png';
import '!file-loader?name=[name].[ext]!./images/mstile-310x150.png';
import '!file-loader?name=[name].[ext]!./images/mstile-310x310.png';
import '!file-loader?name=[name].[ext]!./images/safari-pinned-tab.svg';
import '!file-loader?name=[name].[ext]!./site.webmanifest';
import '!file-loader?name=[name].[ext]!./browserconfig.xml';
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

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'tippy.js/dist/tippy.css';

library.add(faAngleRight);

setAutoFreeze(false);

Amplify.configure(awsExports);

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
            <App runtime={runtime} />
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
