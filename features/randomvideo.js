const { getBuffer, sleep } = require('../lib/function')
const { cekKey, limitAdd, isLimit } = require('../database/db');

const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')
const ss = require('../lib/apk')
const pk = require('../lib/modem')

__path = process.cwd()
     
     async function jedagjedugml(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/video/jjml.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function jedagjedugff(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/video/jjff.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function jedagjedugpubg(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/video/jjpubg.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function jedagjedugmw(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/video/jjmw.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function faktamenarik(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/video/faktamenarik.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function randomgore(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await await ss.randomgore()
         res.status(200).json({ status: 200, result: result.data })
     }          
     
    async function randomhentai(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await await pk.hentai()
         res.status(200).json({ status: 200, result: result })
     }          
     
     async function randomporno(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await await pk.porno()
         res.status(200).json({ status: 200, result: result })
     }          

      
   
module.exports = { 
   jedagjedugmw,
   jedagjedugpubg,
   jedagjedugff,
   jedagjedugml,
   randomporno,
   randomhentai,
   randomgore,
   faktamenarik
}