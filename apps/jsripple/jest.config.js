module.exports = {
  name: 'jsripple',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/jsripple',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
