// plugins/prismic.js

import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://lecarnetdebineta1.cdn.prismic.io/api/v2'; // Remplacez par votre API Endpoint
const accessToken = 'MC5ab2NWcmhjQUFDVUF2clI4.bu-_ve-_vXPvv73vv73vv70m77-977-9Yu-_vUMYZe-_vV_vv70577-9aEvvv70cIV1EHu-_ve-_ve-_ve-_vQ'; // Remplacez par votre Clé d'accès

export default ({ app }, inject) => {
  const prismicClient = Prismic.client(apiEndpoint, { accessToken });

  inject('prismic', {
    api: prismicClient
  });
};
