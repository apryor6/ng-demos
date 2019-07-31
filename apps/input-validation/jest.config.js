module.exports = {
  name: 'input-validation',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/input-validation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
