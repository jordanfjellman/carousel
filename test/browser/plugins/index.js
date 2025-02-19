/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const preprocessor = require('cypress-react-unit-test/plugins/load-webpack');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  config.env.webpackFilename = './test/browser/webpack.config.js';
  preprocessor(on, config);

  // IMPORTANT to return the config object
  return config;
};
