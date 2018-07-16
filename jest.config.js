module.exports = {
  project: ['apps/frontend', 'apps/backend'],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js'
  },
  resolver: '@nrwl/builders/plugins/jest/resolver',
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  moduleFileExtensions: ['ts', 'js', 'html']
};
