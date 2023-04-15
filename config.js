const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	danzz: 'https://restapi.frteam.xyz',
}

global.APIKeys = {
	'https://restapi.frteam.xyz': '7NqnpUpC',
}

// Other
global.apikey = ['7NqnpUpC']
global.apikeyprem = ['danzzprem']
global.apikeyvip = ['7NqnpUpC'] 
global.namabot = ['BotzzMee']
global.namaowner = ['Zuka']
global.wmm = 'Whatsapp Bot Multi Device By Zuka'
global.owner = ['6283174508962']
global.premium = ['6283174508962']
global.packname = 'BotzzMee'
global.author = 'By Zuka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.prefix = ['']
global.symbol1 = '•'
global.symbol2 = '>'
global.wm = 'BotzzMee'
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "10",
        premium: "unlimited"
}
global.thumb = fs.readFileSync('./media/img/1.jpg')
global.qris = { url: 'https://telegra.ph/file/cd0372ebf13b265f3feb5.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
