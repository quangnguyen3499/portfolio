module.exports = function markdownLoader(source) {
  return `module.exports = ${JSON.stringify(source)}`;
};
