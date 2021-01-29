const express = require('express');
const server = express();
server.use(express.json());

const PostRoutes = require("./routes/PostRoutes");
server.use("/post", PostRoutes); 

server.listen(3333, () => {
    console.log('Api on the line');
})