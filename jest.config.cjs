module.exports = {
  preset: 'ts-jest',
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'node',
  transformIgnorePatterns: [
    "/node_modules/(?!(uuid)/)"
  ],
}