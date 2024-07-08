//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUN2UTJrejBrVzFNN3Jja29zYVg1NkFNUi8vWmtNOW5QS1Q5MUFWeVoyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWdVY3R6WTBHQjU3aGVBRWNGdzJqQ0ppcjBxZnNtV1MyaXowU3pCZldsRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQUZvL1V4bHBhRktuYm5kTC95bEdjdlhaRUdhdkdZTXordTBQcHlidGw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSG5NcE9vbnBFRUFWNm5oTC9YaVdweEM4djQvR2RYcjhQbGtxNGdLdWp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitCbW5Ddy9jMkhFalFHd2NQMHl4TVZSMThqSUxQck05RUE1K2o2OHNRMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxIZGl2NWRzTFlVWXBLcm9qdXdmcXYzL3V3UmF2ZktnRC9CdmFEL0tGbFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1EV3VRQmRKRDdUSERkejBNNUM1Nkx2dFFBZlFxZmE5RkoveFZmQU5FMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieERpU2ZxbEd0ZDRVTk1rSW5wNXV6UVM1RklQb3A5YjZLbWpRNm8rUm8wcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM5RlZLTDhCd3dOdzJ5Yk16SkVZZGdZRVNsR2NFNXdXdVpsdzZJL2VFM2dneDBNbllGcnRYOCtUN2pQL2hrbS8vUDJkemQzV0VQQW5TWVZaT0hTZ0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJKUTFzUGN3T29tU2Ywam1sVVBVS0VnYnBaYTRrTTNCSVBJbW1JTXdSZ284PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwTFNMVHBRVFEwbTJBOFJYZ1d3b1VBIiwicGhvbmVJZCI6ImEyMDFjNWY2LTg3NWUtNGU3YS1iZTNiLTNjN2FlZTkzMTc3ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNY3kxdVY3Y2lZOUl2Zm1KUitkeHFueEVCczg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaitUUE1PUk9ISTlCNmxzQnJCQkZ2b3J5UitvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNUWE4yWTlaIiwibWUiOnsiaWQiOiI5NDcyMzAzODc4NzozNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmP8J2ZnfCdmZbwnZmn8J2ZqiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCdmajwnZmj8J2ZmfCdmaUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s3QW5wa0VFT0dNc0xRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Iktsc0l6RjNUK3liVjJBQWtOQnpIYnpCT3hKN0Q4eUdKbXF2d1VsNUNWbEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklwWDk2UmEyVUswc3hXYUJmT2RQV2JuaDZ5L1A0Y2tCTDVFcUhrb09HQzJVcWhlakJpazlNK1FCWDJwbFRVeGpqRjVuN2t3OWZ5cEtQTC8rK2ZuQkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBa3Rid21iNzBaT2hKc0dqWmpGY2pIRUdSVTNEa1NuZ2NuZVBYb1ZsbExPTmFqMDExMVVvVlFLODg3dlF1UmR3SVZtQUVuc0VXOGZMNmpjaG90L05Bdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIzMDM4Nzg3OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNwYkNNeGQwL3NtMWRnQUpEUWN4Mjh3VHNTZXcvTWhpWnFyOEZKZVFsWlEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA0NTI3MTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXVhIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
