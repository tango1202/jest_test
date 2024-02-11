module.exports = {
    testEnvironment: 'node',
    clearMocks: true,
    roots: ['./test'],
    testMatch: ['**/*.test.js'],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
        '^src/(.*)$': './src/$1',
        '^test/(.*)$': './test/$1',
    },
}