# 🐢 UserGeneration: Character Creator and Battle Simulator
##### fac-31-Pro0217-UserGeneration

Welcome to FAC-31's User Generation project!

### 📝 About

This application allows users to create **custom characters** by choosing their appearance and describing themselves.
Create your character, and discover their own custom lounge, defined by their attributes and description.
But be careful, existing characters might want to test your abilities!
Enjoy a vivid description of your character's battle, which may take place in wildly different ways, depending on your choices!

### 📚 Documentation

UserGeneration is powered by calls to OpenAI's Chat-GPT-4o and DALL-E 3.
After some constrained appearance choices, the free text of the character description is sent to Chat-GPT.

Behind the scenes, more aspects of the character are created which will later be used in the battle scene.
UserGeneration was built to be upgradeable and modifiable, with deep customisability.
Currently, characters are given generated stats including standard RPG attributes, and certain skill abilities.
While these are not visible to the client, the battle scene will be decided based on the character and their opponent's attributes.

The lounge is also dynamically generated through a call to DALL-E.
The image generation draws from the character's appearance, name, and description and is created in a pixelated style.

Characters and their attributes are saved as part of a JSON array on the server.
Random battles with existing characters are called on character creation, and the punishment for losing is deletion!

## ✨ API endpoints

Currently, UserGeneration is a self-contained application, but it is possible to use its character generation feature independently.
To do so, create a POST request to "https://pro0217-usergeneration.onrender.com/characters" with a JSON object with this structures:

```
characterData = {
    name: "string_name",
    biography: "string_biography",
    skin: "string_skin",
    hat: "string_hat",
    outfit: "string_outfit",
    boots: "string_boots"
    };
```


## 🚀 Running locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Pro0217-MUserGeneration.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your OpenAI API key:
```env
OPEN_API_KEY=your_openai_api_key
```

4. Start the server:
```bash
node server.js
```
