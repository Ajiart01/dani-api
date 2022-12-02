const { cekKey, limitAdd, isLimit } = require('../database/db');
const { getBuffer, sleep } = require('../lib/function')
const photooxy = require("../lib/maker/photooxy.js")

const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')

__path = process.cwd()
     
     async function dnature(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("3dnature",[text])
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

     async function burnpaper(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("burnpaper",[text])
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
     
     async function coffee(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("coffee",[text])
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
     
     async function heartcup(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("coffee-heartcup",[text])
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
     
     async function flaming(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("flaming",[text])
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
     
     async function flowertypo(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("flowertypo",[text])
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
     
     async function funnycup(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("funnycup",[text])
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
     
     async function underquotes(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("underquotes",[text])
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
     
     async function glowrainbow(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("glowrainbow",[text])
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
     
     async function gradientavatar(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("gradientavatar",[text])
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
     
     async function graffiti(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("graffititext",[text])
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
     
     async function harrypotter(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("harrypotter",[text])
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

     async function lovemessage(req, res) {                             
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("lovemessage",[text])
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
     
     async function neonlight(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("neonlight",[text])
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
     
     async function quotesgrass(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("quotesgrass",[text])
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
     
     async function romance(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("romance",[text])
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
     
     async function doubleheart(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("romantic-doubleheart",[text])
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
     
     async function silk(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("silk",[text])
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
     
     async function smoke(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("smoketype-effect",[text])
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
     
     async function smoketypography(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("smoketypography",[text])
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
     
     async function summer(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("summertext",[text])
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
     
     async function sweetcandy(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("sweetcandy",[text])
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
     
     async function roses(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("yellowroses",[text])
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
     
     async function whitecube(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("whitecube",[text])
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
     
     async function woodheart(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("woodheart",[text])
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
          
     async function woodenboard(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("woodenboard",[text])
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
    
    async function shadow(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("shadow",[text])
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

    async function naruto2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("naruto",[text])
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

    async function sumernaturebaggroun(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("sumernaturebg",[text])
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

     async function darkmetal22(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("darkmetal",[text])
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

   async function coolarenaofvalor(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("coolaov",[text])
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

     async function lolrankborder(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("lolrankboder",[text])
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

    async function loltiktok(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("loltiktok",[text])
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
   
    async function shinebanner(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("shinebanner",[text])
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

     async function crossfirefacebook(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("crossfirefb",[text])
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

    async function glowpentakil(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("glowpentakil",[text])
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

     async function warfacefacebook(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("warfacefb",[text])
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

    async function overwactfacebook(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("overwactfb",[text])
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

     async function lolgreat(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("lolgreat",[text])
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

    async function csgofacebook(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("csgofb",[text])
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

    async function lolpentakil(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("lolpentakil",[text])
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

    async function wolfmetal(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("wolfmetal",[text])
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

    async function underwaterocean(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("underwaterocean",[text])
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

    async function typography35(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("typography",[text])
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

    async function rainbowshine(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("rainbowshine",[text])
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

    async function camuflage(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("camuflage",[text])
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

     async function dglowing3(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("3dglowing",[text])
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

     async function vintage(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("vintage",[text])
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

    async function candy(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("candy",[text])
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

    async function stars(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("stars",[text])
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

    async function fur(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("fur",[text])
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

    async function crispchrome(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("crispchrome",[text])
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

    async function rainbowbagground(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("rainbowbg",[text])
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

   async function metalicglow(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("metalicglow",[text])
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

   async function striking3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("striking3d",[text])
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

   async function watermelon(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("watermelon",[text])
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

    async function underwebmatrix(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("underwebmatrix",[text])
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

    async function multimaterial(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("multimaterial",[text])
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

   async function butterfly(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("butterfly",[text])
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

    async function luxuryroyal(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("luxuryroyal",[text])
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

   async function cemeterygate(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("gerbang",[text])
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

    async function woodblock(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("woodblock",[text])
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

   async function bevel(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("bevel",[text])
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

    async function partyneon(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("partyneon",[text])
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

    async function grenleaves(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("grenleaves",[text])
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

    async function modernmetal(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("modernmetal",[text])
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

    async function embroidery(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("embroiderytext",[text])
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

    async function birthdaycake23(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("birthdaycake",[text])
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

    async function woodenblack3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("3dwoodenblack",[text])
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

    async function illuminatedmetallic(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("illuminated-metallic",[text])
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

   async function orchidsflower(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("orchids-flower",[text])
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

     async function whitestone(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let result = await photooxy("whitestone",[text])
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
 
  async function pubgoxy(req, res) {            
    let apikey = req.query.apikey
    let text = req.query.text
    let text2 = req.query.text2
    if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
    if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
    if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
    let check = await cekKey(apikey)
    if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
    let limit = await isLimit(apikey);
    if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
    limitAdd(apikey);
    fetch(encodeURI(`https://api.akuari.my.id/photooxy/scraper2?text1=${text}&text2=${text2}&link=https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html`))
   .then(response => response.json())
   .then(async data => {
    let result = data
    let buffer = await fetch(data.respon)
    res.type('png')
    res.send(await buffer.buffer())
    }).catch(e => {
    console.log(e)
    res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
    })
    }        

    async function tiktokoxy(req, res) {            
        let apikey = req.query.apikey
        let text = req.query.text
        let text2 = req.query.text2
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
        if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        fetch(encodeURI(`https://api.akuari.my.id/photooxy/scraper2?text1=${text}&text2=${text2}&link=https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html`))
       .then(response => response.json())
       .then(async data => {
        let result = data
        let buffer = await fetch(data.respon)
        res.type('png')
        res.send(await buffer.buffer())
        }).catch(e => {
        console.log(e)
        res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
        })
        }     

module.exports = { 
   dnature,
   flowertypo,
   flaming,
   heartcup,
   coffee,
   burnpaper,
   graffiti,
   gradientavatar,
   glowrainbow,
   underquotes,
   funnycup,
   romance,
   quotesgrass,
   neonlight,
   lovemessage,
   harrypotter,
   summer,
   smoketypography,
   smoke,
   silk,
   doubleheart,
   woodenboard,
   woodheart,
   whitecube,
   roses,
   sweetcandy,
  coolarenaofvalor,
  darkmetal22,
  sumernaturebaggroun,
  naruto2,
  shadow,
  glowpentakil,
  crossfirefacebook,
  shinebanner,
  loltiktok,
  lolrankborder,
  lolpentakil,
  csgofacebook,
  lolgreat,
  overwactfacebook,
  warfacefacebook,
  camuflage,
  rainbowshine,
  typography35,
  underwaterocean,
  wolfmetal,
  fur,
  stars,
  candy,
  vintage,
  dglowing3,
  watermelon,
  striking3d,
  metalicglow,
  rainbowbagground,
  crispchrome,
  cemeterygate,
  luxuryroyal,
  butterfly,
  multimaterial,
  underwebmatrix,
  modernmetal,
  grenleaves,
  partyneon,
  bevel,
  woodblock,
  orchidsflower,
  illuminatedmetallic,
  woodenblack3d,
  birthdaycake23,
  embroidery,
  whitestone,
  pubgoxy,
  tiktokoxy
}