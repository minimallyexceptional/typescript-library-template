// jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['./**/*.ts'],
  coveragePathIgnorePatterns: ['node_modules/', 'dist/', 'docs/', '.husky/'],
  coverageDirectory: '../coverage/',
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 30,
      lines: 50,
      statements: 50
    }
  }
};
