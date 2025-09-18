import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

app.get("/check", (req, res) => {
  res.send("✅ Backend is working fine!");
});


 const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server listening on port${PORT}`);
});








