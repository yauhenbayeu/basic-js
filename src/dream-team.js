const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members && members.length) {
    const correctNames = members.filter((member) => typeof member === 'string');

    const output = [];
    correctNames.map(name => {
      output.push(name.toUpperCase().trim()[0])
    })
    return output.sort().join('')
  }

  return false
}

module.exports = {
  createDreamTeam
};
