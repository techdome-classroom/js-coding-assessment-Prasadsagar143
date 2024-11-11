const decodeTheRing = function (s, p) {
  const regex = new RegExp('^' + p.replace(/\*/g, '.*').replace(/\?/g, '.') + '$');
  return regex.test(s);
};

module.exports = decodeTheRing;
