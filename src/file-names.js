const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameCount = {};

  return names.map(name => {
    if (name in nameCount) {
      let _name = '';
      let count = nameCount[name];

      do {
        _name = `${name}(${count++})`;
      } while (_name in nameCount);

      nameCount[name]++;
      nameCount[_name] = 1;

      return _name;


    } 
    else {
      nameCount[name] = 1;
      return name;
    }
  });
}

module.exports = {
  renameFiles
};
