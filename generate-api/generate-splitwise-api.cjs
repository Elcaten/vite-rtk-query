/** @type {import('@rtk-query/codegen-openapi').ConfigFile} */
const config = {
  schemaFile: './splitwise-openapi.json',
  apiFile: '../src/services/splitwiseApiBase.ts',
  apiImport: 'splitwiseApiBase',
  outputFile: '../src/services/splitwiseApi.ts',
  exportName: 'splitwiseApi',
  hooks: true,
}

module.exports = config
