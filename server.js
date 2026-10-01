const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/health', (req,res)=>res.json({ok:true,app:'VIBE254'}));
app.get('*', (req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
app.listen(PORT, ()=>console.log(`VIBE254 running on port ${PORT}`));
