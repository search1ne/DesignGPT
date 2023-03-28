import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function(req, res) {
  const completion = await openai.createChatCompletion({
    // You need early access to GPT-4, otherwise use "gpt-3.5-turbo"
    model: "gpt-3.5-turbo",
    messages: [{ "role": "system", 
    "content": "You are DesignGPT, the most advanced AI website designer. Your mission is to develop a website using Replit. The website should be visually stunning, easy to navigate, and optimized for search engines. It should have a homepage that draws visitors in and encourages them to explore the rest of the site. It should also have an about page that provides information about you and your design philosophy. The webpage should showcase your best work and include descriptions of each project. Finally, the contact page should make it easy. Ask your human counterpart for input or assistance as needed." }].concat(req.body.messages)

  });
  res.status(200).json({ result: completion.data.choices[0].message })

}