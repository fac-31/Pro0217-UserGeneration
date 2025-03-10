//NC - using fakeOpenAi.js to test out functin 

async function fakeOpenAiCall(prompt) {
    return {
        data: {
            choices: [{ text: `Mocked response for: ${prompt}` }]
        }
    };
}

module.exports = fakeOpenAiCall;
