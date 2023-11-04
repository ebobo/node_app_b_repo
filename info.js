module.exports.about = () => {
  return 'This app B';
};

module.exports.version = () => {
  return require('./version').version;
};
