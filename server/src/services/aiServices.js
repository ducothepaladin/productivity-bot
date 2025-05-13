import axios from "axios";

export const generate = async (messages) => {
  const openRouterUrl = process.env.OPENROUTER_AI_URL;
  const aiModel = process.env.MODEL;
  const apiKey = process.env.OPENROUTER_AI_APIKEY;

  try {
    const res = await axios.post(
      openRouterUrl,
      {
        model: aiModel,
        messages,
      },
      {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "X-Title": "ProductivityBuddy"
        }
      },
    );

    return res.data.choices[0].message.content;
  } catch (error) {
    console.error("AI generation error:", error.response?.data || error.message)
    throw error
  }
};
