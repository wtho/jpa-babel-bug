module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: [
        "jpa/build/ts-jest/InlineFilesTransformer",
        "jpa/build/ts-jest/StripStylesTransformer"
      ]
    }
  },
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest"
  },
  testEnvironment: "jest-environment-jsdom-fifteen",
  moduleFileExtensions: ["ts", "html", "js", "json"],
  setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"]
};
