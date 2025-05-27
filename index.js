const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
  const { name, email, company = "", message = "" } = req.body;

  if (!name || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: "Invalid name or email" });
  }

  try {
    const response = await axios.post("https://your-n8n-webhook-url.com", {
      name,
      email,
      company,
      message,
    });
    res.json({ message: "Lead submitted to n8n." });
  } catch (error) {
    res.status(500).json({ error: "Failed to forward to n8n." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
