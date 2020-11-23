// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: "jest-coverage",

    // A set of global variables that need to be available in all test environments
    globals: {
        NODE_ENV: "test",
    },

    // The test environment that will be used for testing
    testEnvironment: "node",
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ["/node_modules/"],

    // The regexp pattern or array of patterns that Jest uses to detect test files
    testRegex: ["(/__tests__/.*|\\.(test|spec|react-test))\\.(js|jsx)$"],
};
