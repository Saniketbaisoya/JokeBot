const TelegramBot = require("node-telegram-bot-api");
const dotenv = require('dotenv');
const { default: axios } = require("axios");
dotenv.config();

// const Token = '7445815......:......qgi9zKsZvJfma6oHNo_OGQM';
//console.log(process.env);

// create a bot onject that uses polling to fetch update....
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN,{polling:true});

// bot.on('message',(option)=>{
//     console.log("message is received ",option);
//     bot.sendMessage(option.chat.id,'Hello I am a bot. I am here to help you with your queries. Please type /help to know more about me.');
// })

bot.onText(/\/joke/, async(option)=> {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const setup = response.data.setup;
    const punchline = response.data.punchline;

    bot.sendMessage(option.chat.id, setup + " , "+punchline);

});







