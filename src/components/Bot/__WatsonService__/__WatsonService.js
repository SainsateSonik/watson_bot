const watson = require('watson-developer-cloud');
// import AssistantV1 from 'watson-developer-cloud/assistant/v1';

const askWatson = (query) => {
    const assistant = new watson.AssistantV1({
        "url": "https://gateway.watsonplatform.net/assistant/api",
        "username": "30a5579b-fbbe-4248-8a61-6442f866c1c5",
        "password": "1OhPghJRSRJj",
        "version": "2018-07-10",
        "iam_apikey": "3jsmjHZLmEiYmWx1NnrnuKp_B-NTCPrVUZ5P0l5paS5q"
    });
    
    assistant.message({
        workspace_id: '7490d436-034e-4de5-9601-70328b01a8cf',
        input: {'text': "Hi" }
    },  (err, response) => {
        if (err)
            console.log('error:', err);
        else
            console.log(response.output.text[0]);
    })
};

export default askWatson;