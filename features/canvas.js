const { cekKey, limitAdd, isLimit } = require('../database/db');
const { getBuffer, sleep } = require('../lib/function')

const knights = require("knights-canvas")
const DIG = require('discord-image-generation')
const removebg = require('removebg-id')
const yuricanvas = require("yuri-canvas")
const make = require("claire-cord");
const kbeta = require('knights-beta');

const fs = require('fs')
const zacros = "cd97-3ac1-5119"

__path = process.cwd()

     async function welcome(req, res) {
         let apikey = req.query.apikey
         if (!req.query.picurl) return res.status(400).send({ status: 400, message: 'picurl parameter cannot be empty', result: 'error' })
         if (!req.query.name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!req.query.bgurl) return res.status(400).send({ status: 400, message: 'bgurl parameter cannot be empty', result: 'error' })
         if (!req.query.gcname) return res.status(400).send({ status: 400, message: 'gcname parameter cannot be empty', result: 'error' })
         if (!req.query.mem) return res.status(400).send({ status: 400, message: 'mem parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Welcome2()
            .setAvatar(req.query.picurl)
            .setUsername(req.query.name)
            .setBg(req.query.bgurl)
            .setGroupname(req.query.gcname)
            .setMember(req.query.mem)
            .toAttachment();
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/welcome.png', data)
            await res.sendFile(__path+'/tmp/welcome.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/welcome.png')
     }
     
     async function welcome2(req, res) {
         let apikey = req.query.apikey
         if (!req.query.name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!req.query.mem) return res.status(400).send({ status: 400, message: 'mem parameter cannot be empty', result: 'error' })
         if (!req.query.gcname) return res.status(400).send({ status: 400, message: 'gcname parameter cannot be empty', result: 'error' })
         if (!req.query.picurl) return res.status(400).send({ status: 400, message: 'picurl parameter cannot be empty', result: 'error' })
         if (!req.query.bgurl) return res.status(400).send({ status: 400, message: 'bgurl parameter cannot be empty', result: 'error' })
         if (!req.query.gcicon) return res.status(400).send({ status: 400, message: 'bgurl parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Welcome()
            .setUsername(req.query.name)
            .setGuildName(req.query.gcname)
            .setGuildIcon(req.query.gcicon)
            .setMemberCount(req.query.mem)
            .setAvatar(req.query.picurl)
            .setBackground(req.query.bgurl)
            .toAttachment();
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/welcome2.png', data)
            await res.sendFile(__path+'/tmp/welcome2.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/welcome2.png')
     }
     
     async function goodbye(req, res) {
         let apikey = req.query.apikey
         if (!req.query.picurl) return res.status(400).send({ status: 400, message: 'picurl parameter cannot be empty', result: 'error' })
         if (!req.query.name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!req.query.bgurl) return res.status(400).send({ status: 400, message: 'bgurl parameter cannot be empty', result: 'error' })
         if (!req.query.mem) return res.status(400).send({ status: 400, message: 'mem parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Goodbye2()
            .setAvatar(req.query.picurl)
            .setUsername(req.query.name)
            .setBg(req.query.bgurl)
            .setMember(req.query.mem)
            .toAttachment();
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/goodbye.png', data)
            await res.sendFile(__path+'/tmp/goodbye.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/goodbye.png')
     }
     
     async function goodbye2(req, res) {
         let apikey = req.query.apikey
         if (!req.query.name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!req.query.mem) return res.status(400).send({ status: 400, message: 'mem parameter cannot be empty', result: 'error' })
         if (!req.query.gcname) return res.status(400).send({ status: 400, message: 'gcname parameter cannot be empty', result: 'error' })
         if (!req.query.picurl) return res.status(400).send({ status: 400, message: 'picurl parameter cannot be empty', result: 'error' })
         if (!req.query.bgurl) return res.status(400).send({ status: 400, message: 'bgurl parameter cannot be empty', result: 'error' })
         if (!req.query.gcicon) return res.status(400).send({ status: 400, message: 'bgurl parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Goodbye()
            .setUsername(req.query.name)
            .setGuildName(req.query.gcname)
            .setGuildIcon(req.query.gcicon)
            .setMemberCount(req.query.mem)
            .setAvatar(req.query.picurl)
            .setBackground(req.query.bgurl)
            .toAttachment();
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/goodbye2.png', data)
            await res.sendFile(__path+'/tmp/goodbye2.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/goodbye2.png')
     }
     
     async function rankcard(req, res) {
         let apikey = req.query.apikey
         if (!req.query.name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!req.query.currentxp) return res.status(400).send({ status: 400, message: 'currentxp parameter cannot be empty', result: 'error' })
         if (!req.query.requiredxp) return res.status(400).send({ status: 400, message: 'requiredxp parameter cannot be empty', result: 'error' })
         if (!req.query.level) return res.status(400).send({ status: 400, message: 'level parameter cannot be empty', result: 'error' })
         if (!req.query.picurl) return res.status(400).send({ status: 400, message: 'picurl parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Rank()
            .setAvatar(req.query.picurl)
            .setUsername(req.query.name) 
            .setBg(req.query.bgurl)
            .setNeedxp(req.query.requiredxp) 
            .setCurrxp(req.query.currentxp) 
            .setLevel(req.query.level) 
            .setRank("https://i.ibb.co/Wn9cvnv/FABLED.png") 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/card.png', data)
            await res.sendFile(__path+'/tmp/card.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/card.png')
     }
     
     async function levelup(req, res) {
         let apikey = req.query.apikey
         if (!req.query.picurl) return res.status(400).send({ status: 400, message: 'picurl parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Up()
            .setAvatar(req.query.picurl) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/level.png', data)
            await res.sendFile(__path+'/tmp/level.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/level.png')
     }   
     
     async function burn(req, res) {
         let apikey = req.query.apikey
         if (!req.query.url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Burn()
            .setAvatar(req.query.url) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/burn.png', data)
            await res.sendFile(__path+'/tmp/burn.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/burn.png')
     }
     
     async function spongebob(req, res) {
         let apikey = req.query.apikey
         if (!req.query.url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Spo()
            .setAvatar(req.query.url) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/spo.png', data)
            await res.sendFile(__path+'/tmp/spo.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/spo.png')
     }
     
     async function patrick(req, res) {
         let apikey = req.query.apikey
         if (!req.query.url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Patrick()
            .setAvatar(req.query.url) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/pat.png', data)
            await res.sendFile(__path+'/tmp/pat.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/pat.png')
     }
     
     async function hornycard(req, res) {
         let apikey = req.query.apikey
         if (!req.query.url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Horny()
            .setAvatar(req.query.url) 
            .toBuild()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/horny.png', data)
            await res.sendFile(__path+'/tmp/horny.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/horny.png')
     }
     
     async function xnxx(req, res) {
         let apikey = req.query.apikey
         if (!req.query.name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!req.query.url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Xnxx()
            .setImage(req.query.url) 
            .setTitle(req.query.name)
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/xnxx.png', data)
            await res.sendFile(__path+'/tmp/xnxx.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/xnxx.png')
     }
     
     async function jojo(req, res) {
         let apikey = req.query.apikey
         if (!req.query.url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Jo()
            .setImage(req.query.url) 
            .toBuild()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/jojo.png', data)
            await res.sendFile(__path+'/tmp/jojo.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/jojo.png')
     }
     
     async function bonk(req, res) {
         let apikey = req.query.apikey
         if (!req.query.url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!req.query.url2) return res.status(400).send({ status: 400, message: 'url2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Bonk()
            .setAvatar1(req.query.url) 
            .setAvatar2(req.query.url2)
            .toBuild()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/bonk.png', data)
            await res.sendFile(__path+'/tmp/bonk.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/bonk.png')
     }
     
     async function ship(req, res) {
         let apikey = req.query.apikey
         if (!req.query.name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!req.query.name2) return res.status(400).send({ status: 400, message: 'name2 parameter cannot be empty', result: 'error' })
         if (!req.query.avatar) return res.status(400).send({ status: 400, message: 'avatar parameter cannot be empty', result: 'error' })
         if (!req.query.avatar2) return res.status(400).send({ status: 400, message: 'avatar2 parameter cannot be empty', result: 'error' })
         if (!req.query.num) return res.status(400).send({ status: 400, message: 'num parameter cannot be empty', result: 'error' })
         if (!req.query.status) return res.status(400).send({ status: 400, message: 'status parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Ship()
            .setName1(req.query.name) 
            .setName2(req.query.name2)
            .setAvatar1(req.query.avatar)
            .setAvatar2(req.query.avatar2)
            .setNum(req.query.num)
            .setStatus(req.query.status)
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/ship.png', data)
            await res.sendFile(__path+'/tmp/ship.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/ship.png')
     }
     
     async function removebeg(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         // GET APIKEY? https://www.remove.bg/api
         removebg.FromUrl(url, 'fsBdYTGGKfRxsYfRPYD5wRDa').then(async () => res.status(200).sendFile(__path + '/hasil-url.png')).catch(err => res.status(400).json({ error: String(err) }))
     }
     
     async function notstonk(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.NotStonk().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/notstonk.png', img)
         await res.sendFile(__path+'/tmp/notstonk.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/notstonk.png')
     }
     
     async function stonk(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Stonk().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/stonk.png', img)
         await res.sendFile(__path+'/tmp/stonk.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/stonk.png')
     }
     
     async function rip(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Rip().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/rip.png', img)
         await res.sendFile(__path+'/tmp/rip.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/rip.png')
     }
     
     async function gay(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Gay().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/gay.png', img)
         await res.sendFile(__path+'/tmp/gay.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/gay.png')
     }
     
     async function discordblue(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.DiscordBlue().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/discord.png', img)
         await res.sendFile(__path+'/tmp/discord.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/discord.png')
     }
     
     async function discordblack(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.DiscordBlack().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/discord.png', img)
         await res.sendFile(__path+'/tmp/discord.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/discord.png')
     }
     
     async function trash(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Trash().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/trash.png', img)
         await res.sendFile(__path+'/tmp/trash.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/trash.png')
     }
     
     async function deletes(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Delete().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/delete.png', img)
         await res.sendFile(__path+'/tmp/delete.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/delete.png')
     }
     
     async function trigger(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Triggered().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/trigger.png', img)
         await res.sendFile(__path+'/tmp/trigger.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/trigger.png')
     }
     
     async function greyscale(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Greyscale().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function invert(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Invert().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function sepia(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Sepia().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function ad(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Ad().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function affect(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Affect().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function beautiful(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Beautiful().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function bobross(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Bobross().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function confusedstonk(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.ConfusedStonk().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function facepalm(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Facepalm().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function hitler(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Hitler().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function jail(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Jail().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function karaba(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Karaba().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function mms(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Mms().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function poutine(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Poutine().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function tatoo(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Tatoo().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function thomas(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Thomas().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function batslap(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         let url2 = req.query.url2
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!url2) return res.status(400).send({ status: 400, message: 'url2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Batslap().getImage(`${url}`, `${url2}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function bed(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         let url2 = req.query.url2
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!url2) return res.status(400).send({ status: 400, message: 'url2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Bed().getImage(`${url}`, `${url2}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function doublestonk(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         let url2 = req.query.url2
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!url2) return res.status(400).send({ status: 400, message: 'url2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.DoubleStonk().getImage(`${url}`, `${url2}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function kisss(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         let url2 = req.query.url2
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!url2) return res.status(400).send({ status: 400, message: 'url2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Kiss().getImage(`${url}`, `${url2}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function spank(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         let url2 = req.query.url2
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!url2) return res.status(400).send({ status: 400, message: 'url2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Spank().getImage(`${url}`, `${url2}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function blur(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         let level = req.query.level
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!level) return res.status(400).send({ status: 400, message: 'level parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Blur().getImage(`${url}`, `${level}`)
         await fs.writeFileSync(__path +'/tmp/blur.png', img)
         await res.sendFile(__path+'/tmp/blur.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/blur.png')
     }
     
     async function circle(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.Circle().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/circle.png', img)
         await res.sendFile(__path+'/tmp/circle.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/circle.png')
     }
     
     async function wasted(req, res) {            
         let url = req.query.url
         let apikey = req.query.apikey
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })            
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })         
         let data = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${url}`)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function wanted(req, res) {            
         let url = req.query.url
         let apikey = req.query.apikey
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })            
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })         
         let data = await getBuffer(`https://pecundang.herokuapp.com/api/wanted?url=${url}`)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function communis(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Communism().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function captcha(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Captcha().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function police(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Police().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function continued(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Continued().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function crush(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Crush().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function approved(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Approved().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function airpods(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Airpods().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function meth(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Meth().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function linus(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Linus().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function what(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.What().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function udf(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Udf().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function bjp(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Bjp().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function bill(req, res) {            
         let apikey = req.query.apikey
         let url = req.query.url
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Bill().getImage(`${url}`)
         await fs.writeFileSync(__path +'/tmp/image.png', img)
         await res.sendFile(__path+'/tmp/image.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/image.png')
     }
     
     async function hacker(req, res) {            
         let apikey = req.query.apikey
         if (!req.query.text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new kbeta.Hacker1()
            .setText(req.query.text) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/image.png', data)
            await res.sendFile(__path+'/tmp/image.png')
     }
     
     async function hacker2(req, res) {            
         let apikey = req.query.apikey
         if (!req.query.url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new kbeta.Hacker2()
            .setAvatar(req.query.url) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/image.png', data)
            await res.sendFile(__path+'/tmp/image.png')
     }
     
     async function hacker3(req, res) {            
         let apikey = req.query.apikey
         if (!req.query.url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new kbeta.Hacker3()
            .setAvatar(req.query.url) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/image.png', data)
            await res.sendFile(__path+'/tmp/image.png')
     }
     

module.exports = { 
   welcome, 
   welcome2, 
   goodbye,
   goodbye2, 
   rankcard, 
   levelup, 
   burn,
   spongebob,
   patrick,
   hornycard,
   xnxx,
   jojo,
   bonk,
   ship,
   removebeg,
   notstonk,
   stonk,
   rip,
   gay,
   discordblack,
   discordblue,
   affect,
   ad,
   sepia,
   invert,
   greyscale,
   hitler,
   facepalm,
   confusedstonk,
   bobross,
   beautiful,
   tatoo,
   poutine,
   mms,
   karaba,
   jail,
   thomas,
   spank,
   kisss,
   doublestonk,
   bed,
   batslap,
   trash,
   deletes,
   trigger,
   blur,
   circle,
   communis,
   wanted,
   wasted,
   approved,
   crush,
   continued,
   police,
   captcha,
   what,
   linus,
   meth,
   airpods,
   bill,
   bjp,
   udf,
   hacker,
   hacker2,
   hacker3
}