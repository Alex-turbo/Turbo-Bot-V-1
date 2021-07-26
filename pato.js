// das créditos puta

//npm
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const util = require('util')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

//json file
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const msg = require("./lib/message")
//Config
const { covidindo } = require("./config/covidindo.js")
const { covidworld } = require("./config/covidworld.js")
const { cnn } = require("./config/cnn.js")
const { Gempa } = require("./config/gempa.js");
const { herolist } = require("./config/herolist.js")
const { herodetails } = require("./config/herodetail.js")

//wa connect
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		ChatModification,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
//=================================================//
prefix = '.'
hit_today = []
blocked = []
banChats = false
offline = false
targetpc = '12244253896'
owner = '12244253896'
fake = 'Turbo✪'
numbernye = '0'
waktu = '-'
alasan = '-'
//=================================================//
const LolKey = 'save123'

async function starts() {
	const turbo = new WAConnection()
        turbo.logger.level = 'warn'
        turbo.version = [2, 2119, 6]
	console.log('>', '[',color('INFO','blue'),']','Gracias por usar turbo bot...')
	turbo.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el código qr'))
	})

	fs.existsSync('./session.json') && turbo.loadAuthInfo('./session.json')
	turbo.on('connecting', () => {
	console.log(color('> [ INFO ]', 'white'), color('Conectando...'))
	})
	turbo.on('open', () => {
	console.log(color('> [ INFO ]', 'white'), color('Conectado'))
	})
		await turbo.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./session.json', JSON.stringify(turbo.base64EncodedAuthInfo(), null, '\t'))
//Banned Call
turbo.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("llamada de"+ callerId)
        turbo.sendMessage(callerId, "Sistema de auto bloqueo por llamadas, no llamadas porfavor", MessageType.text)
        await sleep(4000)
        await turbo.blockUser(callerId, "add")
})
//Welkom
	           turbo.on('group-participants-update', async (anu) => {
	    	if (!welkom.includes(anu.jid)) return
		    try {
			const mdata = await turbo.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
		    num = anu.participants[0]
		    try {
			ppimg = await turbo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		    } catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		    }
			teks =  ` ╭─────••◈••────╮\n`
			teks += `║➣ @${num.split('@')[0]}\n`
			teks += `║➣ BIENVENID@\n`
			teks += `║➣ ${mdata.subject}\n`			
			teks += `╰─────••◈••────╯\n`
		    teks += `Hola 👋🏻 Espero que se sienta como en casa       🍿🍭🍫🍬🍡🍧\n`
			teks += `Disfruta del grupo 🥳 se sociable y aporta 🤗, Quizás encuentres el amor      🥺 👉🏻👈🏻 💞♥️💞\n`
            teks += `Lee las reglas por favor, para evitar malos entendidos 👻🔪🔪\n`
			teks += `╔═══•ೋೋ•═══╗\n`
            teks += `➣ 𝐓𝐔𝐑𝐁𝐎⚡𝐁𝐎𝐓 😎 úsalo en tus grupos👇🏻 https://youtube.com/channel/UCqiXnIA8_K83MqHtnyMzR2A?sub_confirmatión=1\n`
            teks += `╚═[-𝐓𝐔𝐑𝐁𝐎☬𝐍𝐓𝐑.li ]═╝\n`
			let buff = await getBuffer(ppimg)
		    turbo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
			num = anu.participants[0]
			try {
			ppimg = await turbo.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			teks = `Adiós 🙋🏻‍♂️ estaremos mejor sin ti 😹\n`
			teks += `. 。  • 　。•。ඞ •  •　ﾟ。　。\n`
       　 teks += `No vuelvas por favor 😹\n`
　        teks += ` .　ﾟ • ﾟ   •　。ﾟ    • ඞ   。　ﾟ .\n`
            teks += ` @${num.split('@')[0]} 🐈💨\n`
            teks += `╔═══•ೋೋ•═══╗\n`
      　  teks += `𝐓𝐔𝐑𝐁𝐎⚡𝐁𝐎𝐓 😎 úsalo en tus grupos👇🏻 https://youtube.com/channel/UCqiXnIA8_K83MqHtnyMzR2A?sub_confirmatión=1\n`
            teks += `╚═[-𝐓𝐔𝐑𝐁𝐎☬𝐍𝐓𝐑.li ]═╝\n`
			let buff = await getBuffer(ppimg)
			turbo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await turbo.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await turbo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			
			teks = `*ERES EL NUEVO ADMIN 😎*
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Date : AHORITA\`\`\` 

\`\`\`Grupo :\`\`\` ${mdata.subject}`
			turbo.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await turbo.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await turbo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `*YA NO ERES ADMIN 🥺*
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Dato : AHORITA\`\`\`

\`\`\`Grupo :\`\`\` ${mdata.subject}`
			turbo.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})


	// Chat Update
turbo.on('chat-update', async (mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
		hit_today.push(command)
        const arg = budy.slice(command.length + 1, budy.length)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		//const meNumber = turbo.user.jid.split("@")[0]
		const botNumber = turbo.user.jid
		const ownerNumber = ['12244253896@s.whatsapp.net'] //turbo owner
//SETTING WeA
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderme = mek.participant
		const isOwner = ownerNumber.includes(sender)
		const isMe = botNumber.includes(senderme)
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
//
		const totalchat = await turbo.chats.all()
		const groupMetadata = isGroup ? await turbo.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? turbo.user.jid : turbo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? turbo.user.name : conts.notify || conts.vname || conts.name || '-'
      
        //MESS
        
		mess = {
			wait: '🌝  𝐄𝐬𝐩𝐞𝐫𝐚, 𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐨',
			success: 'Comando con  éxito 😏',
			wrongFormat: '🌝 𝐄𝐬𝐜𝐫𝐢𝐛𝐞 𝐛𝐢𝐞𝐧 𝐞𝐥 𝐟𝐨𝐫𝐦𝐚𝐭𝐨',
			error: {
				stick: 'lo siento 🚮 no se pudo convertir a sticker',
				Iv: '🌝 𝐓𝐮 𝐥𝐢𝐧𝐤 𝐞𝐬 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨'
			},
			only: {
				group: '🌝 𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐬𝐚𝐝𝐨 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬',
				admin: '🌝 𝐒𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐨 𝐩𝐨𝐫 𝐚𝐝𝐦𝐢𝐧',
				Badmin: '🌝 𝐄𝐥 𝐛𝐨𝐭 𝐝𝐞𝐛𝐞 𝐝𝐞𝐫 𝐚𝐝𝐦𝐢 𝐩𝐚𝐫𝐚 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨'
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            turbo.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            turbo.sendMessage(hehe, teks, text, {sendEphemeral: true})
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? turbo.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : turbo.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        //FAKEH
const fakekontak = (teks) => {
turbo.sendMessage(from, teks, MessageType.text, {
quoted: {
key: {
fromMe: false,
 participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {})
 },
message: {
 'contactMessage': {
 'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanWaktu},;;;\nFN:${ucapanWaktu},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
}
}
                }
            })
        }


			

        const fakethumb = (teks, yes) => {
            turbo.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakestatus = (teks) => {
            turbo.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            turbo.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
 const faketoko = (teks) => {
 turbo.sendMessage(from, teks, text, {
quoted: {
 key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) 
}, message: {
'productMessage': {
'product': {
 'productImage':{
'mimetype': 'image/jpeg',
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
},
'title': `${pushname}`,
'productImageCount': 9999
},
'businessOwnerJid': `0@s.whatsapp.net`
}
}
                }
            })
        }
const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)
					},
					"title": `${pushname}`,
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	turbo.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        turbo.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    turbo.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            turbo.sendMessage(mek.key.remoteJid,`El bot esta modo privado activado, comunicate con el creador turbo ntr\n\n❮ turbobotby 𝐓𝐮𝐫𝐛𝐨✪❯`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        turbo.sendMessage(mek.key.remoteJid,`El bot esta modo privado activado, comunicate con el creador turbo ntr\n\n❮ turbobotby 𝐓𝐮𝐫𝐛𝐨✪❯`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    //> Level <
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
			//[-- function level bar --]
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
			/*[-- function rank --]*/
			const levelRole = getLevelingLevel(sender)
   	     var role = 'Trainee'
   	     if (levelRole <= 3) {
   	         role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends I 忍'
        } else if (levelRole <= 154) {
            role = 'Legends I 忍'
        } else if (levelRole <= 156) {
            role = 'Legends I 忍'
        } else if (levelRole <= 158) {
            role = 'Legends I 忍'
        } else if (levelRole <= 160) {
            role = 'Legends I 忍'
        } else if (levelRole <= 162) {
            role = 'Legends I 忍'
        } else if (levelRole <= 164) {
            role = 'Legends I 忍'
        } else if (levelRole <= 166) {
            role = 'Legends II 忍'
        } else if (levelRole <= 168) {
            role = 'Legends II 忍'
        } else if (levelRole <= 170) {
            role = 'Legends II 忍'
        } else if (levelRole <= 172) {
            role = 'Legends II 忍'
        } else if (levelRole <= 174) {
            role = 'Legends II 忍'
        } else if (levelRole <= 176) {
            role = 'Legends II 忍'
        } else if (levelRole <= 178) {
            role = 'Legends II 忍'
        } else if (levelRole <= 180) {
            role = 'Legends II 忍'
        } else if (levelRole <= 182) {
            role = 'Legends II 忍'
        } else if (levelRole <= 184) {
            role = 'Legends II 忍'
        } else if (levelRole <= 186) {
            role = 'Legends II 忍'
        } else if (levelRole <= 188) {
            role = 'Legends II 忍'
        } else if (levelRole <= 190) {
            role = 'Legends II 忍'
        } else if (levelRole <= 192) {
            role = 'Legends I 忍'
        } else if (levelRole <= 194) {
            role = 'Legends II 忍'
        } else if (levelRole <= 196) {
            role = 'Legends II 忍'
        } else if (levelRole <= 198) {
            role = 'Legends II 忍'
        } else if (levelRole <= 200) {
            role = 'Legends III 忍'
        } else if (levelRole <= 210) {
            role = 'Legends III 忍'
        } else if (levelRole <= 220) {
            role = 'Legends III 忍'
        } else if (levelRole <= 230) {
            role = 'Legends III 忍'
        } else if (levelRole <= 240) {
            role = 'Legends III 忍'
        } else if (levelRole <= 250) {
            role = 'Legends III 忍'
        } else if (levelRole <= 260) {
            role = 'Legends III 忍'
        } else if (levelRole <= 270) {
            role = 'Legends III 忍'
        } else if (levelRole <= 280) {
            role = 'Legends III 忍'
        } else if (levelRole <= 290) {
            role = 'Legends III 忍'
        } else if (levelRole <= 300) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 310) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 320) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 330) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 340) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 350) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 360) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 370) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 380) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 390) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 400) {
            role = 'Legends V 忍'
        } else if (levelRole <= 410) {
            role = 'Legends V 忍'
        } else if (levelRole <= 420) {
            role = 'Legends V 忍'
        } else if (levelRole <= 430) {
            role = 'Legends V 忍'
        } else if (levelRole <= 440) {
            role = 'Legends V 忍'
        } else if (levelRole <= 450) {
            role = 'Legends V 忍'
        } else if (levelRole <= 460) {
            role = 'Legends V 忍'
        } else if (levelRole <= 470) {
            role = 'Legends V 忍'
        } else if (levelRole <= 480) {
            role = 'Legends V 忍'
        } else if (levelRole <= 490) {
            role = 'Legends V 忍'
        } else if (levelRole <= 500) {
            role = 'Legends VI 忍'
        } else if (levelRole <= 600) {
            role = 'Legends VII 忍'
        } else if (levelRole <= 700) {
            role = 'Legends VIII 忍'
        } else if (levelRole <= 800) {
            role = 'Legends IX 忍'
        } else if (levelRole <= 900) {
            role = 'Legends X 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythic VII 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythic VIII 上帝'
        } else if (levelRole <= 8000) {
            role = 'Mythic IX 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythic X 上帝'
        } else if (levelRole <= 10000) {
            role = 'Awakened Mythic 特尔邦贡'
	    } else if (levelRole <= 99999999999) {
   	         role = 'End level 程度❗'
   	     }
   	     
   //Function Level Up
const levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	fakekontak(`\n*「 FELICIDADES 」*\n┌ *Nombre* : ${pushname}\n├ *Número* : wa.me/${sender.split("@")[0]}\n├  *Xp* : ${getLevelingXp(sender)}\n├ *Role*: ${role}\n└  *Nivel* : ${getLevel} ⊱ ${getLevelingLevel(sender)}`)
}
//Function Level
            if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await fakestatus(levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
//=====================//      
         // Ucapan Waktu
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'Pagi Kawan👋'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi Kawan👋'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Siang Kawan👋'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Soree Kawan👋'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat petang👋'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam Kawan🌚'
        } else {
          ucapanWaktu = 'Selamat Malam🌚'
        }
//========================================================================================================================//
		colors = ['blue']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mEXECC\x1b[1;37m ]', time, color(command), 'from', color(sender.split('@')[0]))
     	if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mEXECC\x1b[1;37m ]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName))
//selfmode
		if (!mek.key.fromMe && banChats === true) return

//antilink
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return('🧐')
turbo.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`Los link no son permitidos${sender.split("@")[0]}`)
setTimeout( () => {
turbo.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
turbo.updatePresence(from, Presence.composing)
reply("adios")
}, 0)
}
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return('🧐')
turbo.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`Los link no son permitidos ${sender.split("@")[0]}`)
setTimeout( () => {
turbo.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
turbo.updatePresence(from, Presence.composing)
reply("adios")
}, 0)
}
if (budy.includes(".com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return('🧐')
turbo.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`Los link no son permitidos${sender.split("@")[0]}`)
setTimeout( () => {
turbo.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
turbo.updatePresence(from, Presence.composing)
reply("adios")
}, 0)
}
//botna
switch (command) {
  case prefix+ 'menu':
  case prefix+ 'help':
  case prefix+ '?':
    let i = []
    let giid = []
    for (mem of totalchat){
      i.push(mem.jid)
    }
    for (id of i){
      if (id && id.includes('g.us')){
        giid.push(id)
      }
    }
    let timestampi = speed();
    let sepid = speed() - timestampi
    var { device_manufacturer, device_model, mcc, mnc, os_version, os_build_number, wa_version  } = turbo.user.phone
    anu = process.uptime()
    runtem = `${kyun(anu)}`
//
    var menu = `  

𝐇𝐨𝐥𝐚 ${pushname} 𝐛𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝@ 𝐚𝐥 𝐦𝐞𝐧𝐮
╭────•••◈•••───╮
TURBO⚡BOT 👇🏻: https://youtube.com/channel/UCqiXnIA8_K83MqHtnyMzR2A?sub_confirmatión=1
✦⏝࣪꒷꒦꒦꒷꒦⏝⏝꒦꒷✦

₮ɄɌɃØ 𝐈𝐧𝐟𝐨
✪➣ ${prefix}𝐜𝐚𝐧𝐚𝐥
✪➣ ${prefix}𝐜𝐫𝐞𝐚𝐝𝐨𝐫
✪➣ ${prefix}𝐫𝐞𝐠𝐥𝐚𝐬
✪➣ ${prefix}𝐢𝐧𝐬𝐭𝐚𝐥𝐚𝐫
✪➣ ${prefix}𝐛𝐮𝐠

₮ɄɌɃØ 𝐂𝐫𝐞𝐚𝐝𝐨𝐫𝐞𝐬
✪➣ ${prefix}𝐬𝐭𝐢𝐜𝐤𝐞𝐫
✪➣ ${prefix}𝐬𝐰𝐦
✪➣ ${prefix}𝐚𝐭𝐭𝐩
✪➣ ${prefix}𝐞𝐦𝐨𝐣𝐢  
✪➣ ${prefix}𝐭𝐨𝐯𝐢𝐝
✪➣ ${prefix}𝐭𝐨𝐢𝐦𝐠
✪➣ ${prefix}𝐫𝐞𝐯𝐞𝐫𝐬𝐞
✪➣ ${prefix}𝐭𝐨𝐮𝐫𝐥
✪➣ ${prefix}𝐬𝐥𝐨𝐰 
✪➣ ${prefix}𝐟𝐚𝐬𝐭
✪➣ ${prefix}𝐭𝐨𝐦𝐩𝟑

₮ɄɌɃØ 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐞𝐬
✪➣ ${prefix}𝐡𝐢𝐝𝐞𝐭𝐚𝐠
✪➣ ${prefix}𝐬𝐭𝐢𝐜𝐤𝐭𝐚𝐠
✪➣ ${prefix}𝐠𝐢𝐟𝐭𝐚𝐠
✪➣ ${prefix}𝐤𝐨𝐧𝐭𝐚𝐠
✪➣ ${prefix}𝐝𝐨𝐜𝐭𝐚𝐠
✪➣ ${prefix}𝐭𝐨𝐭𝐚𝐠
✪➣ ${prefix}𝐢𝐧𝐟𝐨𝐚𝐥𝐥
✪➣ ${prefix}𝐭𝐚𝐠𝐚𝐥𝐥

₮ɄɌɃØ 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬
✪➣ ${prefix}𝐩𝐥𝐚𝐲
✪➣ ${prefix}𝐲𝐭𝐦𝐩𝟑
✪➣ ${prefix}𝐲𝐭𝐦𝐩𝟒
✪➣ ${prefix}𝐭𝐰𝐢𝐭𝐭𝐞𝐫
✪➣ ${prefix}𝐟𝐛

₮ɄɌɃØ 𝐁𝐮𝐬𝐪𝐮𝐞𝐝𝐚𝐬
✪➣ ${prefix}𝐢𝐠𝐬𝐭𝐚𝐥𝐤
✪➣ ${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐬𝐭𝐚𝐥𝐤
✪➣ ${prefix}𝐯𝐢𝐝𝐞𝐨
✪➣ ${prefix}𝐲𝐭𝐬𝐞𝐚𝐫𝐜𝐡
✪➣ ${prefix}𝐠𝐨𝐨𝐠𝐥𝐞
✪➣ ${prefix}𝐛𝐫𝐚𝐢𝐧𝐥𝐲
✪➣ ${prefix}𝐭𝐰𝐢𝐜𝐡

₮ɄɌɃØ 𝐈𝐦𝐚𝐠𝐞𝐧𝐞𝐬
✪➣ ${prefix}𝐚𝐯𝐚𝐭𝐚𝐫
✪➣ ${prefix} 𝐥𝐨𝐥𝐢
✪➣ ${prefix}𝐰𝐚𝐢𝐟𝐮
✪➣ ${prefix}𝐡𝐮𝐬𝐛𝐮
✪➣ ${prefix}𝐢𝐦𝐚𝐠𝐞
✪➣ ${prefix}𝐩𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭
✪➣ ${prefix}𝐚𝐧𝐢𝐦𝐞
✪➣ ${prefix}𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫
✪➣ ${prefix}𝐦𝐮𝐣𝐞𝐫
✪➣ ${prefix}𝐡𝐨𝐦𝐛𝐫𝐞
✪➣ ${prefix}𝐜𝐲𝐛𝐞𝐫𝐩𝐮𝐧𝐤

₮ɄɌɃØ 𝐆𝐫𝐮𝐩𝐨𝐬
✪➣ ${prefix}𝐥𝐞𝐯𝐞𝐥
✪➣ ${prefix}𝐩𝐫𝐨𝐦𝐨𝐭𝐞 @
✪➣ ${prefix}𝐝𝐞𝐦𝐨𝐭𝐞 @
✪➣ ${prefix}𝐤𝐢𝐜𝐤 @
✪➣ ${prefix}𝐥𝐢𝐬𝐭𝐚𝐝𝐦𝐢𝐧
✪➣ ${prefix}𝐥𝐢𝐬𝐭𝐨𝐧𝐥𝐢𝐧𝐞
✪➣ ${prefix}𝐥𝐢𝐧𝐤𝐠𝐜
✪➣ ${prefix}𝐠𝐚𝐲 @
✪➣ ${prefix}𝐫𝐚𝐭𝐞
✪➣ ${prefix}𝐥𝐞𝐚𝐯𝐞
✪➣ ${prefix}𝐜𝐞𝐫𝐫𝐚𝐫
✪➣ ${prefix}𝐚𝐛𝐫𝐢𝐫
✪➣ ${prefix}𝐰𝐞𝐥𝐜𝐨𝐦𝐞
✪➣ ${prefix}𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
✪➣ ${prefix}𝐝𝐞𝐦𝐨𝐭𝐞𝐚𝐥𝐥
✪➣ ${prefix}𝐫𝐚𝐧𝐤𝐠𝐚𝐲
✪➣ ${prefix}𝐫𝐚𝐧𝐤𝐥𝐢𝐧𝐝𝐨
✪➣ ${prefix}𝐚𝐟𝐤

₮ɄɌɃØ 𝐎𝐭𝐫𝐨𝐬
✪➣ ${prefix}𝐜𝐨𝐯𝐢𝐝𝐰𝐨𝐫𝐥𝐝
✪➣ ${prefix}𝐜𝐧𝐧
✪➣ ${prefix}𝐫𝐞𝐯𝐢𝐩 [ 8.8.8.8 ]
✪➣ ${prefix}𝐫𝐮𝐧𝐭𝐢𝐦𝐞
✪➣ ${prefix}𝐬𝐩𝐞𝐞𝐝
✪➣ ${prefix}𝐝
✪➣ ${prefix}𝐠𝐞𝐭𝐛𝐢𝐨 @
✪➣ ${prefix}𝐠𝐞𝐭𝐝𝐞𝐬𝐜 @
✪➣ ${prefix}𝐢𝐭𝐬𝐦𝐞
✪➣ ${prefix}𝐛𝐥𝐨𝐜𝐤𝐥𝐢𝐬𝐭
✪➣ ${prefix}𝐰𝐚𝐦𝐞
✪➣ ${prefix}𝐜𝐚𝐬𝐬𝐢𝐧𝐨
✪➣ ${prefix}𝐟𝐚𝐤𝐞

₮ɄɌɃØ 𝐒𝐨𝐥𝐨 𝐜𝐫𝐞𝐚𝐝𝐨𝐫
✪➣ ${prefix}𝐬𝐞𝐥𝐟
✪➣ ${prefix}𝐩𝐮𝐛𝐥𝐢𝐜
✪➣ ${prefix}𝐝𝐞𝐥𝐞𝐭𝐞
✪➣ ${prefix}𝐭𝐞𝐫𝐦
✪➣ ${prefix}𝐮𝐩𝐬𝐰
✪➣ ${prefix}𝐮𝐩𝐬𝐰𝐢𝐦𝐠
✪➣ ${prefix}𝐮𝐩𝐬𝐰𝐯𝐢𝐝𝐞𝐨
✪➣ ${prefix}𝐛𝐜
✪➣ ${prefix}𝐬𝐞𝐭𝐭𝐡𝐮𝐦𝐛
✪➣ ${prefix}𝐬𝐞𝐭𝐩𝐫𝐞𝐟𝐢𝐱
✪➣ ${prefix}𝐬𝐞𝐭𝐟𝐚𝐤𝐞𝐢𝐦𝐠
✪➣ ${prefix}𝐧𝐨𝐩𝐫𝐞𝐟𝐢𝐱
✪➣ ${prefix}𝐦𝐮𝐭𝐞
✪➣ ${prefix}𝐮𝐧𝐦𝐮𝐭𝐞
✪➣ ${prefix}𝐬𝐩𝐚𝐦
✪➣ ${prefix}𝐨𝐧
✪➣ ${prefix}𝐨𝐟𝐟
✪➣ ${prefix}𝐬𝐞𝐭𝐛𝐢𝐨
✪➣ ${prefix}𝐬𝐞𝐭𝐫𝐞𝐩𝐥𝐲
✪➣ ${prefix}𝐩𝐢𝐧
✪➣ ${prefix}𝐮𝐧𝐩𝐢𝐧
✪➣ ${prefix}𝐚𝐫𝐜𝐡𝐢𝐯𝐞
✪➣ ${prefix}𝐚𝐫𝐜𝐡𝐢𝐯𝐞𝐚𝐥𝐥
✪➣ ${prefix}𝐫𝐞𝐚𝐝𝐚𝐥𝐥
✪➣ ${prefix}𝐮𝐧𝐫𝐞𝐚𝐝𝐚𝐥𝐥
✪➣ ${prefix}𝐜𝐡𝐚𝐭
✪➣ ${prefix}𝐚𝐩𝐚𝐠𝐚𝐫
 
₮ɄɌɃØ 𝐈𝐧𝐟𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭
✪➣ 𝐇𝐢𝐭𝐬 𝐝𝐞 𝐡𝐨𝐲 : ${hit_today.length}*
✪➣ 𝐂𝐞𝐥𝐮𝐥𝐚𝐫 : ${device_manufacturer}
✪➣ 𝐌𝐨𝐝𝐞𝐥𝐨 : ${device_model}
✪➣ 𝐑𝐀𝐌 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
✪➣ 𝐀𝐧𝐝𝐫𝐨𝐢𝐝 : ${os_version}
✪➣ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : ${wa_version}
✪➣ 𝐂𝐡𝐚𝐭𝐬 : ${giid.length}
✪➣ 𝐆𝐫𝐮𝐩𝐨𝐬 : ${totalchat.length - giid.length}
✪➣ 𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐜𝐡𝐚𝐭𝐬 :${totalchat.length}
✪➣ 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝 : ${sepid.toFixed(4)} 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬
✪➣ 𝐓𝐢𝐞𝐦𝐩𝐨 𝐚𝐜𝐭𝐢𝐯𝐨 : ${runtem}
✪➣ 𝐏𝐫𝐞𝐟𝐢𝐱 : 「 ${prefix} 」
╔══••ೋೋ••══╗
   ☬✪𝐂𝐫𝐞𝐚𝐝𝐨𝐫𝐞𝐬✪☬
☞-𝐓𝐔𝐑𝐁𝐎☬𝐍𝐓𝐑➣✪.li
☞-𝐏𝐀𝐓𝐎ꪶ⸸ꫂ⁩𝐋𝐆𝐒➣✪.li
╚═[𝐓𝐔𝐑𝐁𝐎☬𝐍𝐓𝐑]═╝
`
        	faketokoforwaded(menu)
           	break
    case prefix+ 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus('iqɒq ɒɘᴎí| ᴎƎ')
            break       
    case prefix+ 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' ᴬᵖᵃᵍᵃᵈᵒ 🥺')
            break
    case prefix+ 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
	case prefix+ 'self':
          	if (!mek.key.fromMe) return fakestatus('Este comando solo puede ser utilizado por mi')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 //Set Owner For gc
    case prefix+ 'public':
          	if (!mek.key.fromMe) return fakestatus('Este comando solo puede ser utilizado por mi')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
					case prefix+ 'peson':
					  if (!isGroupAdmins) return reply(mess.only.admin)
                     turbo.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
					  break
					  case prefix+ 'pesoff':
					 if (!isGroupAdmins) return reply(mess.only.admin)
                     turbo.toggleDisappearingMessages(from, 0)
					    break
            case prefix+ 'spam':
                if (!isMe) return reply('Este comando solo puede der utilizado por mi')
                if (!arg) return reply(`Escribe la palabra y el número de veces a mandar`)
                argz = arg.split("|")
                if (!argz) return reply(`Escribe la palabra y el número de veces a mandar`)
                if (isNaN(argz[1])) return reply(`harus berupa angka`)
                for (let i = 0; i < argz[1]; i++){
                turbo.sendMessage(from, argz[0], MessageType.text, {sendEphemeral: true})
                }
	        break
             case prefix+ 'mute':
                if (!isMe) return reply('Este comando solo puede der utilizado por mi')
                turbo.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case prefix+ 'unmute':
                if (!isMe) return reply('Este comando solo puede der utilizado por mi')
                turbo.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
            case prefix+ 'delete':
                if (!isMe) return reply('Este comando solo puede der utilizado por mi')
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                turbo.modifyChat(from, ChatModification.delete)
                break
	case prefix+ 'setreply':
	case prefix+ 'setfake':
	  if (isMe) return('Solo puede ser utilizado por mi')
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Con exito de renovó a : ${q}`)
			break
	case prefix+ 'setfakeimg':
	  if (isMe) return('Solo puede ser utilizado por mi')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await turbo.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Con exito')
        	} else {
            reply(`Responde a una foto`)
          	}
			break	
	case prefix+ 'setprefix':
	  if (isMe) return('Solo puede ser utilizado por mi')
			prefix = q
			fakegroup(`El prefix se cambió con exito a : ${q}`)
			break
	case prefix+ 'setthumb':
		  if (isMe) return('Solo puede ser utilizado por mi')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await turbo.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Con exito')
        	} else {
            reply(`Responde a una foto`)
          	}
			break	
    case prefix+ 'settarget':
	  if (isMe) return('Solo puede ser utilizado por mi')
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Se actualizó con éxito : ${targetpc}`)
            break
