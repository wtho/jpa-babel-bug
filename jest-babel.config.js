module.exports = {
  transform: {
    "^.+\\.(html)$": "./jpa/build/babel/load-html-transformer",
    "^.+\\.(ts|js)$": "babel-jest"
  },
  testEnvironment: "jest-environment-jsdom-fifteen",
  moduleFileExtensions: ["ts", "html", "js", "json"],
  setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"]
};
