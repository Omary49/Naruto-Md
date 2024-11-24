const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg"                       // put your app url here,
global.email ="kushimotunde7@gmail.com"
global.location="Nigeria,lagos."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://steezy_maxwell:Steezy._.and._.Maxwell@maxwellandsteezy.wbmgyr4.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "AFRICA/LAGOS";
global.github=process.env.GITHUB|| "https://github.com/Ednut001/naruto-md/tree/main";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/HfMmL74aP3lC24AcHtebWx";
global.website=process.env.GURL || "https://chat.whatsapp.com/HfMmL74aP3lC24AcHtebWx" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348102487241" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "255752364609";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255752264609";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || "2",  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg,https://telegra.ph/file/81326462c7b46a26ea380.jpg,https://telegra.ph/file/03f39cfcf936d65455b0f.jpg,https://telegra.ph/file/4d71f28cdb62409a17c81.jpg,https://telegra.ph/file/a79cbfe94e1fd41809c17.jpg,https://telegra.ph/file/318abcc79a289cec3aca4.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255752264609";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255752264609";



module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "⏤͟͟͞͞★Ednut 🫶࿐" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ naruto md 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author: process.env.PACK_AUTHER || "naruto",
  packname: process.env.PACK_NAME || "md",
  botname : process.env.BOT_NAME  || "Naruto-md",
  ownername:process.env.OWNER_NAME|| "⏤͟͟͞͞★Ednut 🫶࿐",

  sessionName:process.env.SESSION_ID|| "SUHAIL_11_54_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk4LFxuICAgICAgICA2LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDgyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY3dDeVRwQyszOEoxclc4U2tBRmorc2FaK2JPS1VMaUlGVjBiSXVDZlBMVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NTIyNjQ2MDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBOTI2RTRBOTA0MTUyMDNGNDk3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjQ0OTI1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1YWU2VGVmMVFQbWVUSTFEVDlaVW1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBiMTMzMDFhLWZmYmEtNGNlMi04OGFjLTZhMWIwYmQzMDlkN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxNDAsXG4gICAgICA5MixcbiAgICAgIDQsXG4gICAgICAxMjAsXG4gICAgICAxNyxcbiAgICAgIDIxMSxcbiAgICAgIDgwLFxuICAgICAgMjI4LFxuICAgICAgNjcsXG4gICAgICA3NCxcbiAgICAgIDIxMyxcbiAgICAgIDEwMSxcbiAgICAgIDEwMixcbiAgICAgIDMwLFxuICAgICAgNixcbiAgICAgIDEzNixcbiAgICAgIDUwLFxuICAgICAgMTM5LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDIwLFxuICAgICAgMTQ2LFxuICAgICAgMTk4LFxuICAgICAgMjQxLFxuICAgICAgMTY3LFxuICAgICAgMjQ3LFxuICAgICAgMTY2LFxuICAgICAgNTYsXG4gICAgICAyMixcbiAgICAgIDIyMyxcbiAgICAgIDEzMyxcbiAgICAgIDY4LFxuICAgICAgMTYwLFxuICAgICAgMTUxLFxuICAgICAgMzYsXG4gICAgICAyNDQsXG4gICAgICA2MCxcbiAgICAgIDc3LFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTE1VjdXRzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1MjI2NDYwOTozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9tYXJ5IO+jv1wiLFxuICAgIFwibGlkXCI6IFwiMjcxMzYwNzY0OTk3NzI0OjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t6MmhlTUdFTmVuakxvR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUpWbWZ5U2MvUTROeWd5bUxuMnZqOHpRZ3NWSXB1eXJEQm55YkZaRUMyUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0V2o5S3RqUDhrbkZLNzRWd3dDb0U3bHVaK0JJSVhWV2FsQzQwZHhhZjBINHdEQzJiTjFKNVVJTlpDREtJVUxnREdsWnh1U040aGdqdXlCV2NFTFhCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtSzNOR2N0Tm8vMmU5MnZ5dTJDRkZpWW1SLzR3UVh0bWN5OExIOFdrK280Y3piYzcycjdnQWgvU01qazNhZmp1L2VrSjNqb0xYSkJwdVpEZk5nYzBCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NTIyNjQ2MDk6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNDQ5MjQ0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "GWQ6jVy9MBpfYF9SnyG8jz8p",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "https://api.elevenlabs.io/v1/text-to-speech/<voice-id>",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "Legendary ednut",



};




























global.isMongodb = true; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
