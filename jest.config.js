module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '!**/lib/index.ts',
    '**/lib/*.ts',
    '!**/node_modules/**'
  ],
  coverageDirectory: 'coverage',
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  transform: {
    '.*\\.(vue)$': 'vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue']
}
