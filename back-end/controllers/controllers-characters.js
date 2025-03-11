const fs = require("fs")
const path = require("path")
const { OpenAI } = require("openai")
const getCharacter = require("../openAi-calls/generate-character")
const getBackground = require("../openAi-calls/generate-background")

//JM configs OpenAI
const client = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

//JM An array that stores created characters and allows you to acces the most recent
//JM valid solution? --> alternatively, write a file for persistant storage of ID's
const idArray = []

// Save-character-data-get
exports.sendCharacter = (req, res) => {
  const dataFolder = path.join(
    __dirname,
    "..",
    "..",
    "back-end",
    "characterData"
  )

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
    const latestCharacter = path.join(
      dataFolder,
      `/${idArray[idArray.length - 1]}.json`
    )

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
}

//save-character-data-post
exports.saveCharacter = async (req, res) => {
  const characterData = req.body

  try {
    const fullCharacterData = await makeDataNice(characterData)

    const backgroundData = await getBackground(fullCharacterData)
    fullCharacterData["url"] = backgroundData

    const dataFolder = path.join(
      __dirname,
      "..",
      "..",
      "back-end",
      "characterData"
    )

    const file = path.join(dataFolder, "characterArray.json")
    writeToFile(file, fullCharacterData)

    console.log("bug")
    res.json({
      message: "Ingredients in the fridge",
    })
  } catch (error) {
    console.error("error saving character data:", error)
  }
}

async function makeDataNice(characterData) {
  //JM storing OpenAI response (character personailty stats)
  const characterStatData = await getCharacter(client, characterData)
  const userId = Math.floor(Math.random() * 9000) + 1000

  //JM creating new variable with both character data objects (physical + personality)
  const fullCharacterData = {
    ...characterData,
    ...JSON.parse(characterStatData),
    userId,
  }

  return fullCharacterData
}

function writeToFile(file, fullCharacterData) {
  fs.readFile(file, (err, data) => {
    if (err) {
      console.log("Error writing character array", err)
      return
    }

    const characterArray = JSON.parse(data)

    characterArray.push(fullCharacterData)

    fs.writeFileSync(file, JSON.stringify(characterArray, null, 2))
  })
}
