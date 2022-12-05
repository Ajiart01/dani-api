const { getBuffer } = require('../lib/function')
const { cekKey, limitAdd, isLimit } = require('../database/db');
const zrapi = require("zrapi");

const fs = require('fs')
const scraper = require('@bochilteam/scraper')
const fetch = require('node-fetch')
const request = require('request')


__path = process.cwd()
    
     async function textpro(req, res) {
            try {
            let url = req.query.url
            let text = req.query.text          
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })           
            let result = await zrapi.textpro(url, [text])
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }     
     
     async function textpro2(req, res) {
            try {
            let url = req.query.url
            let text = req.query.text          
            let text2 = req.query.text2          
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })           
            if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })           
            let result = await zrapi.textpro(url, [text, text2])
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }     

     async function photooxy(req, res) {
            try {
            let url = req.query.url
            let text = req.query.text
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })           
            if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })           
            fetch(encodeURI(`https://api.akuari.my.id/photooxy/scraper1?text=${text}&link=${url}`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result.respon })
            })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function photooxy2(req, res) {
          try {
          let url = req.query.url
          let text = req.query.text
          let text2 = req.query.text2
          if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })           
          if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })           
          if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })           
          fetch(encodeURI(`https://api.akuari.my.id/photooxy/scraper2?text1=${text}&text2=${text2}&link=${url}`))
         .then(response => response.json())
         .then(result => {
            res.status(200).json({ status: 200, result: result.respon })
          })
       } catch(err) {
            console.log(err)
            res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
       }
   }

     async function ephoto(req, res) {
            try {
            let url = req.query.url
            let text = req.query.text
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })           
            if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })           
            fetch(encodeURI(`https://api.akuari.my.id/ephoto/scraper-1?text=${text}&link=${url}`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result.respon })
            })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function ephoto2(req, res) {
            try {
            let url = req.query.url
            let text = req.query.text
            let text2 = req.query.text2
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })           
            if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })           
            if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })           
            fetch(encodeURI(`https://api.akuari.my.id/ephoto/scraper-2?text=${text}&text2=${text2}&link=${url}`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result.respon })
            })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }

module.exports = { 
   textpro,
   textpro2,
   ephoto,
   photooxy,
   photooxy2,
   ephoto2
}