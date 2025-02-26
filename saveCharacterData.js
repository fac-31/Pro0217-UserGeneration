//NC - extracting and saving character data as a self contained module 

const fs = require('fs');
const path = require('path');
const express = require("express");
const router = express.Router();


router.post('/characters', (req, res) => {
    const characterData = req.body;
    console.log('Ingredients received:', characterData);

//NC - data JSON files save with the character name - this can be changed
    const fileName = `${characterData.name.replace(/\s+/g, '_')}_character.json`;

//NC - path to save JSON files in a folder
    const dataFolder = path.join(__dirname, 'Back-end', 'characterData');

//NC - Define the full path to the file - required as part using the file save
    const filePath = path.join(dataFolder, fileName);

//NC - Write the character data extracted from the form to a file in JSON format
    fs.writeFile(filePath, JSON.stringify(characterData, null, 2), (err) => {
        if (err) {
            console.error('Problems moving your ingredients', err);
            return res.status(500).json({ message:'Problems moving your ingredients' });
        }

//NC - file save success message 
        res.json({
            message: 'Ingredients in the fridge',
            data: characterData
        });
    });
});

module.exports = router;
