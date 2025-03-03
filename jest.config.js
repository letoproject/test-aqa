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
  roots: ["<rootDir>/", "<rootDir>/API-tests"],
};
