import express from "express";
const app = express();

app.get("/name", (req, res) => {
  res.json({ name: "Ayush" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});








