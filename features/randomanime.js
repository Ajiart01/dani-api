const { getBuffer, sleep } = require('../lib/function')
const { cekKey, limitAdd, isLimit } = require('../database/db');
const ch = require('../lib/scraper')

const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')

__path = process.cwd()
     
     async function husbu(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/husbu.json`)).data
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/husbu.png', data)
         await res.sendFile(__path +'/tmp/husbu.png')
     }
     
     async function loli(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/loli.png', data)
         await res.sendFile(__path +'/tmp/loli.png')
     }
     
     async function milf(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/milf.json`)).data
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/milf.png', data)
         await res.sendFile(__path +'/tmp/milf.png')
     }
     
     async function cosplay(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/cosplay.json`)).data
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/cosplay.png', data)
         await res.sendFile(__path +'/tmp/cosplay.png')
     }
     
     async function naruto(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/naruto.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/naruto.png', data)
         await res.sendFile(__path +'/tmp/naruto.png')
     }
     
     async function akira(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/akira.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function chiho(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/chiho.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function emilia(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/emilia.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function ayuzawa(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/ayuzawa.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/ayuzawa.png', data)
         await res.sendFile(__path +'/tmp/ayuzawa.png')
     }
     
     async function akiyama(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/akiyama.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/akiyama.png', data)
         await res.sendFile(__path +'/tmp/akiyama.png')
     }
     
     async function ana(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/ana.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/ana.png', data)
         await res.sendFile(__path +'/tmp/ana.png')
     }
     
     async function asuna(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/asuna.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/asuna.png', data)
         await res.sendFile(__path +'/tmp/asuna.png')
     }
     
     async function boruto(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/boruto.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/boruto.png', data)
         await res.sendFile(__path +'/tmp/boruto.png')
     }
     
     async function chitoge(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/chitoge.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function deidara(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/deidara.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function eba(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/eba.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function elaina(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/elaina.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function erza(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/erza.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function hestia(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/hestia.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function hinata(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/hinata.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function inori(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/inori.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function isuzu(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/isuzu.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function itachi(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/itachi.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function itori(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/itori.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function kaga(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/kaga.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function kagura(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/kagura.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function kakasi(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/kakasih.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function kaori(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/kaori.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function keneki(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/keneki.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function kotori(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/kotori.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function kurumi(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/kurumi.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function madara(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/madara.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function mikasa(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/mikasa.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function miku(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/miku.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function minato(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/minato.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function nezuko(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/nezuko.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function onepiece(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/onepiece.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function rize(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/rize.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function sakura(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/sakura.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function sasuke(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/sasuke.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function shina(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/shina.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function shinka(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/shinka.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function shinomiya(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/shinomiya.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function shizuka(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/shizuka.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function shota(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/shota.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function tejina(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/tejina.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function toukachan(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/toukachan.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function tsunade(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/tsunade.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function yotsuba(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/yotsuba.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
      
     async function yuki(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/yuki.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function yumeko(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/yumeko.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
    
    async function yuri(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/yuri.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function ahegao(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/ahegao.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function chitanda(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/chitanda.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function gremory(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/gremory.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function kosaki(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/kosaki.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function kuriyama(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/kuriyama.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function kuroha(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/kuroha.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function natsukawa(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/natsukawa.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function nekonime(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/nekonime.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function nishimiya(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/nishimiya.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function rem(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/rem.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function sagiri(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/sagiri.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function tomori(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/tomori.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function yatogami(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let waif = JSON.parse(fs.readFileSync(__path +'/lib/anime/yatogami.json'))
         let result = waif[Math.floor(Math.random() * (waif.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
          
     async function waifu(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/waifu`))
         .then(response => response.json())
         .then(async data => {
          let result = data
          let buffer = await fetch(data.url)
          res.type('png')
             
          res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via telegram at https://t.me/iamkizakixd or wa.me/6285878313791', result: 'error' })
      })
     }
     
     async function neko(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/neko`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via telegram at https://t.me/iamkizakixd or wa.me/6285878313791', result: 'error' })
      })
     }
     
     async function shinobu(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/shinobu`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via telegram at https://t.me/iamkizakixd or wa.me/6285878313791', result: 'error' })
      })
     }   
   
module.exports = { 
   husbu, 
   loli, 
   milf,
   cosplay, 
   naruto,
   boruto,
   asuna,
   ana,
   akiyama,
   ayuzawa,
   erza,
   elaina,
   eba,
   deidara,
   chitoge,
   itachi,
   isuzu,
   inori,
   hinata,
   hestia,
   kaori,
   kakasi,
   kagura,
   kaga,
   itori,
   mikasa,
   madara,
   kurumi,
   kotori,
   keneki,
   rize,
   onepiece,
   nezuko,
   minato,
   miku,
   shinomiya,
   shinka,
   shina,
   sasuke,
   sakura,
   tsunade,
   toukachan,
   tejina,
   shota,
   shizuka,
   yuri,
   emilia,
   chiho,
   akira,
   yumeko,
   yuki,
   yotsuba,
   kuriyama,
   kosaki,
   gremory,
   chitanda,
   ahegao,
   rem,
   nishimiya,
   nekonime,
   natsukawa,
   kuroha,
   yatogami,
   tomori,
   sagiri,
   waifu, 
   neko, 
   shinobu
}