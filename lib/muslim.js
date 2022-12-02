const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs');

__path = process.cwd()

async function Searchnabi(nabi){
   return new Promise( async (resolve, reject) => {
       const scraper = JSON.parse(fs.readFileSync(__path +`/lib/kisahnabi/${nabi}.json`))
       console.log(scraper)
       const result = {
         name: scraper.name,
         kelahiran: scraper.thn_kelahiran +' sebelum massehi',
         wafat_usia: scraper.usia +' tahun',
         singgah: scraper.tmp,
         kisah: scraper.description
       }
       resolve(result)
   }).catch((err) => {resolve(err) })
}

async function surah(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://litequran.net/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = []
                $('body > main > article > ol > li').each(function(a, b) {
                    result = {                 
                    arab: $(b).find('> span.ayat').text(),
                    latin: $(b).find('> span.bacaan').text(),
                    translate: $(b).find('> span.arti').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

async function  tafsirsurah(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://tafsirq.com/topik/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = []
                $('body > div:nth-child(4) > div > div.col-md-6 > div ').each(function(a, b) {
                    result = {                 
                    surah: $(b).find('> div.panel-heading.panel-choco > div > div > a').text(),
                    tafsir: $(b).find('> div.panel-body.excerpt').text().trim(),
                    type: $(b).find('> div.panel-heading.panel-choco > div > div > span').text(),
                    source: $(b).find('> div.panel-heading.panel-choco > div > div > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

async function sholat(query){
    return new Promise((resolve, reject) => {
        axios.get(`https://umrotix.com/jadwal-sholat/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                $('body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ').each(function(a, b) {   
                    result = {                                  
                    tanggal: $(b).find('> div:nth-child(2)').text(),
                    imsyak: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)').text(),
                    subuh: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)').text(),
                    dzuhur: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)').text(),
                    ashar: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)').text(),
                    maghrib: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)').text(),
                    isya: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)').text()
                }
                resolve(result)
                })
            })
            .catch(reject)
    })
}

async function listsurah (){
            return new Promise((resolve, reject) => {
                  axios.get('https://litequran.net/')
                  .then(({ data }) => {
                       const $ = cheerio.load(data)
                       let listsurah = []
                       $('body > main > section > ol > li > a').each(function(a, b) {
                    listsurah.push($(b).text())
                })
                       result = {                       
                        listsurah: listsurah
                       }
                       resolve(result)
                  }).catch(reject)
             })
        }

module.exports.sholat = sholat
module.exports.listsurah = listsurah
module.exports.tafsirsurah = tafsirsurah
module.exports.surah = surah
module.exports.Searchnabi = Searchnabi