const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')

function otakudesu(judul){
	return new Promise(async(resolve, reject) => {
	axios.get('https://otakudesu.moe/?s=' + judul + '&post_type=anime')
	.then(({ data }) => {
	const $ = cheerio.load(data)
	const result = {};
	let limk = $('#venkonten > div > div.venser > div > div > ul > li:nth-child(1) > h2 > a').attr('href')
	axios.get(limk).then(({ data }) => {
	const $$ = cheerio.load(data)
	result.message = 'Dani'
	result.img = $$('#venkonten > div.venser > div.fotoanime').find('img').attr('src')
	$$('#venkonten > div.venser > div.fotoanime > div.infozin > div').each(function(a, b) {
		result.judul = $$(b).find('p:nth-child(1)').text().replace('Judul: ','')
		result.jepang = $$(b).find('p:nth-child(2)').text().replace('Japanese: ','')
		result.rate = $$(b).find('p:nth-child(3)').text().replace('Skor: ','')
		result.produser = $$(b).find('p:nth-child(4)').text().replace('Produser: ','')
		result.tipe = $$(b).find('p:nth-child(5)').text().replace('Tipe: ','')
		result.status = $$(b).find('p:nth-child(6)').text().replace('Status: ','')
		result.episode = $$(b).find('p:nth-child(7)').text().replace('Total Episode: ','')
		result.durasi = $$(b).find('p:nth-child(8)').text().replace('Durasi: ','')
		result.rilis = $$(b).find('p:nth-child(9)').text().replace('Tanggal Rilis: ','')
		result.studio = $$(b).find('p:nth-child(10)').text().replace('Studio: ','')
		result.genre = $$(b).find('p:nth-child(11)').text().replace('Genre: ','')
		result.desc = $$('#venkonten > div.venser > div.fotoanime > div.sinopc').text().replace('.','\n') + $$(b).find('div.sinopc > p:nth-child(2)').text()
		result.batch = $$('#venkonten > div.venser > div:nth-child(10) > ul > li > span:nth-child(1) > a').attr('href')
	})
	const lim = $$('#venkonten > div.venser > div:nth-child(10) > ul > li > span:nth-child(1) > a').attr('href')
	axios.get(lim).then(({ data }) => {
	const $$$ = cheerio.load(data)
		result.batchSD = $$$('#venkonten > div:nth-child(6) > ul > li:nth-child(1) > a:nth-child(3)').attr('href')
		result.batchHD = $$$('#venkonten > div:nth-child(6) > ul > li:nth-child(3) > a:nth-child(3)').attr('href')
		resolve(result)
				})
			})
		})
	.catch(reject)
	})
}

function manga(query){
    return new Promise((resolve, reject) => {
		axios.get(`https://www.anime-planet.com/manga/all?name=${query}`)
			.then((data) => {
				const $ = cheerio.load(data.data)
				const result = [];
				const judul = [];
				const link = [];
				const thumb = [];
				$('#siteContainer > ul.cardDeck.cardGrid > li > a > h3').each(function(a, b) {
					deta = $(b).text();
					judul.push(deta)
				})
				$('#siteContainer > ul.cardDeck.cardGrid > li > a').each(function(a, b) {
					link.push('https://www.anime-planet.com' + $(b).attr('href'))
				})
				$('#siteContainer > ul.cardDeck.cardGrid > li > a > div.crop > img').each(function(a, b) {
					thumb.push('https://www.anime-planet.com' + $(b).attr('src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						judul: judul[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}

function character(query){
    return new Promise((resolve, reject) => {
        axios.get(`https://www.anime-planet.com/characters/all?name=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#siteContainer > table > tbody > tr').each(function (a, b) {
                        result = {                           
                            character: $(b).find('> td.tableCharInfo > a').text(),
                            link: $(b).find('> td.tableCharInfo > a').attr('href'),
                            thumbnail: $(b).find('> td.tableAvatar > a > img').attr('src').startsWith('https://') ? $(b).find('> td.tableAvatar > a > img').attr('src') : 'https://www.anime.planet.com' + $(b).find('> td.tableAvatar > a > img').attr('src')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            })
            .catch(reject)
    })
}

function ongoing(){
	return new Promise((resolve, reject) => {
		axios.get('https://neonime.co/episode/').then(res => {
			const $ = cheerio.load(res.data)
			const result = []
			$('tbody').find('tr').each(function(a, b) {
				const link = $(b).find('td > div.imagen-td > a').attr('href')
				const img = $(b).find('td > div.imagen-td > a > img').attr('data-src')
				const info = $(b).find('td.bb > a > span').text().trim()
				const judul = $(b).find('td.bb > a').text()
				const tgl_rilis = $(b).find('td.dd').text()
				result.push({ judul, link, img, info, tgl_rilis })
			})
			resolve(result)
		}).catch(reject)
	})
}

module.exports.otakudesu = otakudesu
module.exports.ongoing = ongoing
module.exports.character = character
module.exports.manga = manga