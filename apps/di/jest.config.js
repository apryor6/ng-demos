module.exports = {
  name: 'di',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/di',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