case prefix+ 'term':
if (!isMe) return reply('Solo el dueño del bot...')
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`turbo@self:~$ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
//INFORMATION
    case prefix+ 'covidindo':
                ci = await covidindo()
                var { kasus, kematian, sembuh } = ci[0]
                reply(`Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`)
                break
    case prefix+ 'covidworld':
                 cw= await covidworld()
                var { kasus, kematian, sembuh } = cw[0]
                reply(`Casos : ${kasus}\n\nMuertos : ${kematian}\n\nRecuperados: ${sembuh}`)
                break
    case prefix+ 'cnn':
                var result = await cnn()
                cn = 'CNN NEWS'
                for (let i = 0; i < result.length; i++) {
                  cn += `\n\nTitle : ${result[i].judul}\nLink : ${result[i].link}\nImage: ${result[i].thumb}`
                }
                buff = await getBuffer(result[0].thumb)
                turbo.sendMessage(from, buff, MessageType.image, {caption: cn})
                break
    case prefix+ 'infogempa':
                tres = await Gempa()
                var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
                console.log(Map)
                captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
                thumbbb = await getBuffer(Map)
                turbo.sendMessage(from, thumbbb, MessageType.image, {caption: `${captt}`})
                break
//tools
case prefix+ 'bug':
const pesan = args.join(' ')
if (pesan.length > 300) return turbo.sendMessage(from, 'El infotme es demasiado largo, máximo 300 caracteres', msgType.text, {quoted: sam})
var nomor = mek.participant
const teks1 = `*[REPORT]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nProblema : ${pesan}`

var options = {
text: teks1,
contextInfo: {mentionedJid: [nomor]},
}
turbo.sendMessage('46105513730@s.whatsapp.net', options, text, {quoted: sam})
reply('El problema ha sido informado al creador del BOT, informe falso o broma, sera ban definitivo.')
break
case prefix+ 'nombregc':
if (!isGroup) return await reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
var newName = args.join(" ")
turbo.groupUpdateSubject(from, newName).then(() => {
wa.sendFakeStatus(from, "El nombre del grupo se ah cambiao a" + newName, "GROUP SETTING")
})
break
case prefix+ 'wpsearch':

if (args.length == 0) return reply(`Example: ${prefix + command} gatos`)
query = args.join(' ')
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${api}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await turbo.sendMessage(from, ini_buffer, image, { quoted: ftoko })
break
case prefix+ 'cassino':
a = '🍇'
b = '🍎'
c = '🍓'
e = '🍑'
f = '💰'
g = '🥝'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
u = `
╭──╼┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┝╾──╮
╽ ┌──────────┐ ┃
${s}
┃ ├──────────┤ ┃
${a}
┃ ├──────────┤ ┃
${m}
╿ └──────────┘ ╿
╰─┨⃞ 𝐂𝐀𝐒𝐒𝐈𝐍𝐎┠─╯`
reply(`${u}`)
break
	
case prefix+ 'setdesc':
if (!isGroup) return await reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
var newDesc = args.join(" ")
turbo.groupUpdateDescription(from, newDesc).then(() => {
wa.sendFakeStatus(from, "La descripcion del grupo se ah cambiado a" + newDesc, "GROUP SETTING")
})
break
     case prefix+ 'get':
      if(!q) return reply('y el link?')
			.then(res => res.json())
			qweryna = args.join(' ')
			eses = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=${qweryna}&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
			buffqw = await getBuffer(eses.data.screenshot)
			turbo.sendMessage(from, buffqw, image, {quoted: mek})
			.catch(err => {
				return('Ocurrió un error, intentalo de nuevo...')
			})
			break
case prefix+ 'igsearch': 
reply(ptbr.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=apivinz&q=${body.slice(8)}`, {method: 'get'})
teks = '𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Username : ${i.username}
Private : ${i.private_user}
Verified : ${i.verified_user}
Link : https://www.instagram.com/${i.username}\n\n𝗜𝗻𝘀𝘁a𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
    case prefix+ 'revip':
			if (args.length < 1) return reply('y la ip??')
			var qwery = args.join(' ')
			var repip = await fetchJson(`https://sonar.omnisint.io/reverse/${qwery}`)
			turbo.sendMessage(from, `${repip}`, text)
      .catch((error) => {
            reply('Invalida domain/ip'); 
            })
			break
