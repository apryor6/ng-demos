module.exports = {
  name: 'radio',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/radio',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
