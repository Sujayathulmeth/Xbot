//base by DGXeon (Xeon Bot Inc.)
//YouTube: @sujaya
//Instagram: sujaya_life_a
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +15188640134
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "15188640134"
global.ownername = "SujayaXBot"
global.ytname = "SUJAYA"
global.socialm = "GitHub: Sujayathulmeth"
global.location = "Sri Lanka"

global.ownernumber = '15188640134'  //creator number
global.ownername = 'SujayaXBot' //owner name
global.botname = 'ᵇᵘᵍ ᵇᵒᵗ' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'SujayaXBot\n\nContact: +15188640134'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Bot Inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaSiofDDZ4LbWUc9Ga0D'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