case prefix+ 'blocklist':
				  case 'listblock':
					teks = 'Lista de malos:\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					turbo.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
//WIBU
case prefix+ 'avatar':
			anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				turbo.sendMessage(from, avatars, image, {quoted: mek})
			break
		case prefix+ 'loli':
		  anu = await axios.get('https://nekos.life/api/v2/img/neko')
				loliz = await getBuffer(anu.data.url)
				turbo.sendMessage(from, loliz, image, {quoted: mek})
			break
		case prefix+ 'waifu':
			waifud = await axios.get('https://nekos.life/api/v2/img/waifu')
			nyed = await getBuffer(waifud.data.url)
			turbo.sendMessage(from, nyed, image, { caption: '✪ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ✪', quoted: mek })
			.catch(err => {
				return('Ocurrió un error, intentalo de nuevo...')
			})
			break
case prefix+ 'mfire':
if (args.length < 1) return reply('y el link?? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link invalido, el link debe ser de MediaFire')
reply('*Espera un momento...*')
teks = args.join(' ')
const resm = await turbomfire(teks)
result = `  「  𝐁𝐘 𝐓𝐔𝐑𝐁𝐎  」
*Nombre :* ${resm[0].nombre}
*Tamaño :* ${resm[0].size}
*Link :* ${resm[0].link}
_*El archivo se esta enviando......*_`
reply(result)
sendFileFromUrl(resm[0].link, document, {mimetype: resm[0].mime, filename: resm[0].nombre, quoted: fdoc})
break


	case prefix+ 'husbu':
			husbud = await fetchJson(`https://api.fdci.se/rep.php?gambar=husbu`)
			sasu = JSON.parse(JSON.stringify(husbud));
			ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			turbo.sendMessage(from, nye, image, { caption: '❮ ❮ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ❯❯', quoted: mek })
			.catch(err => {
				return('Ocurrió un error, intentalo de nuevo...')
			})
			break
case prefix+ 'antilink':

                                	if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (args.length < 1) return reply('Escribe 1 para activar')

					if (Number(args[0]) === 1) {

						if (isAntiLink) return reply('Ya está activo')

						antilink.push(from)

						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))

						reply('Activado con éxito ✔️')

						turbo.sendMessage(from,`Ha sido activado antilink, si mandan link serán eliminados`, text)

					} else if (Number(args[0]) === 0) {

						if (!isAntiLink) return reply('Desactivado')

						var ini = anti.indexOf(from)

						antilink.splice(ini, 1)

						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))

						reply('Desactivar con éxito ✔️')

					} else {

						reply('Escribe 1 para activar o 0 para desactivar')

					}

					break
case prefix+ 'welcome':
					  if (!isGroup) return reply(mess.only.group)
					  if (!isGroupAdmins) return reply(mess.only.admin) 
					  if (args.length < 1) return reply('Hmmmm')
					  if (Number(args[0]) === 1) {
						  if (isWelkom) return reply('Ya esta activo')
						  welkom.push(from)
						  fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						  reply('Se activo con exito')
					  } else if (Number(args[0]) === 0) {
						  welkom.splice(from, 1)
						  fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						  reply('Se desactivo con exito')
					  } else {
						  reply('1 para activar, 0 desactivar')
					  }
                     break
//IMAGE
case prefix+ 'image':
            if (args.length < 1) return reply('Escribe el nombre!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            turbo.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
case prefix+ 'pinterest':
			goblog = args.join(" ")
			anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${goblog}`)
			sasu = JSON.parse(JSON.stringify(anu));
			ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			turbo.sendMessage(from, nye, image, { caption: '✪ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ✪', quoted: mek })
			.catch(err => {
				return('y el nombre?')
			})
			break
    case prefix+ 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            turbo.sendMessage(from,media,image,{quoted:mek,caption:'✪ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ✪'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
	case prefix+ 'wallpaper':
			wanime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
			bufwanime = await getBuffer(wanime.data.url)
			turbo.sendMessage(from, bufwanime, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'infonum':
					
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ Internacional : ${data.international}\n╠➥ Número : ${data.nomor}\n╠➥ Operador : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
					break 
//HARAM FEATURE
case prefix+ 'nsfwavatar':
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_avatar')
				nsavatar = await getBuffer(anu.data.url)
				turbo.sendMessage(from, nsavatar, image, {quoted: mek})
			.catch(err => {
			return('Intentalo nuevamente..')
			})	
			break
case prefix+ 'nekopoi':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'pussy':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'pussyimage':
  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				turbo.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'oppai':
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			turbo.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'feetg':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'ranklindo':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./stik/lindo.jpg`)
          jds = []
          const YDY = groupMembers
          const JSJ = groupMembers
          const TAT = groupMembers
          const SG = YDY[Math.floor(Math.random() * YDY.length)]           
          const SOD = JSJ[Math.floor(Math.random() * JSJ.length)]
          const HDH = TAT[Math.floor(Math.random() * TAT.length)]
          AJ = `●❯────────────────❮●\nTop de los más lindos del grupo \n@${SG.jid.split('@')[0]} \n😳\n@${SOD.jid.split('@')[0]}\n😘\n@${HDH.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(SG.jid)
          jds.push(SOD.jid)
          jds.push(HDH.jid)
          turbo.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break
				case prefix+ 'rankgay':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./stik/gay.jpg`)
          jds = []
          const Z11 = groupMembers
          const U11 = groupMembers
          const T11 = groupMembers
          const F11 = Z11[Math.floor(Math.random() * Z11.length)]           
          const G22 = U11[Math.floor(Math.random() * U11.length)]
          const H33 = T11[Math.floor(Math.random() * T11.length)]
          D11 = `●❯────────────────❮●\nTop de los más gays del grupo ??️‍🌈\n@${F11.jid.split('@')[0]} \n🏳️‍🌈\n@${G22.jid.split('@')[0]}\n🏳️‍🌈\n@${H33.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(F11.jid)
          jds.push(G22.jid)
          jds.push(H33.jid)
          turbo.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break
case prefix+ 'rankfeo':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./stik/feo.jpg`)
          jds = []
          AJ = `●❯────────────────❮●\nTop de los mas feos del grupo\n@${SG.jid.split('@')[0]} \n🥸\n@${SOD.jid.split('@')[0]}\n🤓\n@${HDH.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(SG.jid)
          jds.push(SOD.jid)
          jds.push(HDH.jid)
          turbo.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break
				case prefix+ 'ranksexy':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./stik/sexy.jpg`)
          jds = []
          D11 = `●❯────────────────❮●\nTop de los mas sexis del grupo\n@${F11.jid.split('@')[0]} \n💃\n@${G22.jid.split('@')[0]}\n🕺\n@${H33.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(F11.jid)
          jds.push(G22.jid)
          jds.push(H33.jid)
          turbo.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break

case prefix+ 'bj':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'ero':
			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			turbo.sendMessage(from, bufero, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'erokemo':
			erokz = await axios.get('https://nekos.life/api/v2/img/erokemo')
			erokzs = await getBuffer(erokz.data.url)
			turbo.sendMessage(from, erokzs, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'eroyuri':
			eroyuriz = await axios.get('https://nekos.life/api/v2/img/eroyuri')
			buferoyu = await getBuffer(opai.data.url)
			turbo.sendMessage(from, buferoyu, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'tickle':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/tickle')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'feed':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feed')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'noprefix':
                prefix = ''
                reply('con éxito, prefijo removido')
                break
      case prefix+ 'sname':
	        if (!isMe) return reply('Esté comando solo puede usado por mi')
	        if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|autho`)
		if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('sukses')
	        break
