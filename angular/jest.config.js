module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["./setupJest.ts"],
  reporters: ["default"],
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageReporters: ["text", "cobertura"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
};
