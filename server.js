```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve files from the project root
app.use(express.static(__dirname));

app.get('/health', (req, res) => {
  res.json({ ok: true, app: 'VIBE254' });
});

// Serve index.html from the project root
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`VIBE254 running on port ${PORT}`);
});
```
