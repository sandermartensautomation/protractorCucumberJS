exports.config = {
  framework: 'custom',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  directConnect: true,
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['./tests/features/**/spec.feature'],
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./tests/specs/*.js'],
    //format: 'json:./report/results.json',
    tags: [],
    strict: true,
    compiler: []
  }
}