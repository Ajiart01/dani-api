const ch = require('../lib/scraper')
const md = require('../lib/modem')
const { getBuffer } = require('../lib/function')
const { cekKey, limitAdd, isLimit } = require('../database/db');
const ss = require('../lib/apk')

const fs = require('fs')
const request = require('request')
const fetch = require('node-fetch')
const scraper = require('@bochilteam/scraper')
const api = require("caliph-api");
const zacros = "cd97-3ac1-5119"

__path = process.cwd()

     async function ghstalk(req, res) {
         try {
            let username = req.query.username
            let apikey = req.query.apikey
            if (!username) return res.status(400).send({ status: 400, message: 'username parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            fetch(encodeURI(`http://api.github.com/users/${username}`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result })
            })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function igstalk(req, res) {
            try {
            let username = req.query.username
            let apikey = req.query.apikey
            if (!username) return res.status(400).send({ status: 400, message: 'username parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.instagramStalk(username)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }

     async function tiktokstalk(req, res) {
            try {
            let username = req.query.username
            let apikey = req.query.apikey
            if (!username) return res.status(400).send({ status: 400, message: 'username parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await md.tiktokStalk(username)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function twitterstalk(req, res) {
            try {
            let username = req.query.username
            let apikey = req.query.apikey
            if (!username) return res.status(400).send({ status: 400, message: 'username parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await md.twitterStalk(username)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function repostalk(req, res) {
            try {
            let username = req.query.username
            let apikey = req.query.apikey
            if (!username) return res.status(400).send({ status: 400, message: 'username parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${username}`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result.items })
            })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }     
     
     async function ffstalk(req, res) {
         try {
            let userid = req.query.userid
            let apikey = req.query.apikey
            if (!userid) return res.status(400).send({ status: 400, message: 'userid parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await api.search.freefireid(userid)
              res.status(200).json({ status: 200, result: result.result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }     
     
     async function mlstalk(req, res) {
         try {
            let userid = req.query.userid
            let zonaid = req.query.zonaid
            let apikey = req.query.apikey
            if (!userid) return res.status(400).send({ status: 400, message: 'userid parameter cannot be empty', result: 'error' })
            if (!zonaid) return res.status(400).send({ status: 400, message: 'zonaid parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await md.nickml(userid, zonaid)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }     
     
     async function wattpaduser(req, res) {
         try {
            let username = req.query.username
            let apikey = req.query.apikey
            if (!username) return res.status(400).send({ status: 400, message: 'username parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.WattpadUser(username)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function npminfo(req, res) {
         try {
            let query = req.query.query
            let apikey = req.query.apikey
            if (!query) return res.status(400).send({ status: 400, message: 'query parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            fetch(encodeURI(`https://registry.npmjs.org/${query}`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result })
            })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
    
    
module.exports = { 
   ghstalk, 
   wattpaduser,
   igstalk,
   ffstalk,
   repostalk,
   tiktokstalk,
   npminfo,
   twitterstalk,
   mlstalk
}