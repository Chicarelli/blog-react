const express = require('express');
const cors = require('cors');
const server = express();
server.use(express.json());
server.use(cors());

const PostRoutes = require("./routes/PostRoutes");
server.use("/post", PostRoutes); 

server.listen(3333, () => {
    console.log('Api on the line');
})