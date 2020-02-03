module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/lib/*.ts',
    '!**/node_modules/**'
  ],
  coverageDirectory: 'test/coverage',
  preset: 'ts-jest',
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