case prefix+ 'getbio':
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await turbo.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
	   case prefix+ 'getpic':
		if (mek.message.extendedTextMessage != undefined){
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	        try {
		    pic = await turbo.getProfilePicture(mentioned[0])
		} catch {
		    pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
		}
		thumb = await getBuffer(pic)
		turbo.sendMessage(from, thumb, MessageType.image, {caption: '✪ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ✪'})
	        }
		break
case prefix+ 'setbio':
	        if (!isMe) return reply('Esté comando solo puede usado por mi')
		if (!arg) return reply('escribe la bio')
	        wa.setBio(arg)
	        .then((res) => wa.sendFakeStatus2(from, JSON.stringify(res), fake))
		.catch((err) => wa.sendFakeStatus2(from, JSON.stringify(err), fake))
		break
            case prefix+ 'setname':
		if (!itsMe) return reply('Esté comando solo puede usado por mi')
	        if (!arg) return reply('ingresa un nombre')
		wa.setName(arg)
		.then((res) => wa.sendFakeStatus2(from, JSON.stringify(res), fake))
		.catch((err) => wa.sendFakeStatus2(from, JSON.stringify(err), fake))
	        break
            case prefix+ 'setreply':
		if (!itsMe) return reply('Esté comando solo puede usado por mi')
	        if (!arg) return reply(`Escribe el texto`)
		fake = arg
		wa.sendFakeStatus2(from, `Sukses`, fake)
		break
case prefix+ 'wame':
  					turbo.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *WHATSAPP* 」\n\n_Pedido por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nTu link de WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					turbo.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  				  break
case prefix+ 'tiktokstalk': // Like My Video
				if (args.length < 1) return reply(`y el nombre de usuario?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/tiktod/stalk/?username=${body.slice(13)}&apikey=${onlydev}`)
				anu = await getBuffer(anu.result.user.avatarThumb)
				teks = `➸ *Username* : ${anu.result.user.uniqueId}\n*➸ Nickname :* ${anu.result.user.nickname}\n*➸ Bio :* ${anu.result.user.signature}\n*➸ Verified? :* ${anu.result.user.verified}\n*➸ Jumlah Follower :* ${anu.result.stats.followerCount}\n*➸ Jumlah Following :* ${anu.result.stats.followingCount}\n*➸ Jumlah Like :* ${anu.result.stats.heart}\n*➸ Total Video :* ${anu.result.stats.videoCount}`
				turbo.sendMessage(from, anu, image, {quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: teks})
				break 
case prefix+ 'sendcont':
	        argz = arg.split('|')
	        if (!argz) return reply(`Menciona a la persona y el nombre`)
		if (mek.message.extendedTextMessage != undefined){
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		wa.sendKontak(from, mentioned[0].split('@')[0], argz[1])
	        } else {
		wa.sendKontak(from, argz[0], argz[1])
                }
		break
case prefix+ 'unpin':
                if (!isMe) return reply('Esté comando solo puede usado por mi')
                turbo.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case prefix+ 'pin':
                if (!isMe) return reply('Esté comando solo puede usado por mi')
                turbo.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
