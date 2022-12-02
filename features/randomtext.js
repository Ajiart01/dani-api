const { cekKey, limitAdd, isLimit } = require('../database/db');
const { readFileTxt } = require('../lib/function');
const md = require('../lib/modem')

const fs = require('fs')
const request = require('request')
const fetch = require('node-fetch')

__path = process.cwd()

     async function faktaunik(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/faktaunix.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function katabijak2(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/katabijak.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function katagalau(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/katagalau.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function katailham(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/katailham.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function katabucin(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/bucin.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function pantun(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/pantun.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function puisi(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/puisi.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function quotes(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/quotes.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function quotesislamic(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/quotesislamic.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function quotespubg(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/quotespubg.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
    
    async function quotesanime(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/quotesnime.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function quotesanime2(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await await md.quotesAnime()
         res.status(200).json({ status: 200, result: result })
     }          

     async function dare(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/dare.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function truth(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/truth.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function motivasi(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/motivasi.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function fml(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/fml.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function katasenja(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/katasenja.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function katacinta(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/katacinta.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function nickff(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/nickff.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function katasindiran(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/katasindiran.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
     
     async function katahacker(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let text = JSON.parse(fs.readFileSync(__path +'/lib/text/katahacker.json'))
         let result = text[Math.floor(Math.random() * text.length)]
         res.json({ status: 200, result: result })
     }
    
module.exports = { 
   pantun,
   katailham,
   katagalau,
   katabijak2,
   faktaunik,
   quotespubg,
   quotesislamic,
   quotes,
   puisi,
   truth,
   dare,
   quotesanime,
   katabucin,
   motivasi,
   katasindiran,
   nickff,
   katacinta,
   katasenja,
   fml,
   katahacker,
   quotesanime2
}