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
    var generic_options = [
        {
            "content_type": "text",
            "title": "Check Account",
            "payload": "$214.15 available."
        },
        {
            "content_type": "text",
            "title": "Budgeting tip",
            "payload": "Don't buy avocado toast."
        },
        {
            "content_type": "text",
            "title": "View Spending Graph",
            "payload": "http://gqtrippin.com/wp-content/uploads/2013/03/budget-pie-chart.jpg"
        }
    ];

    var account_options = [
        {
            "content_type": "text",
            "title": "View checking account balance",
            "payload": "$2345.23 available"
        },
        {
            "content_type": "text",
            "title": "View savings account balance",
            "payload": "$987.66 available"
        }
    ];


    // Check for key words and respond
    var msg = message.toLowerCase();

    if (msg.includes('account') || msg.includes('enough') || msg.includes('money')) {
        bot.sendQuickReplies(userId, "Would you like to check your account?", account_options);
    }
});

bot.on('quickreply', function(userId, payload) {
    bot.sendTextMessage(userId, payload);
});

// Express listener
app.listen(3000);