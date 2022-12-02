const { cekKey, limitAdd, isLimit } = require('../database/db');
const { getBuffer, sleep } = require('../lib/function')
const photofunia = require("../lib/maker/photofunia.js")

const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')

__path = process.cwd()
     
     async function airline(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("airline",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function balloon(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("balloon",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}

     async function beachsign(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("beach-sign",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function bloodwriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("blood_writing",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function bracelet(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("bracelet",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function cemeterygates(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("cemetery-gates",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function chalkwriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("chalk_writing",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function christmaswriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("christmas-writing",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function denimemdroidery(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("denim-emdroidery",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function einstein(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("einstein",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
         
     async function foggywindowwriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("foggy_window_writing",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function fortunecookie(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("fortune-cookie",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function frostywindowwriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("frosty-window-writing",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function hauntedhotel(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("haunted-hotel",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function lightgraffiti(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("light-graffiti",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function lipstickwriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("lipstick-writing",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function lovelock(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("love-lock",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function nightmarewriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("nightmare-writing",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function noir(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("noir",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function pendant(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("pendant",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function planebanner(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("plane-banner",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function sandwriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("sand_writing",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function snowsign(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("snow-sign",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}

     async function soupletters(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("soup_letters",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function streetsign(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("street-sign",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function waterwriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("water-writing",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function typewriter(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("typewriter",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function woodensign(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("wooden_sign",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function yacht(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("yacht",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}

     async function cookieswriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("cookies_writing",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}

     async function hearttatto(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("heart_tattoo",[text])
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function arrowsigns(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("arrow-signs",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function birthdaycake(req, res) {                     
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("birthday-cake",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function chalkboard(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("chalkboard",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function cinematicket(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("cinema-ticket",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function crossstitch(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("cross_stitch_text",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function lifebuoy(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("lifebuoy",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function ledroadsign(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let sign = req.query.sign
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!sign) return res.status(400).send({ status: 400, message: 'sign parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("led-road-sign",[text, sign] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function moviemarquee(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("movie_marquee",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function neon(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("neon",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
      async function neonwriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("neon-writing",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function snowwriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("snow_writing",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function surfingboard(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("surfing-board",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function treecarving(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("tree_carving",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function watercolour(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("watercolour-text",[text, text2] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}

     async function books(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         let text3 = req.query.text3
         let text4 = req.query.text4
         let text5 = req.query.text5
         let text6 = req.query.text6
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!text3) return res.status(400).send({ status: 400, message: 'text3 parameter cannot be empty', result: 'error' })
         if (!text4) return res.status(400).send({ status: 400, message: 'text4 parameter cannot be empty', result: 'error' })
         if (!text5) return res.status(400).send({ status: 400, message: 'text5 parameter cannot be empty', result: 'error' })
         if (!text6) return res.status(400).send({ status: 400, message: 'text6 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("books",[text, text2, text3, text4, text5, text6] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function retrowave(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         let text3 = req.query.text3
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!text3) return res.status(400).send({ status: 400, message: 'text3 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("retro-wave",[text, text2, text3] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}

     async function hogwartsletter(req, res) {            
         let apikey = req.query.apikey
         let title = req.query.title
         let name = req.query.name
         let surname = req.query.surname
         let address = req.query.address
         let address2 = req.query.address2
         let address3 = req.query.address3
         let papertex = req.query.papertex
         if (!title) return res.status(400).send({ status: 400, message: 'title parameter cannot be empty', result: 'error' })
         if (!name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!surname) return res.status(400).send({ status: 400, message: 'surname parameter cannot be empty', result: 'error' })
         if (!address) return res.status(400).send({ status: 400, message: 'address parameter cannot be empty', result: 'error' })
         if (!address2) return res.status(400).send({ status: 400, message: 'address2 parameter cannot be empty', result: 'error' })
         if (!address3) return res.status(400).send({ status: 400, message: 'address3 parameter cannot be empty', result: 'error' })
         if (!papertex) return res.status(400).send({ status: 400, message: 'papertex parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("hogwarts_letter",[text, text2, text3] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}
     
     async function breakingnews(req, res) {            
         let apikey = req.query.apikey
         let title1 = req.query.title1
         let channel = req.query.channel
         let text3 = req.query.text3
         if (!title1) return res.status(400).send({ status: 400, message: 'title1 parameter cannot be empty', result: 'error' })
         if (!channel) return res.status(400).send({ status: 400, message: 'channel parameter cannot be empty', result: 'error' })
         if (!title2) return res.status(400).send({ status: 400, message: 'title2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("breaking-news",[text, text2, text3] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}

      async function diploma(req, res) {            
         let apikey = req.query.apikey
         let UniversityName = req.query.UniversityName
         let year = req.query.year
         let Name = req.query.Name
         let Degree = req.query.Degree
         let President = req.query.President
         let VicePresident = req.query.VicePresident
         if (!UniversityName) return res.status(400).send({ status: 400, message: 'UniversityName parameter cannot be empty', result: 'error' })
         if (!year) return res.status(400).send({ status: 400, message: 'year parameter cannot be empty', result: 'error' })
         if (!Name) return res.status(400).send({ status: 400, message: 'Name parameter cannot be empty', result: 'error' })
         if (!Degree) return res.status(400).send({ status: 400, message: 'Degree parameter cannot be empty', result: 'error' })
         if (!President) return res.status(400).send({ status: 400, message: 'President parameter cannot be empty', result: 'error' })
         if (!VicePresident) return res.status(400).send({ status: 400, message: 'VicePresident parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("diploma",[UniversityName, year, Name, Degree, President, VicePresident] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}

      async function keepcalm(req, res) {            
         let apikey = req.query.apikey
         let line1 = req.query.line1
         let line2 = req.query.line2
         let line3 = req.query.line3
         let line4 = req.query.line4
         let line5 = req.query.line5        
         if (!line1) return res.status(400).send({ status: 400, message: 'line1 parameter cannot be empty', result: 'error' })
         if (!line2) return res.status(400).send({ status: 400, message: 'line2 parameter cannot be empty', result: 'error' })
         if (!line3) return res.status(400).send({ status: 400, message: 'line3 parameter cannot be empty', result: 'error' })
         if (!line4) return res.status(400).send({ status: 400, message: 'line4 parameter cannot be empty', result: 'error' })
         if (!line5) return res.status(400).send({ status: 400, message: 'line5 parameter cannot be empty', result: 'error' })        
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photofunia("keep_calm",[line1, line2, line3, line4, line5] )
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         axios({
method: "get", 
url: result,
headers: {"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0"},
responseType: "arraybuffer"
}).then(function (hasilnya) {
var head = {"Content-Type": "image/png"}
res.writeHead(200, head)
res.end(hasilnya.data, "utf-8") 
}).catch(function (error) {
res.send("error : "+ error) 
}) 
}

module.exports = { 
   airline,
   balloon,
   beachsign,
   bloodwriting,
   bracelet,
   einstein,
   denimemdroidery,
   christmaswriting,
   chalkwriting,
   cemeterygates,
   lightgraffiti,
   hauntedhotel,
   frostywindowwriting,
   fortunecookie,
   foggywindowwriting,
   pendant,
   noir,
   nightmarewriting,
   lovelock,
   lipstickwriting,
   streetsign,
   soupletters,
   snowsign,
   sandwriting,
   planebanner,
   yacht,
   woodensign,
   typewriter,
   waterwriting,
   crossstitch,
   cinematicket,
   chalkboard,
   birthdaycake,
   arrowsigns,
   neonwriting,
   neon,
   moviemarquee,
   ledroadsign,
   lifebuoy,
   watercolour,
   treecarving,
   surfingboard,
   snowwriting,
   books,
   cookieswriting,
   hearttatto,
   retrowave,
   hogwartsletter,
   breakingnews,
   keepcalm,
   diploma
}