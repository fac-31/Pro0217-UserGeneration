//NC - create an object for the current user

const fs = require('fs').promises;
const path = require('path');

//NC - File path 
const getCharacterFilePath = () => {
    return path.join(__dirname, '..', '..', 'back-end', 'characterData', 'characterArray.json');
  };

//NC - Function to get the current user (last character in the array)
async function getCurrentUser() {
  console.log("checking current user")
  try {
    const filePath = getCharacterFilePath();
    const data = await fs.readFile(filePath, 'utf8');
    const characterArray = JSON.parse(data); 
    
//NC - Select the last character from the array
    const currentUser = characterArray[characterArray.length - 1];
    
//NC - Return an object with the currentUser
    return { currentUser };
  } catch (error) {
    console.error('Error selecting current user:', error);
    throw new Error('Unable to select the current user');
  }
}

module.exports = getCurrentUser;
