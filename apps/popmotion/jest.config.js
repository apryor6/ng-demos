module.exports = {
  name: 'popmotion',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/popmotion',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
