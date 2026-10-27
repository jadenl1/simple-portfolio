module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '\\.(css|jpg|JPG|png)$': '<rootDir>/test/assetMock.cjs',
  },
};
