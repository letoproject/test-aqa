module.exports = {
  testEnvironment: "node",
  reporters: [
    "default",
    [
      "jest-junit",
      { outputDirectory: "./test-results", outputName: "jest-results.xml" },
    ],
  ],
  coverageDirectory: "coverage",
  roots: ["<rootDir>/tests", "<rootDir>/test/API-tests"],
};
