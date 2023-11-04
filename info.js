module.exports.about = () => {
  return 'This app B';
};

module.exports.version = () => {
  return require('./version').version;
};

module.exports.creationDate = () => {
  return '4th.November.2023';
};
