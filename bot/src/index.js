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
            "title": "Check Account",
            "payload": "$214.15 available."
        },
        {
            "content_type": "text",
            "title": "Tip on saving $",
            "payload": "Don't buy avocado toast."
        },
        {
            "content_type": "text",
            "title": "View Spending Graph",
            "payload": "http://gqtrippin.com/wp-content/uploads/2013/03/budget-pie-chart.jpg"
        }
    ];

    bot.sendQuickReplies(userId, "Select an option:", replies);

});

bot.on('quickreply', function(userId, payload) {
    bot.sendTextMessage(userId, payload);
});

// Express listener
app.listen(3000);