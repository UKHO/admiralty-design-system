/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const esModules = ['@open-wc', '@lit', 'lit', 'lit-html', 'lit-element'].join('|');

export default {
  preset: 'ts-jest/presets/js-with-babel',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setupJest.ts'],
  testRegex: '/src/.*\\.spec\\.ts$',
  transformIgnorePatterns: [`node_modules/(?!(${esModules})/)`],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
