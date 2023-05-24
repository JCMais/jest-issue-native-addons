/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import { defaults } from "jest-config";
import { type JestConfigWithTsJest, pathsToModuleNameMapper } from "ts-jest";

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  modulePaths: ["<rootDir>"],
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  moduleNameMapper: pathsToModuleNameMapper(
    {
      "@/*": ["./*"],
    },
    {
      useESM: true,
      prefix: "<rootDir>/",
    }
  ),
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  preset: "ts-jest/presets/default-esm",
  roots: ["<rootDir>"],
  transform: {
    "node_modules/.pnpm/(lodash-es@4.17.21|lodash@4.17.21|serialize-error@11.0.0|jest-runtime@29.5.0|canvas@2.11.2)/.+\\.(j|t)sx?$":
      [
        "ts-jest",
        {
          isolatedModules: true,
          useESM: true,
        },
      ],
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        isolatedModules: true,
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [
    "node_modules/.pnpm/(?!(lodash-es@4.17.21|lodash@4.17.21|serialize-error@11.0.0|jest-runtime@29.5.0|canvas@2.11.2)/)",
  ],
} as JestConfigWithTsJest;
