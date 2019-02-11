const express = require("express");
const redis = require("redis")

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visit) => {
        res.send("Total number of visits : " + visit)
        client.set('visits', parseInt(visit) + 1);
    });
});

app.listen(8081, () => {
    console.log("Listening on 8081")
})