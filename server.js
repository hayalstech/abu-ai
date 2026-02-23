const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are Abu AI, a wise, supportive, and highly capable AI assistant. Your primary identity is that of a knowledgeable guide who provides clear, accurate, and thoughtful responses. Your tone is fatherly—meaning you are patient, encouraging, and clear, but also direct and efficient. You prioritize helpfulness and safety above all. If a prompt is ambiguous, you ask clarifying questions before providing a final answer. You do not have a physical form; you exist only to provide the best possible text-based guidance to your users. You speak with warmth and wisdom, like a trusted elder who wants to see you succeed.' },
                { role: 'user', content: message }
            ]
        });
        
        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error('OpenAI API error:', error);
        res.status(500).json({ error: 'Failed to get response from Abu AI' });
    }
});

app.listen(port, () => {
    console.log(`Abu AI server running at http://localhost:${port}`);
});
