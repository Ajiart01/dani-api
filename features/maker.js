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
     
     async function gfx(req, res) {
         let apikey = req.query.apikey
         if (!req.query.name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Gfx1()
            .setName(req.query.name) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/gfx.png', data)
            await res.sendFile(__path+'/tmp/gfx.png')
     }
     
     async function gfx2(req, res) {
         let apikey = req.query.apikey
         if (!req.query.name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Gfx2()
            .setName(req.query.name) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/gfx.png', data)
            await res.sendFile(__path+'/tmp/gfx.png')
     }
     
     async function gfx3(req, res) {
         let apikey = req.query.apikey
         if (!req.query.text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!req.query.text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Gfx3()
            .setText1(req.query.text) 
            .setText2(req.query.text2) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/gfx.png', data)
            await res.sendFile(__path+'/tmp/gfx.png')
     }
     
     async function gfx4(req, res) {
         let apikey = req.query.apikey
         if (!req.query.text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!req.query.text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Gfx4()
            .setText1(req.query.text) 
            .setText2(req.query.text2) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/gfx.png', data)
            await res.sendFile(__path+'/tmp/gfx.png')
     }
     
     async function gfx5(req, res) {
         let apikey = req.query.apikey
         if (!req.query.text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Gfx5()
            .setText(req.query.text) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/gfx.png', data)
            await res.sendFile(__path+'/tmp/gfx.png')
     }
     
     async function gura(req, res) {
         let apikey = req.query.apikey
         if (!req.query.name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let image = await new knights.Gura()
            .setName(req.query.name) 
            .toAttachment()
            let data = image.toBuffer()
            await fs.writeFileSync(__path +'/tmp/gfx.png', data)
            await res.sendFile(__path+'/tmp/gfx.png')
     }
     
     async function changemymind(req, res) {
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await yuricanvas.changemymind(`${text}`)
         await fs.writeFileSync(__path +'/tmp/cmm.png', img)
         await res.sendFile(__path+'/tmp/cmm.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/cmm.png')
     }
          
     
     async function lisa(req, res) {
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new DIG.LisaPresentation().getImage(`${text}`)
         await fs.writeFileSync(__path +'/tmp/lisa.png', img)
         await res.sendFile(__path+'/tmp/lisa.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/lisa.png')
     }
     
     async function nulis(req, res) {            
         let text = req.query.text
         let apikey = req.query.apikey
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })            
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })         
         let data = await getBuffer(`https://danzzapi.xyz/api/maker/nulis?text=${text}&apikey=danzz`)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }     
     
     async function carbon(req, res) {            
         let text = req.query.text
         let apikey = req.query.apikey
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })            
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })         
         let data = await getBuffer(`https://pecundang.herokuapp.com/api/carbon?teks=${text}`)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
    async function hartatahta(req, res) {            
         let text = req.query.text
         let apikey = req.query.apikey
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })            
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })         
         let data = await getBuffer(`https://zekais-api.herokuapp.com/hartatahta?text=${text}&apikey=NCpO2ZHz`)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function attp(req, res) {            
         let text = req.query.text
         let apikey = req.query.apikey
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })            
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })         
         let data = await getBuffer(`https://pecundang.herokuapp.com/api/attp?teks=${text}`)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }     
     
     async function ttp(req, res) {            
         let text = req.query.text
         let apikey = req.query.apikey
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })            
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })         
         let data = await getBuffer(`https://pecundang.herokuapp.com/api/texttopng2?teks=${text}`)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function minecraft(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let img = await new make.Minecraft().getImage(`${text}`)
         await fs.writeFileSync(__path +'/tmp/lisa.png', img)
         await res.sendFile(__path+'/tmp/lisa.png')
         await sleep(3000)
         await fs.unlinkSync(__path + '/tmp/lisa.png')
     }

module.exports = { 
   gfx,
   gfx2,
   gfx3,
   gfx4,
   gfx5,
   gura,
   changemymind,
   lisa,
   carbon,
   nulis,
   ttp,
   attp,
   hartatahta,
   minecraft
}