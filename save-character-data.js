//NC - extracting and saving character data as a self contained module

const fs = require("fs")
const path = require("path")
const express = require("express")
const router = express.Router()
const { OpenAI } = require("openai")
const getCharacter = require("./get-character")

//JM configs OpenAI
const client = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

//JM defining a path for get request
router.get("/characters", (req, res) => {
  //JM saving route to character folder in dataFolder variable
  const dataFolder = path.join(__dirname, "back-end", "character_data")

  //JM checking for files in the folder --> parameters are options
  fs.readdir(dataFolder, (err, files) => {
    if (err) {
      console.error("Error reading character folder:", err)
      return res
        .status(500)
        .json({ message: "Error retrieving character folder" })
    }

    if (files.length === 0) {
      return res.status(404).json({ message: "No characters found" })
    }

    //JM getting the latest character file --> needs ammending - not dynamic
    const latestCharacter = path.join(dataFolder, "/jaz_character.json")

    //JM reads as a text file - and responds with the character object
    fs.readFile(latestCharacter, "utf8", (err, data) => {
      //JM ensures the app doesn't crash if file is missing / not readable
      if (err) {
        console.error("Error reading character file:", err)
        return res
          .status(500)
          .json({ message: "Error retrieving character file" })
      }
      res.json(JSON.parse(data))
    })
  })
})

router.post("/characters", async (req, res) => {
  const characterData = req.body
  console.log("Ingredients received:", characterData)

  try {
    //JM storing OpenAI response (character personailty stats)
    const characterStatData = await getCharacter(client, characterData)

    //JM creating new variable with both character data objects (physical + personality)
    const fullCharacterData = {
      ...characterData,
      ...JSON.parse(characterStatData),
    }
    console.log("full character data:", fullCharacterData)

    //NC - data JSON files save with the character name - this can be changed
    const fileName = `${characterData.name.replace(/\s+/g, "_")}_character.json`

    //NC - path to save JSON files in a folder
    //DM - edited to add archive folder
    const archiveFolder = path.join(__dirname, "back-end", "character_archive")
    const dataFolder = path.join(__dirname, "back-end", "character_data")

    //NC - Define the full path to the file - required as part using the file save
    const filePath = path.join(archiveFolder, fileName)
    const filePath2 = path.join(dataFolder, "character_list.json")
    
    //NC - Write the character data extracted from the form to a file in JSON format
    //DM changed filePath to save to character archive, which will be ignored by git, to store generated characters
    fs.writeFile(
      filePath,
      JSON.stringify(fullCharacterData, null, 2),
      (err) => {
        if (err) {
          console.error("Problems moving your ingredients", err)
          return res
            .status(500)
            .json({ message: "Problems moving your ingredients" })
        }

        //NC - file save success message
        res.json({
          message: "Ingredients in the fridge",
          data: fullCharacterData,
        })
      }
    )

    //DM - implementing adding new chars to the character list JSON
    //DM - note, using Sync version - will investigate difference without (error catching I think)
    let charlistjson = fs.readFileSync(filePath2)
    let charlist = JSON.parse(charlistjson)
    const arrcharlist = Array.from(charlist)
    arrcharlist.push(fullCharacterData)
    charlist = { ...arrcharlist}
    charlistjson = JSON.stringify(charlist)
    fs.writeFileSync(filePath2, charlistjson)

    // fs.readFileSync()
  } catch (error) {
    console.error("error saving character data:", error)
  }
})

module.exports = router
