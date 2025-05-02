/** @type {import('@rtk-query/codegen-openapi').ConfigFile} */
const config = {
  //schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',
  schemaFile: 'https://api-sports.io/public/documentations/volleyball-v1.yaml',
  apiFile: '../src/services/volleyApiBase.ts',
  apiImport: 'volleyApiBase',
  outputFile: '../src/services/volleyApi.ts',
  exportName: 'volleyApi',
  hooks: true,
}

module.exports = config
