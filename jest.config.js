module.exports = {
  testEnvironment: "node",
  reporters: ["default", "jest-junit"],
  coverageDirectory: "coverage",
  roots: ["<rootDir>/", "<rootDir>/API-tests"],
};
