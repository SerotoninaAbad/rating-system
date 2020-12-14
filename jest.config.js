module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  // we need to create this file
  setupFilesAfterEnv: ['<rootDir>/tests.config.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '<rootDir>/modules/__tests__/googleMapsMock/',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