case prefix+ 'archiveall':
                if (!isMe) return reply('Esté comando solo puede usado por mi')
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await turbo.chats.all()
                for (let _ of anu) {
                turbo.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
            case prefix+ 'archive':
                if (!isMe) return reply('Esté comando solo puede usado por mi')
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                turbo.modifyChat(from, ChatModification.archive)
                break
    case prefix+ 'tagall':
                if (!isGroupAdmins) return reply(mess.only.admin)
                members_id = []
		teks = (args.length > 1) ? budy.slice(8).trim() : ''
	        teks += '\n\n'
	        for (let mem of groupMembers) {
		teks += `❮ turbobot ❯ @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		mentions(teks, members_id, true)
		break
case prefix+ 'chat':
                if (!isMe) return reply('Esté comando solo puede usado por mi')
                var pc = budy.slice(6)
                var nomor = pc.split("|")[0];
                var org = pc.split("|")[1];
                turbo.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
                reply('done..')
                break
            case prefix+ 'setpp':
                if (!isMe) return reply('Esté comando solo puede usado por mi')
                turbo.updatePresence(from, Presence.composing) 
                if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setpp atau tag gambar yang sudah dikirim`)
	        var media1 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		var media2 = await turbo.downloadAndSaveMediaMessage(media1)
	        await turbo.updateProfilePicture(meNumber, media2)
		reply('Done!')
	        break
case prefix+ 'apagar':
                if (!isMe) return reply('Esté comando solo puede usado por mi')
	        await wa.FakeTokoForwarded(from, `Bye...`, fake)
		await sleep(5000)
                turbo.close()
                break
case prefix+ 'ocr': 
	        if ((isMedia && !turbo.message.videoMessage || isQuotedImage) && args.length == 0) {
	    	var media1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                var media2 = await turbo.downloadAndSaveMediaMessage(media1)
                reply("*waitt*")
	    	await recognize(media2, {lang: 'eng+ind', oem: 1, psm: 3})
		    .then(teks => {
		    reply(teks.trim())
		    fs.unlinkSync(media2)
		})
		.catch(err => {
		reply(err.message)
		fs.unlinkSync(media2)
		})
	        } else {
		reply(`Send image and reply with caption ${prefix}ocr`)
		}
	        break
            case prefix+ 'demoteall':
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                turbo.groupDemoteAdmin(from, members_id)
                break
case prefix+  'stats':
                texxt = await msg.stats(totalChat)
                await wa.sendFakeStatus(from, texxt, "✪ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ✪")
                break
case prefix+ 'block':
                if (!isOwner && !itsMe) return await reply('Esté comando solo puede ser usado por mi')
                if (isGroup) {
                    if (mentionUser.length == 0) return await reply("etiqueta a la persona")
                    return await wa.blockUser(sender, true)
                }
                await wa.blockUser(sender, true)
                break
            case prefix+ 'unblock':
                if (!isOwner && !itsMe) return await reply('Esté comando solo puede ser usado por mi')
                if (isGroup) {
                    if (mentionUser.length == 0) return await reply("etiqueta a la persona")
                    return await wa.blockUser(sender, false)
                }
                await wa.blockUser(sender, false)
                break
case prefix+ 'setnamegc':
                if (!isGroup) return await reply('solo en grupos')
              if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                var newName = args.join(" ")
                turbo.groupUpdateSubject(from, newName).then(() => {
                    wa.sendFakeStatus(from, "Se cambio el nombre usando " + newName, "GROUP SETTING")
                })
                break
            case prefix+ 'setdesc':
                if (!isGroup) return await reply('solo en grupos')
              if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                var newDesc = args.join(" ")
                turbo.groupUpdateDescription(from, newDesc).then(() => {
                    wa.sendFakeStatus(from, "Se cambió la descripción usando " + newDesc, "GROUP SETTING")
                })
                break
case prefix+ 'kuni':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kuni')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'searchsticker': 
case prefix+ 'searchstiker': 
ranp = getRandom('.png')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${body.slice(14)}`, {method: 'get'})
buffer = await getBuffer(anu.thumb)
teks = `Nama Sticker : ${anu.title}`
dung = (anu.sticker)
turbo.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
if (err) return reply('Error cok')
fs.unlinkSync(ranp)
buffer2 = fs.readFileSync(rano)
costum(buffer2, sticker, tescuk, `Judul Sticker : ${anu.title}`)
fs.unlinkSync(rano)
})
break

case prefix+ 'femdom':
      anu = await axios.get('https://nekos.life/api/v2/img/femdom')
			bupemdom = await getBuffer(anu.data.url)
				turbo.sendMessage(from, bupemdom, image, {quoted: mek})
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'futanari':
			futan = await axios.get('https://nekos.life/api/v2/img/futanari')
			futanz = await getBuffer(futan.data.url)
			turbo.sendMessage(from, futanz, image, { quoted: mek })
			break
case prefix+ 'tts':
					  if (args.length < 1) return turbo.sendMessage(from, 'Escribe el código', text, {quoted: mek})
					  const gtts = require('./lib/gtts')(args[0])
					  if (args.length < 2) return turbo.sendMessage(from, 'Escribe el texto', text, {quoted: mek})
					  dtt = body.slice(8)
					  ranm = getRandom('.mp3')
					  dtt.length > 600
					  ? reply('Escribe correctamente el texto')
					  : gtts.save(ranm, dtt, function() {
						  turbo.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						  fs.unlinkSync(ranm)
					  })
					  break
case prefix+ 'shitpost':
case prefix+ 'shit':
msgFilter.isFiltered(from)
turbo.updatePresence(from, Presence.composing)
uk = ["shitpost br"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
turbo.sendMessage(from, pok, image, {
quoted: mek, caption: `✪ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ✪`
})
} catch {
reply(ptbr.erro())
}
break
case prefix+ 'gtav':
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	reply(mess.wait)
	owgi = await turbo.downloadAndSaveMediaMessage(ted)
	tels = body.slice(7)
	anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
   turbo.sendMessage(from, hehe, image, {quoted:mek})
  } else {
	reply('Manda la foto')
  }
  break
case prefix+ 'wanted':
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	reply(mess.wait)
	owgi = await turbo.downloadAndSaveMediaMessage(ted)
	tels = body.slice(7)
	anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
   turbo.sendMessage(from, hehe, image, {quoted:mek})
  } else {
	reply('Manda la foto')
  }
  break
case prefix+ 'itsme':
	try {
  ppimg = await turbo.getProfilePicture(`${sender.split('@')[0]}@c.us`)
	} catch {
  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `‣ *Nombre* : ${pushname}
	‣ *Número* : ${sender.split("@")[0]}
	‣ *Link* : wa.me/${sender.split("@")[0]}`
	its = await getBuffer (ppimg)
	turbo.sendMessage(from, its, image, {
  quoted: mek, caption: teks
	})
	
	break
case prefix+ 'trap':
			trapx = await axios.get('https://nekos.life/api/v2/img/tits')
			traps = await getBuffer(trapx.data.url)
			turbo.sendMessage(from, traps, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'pat':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pat')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'boobs':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/boobs')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'blowjob':
			blowz = await axios.get('https://nekos.life/api/v2/img/blowjob')
			bufblowz = await getBuffer(blowz.data.url)
			turbo.sendMessage(from, bufblowz, image, {quoted: mek})
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
	case prefix+ 'hentai':
			hentaiz = await axios.get('https://nekos.life/api/v2/img/hentai')
			bufhtz = await getBuffer(hentaiz.data.url)
			turbo.sendMessage(from, bufhtz, image, {quoted: mek})
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
	case prefix+ 'hololewed':
			hololew = await axios.get('https://nekos.life/api/v2/img/hololewd')
			hololewx = await getBuffer(hololew.data.url)
			turbo.sendMessage(from, hololewx, image, { quoted: mek })
			.catch(err =>{
			  return('Tobat puasa goblokk..')
			})
			break
case prefix+ 'unreadall':
                if (!isMe) return reply('Esté comando solo puede usado por mi')
                var chats = await turbo.chats.all()
                chats.map( async ({ jid }) => {
                await turbo.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await turbo.sendMessage(from, teks, MessageType.text, {quoted: mek})
		    console.log(chats.length)
	        break
            case prefix+ 'readall':
                if (!isMe) return reply('Esté comando solo puede usado por mi')
                var chats = await turbo.chats.all()
                chats.map( async ({ jid }) => {
                await turbo.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await turbo.sendMessage(from, teks, MessageType.text, {quoted: mek})
		console.log(chats.length)
		break
case prefix+ 'lewd':
			lewdd = await axios.get('https://nekos.life/api/v2/img/lewd')
			buflewd = await getBuffer(lewdd.data.url)
			turbo.sendMessage(from, buflewd, image, { quoted: mek })
			
			break
	case prefix+ 'lewdk':
			lewdkk = await axios.get('https://nekos.life/api/v2/img/lewdk')
			lewdkz = await getBuffer(lewdkz.data.url)
			turbo.sendMessage(from, lewdkz, image, { quoted: mek })
			.catch(err =>{
			  return('Tobat puasa goblokk..')
			})
			break
case prefix+ 'lewdkemo':
			lewdkm = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
			buflewd = await getBuffer(lewdkm.data.url)
			turbo.sendMessage(from, buflewd, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'goose':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/goose')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'amongus':
  if (!isGroup) return await reply('solo en grupos')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
//  turbo.groupRemove(from, mentioned)
mentions(`${sus}`, mentioned, true)
break
case prefix+ 'solog':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/solog')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'yuri':
			yuriz = await axios.get('https://nekos.life/api/v2/img/tits')
			bupyuri = await getBuffer(yuriz.data.url)
			turbo.sendMessage(from, bupyuri, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
	case prefix+ 'anal':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/anal')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break		
case prefix+ 'pwankg':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'eron':
			eronz = await axios.get('https://nekos.life/api/v2/img/eron')
			buferon = await getBuffer(eronz.data.url)
			turbo.sendMessage(from, buferon, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'kiss':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kiss')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'keta':
			ketaz = await axios.get('https://nekos.life/api/v2/img/keta')
			bufketa = await getBuffer(ketaz.data.url)
			turbo.sendMessage(from, bufketa, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'cum':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				turbo.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'cumimage':
			cumjpg = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
			bupjpg = await getBuffer(cumjpg.data.url)
			turbo.sendMessage(from, bupjpg, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'oppai':
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			turbo.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
case prefix+ 'holoero':
		holox = await axios.get('https://nekos.life/api/v2/img/holoero')
			bufholox = await getBuffer(holox.data.url)
			turbo.sendMessage(from, bufholox, image, { quoted: mek })
			.catch(err => {
			return('Intentalo nuevamente..')
			})
			break
//MAKER
    case prefix+ 'sticker': 
    case prefix+ 'stiker':
    case prefix+ 'sg':
    case prefix+ 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await turbo.downloadAndSaveMediaMessage(encmedia)
            const packname10 = `\n\n\n\n\n\n\n\n\n\n\nSamu330 NyanBot\n\n       Sam y Perry`
const author10 = args.join(' ')
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                turbo.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await turbo.downloadAndSaveMediaMessage(encmedia)
                const packname10 = `\n\n\n\n\n\n\n\n\n\n\nBY turbo-BOT\n\n       turbo-IRIS`
const author10 = args.join(' ')
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            turbo.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Responde a una imagen o vídeo, asegúrate que dure menos de 10seg`)
            }
            break
	case prefix+ 'stikerwm':
	case prefix+ 's2':
    case prefix+ 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await turbo.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            turbo.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            turbo.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await turbo.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            turbo.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            turbo.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
case prefix+ 'shortlink':
url = args.join(" ")
request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
try {
reply(body)
} catch (e) {
reply(e)
}
})
break
    case prefix+ 'take':
    case prefix+ 'colong':
    		if (!isQuotedSticker) return reply('responde a un sticker')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await turbo.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, turbo, mek, from)
			break
    case prefix+ 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await turbo.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await turbo.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		turbo.sendMessage(from, mat, MessageType.extendedText, anu)
            break
case prefix+ 'infoall':
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*From :* ${pushname} \n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMATION* ⟫━━━┓`+teks+'╚═ *「 𝐓𝐔𝐑𝐁𝐎✪𝐍𝐓𝐑 」* ', members_id, true)
					break
case prefix+ 'emoji':
			if (!q) return fakegroup('Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
           .catch((err) => {
            reply('Solo un emoji'); 
            })
    		break
case prefix+ 'attp':
						if (args.length < 1) return reply(`Text Nya Mana Ajg?\n> *Contoh* : *${prefix}attp* _Aku Ganz_`)
						attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						turbo.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
//MAKERIMAGE
//COMINGSOON
//CONVERTER
    case prefix+ 'toimg':
			if (!isQuotedSticker) return reply('Responde a un sticker !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await turbo.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('No se pudo convertir, asegúrate de que no sea un sticker con movimiento')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'✪ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ✪')
			fs.unlinkSync(ran)
			})
			break
    case prefix+ 'tovid':
    case prefix+ 'tovideo':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await turbo.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'✪ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ✪')
            })
            }else {
            reply('responde a un sticker')
            }
            fs.unlinkSync(owgi)
            break
 case prefix+ 'reglas':
 case prefix+ 'rules':
        her = `*REGLAS PARÁ USAR EL BOT*
✪➣ Por favor no privado, no spam.
✪➣ Bloqueo automático de llamada
✪➣ El bot no está activo 24/07..
✪➣ No coloques comandos que no sepas para que son.
✪➣Si te interesa el bot, descargalo del canal de TURBO NTR
*Consecuencias por violar las reglas*
Los bots te bloquearán o dejarán los grupos que administras.
━━━━[ *IMPORTANTE!* ]━━━
*✪➣ ¡Nunca le pedimos que done dinero!*
*✪➣ No almacenamos imágenes, videos, audio y documentos que envía*
*✪➣ Nunca le pediremos que proporcione información personal*
*✪➣ Si encuentra un error / error, infórmelo inmediatamente al bot propietario*
*✪➣  Si llamas a un bot y está bloqueado, el propietario no es responsable*
*✪➣ Cualquier cosa que pidas en este bot, NO SEREMOS RESPONSABLES*
━━━━━━━━━━━━━━
`
faketokoforwaded(her)
break
case prefix+ 'comandos':
 case prefix+ 'instalar':
        her = `*INSTALACIÓN*
  Tutorial de instalación en el canal 
  TURBO NTR
  Depende de tu apoyo para que este bot siga funcionando

  https://youtube.com/channel/UCqiXnIA8_K83MqHtnyMzR2A?sub_confirmatión=1

