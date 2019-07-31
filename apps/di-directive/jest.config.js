module.exports = {
  name: 'di-directive',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/di-directive',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
