var express = require('express');
var app = express();
var FBBotFramework = require('fb-bot-framework');

// Set up framework
var bot = new FBBotFramework ({
    page_token: "EAABujcJ07gYBANfZBT83Q6QcCn65mcW5TiSZBxLqAaNZBvT6EmPU7jgD7nvsoWKJUYF2VKMV8GWQ5kiXjvyAJQnwbGZAYZCbuXZAZCmtZCyGZB3ZBF5S3zQRwguxyEKaerZCnNxIr2qZCaZAcPI6c9VTQBZCJ1n872s8sibMsrrFFyRzo1kMVUW5AXjy59",
    verify_token: "verify_token"
});

// Get new balance every session
var num = Math.random() * 200.00;
var check_balance = Math.round(num * 100.00) / 100.00;
num = Math.random() * 200.00;
var save_balance = Math.round(num * 100.00) / 100.00;

// Set up express for webhook
app.use('/webhook', bot.middleware());

// Set listener for incoming messages
bot.on('message', function(userId, message) {

    // Quick replies - English
    var budgeting_options = [
        {
            "content_type": "text",
            "title": "Budgeting tip",
            "payload": "Don't buy avocado toast. Instead, buy the ingredients yourself and make it at home."
        }
    ];

    var account_options = [
        {
            "content_type": "text",
            "title": "Checking Account",
            "payload": "$" + check_balance + " available"
        },
        {
            "content_type": "text",
            "title": "Savings Account",
            "payload": "$" + save_balance + " available"
        },
        {
            "content_type": "text",
            "title": "View Spending Graph",
            "payload": "http://gqtrippin.com/wp-content/uploads/2013/03/budget-pie-chart.jpg"
        }
    ];

    // Quick replies - Spanish
    var opciones_ahorrar = [
        {
            "content_type": "text",
            "title": "Como Ahorrar Dinero",
            "payload": "No compres el pan con el aguacate encima. Mejor compras los ingredientes usted misma y lo haces en casa."
        }
    ];

    var opciones_cuenta = [
        {
            "content_type": "text",
            "title": "Cuenta de Cheques",
            "payload": "$2345.23 disponible"
        },
        {
            "content_type": "text",
            "title": "Cuenta de Ahorros",
            "payload": "$987.66 disponible"
        },
        {
            "content_type": "text",
            "title": "Grafico de Gastos",
            "payload": "http://gqtrippin.com/wp-content/uploads/2013/03/budget-pie-chart.jpg"
        }
    ];

    // Check for key words and have bot respond
    var msg = message.toLowerCase();

    if (msg.includes("account") || msg.includes("enough") || msg.includes("money") || msg.includes("spend") ||
        msg.includes("spent")) {
        bot.sendQuickReplies(userId, "Would you like to check your account?", account_options);
    }

    else if (msg.includes("save") || msg.includes("saving") || msg.includes("budget")) {
        bot.sendQuickReplies(userId, "Would you like a tip on how to save?", budgeting_options);
    }

    else if (msg.includes("cuenta") || msg.includes("suficiente") || msg.includes("dinero") || msg.includes("gasto") ||
             msg.includes("gasta")) {
        bot.sendQuickReplies(userId, "Quieres chequear tu cuenta?", opciones_cuenta);
    }

    else if (msg.includes("ahorrar")) {
        bot.sendQuickReplies(userId, "Quieres aprender como ahorrar dinero?", opciones_ahorrar);
    }

    else {
        if (msg.includes("espanol") || msg.includes("spanish") || msg.includes("hola") || msg.includes("buen")) {
            bot.sendTextMessage(userId, "Hola! Ecribe su requerimiento.");
        }
        else {
            bot.sendTextMessage(userId, "Hello! Type a request.");
        }
    }
});

bot.on('quickreply', function(userId, payload) {
    bot.sendTextMessage(userId, payload);
});

// Express listener
app.listen(3000);