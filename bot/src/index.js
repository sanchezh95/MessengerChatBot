var express = require('express');
var app = express();
var FBBotFramework = require('fb-bot-framework');

// Set up framework
var bot = new FBBotFramework ({
    page_token: "EAABujcJ07gYBANfZBT83Q6QcCn65mcW5TiSZBxLqAaNZBvT6EmPU7jgD7nvsoWKJUYF2VKMV8GWQ5kiXjvyAJQnwbGZAYZCbuXZAZCmtZCyGZB3ZBF5S3zQRwguxyEKaerZCnNxIr2qZCaZAcPI6c9VTQBZCJ1n872s8sibMsrrFFyRzo1kMVUW5AXjy59",
    verify_token: "verify_token"
});

// Set up express for webhook
app.use('/webhook', bot.middleware());

// Set listener for incoming messages
bot.on('message', function(userId, message) {

    // Quick replies
    var replies = [
        {
            "content_type": "text",
            "title": "English",
            "payload": "Hello"
        },
        {
            "content_type": "text",
            "title": "Spanish",
            "payload": "Hola"
        }
    ];

    bot.sendQuickReplies(userId, "Select a language", replies);

});

bot.on('quickreply', function(userId, payload) {
    bot.sendTextMessage(userId, payload);

    // Quick replies
    var replies = [
        {
            "content_type": "text",
            "title": "acct0",
            "payload": ""
        },
        {
            "content_type": "text",
            "title": "Spanish",
            "payload": "Hola"
        }
    ];

    if (payload === "Hello") {
        bot.sendTextMessage("Which account would you like to check?");
    }
    else {
        bot.sendTextMessage("Que cuenta quieres chequear?");
    }
});

// Express listener
app.listen(3000);