💞💞💞💞💞💞💞
`
faketokoforwaded(her)
break
   case prefix+ 'canal':
			case prefix+ 'chanel':
                  reply ('https://youtube.com/channel/UCqiXnIA8_K83MqHtnyMzR2A')
                break
case prefix+ 'creador':
			case prefix+ 'dueño':
                  reply ('Mi creador es turbo Wa.me/+12244253896')
                break
case prefix+ 'tomp3':
            if (!isQuotedVideo) return fakegroup('Responde a un video')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await turbo.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            turbo.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case prefix+ 'ssweb':
				
					if (args.length < 1) return reply('y el link?')
					teks = `${body.slice(7)}`
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					ssweb = await getBuffer(anu.gambar)
					turbo.sendMessage(from, ssweb, image, {quoted: mek})
					await limitAdd(sender)
					break 
				case prefix+ 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('escribe el motivo del afk')
                                                       
                                        var num = mek.participant
                                        const fku = {
                                                text: `@${num.split("@s.whatsapp.net")[0]} *Esta afk por ek motivo: ${tels} .No lo molesten*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        turbo.sendMessage(from, fku, text, {quoted: mek})
				const afk = fs.readFileSync('./database/afk');
                turbo.sendMessage(from, afk, MessageType.image, {quoted: mek, caption: '*Este usuario marco afk, no lo molestes*'})
                 break 
                                       break
				case prefix+ 'unafk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('okay')
                                        var num = mek.participant
                                        const kl7 = {
                                                text: `@${numm.split("@s.whatsapp.net")[0]} *Ha regresado del afk ${tels}*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        turbo.sendMessage(from, kl7, text, {quoted: mek})
                                        break
    case prefix+ 'fast':
            if (!isQuotedVideo) return fakegroup('Responde a un video')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await turbo.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            turbo.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'slow':
            if (!isQuotedVideo) return fakegroup('Responde a un video')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await turbo.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            turbo.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'reverse':
            if (!isQuotedVideo) return fakegroup('Responde a un video')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await turbo.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            turbo.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case prefix+ 'compañero':
                              
                if (isGroup) return reply( 'Este comando solo puede ser usado en grupos')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Buscando compañero...')
                await reply(`wa.me/${anug}`)
                await reply( `Compañero encontrado\n usa ${prefix}next para buscar otro`)
           	break
		case prefix+ 'next':
                               
                if (isGroup) return reply( 'Este comando solo puede ser usado en grupos')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Buscando compañero...')
                await reply(`wa.me/${anug}`)
                await reply( `Compañero encontrado\n usa ${prefix}next para buscar otro`)
        	break
    case prefix+ 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await turbo.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('Responde a una imagen o vídeo')
            }
            break
case prefix+ 'listadmins':
				case prefix+ 'listadmin':
				case prefix+ 'adminlist':
				case prefix+ 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de facheritos *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case prefix+ 'listonline':
				  let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
				  let online = [...Object.keys(turbo.chats.get(ido).presences), turbo.user.jid]
				  turbo.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
				  contextInfo: { mentionedJid: online }
				  })
				  break
case prefix+ 'linkgroup':
	  case prefix+ 'linkgc':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isGroupAdmins) return reply(mess.only.admin)
		  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		  linkgc = await turbo.groupInviteCode(from)
		  reply('https://chat.whatsapp.com/'+linkgc)
					  break
case prefix+ 'leave':
		if (!isGroup) return reply(mess.only.group)
		if (isGroupAdmins || isOwner) {
		turbo.groupLeave(from)
					  } else {
		reply(mess.only.admin)
					  }
					  break
case prefix+ 'cerrar':
	turbo.updatePresence(from, Presence.composing)
	if (!isGroup) return reply(mess.only.group)
	if (!isGroupAdmins) return reply(mess.only.admin)
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
	var nomor = mek.participant
	const close = {
  text: `Grupo cerrado por @${nomor.split("@s.whatsapp.net")[0]}\n ahora solo los admins facheros pueden escribir`,
  contextInfo: {
	mentionedJid: [nomor]
  }
	}
	turbo.groupSettingChange (from, GroupSettingChange.messageSend, true);
	reply(close)
	break
  
  //--grup hanya admin
  case prefix+ 'abrir':
  turbo.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  open = {
	text: `Grupo abierto por @${sender.split("@")[0]}\n ahora todos pueden escribir`,
	contextInfo: {
  mentionedJid: [sender]
	}
  }
  turbo.groupSettingChange (from, GroupSettingChange.messageSend, false)
  turbo.sendMessage(from, open, text, {
	quoted: mek
  })
  break
case prefix+ 'd':
  if (!isGroup)return reply(mess.only.group)
  try {
  turbo.deleteMessage(from, {
	id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
  })
  } catch {
	reply('Solo puedo borrar mensajes míos')
  }
  break
case prefix+ 'mujer':
	tels = body.slice(5)
	turbo.updatePresence(from, Presence.composing)
	ty = ["girl",
  "modelo",
  "mujer",
  "sexy",
  "mujer joven",
  "chica gansta"]
	nk = ty[Math.floor(Math.random() * ty.length)]
	try {
	data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
	})
	reply(mess.wait)
	n = JSON.parse(JSON.stringify(data));
	nimek = n[Math.floor(Math.random() * n.length)];
	pok = await getBuffer(nimek)
	turbo.sendMessage(from, pok, image, {
  quoted: mek, caption: `✪ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ✪`
	})
	
	} catch {
	  reply(mess.ferr)
	}
	break
case prefix+ 'cyberpunk':
	turbo.updatePresence(from, Presence.composing)
	co = ["anime cyberpunk","fotografi cyberpunk","tokyo cyberpunk"]
	nk = co[Math.floor(Math.random() * co.length)]
	try {
	data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
	})
	reply(mess.wait)
	n = JSON.parse(JSON.stringify(data));
	nimek = n[Math.floor(Math.random() * n.length)];
	pok = await getBuffer(nimek)
	turbo.sendMessage(from, pok, image, {
  quoted: mek
	})
	
	} catch {
	  reply(mess.ferr)
	}
	break
case prefix+ 'gay':
	
	if (args.length < 1) return turbo.sendMessage(from, 'Escribe el nombre', text, {
  quoted: mek
	})
	teks = body.slice(13)
	turbo.updatePresence(from, Presence.composing)
	data = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`)
	hasil = `*Gay Detectado*\n‣ Nombre : *${args[0]}*\n‣ Porcentaje : *${data.persen}%*`
	reply(hasil)
	
	break
case prefix+ 'letra':
	if (args.length < 1) return reply('escribe el nombre de la cancion')
	turbo.updatePresence(from, Presence.composing)
	tels = body.slice(7)
	try {
	anu = await fetchjson(`http://scrap.terhambar.com/lirik?word=${tels}`, {
  method: 'get'
	})
	reply(anu.result.lirik)
	
	} catch {
	  reply(mess.ferr)
	}
	break

case prefix+ 'rate':
	if (args.length < 1) return reply('Escribe el nombre')
	turbo.updatePresence(from, Presence.composing)
	random = `${Math.floor(Math.random() * 100)}`
	hasil = `Rating : *${body.slice(6)}*\n\nPorcentaje : *${random}%*`
	reply(hasil)
	break
  
  case prefix+ 'hombre':
	turbo.updatePresence(from, Presence.composing)
	uk = ["modelos","actores","musculos","hombre","hombre sexy"]
	nk = uk[Math.floor(Math.random() * uk.length)]
	try {
	data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
	})
	reply(mess.wait)
	n = JSON.parse(JSON.stringify(data));
	nimek = n[Math.floor(Math.random() * n.length)];
	pok = await getBuffer(nimek)
	turbo.sendMessage(from, pok, image, {
  quoted: mek, caption: `✪ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ✪`
	})
	
	} catch {
	  reply(mess.ferr)
	}
	break
  
//Upload Story WeA
    case prefix+ 'upswteks':
            if (!q) return fakestatus('escribe el texto')
            turbo.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Se subió con éxito el estado con ek texto ${q}`)
            break
    case prefix+ 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await turbo.downloadMediaMessage(swsw)
            turbo.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Se subió con éxito la imagen con el texto ${q}`
            turbo.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Responde a una imagen')
            }
            break
    case prefix+ 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await turbo.downloadMediaMessage(swsw)
            turbo.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Se subió con éxito ek vídeo con el texto: ${q}`
            turbo.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Responde a un video')
            }
            break
			case prefix+ 'faketext':
            if (args.length < 1) return reply(`Uso dek comando .faketext @tagmember|Hola|Hola gei`)
            var gh = args.join(' ')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            turbo.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
//MOBIL LEJEN
case prefix+ 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
faketokoforwaded(listt)
})
break
      case prefix+ 'herodetail':
        res = await herodetails(body.slice(12))
        her = `*Hero details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 

