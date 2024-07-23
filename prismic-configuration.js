const prismic = require('@prismicio/client');

// Prismic repository endpoint
const apiEndpoint = 'https://lecarnetdebineta1.cdn.prismic.io/api/v2';

// Access token if the repository is not public
const accessToken = 'MC5ab2NWcmhjQUFDVUF2clI4.bu-_ve-_vXPvv73vv73vv70m77-977-9Yu-_vUMYZe-_vV_vv70577-9aEvvv70cIV1EHu-_ve-_ve-_ve-_vQ';

// Client method to query documents from the Prismic repository
const createClient = (req = null) => {
  const options = {
    accessToken,
  };
  return prismic.createClient(apiEndpoint, options);
};

module.exports = {
  apiEndpoint,
  accessToken,
  createClient,
};
