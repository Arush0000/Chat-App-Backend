import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: {
    origin: "https://ayushchatapp.vercel.app/", // frontend ka URL
    methods: ["GET", "POST"],
  },
});

// har user ke connect hone par
io.on("connection", (socket) => {
  console.log(`✅ User connected: ${socket.id}`);


socket.on("SendMessage", (data) => {
  console.log("📩 Message received:", data);
  io.emit("ReceiveMessage", { ...data, senderId: socket.id });
});


  socket.on("disconnect", () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});
app.get("/name",(req,res)=>{
  res.json({name:"Ayush Rajput"});
})
 const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("🚀 Server listening on port 3000");
});