*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}
`
faketokoforwaded(her)
break
//Downloader
	case prefix+ 'play':
			if (args.length === 0) return reply(`Escribe el nombre de la canción`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_El archivo se está mandando no hagas spam_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_El archivo se está mandando, si no llega descarga por el link_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case prefix+ 'video':
            if (args.length === 0) return reply(`Escribe el nombre del video`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_El archivo se está mandando no hagas spam_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_El archivo se está mandando, si no llega descarga por el link_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
	case prefix+ 'ytmp3':
			if (args.length === 0) return reply(`y el link?`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_El archivo se está mandando no hagas spam_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_El archivo se está mandando, si no llega descarga por el link_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
 		case prefix+ 'ytmp4':
			if (args.length === 0) return reply(`Y el link?`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_El archivo se está mandando no hagas spam_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_El archivo se está mandando, si no llega descarga por el link_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case prefix+ 'ytsearch':
			if (args.length < 1) return reply('Escribe lo que quieres buscar')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await turbo.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
    case prefix+ 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('y el link?')
        reply(mess.wait)
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    turbo.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:mek,caption:'Nih'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            turbo.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:mek,caption:'Nih'})
	    }
            }
	    })
	    break
case prefix+ 'bitly':              
				turbo.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${TobzKey}`)
				hasil = `link : ${args[0]}\n\nLink acortado : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
				case prefix+ 'tinyurl':
				turbo.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://api.xteam.xyz/shorturl/tinyurl?url=${args[0]}&APIKEY=${xteam}`)
				hasil = `link : ${args[0]}\n\nLink acortado : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case prefix+ 'cuttly':	
				turbo.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nLink acortado : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
    case prefix+ 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case prefix+ 'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('y el link?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
 	case prefix+ 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('y el link?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		turbo.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case prefix+ 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('y el link?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		turbo.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
		})
     		.catch(e => console.log(e))
     		break
    case prefix+ 'fb':
            if (!q) return reply('y el link?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
           .catch((error) => {
            reply('intentalo nuevamente'); 
            })
})
            break 
//Learn
case prefix+ 'brainly':
			if (args.length < 1) return reply(' y la pregunta?')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pregunta:* ${Y.pertanyaan}\n\n*➸ Respuesta:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			turbo.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
case prefix+ 'google':
      if(!q) return reply('y lo que quieres buscar?')
			.then(res => res.json())
			afanya = args.join(' ')
			gogel = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=https://www.google.com/search?q=${afanya}&safe=strict&sxsrf=ALeKk03WtBNqunvK303Qm3aEToejzpQvag%3A1621384426733&source=hp&ei=6lykYJbUKtPmz7sP-MugmAU&oq=p&gs_lcp=ChFtb2JpbGUtZ3dzLXdpei1ocBADMgQIIxAnMgQIIxAnMgQIIxAnMggIABCxAxCDATIFCAAQsQMyBQguELEDMggIABCxAxCDATIICAAQsQMQgwE6BwgjEOoCECdQlg9Ylg9g9hJoAXAAeACAAVmIAVmSAQExmAEAoAEBsAEP&sclient=mobile-gws-wiz-hp&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
			bupnyah = await getBuffer(gogel.data.screenshot)
			turbo.sendMessage(from, bupnyah, image, {quoted: mek, sendEphemeral: true})
			.catch(err => {
				return('Ocurrió un error, intentalo de nuevo...')
			})
			break
	//Group Feature
case prefix+ 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag yg ingin angda tusbol!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '*Secreta :* '
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
turbo.groupRemove(from, mentioned)
					} else {
mentions(`byee.. @${mentioned[0].split('@')[0]}`, mentioned, true)
turbo.groupRemove(from, mentioned)
}
break
case prefix+ 'promote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Nuevo admin\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
turbo.groupRemove(from, mentioned)
} else {
mentions(`Ok  @${mentioned[0].split('@')[0]} ahora es admin!`, mentioned, true)
turbo.groupMakeAdmin(from, mentioned)
}
break
case prefix+ 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Un admin menos\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
turbo.groupRemove(from, mentioned)
} else {
mentions(`Ok @${mentioned[0].split('@')[0]} ya no es admin`, mentioned, true)
turbo.groupDemoteAdmin(from, mentioned)
}
break//DONE
    case prefix+ 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await turbo.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await turbo.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case prefix+ 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            turbo.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break
 	case prefix+ 'hidetag':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
            var value = args.join(' ')
			var group = await turbo.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			turbo.sendMessage(from, optionshidetag, text)
			break
    case prefix+ 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await turbo.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await turbo.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            turbo.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Responde a un sticker*`)
            }
            break
		    case prefix+ 'giftag':
		      //by Dehanjing
                if (!isQuotedVideo) return reply(`Responde a un gif`)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await turbo.downloadMediaMessage(quoted)
                await fs.writeFileSync(`giftag.gif`, download)
                var group = await turbo.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                thumb = fs.readFileSync(`giftag.gif`)
                turbo.sendMessage(from, thumb, video, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'video/gif', thumbnail: thumb })
			    await fs.unlinkSync(`giftag.gif`)
			    break
			case prefix+ 'doctag':
			  //by Dehanjing
		        if (!isQuotedDocument) return amek.reply(from, `Responde a un Documento*`, mek)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await turbo.downloadMediaMessage(quoted)
                await fs.writeFileSync(`doc.txt`, download)
                var group = await turbo.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                turbo.sendMessage(from, fs.readFileSync(`doc.txt`), document, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'text/plain' })
			    await fs.unlinkSync(`doc.txt`)
			    break
    case prefix+ 'kontag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            turbo.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case prefix+ 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await turbo.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await turbo.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            turbo.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await turbo.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await turbo.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            turbo.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await turbo.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await turbo.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            turbo.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await turbo.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await turbo.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            turbo.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
//OTHER 
    case prefix+ 'join':
            reply ('Umm, comunicate con el creador antes de querer agregar el bot a un grupo')
                break
    case prefix+ 'runtime':
    case prefix+ 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case prefix+ 'speed':
	case prefix+ 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
      case prefix+ 'fake':  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `➻ *NOMBRE* : ${anu.name}\n`
                   anu1 += `➻ *GENERO* : ${anu.gender}\n` 
                   anu1 += `➻ *EDAD* : ${anu.age}\n`
                   anu1 += `➻ *FECHA* : ${anu.birtday}\n`
                   anu1 += `➻ *SOLTER@* : ${anu.Bachelor}\n`
                   anu1 += `➻ *DIRECCIÓN* : ${anu.address}\n`
                   anu1 += `➻ *CODE* : ${anu.zip_code}\n`
                   anu1 += `➻ *ESTADO* : ${anu.state}\n`
                   anu1 += `➻ *PAÍS* : ${anu.country}\n`
                   anu1 += `➻ *EMAIL* : ${anu.email}\n`
                   anu1 += `➻ *CONTRASEÑA* : ${anu.password}\n` 
                   anu1 += `➻ *NUMERO* : ${anu.phone}\n` 
                   anu1 += `➻ *TARJETA* : ${anu.card}\n`
                   anu1 += `➻ *CÓDIGO* : ${anu.code}\n`
                   anu1 += `➻ *FECHA* : ${anu.date}\n`
                   anu1 += `➻ *PIN* : ${anu.pin_code}\n`
                   anu1 += `➻ *PESO* : ${anu.weight}\n` 
                   anu1 += `➻ *ALTURA* : ${anu.height}\n` 
                   anu1 += `➻ *TIPO* : ${anu.blood_type}\n`
                   anu1 += `➻ *ESTADO* : ${anu.status}\n`
                   reply(anu1)
                   break
case prefix+ 'twich':  
           
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `➻ *THWICH* : ${anu.result}`
                   reply(anu1)
                   break   
//Maker

case prefix+ 'bc':
					if (!isMe) return reply('Solo el dueño del bot...')
					if (args.length < 1) return reply('.......')
					const more = String.fromCharCode(8206)
                    const readmore = more.repeat(4001)
					anu = await turbo.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await turbo.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							turbo.sendMessage(_.jid, bc, image, {caption: `${body.slice(4)}\n> Izin Broadcast`, sendEphemeral: true})
						}
						reply('con éxito')
					} else {
						for (let _ of anu) {
							sendMess(_.jid,`${body.slice(4)}` + readmore + `\n>✪ 𝐁𝐘 𝐓𝐔𝐑𝐁𝐎 ✪ ANUNCIÓ`)
						}
						reply('con éxito')
					}
					break
					case prefix+ 'level':
                if (!isGroup) return reply(mess.only
.group)
                const Level = getLevelingLevel(sender)
                const Xp = getLevelingXp(sender)
                if (Level === undefined && Xp === undefined) return reply('MANGSUD?')
                const requiredXp = 5000 * (Math.pow(2, Level) - 1)
                resul = `┌──⫶ *|ɘviͶ* ⫶──\n├ *Nombre* : ${pushname}\n├ Número : wa.me/${sender.split("@")[0]}\n├ XP :  ${Xp}/${requiredXp}\n└ Nivel : ${Level}`
                faketokoforwaded(resul, text, numbernye, per)
				break 
				case prefix+ 'narutod':
				oi = body.slice(8)
				oii = await getBuffer(`https://turboapi.herokuapp.com/api/photooxy/naruto?text=${oi}`)
				turbo.sendMessage(from, oii, image, {quoted: mek, caption: 'Ok brother'})
				break

//END BANG RAKIT SENDIRI YAA DAN JGN LUPA KASIH NAMA SAYA YG SUDAH MENGBANGUN INI SC :(

default:

if (budy.startsWith('$')){
                        if (!isMe) return 
                            var konsol = budy.slice(2)
                        exec(konsol, (err, stdout) => {
                            if(err) return reply(`${err}`)
                                if (stdout) {
                                    reply(`${stdout}`)
                                    console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color("$", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                                }
                            })
                    } 
                    if (budy.startsWith('>')){
                        if (!isMe) return
                            var konsol = budy.slice(2)
                            function _return(sul) {
                            var sat = JSON.stringify(sul, null, 2)
                            var bang = util.format(sat)
                            return reply(bang)
                        }
                        try {
                            reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                            console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color(">", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                        } catch (e) {
                              err = String(e)
                                reply(err)
                            }
                        } else {
                            if (budy != undefined) {
                                //console.log('>', '[',color('INGFO','red'),']',`Message : ${budy} From`, color(senderme.split('@')[0]))
                            } 
                        }
                        if (!budy.startsWith('$')) return
                            if (!budy.startsWith('>')) return
                        }

                
if (isGroup && budy != undefined) {
	} else {
	console.log(color('> [ PRIV]', 'red'), 'DE', color(sender.split('@')[0]))
	}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Error : %s', color(e, 'red'))
	console.log(e)
        }
	}
})
}
starts()
