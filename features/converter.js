const { cekKey, limitAdd, isLimit } = require('../database/db');
const ss = require('../lib/apk')

const fs = require('fs')
const fetch = require('node-fetch')
const request = require('request')
const zacros = "cd97-3ac1-5119"

__path = process.cwd()

     async function whatmusic(req, res) {
            try {            
            let apikey = req.query.apikey                     
            let audio = req.query.audio                    
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })          
            if (!audio) return res.status(400).send({ status: 400, message: 'audio parameter cannot be empty', result: 'error' })          
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            fetch(encodeURI(`https://violetics.pw/api/search/music-finder?apikey=${zacros}&audio=${audio}`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result.result })
            })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function revenseimage(req, res) {
            try {            
            let apikey = req.query.apikey                     
            let image = req.query.image                    
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })          
            if (!image) return res.status(400).send({ status: 400, message: 'image parameter cannot be empty', result: 'error' })          
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            fetch(encodeURI(`https://violetics.pw/api/search/reverse-image-google?apikey=${zacros}&img=${image}`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result.result })
            })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }

module.exports = { 
   whatmusic,
   revenseimage
}