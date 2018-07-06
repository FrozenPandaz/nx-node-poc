module.exports = {
  name: 'backend',
  testMatch: ['<rootDir>/**/*.spec.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '@nodeproj/schema': '<rootDir>/../../libs/schema/src/index.ts'
  }
};
