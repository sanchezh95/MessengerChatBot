var express = require('express');
var app = express();
var FBBotFramework = require('fb-bot-framework');

// Initializations
var bot = new FBBotFramework ({
    page_token: "EAABujcJ07gYBANfZBT83Q6QcCn65mcW5TiSZBxLqAaNZBvT6EmPU7jgD7nvsoWKJUYF2VKMV8GWQ5kiXjvyAJQnwbGZAYZCbuXZAZCmtZCyGZB3ZBF5S3zQRwguxyEKaerZCnNxIr2qZCaZAcPI6c9VTQBZCJ1n872s8sibMsrrFFyRzo1kMVUW5AXjy59",
    verify_token: "verify_token"
});

// Set up express for webhook
app.use('/webhook', bot.middleware());

// Set listener for incoming messages
bot.on('message', function(userId, message) {
    bot.sendTextMessage(userId, "ECHO: " + message);
});

app.get('/', function(req, res) {
    res.send("Hello, World!");
})

// Express listener
app.listen(3000);