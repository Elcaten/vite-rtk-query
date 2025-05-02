/** @type {import('@rtk-query/codegen-openapi').ConfigFile} */
const config = {
  schemaFile: 'https://api.ynab.com/papi/open_api_spec.yaml',
  apiFile: '../src/services/ynabApiBase.ts',
  apiImport: 'ynabApiBase',
  outputFile: '../src/services/ynabApi.ts',
  exportName: 'ynabApi',
  hooks: true,
}

module.exports = config
