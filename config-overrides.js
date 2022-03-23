const { alias, configPaths } = require('react-app-rewire-alias');
const path = require('path');

module.exports = function override(config) {
  const configuredPaths = configPaths('./tsconfig.path.json');

  alias(configuredPaths)(config);

  return config;
};
