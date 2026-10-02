```javascript
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// VIBE254 files are in the project root
app.use(express.static(__dirname));

// Health check
app.get("/health", (req, res) => {
  res.json({
    ok: true,
    app: "VIBE254"
  });
});

// Main website
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Any other page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`VIBE254 running on port ${PORT}`);
});
```
