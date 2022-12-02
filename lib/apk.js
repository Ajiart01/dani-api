const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const FormData = require("form-data");
const got = require("got")
const yt = require("yt-search");

function rexdl(query){
	return new Promise((resolve) => {
		axios.get('https://rexdl.com/?s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const jenis = [];
				const date = [];
				const desc = [];
				const link = [];
				const thumb = [];
				const result = [];
				$('div > div.post-content').each(function(a, b) {
					judul.push($(b).find('h2.post-title > a').attr('title'))
					jenis.push($(b).find('p.post-category').text())
					date.push($(b).find('p.post-date').text())
					desc.push($(b).find('div.entry.excerpt').text())
					link.push($(b).find('h2.post-title > a').attr('href'))
				})
				$('div > div.post-thumbnail > a > img').each(function(a, b) {
					thumb.push($(b).attr('data-src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						judul: judul[i],
						kategori: jenis[i],
						upload_date: date[i],
						deskripsi: desc[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				resolve(result)
			})
	})
}

function rexdldown(link){
	return new Promise((resolve) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const link = [];
				const url = [];
				const link_name = [];
				const judul = $('#page > div > div > div > section > div:nth-child(2) > article > div > h1.post-title').text();
				const plink = $('#page > div > div > div > section > div:nth-child(2) > center:nth-child(3) > h2 > span > a').attr('href')
				axios.get(plink)
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						$$('#dlbox > ul.dl > a > li > span').each(function(a, b) {
							deta = $$(b).text();
							link_name.push(deta)
						})
						$$('#dlbox > ul.dl > a').each(function(a, b) {
							url.push($$(b).attr('href'))
						})
						for (let i = 0; i < link_name.length; i++) {
							link.push({
								link_name: link_name[i],
								url: url[i]
							})
						}
						resolve({
							judul: judul,
							update_date: $$('#dlbox > ul.dl-list > li.dl-update > span:nth-child(2)').text(),
							version: $$('#dlbox > ul.dl-list > li.dl-version > span:nth-child(2)').text(),
							size: $$('#dlbox > ul.dl-list > li.dl-size > span:nth-child(2)').text(),
							download: link
						})
					})
			})
	})
}

function happymoddl(link) {
	return new Promise((resolve, reject) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const link = [];
				const jlink = [];
				const result = [];
				const title = $('body > div > div.container-left > section:nth-child(1) > div > h1').text()
				const info = $('body > div > div.container-left > section:nth-child(1) > div > ul').text()
				$('body > div.container-row.clearfix.container-wrap.pdt-font-container > div.container-left > section:nth-child(1) > div > div:nth-child(3) > div > p > a').each(function(a, b) {
					deta = $(b).text();
					jlink.push(deta)
					if ($(b).attr('href').startsWith('/')) {
						link.push('https://happymod.com' + $(b).attr('href'))
					} else {
						link.push($(b).attr('href'))
					}
				})
				for (let i = 0; i < link.length; i++) {
					result.push({
						title: jlink[i],
						dl_link: link[i]
					})
				}
				console.log(link)
				resolve({
					title: title,
					info: info.replace(/\t|- /g, ''),
					download: link
				})
			})
			.catch(reject)
	})
}

function goredl(link){
	return new Promise(async (resolve, reject) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $$ = cheerio.load(data)
				const format = {
					judul: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
					views: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
					comment: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
					link: $$('video > source').attr('src')
				}
				const result = {
					creator: 'Fajar Ihsana',
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}

function cariresep(query){
	return new Promise(async (resolve, reject) => {
		axios.get('https://resepkoki.id/?s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const link = [];
				const judul = [];
				const upload_date = [];
				const format = [];
				const thumb = [];
				$('body > div.all-wrapper.with-animations > div:nth-child(5) > div > div.archive-posts.masonry-grid-w.per-row-2 > div.masonry-grid > div > article > div > div.archive-item-media > a').each(function(a, b) {
					link.push($(b).attr('href'))
				})
				$('body > div.all-wrapper.with-animations > div:nth-child(5) > div > div.archive-posts.masonry-grid-w.per-row-2 > div.masonry-grid > div > article > div > div.archive-item-content > header > h3 > a').each(function(c, d) {
					jud = $(d).text();
					judul.push(jud)
				})
				for (let i = 0; i < link.length; i++) {
					format.push({
						judul: judul[i],
						link: link[i]
					})
				}
				const result = {
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}

function bacaresep(query){
	return new Promise(async (resolve, reject) => {
		axios.get(query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const abahan = [];
				const atakaran = [];
				const atahap = [];
				$('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-recipe-ingredients-nutritions > div > table > tbody > tr > td:nth-child(2) > span.ingredient-name').each(function(a, b) {
					bh = $(b).text();
					abahan.push(bh)
				})
				$('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-recipe-ingredients-nutritions > div > table > tbody > tr > td:nth-child(2) > span.ingredient-amount').each(function(c, d) {
					uk = $(d).text();
					atakaran.push(uk)
				})
				$('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-content > div.single-steps > table > tbody > tr > td.single-step-description > div > p').each(function(e, f) {
					th = $(f).text();
					atahap.push(th)
				})
				const judul = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-title.title-hide-in-desktop > h1').text();
				const waktu = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-cooking-time > span').text();
				const hasil = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-serves > span').text().split(': ')[1]
				const level = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-difficulty > span').text().split(': ')[1]
				const thumb = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-main-media > img').attr('src')
				tbahan = 'bahan\n'
				for (let i = 0; i < abahan.length; i++) {
					tbahan += abahan[i] + ' ' + atakaran[i] + '\n'
				}
				ttahap = 'tahap\n'
				for (let i = 0; i < atahap.length; i++) {
					ttahap += atahap[i] + '\n\n'
				}
				const tahap = ttahap
				const bahan = tbahan
				const result = {
						judul: judul,
						waktu_masak: waktu,
						hasil: hasil,
						tingkat_kesulitan: level,
						thumb: thumb,
						bahan: bahan.split('bahan\n')[1],
						langkah_langkah: tahap.split('tahap\n')[1]
				}
				resolve(result)
			})
			.catch(reject)
	})
}
	
function gempa() {
	        return new Promise(async(resolve,reject) => {
                axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const drasa = [];
                        $('table > tbody > tr:nth-child(1) > td:nth-child(6) > span').get().map((rest) => {
         					dir = $(rest).text();
         					drasa.push(dir.replace('\t', ' '))
        				})
        				teks = ''
        				for(let i=0; i<drasa.length; i++){
        					teks += drasa[i] + '\n'
        				}
        				const rasa = teks
                        const format = {
                        	imagemap : $('div.modal-body > div > div:nth-child(1) > img').attr('src'),
                        	magnitude : $('table > tbody > tr:nth-child(1) > td:nth-child(4)').text(),
                        	kedalaman: $('table > tbody > tr:nth-child(1) > td:nth-child(5)').text(),
                        	wilayah: $('table > tbody > tr:nth-child(1) > td:nth-child(6) > a').text(),
                        	waktu: $('table > tbody > tr:nth-child(1) > td:nth-child(2)').text(),
                        	lintang_bujur: $('table > tbody > tr:nth-child(1) > td:nth-child(3)').text(),
                        	dirasakan: rasa
                        }
                        const result = {
                        	data: format
                        }
                  resolve(result)
			})
                .catch(reject)
            })
}

function searchgore(query) {
	return new Promise(async (resolve, reject) => {
		axios.get('https://seegore.com/?s=' + query).then(dataa => {
			const $$$ = cheerio.load(dataa)
			pagina = $$$('#main > div.container.main-container > div > div.bb-col.col-content > div > div > div > div > nav > ul > li:nth-child(4) > a').text();
			rand = Math.floor(Math.random() * pagina) + 1
			if (rand === 1) {
				slink = 'https://seegore.com/?s=' + query
			} else {
				slink = `https://seegore.com/page/${rand}/?s=${query}`
			}
			axios.get(slink)
				.then(({
					data
				}) => {
					const $ = cheerio.load(data)
					const link = [];
					const judul = [];
					const uploader = [];
					const format = [];
					const thumb = [];
					$('#post-items > li > article > div.content > header > h2 > a').each(function(a, b) {
						link.push($(b).attr('href'))
					})
					$('#post-items > li > article > div.content > header > h2 > a').each(function(c, d) {
						jud = $(d).text();
						judul.push(jud)
					})
					$('#post-items > li > article > div.content > header > div > div.bb-cat-links > a').each(function(e, f) {
						upl = $(f).text();
						uploader.push(upl)
					})
					$('#post-items > li > article > div.post-thumbnail > a > div > img').each(function(g, h) {
						thumb.push($(h).attr('src'))
					})
					for (let i = 0; i < link.length; i++) {
						format.push({
							judul: judul[i],
							uploader: uploader[i],
							thumb: thumb[i],
							link: link[i]
						})
					}
					const result = {
						data: format
					}
					resolve(result)
				})
				.catch(reject)
		})
	})
}

function randomgore(){
	return new Promise(async (resolve, reject) => {
		rand = Math.floor(Math.random() * 218) + 1
		randvid = Math.floor(Math.random() * 16) + 1
		if (rand === 1) {
			slink = 'https://seegore.com/gore/'
		} else {
			slink = `https://seegore.com/gore/page/${rand}/`
		}
		axios.get(slink)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const link = [];
				const result = [];
				const username = [];
				const linkp = $(`#post-items > li:nth-child(${randvid}) > article > div.post-thumbnail > a`).attr('href')
				const thumbb = $(`#post-items > li:nth-child(${randvid}) > article > div.post-thumbnail > a > div > img`).attr('src')
				axios.get(linkp)
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						const format = {
							judul: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
							views: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
							comment: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text() == '' ? 'Tidak ada komentar' : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
							thumb: thumbb,
							link: $$('video > source').attr('src')
						}
						const result = {
							data: format
						}
						resolve(result)
					})
					.catch(reject)
			})
	})
}

function apkmirror(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const nama = [];
				const developer = [];
				const lupdate = [];
				const size = [];
				const down = [];
				const version = [];
				const link = [];
				const format = [];
				$('#content > div > div > div.appRow > div > div > div > h5 > a').each(function(a, b) {
					nem = $(b).text();
					nama.push(nem)
				})
				$('#content > div > div > div.appRow > div > div > div > a').each(function(c, d) {
					dev = $(d).text();
					developer.push(dev)
				})
				$('#content > div > div > div.appRow > div > div > div > div.downloadIconPositioning > a').each(function(e, f) {
					link.push('https://www.apkmirror.com' + $(f).attr('href'))
				})
				$('#content > div > div > div.infoSlide > p > span.infoslide-value').each(function(g, h) {
					data = $(h).text();
					if (data.match('MB')) {
						size.push(data)
					} else if (data.match('UTC')) {
						lupdate.push(data)
					} else if (!isNaN(data) || data.match(',')) {
						down.push(data)
					} else {
						version.push(data)
					}
				})
				for (let i = 0; i < link.length; i++) {
					format.push({
						judul: nama[i],
						dev: developer[i],
						size: size[i],
						version: version[i],
						uploaded_on: lupdate[i],
						download_count: down[i],
						link: link[i]
					})
				}
				const result = {
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}

function android1(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://an1.com/tags/MOD/?story=' + query + '&do=search&subaction=search')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const nama = [];
				const link = [];
				const rating = [];
				const thumb = [];
				const developer = [];
				const format = [];
				$('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a > span').each(function(a, b) {
					nem = $(b).text();
					nama.push(nem)
				})
				$('div > ul > li.current-rating').each(function(c, d) {
					rat = $(d).text();
					rating.push(rat)
				})
				$('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.developer.xsmf.muted').each(function(e, f) {
					dev = $(f).text();
					developer.push(dev)
				})
				$('body > div.page > div > div > div.app_list > div > div > div.img > img').each(function(g, h) {
					thumb.push($(h).attr('src'))
				})
				$('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a').each(function(i, j) {
					link.push($(j).attr('href'))
				})
				for (let i = 0; i < link.length; i++) {
					format.push({
						judul: nama[i],
						dev: developer[i],
						rating: rating[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				const result = {
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}

async function GSMArena(querry) {
	const link = await axios.get(`https://www.gsmarena.com/res.php3?sSearch=${querry}`)
	const ch = cheerio.load(link.data)
	let Url = ch('#review-body > div > ul').find('li:nth-child(1) > a').attr('href')
	const Link = await axios.get(`https://www.gsmarena.com/${Url}`)
	let $ = cheerio.load(Link.data)
	let barang = $('#body > div > div.review-header > div').find(' div.article-info-line.page-specs.light.border-bottom > h1').text().trim()
	let rilis = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(1) > span').text().trim()
	let thumb = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > div > a > img').attr('src')
	let ukuran = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(3) > span').text().trim()
	let tipe = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(5) > span').text().trim()
	let storage = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(7) > span').text().trim()
	let display = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-display > div').text().trim()
	let inchi = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-display > strong > span').text().trim()
	let camPix = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > strong > span:nth-child(1)').text().trim()
	let Mp = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > strong > span:nth-child(2)').text().trim()
	let VideoVix = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > div').text().trim()
	let Ram = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > strong > span:nth-child(2)').text().trim()
	let chipset = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > div').text().trim()
	let batre = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > strong > span:nth-child(1)').text().trim()
	let Mah = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > strong > span:nth-child(2)').text().trim()
	let merekBatre = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > div').text().trim()
	let AngkaRam = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > strong > span:nth-child(1)').text().trim()
	let detail = []
	$('#specs-list').each(function (anu, RA) {
		let isi = $(RA).text().trim()
		detail.push(isi)
	})
	const result = {
			judul: barang,
			rilis: rilis,
			thumb: thumb,
			ukuran: ukuran,
			type: tipe,
			storage: storage,
			display: display,
			inchi: inchi,
			pixel: camPix + Mp,
			videoPixel: VideoVix,
			ram: AngkaRam + Ram,
			chipset: chipset,
			batrai: batre + Mah,
			merek_batre: merekBatre,
			detail: detail[0]
	}
	return result
}

async function cnn() {
	try {
	const link = await axios.get('https://www.cnnindonesia.com/')
	const $ = cheerio.load(link.data)
	let hasil = []
	$('#content > div > div.l_content > div.box.feed.berita_terbaru_lst > div.list.media_rows.middle').each(function (a, b) {
		$(b).find('article').each(function (c, d) {
			let judul = $(d).find('a > span.box_text > h2').text().trim() || '-' 
			let tema = $(d).find('a > span.box_text > span.kanal').text().trim() || '-'
			let publik = $(d).find('a > span.box_text > span.date').text().trim() || '-'
			let thumb = $(d).find('a > span.ratiobox.ratio_16_9.box_img > span > img').attr('src') || '-'
			let url = $(d).find('a').attr('href') || '-'
			const data = {
					judul: judul,
					tema: tema,
					rilis: publik,
					thumb: thumb,
					url: url
			}
			hasil.push(data)
		})
	})
	return hasil
} catch (err) {
	var notFond = {
		status: link.status,
	}
	return notFond
}
}

async function corona(negara) {
	try{
	const link = await axios.get(`https://www.worldometers.info/coronavirus/country/${negara}/`)
	const $ = cheerio.load(link.data)
	let kasus = $('#maincounter-wrap').find(' div > span').eq(0).text().trim()
	let mati = $('#maincounter-wrap').find(' div > span').eq(1).text().trim()
	let sembuh = $('#maincounter-wrap').find(' div > span').eq(2).text().trim()
	const data = {
			kasus: kasus,
			meninggal: mati,
			sembuh: sembuh
	}
	return data
} catch (err) {
	var notFond = {
		status: link.status,
	}
	return notFond
}
}

async function RandomCerpen() {
	try{
	const link = await axios.get(`http://cerpenmu.com/`)
	const c = cheerio.load(link.data)
	let kumpulan = []
	c('#sidebar > div').each(function (real, ra) {
		c(ra).find('ul > li').each(function (i, rayy) {
			let random = c(rayy).find('a').attr('href')
			kumpulan.push(random)
		})
	})
	var acak = kumpulan[Math.floor(Math.random() * (kumpulan.length))]
	let Otw = await axios.get(`${acak}`)
	const C = cheerio.load(Otw.data)
	let otw = []
	C('#content > article > article').each(function (a, b) {
		let random = C(b).find('h2 > a').attr('href')
		otw.push(random)
	})
	var Acak = otw[Math.floor(Math.random() * (otw.length))]
	let Link = await axios.get(`${Acak}`)
	let $ = cheerio.load(Link.data)
	let judul = $('#content').find('article > h1').text().trim()
	let karangan = $('#content').find('article > a:nth-child(2)').text().trim()
	let Isi = []
	$('#content > article > p').each(function (wm, Ra) {
		let isi = $(Ra).text().trim()
		Isi.push(isi)

	})
	let cerita = []
	for (let i of Isi) {
		cerita += i
	}
	const data = {
			Judul: judul,
			Penulis: karangan,
			sumber: Acak,
			cerita: cerita
	}
	return data
} catch (err) {
	const res404 = {
		status: 500,
	}
	return res404
}
}

async function emoji(emoticon) {
	const emojii = encodeURI(`${emoticon}`)
	const link = await axios.get(`https://emojipedia.org/${emojii}/`)
	const $ = cheerio.load(link.data)
	var apple = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(1) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var google = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(2) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var samsung = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(3) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var microsoft = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(4) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var whatsapp = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(5) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var twitter = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(6) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var facebook = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(7) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var jooxpixel = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(8) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var openmoji = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(9) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var emojidex = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(10) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var messager = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(11) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var LG = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(12) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var HTC = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(13) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var mozilla = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(14) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var softbank = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(15) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var docomo = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(16) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var KDDI = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(17) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	const result = {
		apple: apple.replace('120', '240'),
		google: google.replace('120', '240'),
		samsung: samsung.replace('120', '240'),
		microsoft: microsoft.replace('120', '240'),
		whatsapp: whatsapp.replace('120', '240'),
		twitter: twitter.replace('120', '240'),
		facebook: facebook.replace('120', '240'),
		jooxPixel: jooxpixel.replace('120', '240'),
		openemoji: openmoji.replace('120', '240'),
		emojidex: emojidex.replace('120', '240'),
		messanger: messager.replace('120', '240'),
		LG: LG.replace('120', '240'),
		HTC: HTC.replace('120', '240'),
		mozilla: mozilla.replace('120', '240'),
		softbank: softbank.replace('120', '240'),
		docomo: docomo.replace('120', '240'),
		KDDI: KDDI.replace('120', '240')
	}
	return result
}

function jagokata(input) {
	return new Promise((resolve, reject) => {
		axios.get('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
			.then(res => {
				const $ = cheerio.load(res.data)
				data = []
				$('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
					x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
					y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
					z = $(element).find('q[class="fbquote"]').text().trim()
					data.push({ author: x, bio: y, quote: z })
				})
				data.splice(2, 1)
				if (data.length == 0) return resolve({ status: false })
				resolve({ status: true, result: data })
			}).catch(reject)
	})
}

function chara(query) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.anime-planet.com/characters/all?name=${query}&sort=likes&order=desc`)
    .then((data) => {
      const $ = cheerio.load(data.data)
      const linkp = $('#siteContainer > table > tbody > tr:nth-child(1) > td.tableCharInfo > a').attr('href')
      axios.get('https://www.anime-planet.com' + linkp)
      .then((data) => {
        //console.log(data.data)
        const $$ = cheerio.load(data.data)
      resolve({
        nama: $$('#siteContainer > h1').text(),
        gender: $$('#siteContainer > section.pure-g.entryBar > div:nth-child(1)').text().split('\nGender: ')[1],
        warna_rambut: $$('#siteContainer > section.pure-g.entryBar > div:nth-child(2)').text().split('\nHair Color: ')[1],
        warna_mata: $$('#siteContainer > section:nth-child(11) > div > div > div > div > div:nth-child(1) > div').text().split('\n')[1],
        gol_darah: $$('#siteContainer > section:nth-child(11) > div > div > div > div > div:nth-child(2) > div').text().split('\n')[1],
        birthday: $$('#siteContainer > section:nth-child(11) > div > div > div > div > div:nth-child(3) > div').text().split('\n')[1],
        description: $$('#siteContainer > section:nth-child(11) > div > div > div > div:nth-child(1) > p').text()
      })
    })
    })
    .catch(reject)
  })
}

function anime(query){
  return new Promise((resolve, reject) => {
    axios.get(`https://www.anime-planet.com/anime/all?name=${query}`)
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
      for(let i=0; i<judul.length; i++){
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

function jobstreet(query){
  return new Promise((resolve, reject) => {
    axios.get(`https://www.jobstreet.co.id/id/job-search/${query}-jobs/`)
    .then((data) => {
      //console.log(data.data)
      const $ = cheerio.load(data.data)
      const job = [];
      const perusahaan = [];
      const daerah = [];
      const format = [];
      const link = [];
      const upload = [];
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > h1 > a > div').each(function(a, b) {
        deta = $(b).text();
        job.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > span').each(function(a, b) {
        deta = $(b).text();
        perusahaan.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > span > span').each(function(a, b) {
        deta = $(b).text();
        daerah.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > h1 > a').each(function(a, b) {
        link.push($(b).attr('href'))
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div.sx2jih0.zcydq852.zcydq842.zcydq872.zcydq862.zcydq82a.zcydq832.zcydq8d2.zcydq8cq > div.sx2jih0.zcydq832.zcydq8cq.zcydq8c6.zcydq882 > time > span').each(function(a, b) {
        deta = $(b).text();
        upload.push(deta)
      })
      for(let i=0; i<job.length; i++){
        format.push({
          job: job[i],
          perusahaan: perusahaan[i],
          daerah: daerah[i],
          upload: upload[i],
          link_Detail: 'https://www.jobstreet.co.id' + link[i]
        })
      }
      resolve(format)
    })
    .catch(reject)
  })
}

function distance(kawal, ktujuan){
  return new Promise((resolve, reject) => {
    axios.get(`http://jarakantarkota.com/${kawal}/${ktujuan}/`)
    .then((data) => {
      const $ = cheerio.load(data.data)
      const jarak = $('body > div.content > div > div.b-search-route > div > div > div.col-xs-12.col-sm-12.col-md-12.col-lg-8 > div').text().replace('                       ', '')
      resolve({
        kota_asal: jarak.split('  -')[0],
        kota_tujuan: jarak.split('- ')[1].split(' (')[0],
        jarak: jarak.split(' (')[1].split(')')[0]
      })
    })
    .catch(reject)
  })
}

function anoboys(query){
        return new Promise((resolve,reject) => {
                axios.get('https://anoboy.media/?s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const format = [];
                        const link = [];
						const judul = [];
						const thumb = [];
						const uptime = [];
                        $('body > div.wrap > div.container > div.column-content > a > div > div.amvj > h3').each(function(a,b) {
                                jud = $(b).text();
                                judul.push(jud)
                        })
                        $('body > div.wrap > div.container > div.column-content > a > div > div.jamup').each(function(c,d) {
                        	upt = $(d).text();
                        	uptime.push(upt)
                        })
                        $('body > div.wrap > div.container > div.column-content > a > div > amp-img').each(function(e,f) {
                        	thumb.push($(f).attr('src'))
                        })
                        $('body > div.wrap > div.container > div.column-content > a').each(function(g,h) {
                        	link.push($(h).attr('href'))
                        })
        				for(let i=0; i<link.length; i++){
        					format.push({
        						judul : judul[i],
        						thumb : thumb[i],
        						link : link[i]
        					})
        				}
        				const result = {
        					status: data.status,
        					data: format
        				}
                  resolve(result)
                })
                .catch(reject)
        })
}
function anoboydl (query){
        return new Promise((resolve,reject) => {
                axios.get(query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                  resolve({
                  	judul: $('body > div.wrap > div.container > div.pagetitle > h1').text(),
                  	uptime: $('body > div.wrap > div.container > div.pagetitle > div > div > span > time').text(),
                  	mforu: {
                  		SD: $('#colomb > p > span:nth-child(1) > a:nth-child(3)').attr('href'),
                  		HD: $('#colomb > p > span:nth-child(1) > a:nth-child(5)').attr('href')
                  	},
                  	zippy: {
                  		SD: $('#colomb > p > span:nth-child(3) > a:nth-child(3)').attr('href'),
                  		HD: $('#colomb > p > span:nth-child(3) > a:nth-child(5)').attr('href')
                  	},
                  	mirror: {
                  		SD: $('#colomb > p > span:nth-child(5) > a:nth-child(3)').attr('href'),
                  		HD: $('#colomb > p > span:nth-child(5) > a:nth-child(5)').attr('href')
                  	}
                  })
                })
                .catch(reject)
        })
}

function igstalk(username){
    return new Promise((resolve,reject) => {
		axios.get('https://www.instagram.com/'+ username +'/?__a=1',{
			method: 'GET',
			headers: {
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
				"cookie": "mid=XBXl1AALAAEbFoAEfNjZlMMG9dwX; ig_did=91E66A48-5AA2-445D-BFE6-84DC4456DE8F; fbm_124024574287414=base_domain=.instagram.com; ig_nrcb=1; shbid=\"12737\0544008624962\0541656157971:01f72a5102dc07af6845adf923ca70eb86e81ab95fa9dbfdaf157c9eef0e82fd1f10fe23\"; shbts=\"1624621971\0544008624962\0541656157971:01f74841fba8e77a0066b47ea891dec8fba6fdf9216c0816f9fb3532292f769828800ae2\"; fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ; fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ; csrftoken=PpiPMEl0R2pAwThsw4NXynO6cVIXHZDo; ds_user_id=38316792800; sessionid=38316792800:rQj5Tr3g5zkg7b:4; rur=\"RVA\05438316792800\0541656158332:01f759cf624bef147397144805bb4c26f6c8b36a232e0f5738c570ee492f6b629f84f6e5\""
			}
		})
		.then( async data => {
			const user = data.graphql.user
			let result = {
                id: user.id,
                biography: user.biography,
                followers: user.edge_followed_by.count,
                following: user.edge_follow.count,
                fullName: user.full_name,
                highlightCount: user.highlight_reel_count,
                isBusinessAccount: user.is_business_account,
                isRecentUser: user.is_joined_recently,
                accountCategory: user.business_category_name,
                linkedFacebookPage: user.connected_fb_page,
                isPrivate: user.is_private,
                isVerified: user.is_verified,
                profilePicHD: user.profile_pic_url_hd,
                username: user.username,
                postsCount: user.edge_owner_to_timeline_media.count
			}
		resolve(result)
		})
	.catch(reject)
	})
}

function dewabatch(query){
        return new Promise((resolve,reject) => {
                axios.get('https://dewabatch.com/?s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
			const linkk= [];
			const judull = [];
			const thumb = [];
			const rating = [];
                        $('div.thumb > a').each(function(a,b) {
                                linkk.push($(b).attr('href'))
				judull.push($(b).attr('title'))
				thumb.push($(b).find('img').attr('src').split('?resize')[0])
			})
			$('#content > div.postbody > div > div > ul > li > div.dtl > div.footer-content-post.fotdesktoppost > div.contentleft > span:nth-child(1) > rating > ratingval > ratingvalue').each(function(c, d){
				rate = $(d).text();
				rating.push(rate.split(' ')[0])
			})
for(let i=0; i<linkk.length; i++){
result.push({
judul : judull[i],
rating : rating[i],
thumb : thumb[i],
link : linkk[i]
})
}
                  resolve(result)
                })
                .catch(reject)
        })
}


function kiryu(query){
        return new Promise((resolve,reject) => {
                axios.get('https://kiryuu.id/?s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
			const linkk= [];
			const judull = [];
			const thumb = [];
			const rating = [];
                        $('div.bsx > a').each(function(a,b) {
                                linkk.push($(b).attr('href'))
				judull.push($(b).attr('title'))
				thumb.push($(b).find('img').attr('src').split('?resize')[0])
			})
			$('div.rating > div.numscore').each(function(c,d) {
			rate = $(d).text();
			rating.push(rate)
			})
for(let i=0; i<linkk.length; i++){
result.push({
judul : judull[i],
rating : rating[i],
thumb : thumb[i],
link : linkk[i]
})
}
                  resolve(result)
                })
                .catch(reject)
        })
}

function devianart(query){
	return new Promise((resolve,reject) => {
		axios.get('https://www.deviantart.com/search?q=' + query)
		.then(({ data }) =>{
		const $$ = cheerio.load(data)
		 no = ''
		$$('#root > div.hs1JI > div > div._3WsM9 > div > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div:nth-child(1) > div > section > a').each(function(c,d){
			no = $$(d).attr('href')
		})
		axios.get(no)
		.then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		$('#root > main > div > div._2QovI > div._2rKEX._17aAh._1bdC8 > div > div._2HK_1 > div._1lkTS > div > img').each(function(a,b){
			result.push($(b).attr('src'))
		})
		resolve(result)
		})
	})
		.catch(reject)
	})
}

function tribunnews() {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.tribunnews.com/news`).then( tod => {
    const $ = cheerio.load(tod.data)
    
    hasil = []
    
    $("li.p1520.art-list.pos_rel").each(function(c, d) {
      title = $(d).find("div.mr140 > h3 > a.f20.ln24.fbo.txt-oev-2").text().trim()
      thumb = $(d).find("div.fr.mt5.pos_rel > a > img.shou2.bgwhite").attr('src')
      desc = $(d).find("div.grey2.pt5.f13.ln18.txt-oev-3").text().trim()
      date = $(d).find("div.grey.pt5 > time.foot.timeago").text().trim()
      link = $(d).find("div.fr.mt5.pos_rel > a").attr('href')
      const Data = {
        title: title,
        thumb: thumb,
        desc: desc,
        date: date,
        link: link
      }
      hasil.push(Data)
    })
    resolve(hasil)
  }).catch(reject)
  })
}

function kompasnews() {
  return new Promise((resolve, reject) => {
    axios.get(`https://news.kompas.com/`).then( tod => {
    const $ = cheerio.load(tod.data)
    
    hasil = []
    
    $("div.col-bs9-3").each(function(c, d) {
      title = $(d).find("h3.article__title > a.article__link").text()
      desc = $(d).find("div.article__lead").text().trim()
      date = $(d).find("div.article__date").text().trim()
      link = $(d).find("h3.article__title > a.article__link").attr('href')
      const Data = {
        title: title,
        desc: desc,
        date: date,
        link: link
      }
      hasil.push(Data)
    })
    resolve(hasil)
  }).catch(reject)
  })
  }

function jadwalbola(){
    return new Promise((resolve, reject) => {
        axios.get('https://m.bola.net/jadwal_televisi/')
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                $('body > div.main > div > div:nth-child(3) > div > ul > li').each(function(a, b) {
                    result = {                    
                    jadwal: $(b).find('> div > div > p > a').text().split('Jadwal TV: ')[1],
                    tanggal: $(b).find('> div > div > span').text().split('jadwal televisi ')[1],
                    url: $(b).find('> div > div > p > a').attr('href'),
                    thumb: 'https://cdns.klimg.com/bola.net/library/upload/21/2019/01/100s/bola_e9af938.jpg'
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function jadwaltv(){
    return new Promise((resolve, reject) => {
        axios.get('http://www.dokitv.com/jadwal-acara-tv')
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                $('#tabeljadwaltv > tbody > tr ').each(function(a, b) {
                    result = {               
                    acara: $(b).find('> td:nth-child(2)').text(),
                    channel: $(b).find('> td > a').text(),
                    jam: $(b).find('> td.jfx').text(),
                    source: $(b).find('> td > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function merdekanews () {
	return new Promise((resolve) => {
		axios.get('https://www.merdeka.com/peristiwa/')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const upload = [];
				const link = [];
				const thumb = [];
				const result = [];
				$('#mdk-content-center > div.inner-content > ul > li > div').each(function(a, b) {
					deta = $(b).find('h3 > a').text();
					judul.push(deta)
					link.push('https://www.merdeka.com' + $(b).find('h3 > a').attr('href'))
					upload.push($(b).find('div > span').text())
					thumb.push($(b).find('div > a > img').attr('src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						judul: judul[i],
						upload_date: upload[i],
						link: link[i],
						thumb: thumb[i]
					})
				}
				resolve(result)
			})
	})
}

function metronews() {
	return new Promise((resolve) => {
		axios.get('https://www.metrotvnews.com/news')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const desc = [];
				const link = [];
				const thumb = [];
				const tag = [];
				const result = [];
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > h3 > a').each(function(a, b) {
					judul.push($(b).attr('title'))
				})
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > p').each(function(a, b) {
					deta = $(b).text();
					desc.push(deta)
				})
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > h3 > a').each(function(a, b) {
					link.push('https://www.metrotvnews.com' + $(b).attr('href'))
				})
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > img').each(function(a, b) {
					thumb.push($(b).attr('src').replace('w=300', 'w=720'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						judul: judul[i],
						link: link[i],
						thumb: thumb[i],
						deskripsi: desc[i]
					})
				}
				resolve(result)
			})
	})
}

function asupanfilm(query){
	return new Promise((resolve) => {
		axios.get(`https://asupanfilm.link/?search=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const desc = [];
				const thumb = [];
				const link = [];
				const result = [];
				$('body > div > div > div.card-body.p-2 > ul > li > div > div > h6 > a').each(function(a, b) {
					deta = $(b).text();
					judul.push(deta)
				})
				$('body > div > div > div.card-body.p-2 > ul > li > div > div').each(function(a, b) {
					deta = $(b).text()
					desc.push(deta.split('   ')[2])
				})
				$('body > div > div > div.card-body.p-2 > ul > li > div > img').each(function(a, b) {
					thumb.push($(b).attr('src').split('UX67_CR0,0,67,98_AL_')[0])
				})
				$('body > div > div > div.card-body.p-2 > ul > li > div > div > h6 > a').each(function(a, b) {
					link.push('https://asupanfilm.link/' + $(b).attr('href'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						judul: judul[i],
						deskripsi: desc[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				resolve(result)
			})
	})
}

function asupanfilminfo (link) {
	return new Promise((resolve) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const info = {
					judul: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(1)').text(),
					thumb: $('body > div > div.card.mb-3 > div.card-footer > a').attr('href'),
					alurcerita_imdb: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(2)').text().split(' Alur Cerita IMDb: ')[1],
					alurcerita_tmdb: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(3)').text().split(' Alur Cerita TMDb: ')[1],
					direksi: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(4)').text().split(' Direksi: ')[1],
					pemeran: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(5)').text().split(' Pemeran: ')[1],
					kategori: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(6)').text().split(' Kategori: ')[1],
					negara: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(7)').text().split(' Negara: ')[1],
					tahun_rilis: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(8)').text().split(' Tahun Rilis: ')[1],
					durasi: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(9)').text().split(' Durasi: ')[1],
					skor: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(10)').text().split(' Skor: ')[1],
					kualitas: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(11)').text().split(' Kualitas: ')[1],
					jenis: $('body > div > div:nth-child(5) > div.card-body.p-2 > ul > li:nth-child(12)').text().split(' Jenis: ')[1]
				}
				resolve(info)
			})
	})
}

const pickrandom = async(ext) => {
  return ext[Math.floor(Math.random() * ext.length)]
}

function randomtt (query){
	return new Promise( async(resolve, reject) => {
		await axios.get('https://brainans.com/search?query='+query).then(response => {
			const $ = cheerio.load(response.data)
			const User = $('#search-container > div:nth-child(1) > div.content__text > a').attr('href')
			axios.get('https://brainans.com/'+User).then(respon => {
				const soup = cheerio.load(respon.data)
				const Vidlink = []
				const main = soup('#videos_container > div > div.content__list.grid.infinite_scroll.cards > div > div > a')
				main.each( function() {
					const Vlink = 'https://brainans.com/'+soup(this).attr('href')
					Vidlink.push(Vlink)
				})
				pickrandom(Vidlink).then(res => {
				axios.get(res).then(resp => {
					const ch = cheerio.load(resp.data)
					const result = {
						username: ch('#card-page > div > div.row > div > div > div > div > div.main__user-desc.align-self-center.ml-2 > a').text(),
						caption: ch('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.main__list').text(),
						likes: ch('#card-page > div > div.row > div > div > div.main__info.mb-4 > div > div:nth-child(1) > span').text(),
						comment: ch('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.content__btns.d-flex > div:nth-child(2) > span').text(),
						share: ch('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.content__btns.d-flex > div:nth-child(3) > span').text(),
						video: ch('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.main__image-container > div > video').attr('src')
					}
					resolve(result)
				})		
				}).catch(resolve)
			}).catch(resolve)
		}).catch(resolve)
	})
}

async function tiktokHastag(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://tiktokder.com/hashtag/'+query).then(resp => {
			const $ = cheerio.load(resp.data)
			const Vidlink = []
			const main = $('body > div.videos-grid > div > a')
			main.each(function() {
				const URL = 'https://tiktokder.com'+$(this).attr('href')
				Vidlink.push(URL)
			})
			pickrandom(Vidlink).then(res => {
				axios.get(res).then(respon => {
					const ch = cheerio.load(respon.data)
					resolve({
						usernameNick: ch('#tiktok-video-result > div > div.result > div:nth-child(2) > div.profile > a.user-nickname').text(),
						username: ch('#tiktok-video-result > div > div.result > div:nth-child(2) > div.profile > a.username').text(),
						description: ch('#tiktok-video-result > div > div.result > div:nth-child(2) > p').text(),
						original: ch('#tiktok-video-result > div > div.download-buttons > a').attr('href')
					})
				})
			})
		}).catch(reject)
	})
}

function trendtwit(country){
	return new Promise((resolve, reject) => {
		axios.get(`https://getdaytrends.com/${country}/`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const hastag = [];
				const tweet = [];
				const result = [];
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr> td.main > a').each(function(a, b) {
					deta = $(b).text()
					hastag.push(deta)
				})
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr > td.main > div > span').each(function(a, b) {
					deta = $(b).text()
					tweet.push(deta)
				})
				num = 1
				for (let i = 0; i < hastag.length; i++) {
					result.push({
						rank: num,
						hastag: hastag[i],
						tweet: tweet[i]
					})
					num += 1
				}
				resolve({
					country: country,
					result: result
				})
			})
			.catch(reject)
	})
}

function zerochan(query){
	return new Promise((resolve, reject) => {
		axios.get('https://www.zerochan.net/search?q=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const result = [];
				const id = [];
				$('#thumbs2 > li > a > img').each(function(a, b) {
					if (!$(b).attr('alt').startsWith('https://static.zerochan.net/')) {
						judul.push($(b).attr('alt'))
					}
				})
				$('#thumbs2 > li > a').each(function(a, b) {
					id.push($(b).attr('href'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push('https://s1.zerochan.net/' + judul[i].replace(/\ /g, '.') + '.600.' + id[i].split('/')[1] + '.jpg')
				}
				resolve({
					result: result
				})
			})
			.catch(reject)
	})
}

async function SearchFilm(querry) {
	const link =  await axios.get(`https://123movies.mom/search/?keyword=${querry}`)
	const $ = cheerio.load(link.data)
	let hasil = []
	let result = []
	$('#main').each(function (a, b) {
			 $(b).find('div').each(function (c, d) {
				let url = $(d).find('a').attr('href')
				let img = $(d).find('a > img').attr('src')
				let judul = $(d).find('a > img').attr('alt')
				let data = {
					judul: judul,
					thumb: img,
					url: url
				}
				result.push(data)
			})
			for (let i = 29; i < result.length; i++) {
			hasil.push(result[i])
			}
	})
	return hasil
}

async function infoFilm123(url) {
	try{
	const link =  await axios.get(`${url}`)
	const $ = cheerio.load(link.data)
	let judul = $('#mv-info').find('div.mvi-content > div.mvic-desc > h1').text().trim()
	let genre = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(1) > a').text().trim()
	let aktor = []
	$('div.mvi-content').each(function (a, b) {
		let res = $(b).find('div.mvic-desc > div.mvic-info > div.mvici-left > p > a').text().trim()
		aktor.push(res)
	})
	let country = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(4) > a').attr('title')
	let durasi = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(1) > strong').text().trim()
	let kualitas = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(2) > span').text().trim()
	let publish = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(4) > a').text().trim()
	let tag = []
	$('#mv-keywords').each(function (c, d) {
		let res = $(d).find('a').text().trim()
		tag.push(res)
	})
	let thumb = $('#mv-info').find('div.player-holder > a').attr('style')
	let video = $('#mv-info').find('div.player-holder > a').attr('href')
	var result = {
		judul: judul,
		thumbail: thumb.replace('background-image: url', '').replace('(', '').replace(')', ''),
		genre: genre,
		video: video,
		negara: country,
		durasi: durasi,
		quality: kualitas,
		rilis: publish,
		aktor: aktor,
		hastag: tag
	}
	return result
} catch (err) {
	return `Judul tidak ditemukan`
}
} 

async function FilmApik23(querry) {
	try{
	const link = await axios.get(`https://filmapik.website/?s=${querry}`);
	const c = cheerio.load(link.data)
	let Id = []
	c('#main > div > div.main-content.main-category > div.movies-list-wrap.mlw-category > div.movies-list.movies-list-full ').each(function (a, b) {
		c(b).find('div').each(function (e, d) {
			let id = c(d).find('a').attr('href')
			Id.push(id)
		})
	})
	let Random = Id[Math.floor(Math.random() * (Id.length))]
	const Link = await axios.get(Random)
	const $ = cheerio.load(Link.data)
	let judul = $('#mv-info').find('div.mvi-content > div.mvic-desc > h3').text().trim()
	let view = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(1)').text().trim()
	let genre = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(2)').text().trim()
	let studio = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(3) > span').text().trim()
	let durasi = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(1) > span').text().trim()
	let TvStatus = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(2) > span').text().trim()
	let network = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > div > p:nth-child(5) > a').text().trim()
	let thumb = $('#mv-info').find('div.mvi-content > div.thumb.mvic-thumb > img').attr('src')
	let BintangFilm = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > p > span').text().trim()
	const data = {
			judul: judul,
			thumb: thumb,
			Link: Random,
			penonton: view.replace('Views: ', ''),
			durasi: durasi,
			genre: genre.replace('Genre: ', ''),
			studio: studio,
			TV: TvStatus,
			network: network,
			bintangFilm: BintangFilm
	}
	return data
} catch (err) {
	var notFond = {
		status: link.status
	}
	return notFond
}
}

async function ytPlay(querry) {
	const videos = await yt(querry)
	const result = []
	const Format = {
		q: videos.all[0].url,
		vt: 'mp3'
	}
	await axios('https://yt1s.com/api/ajaxSearch/index', {
		method: 'POST',
		data: new URLSearchParams(Object.entries(Format)),
		headers: {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
			"cookie": "_ga=GA1.2.586773459.1621481788; _gid=GA1.2.1576517376.1621481788; _gat_gtag_UA_173445049_1=1"
		},
		referrerPolicy: "strict-origin-when-cross-origin"
	}).then(async res => {
		const FormatData = {
			vid: res.data.vid,
			k: res.data.kc
		}
		await axios('https://yt1s.com/api/ajaxConvert/convert', {
			method: 'POST',
			data: new URLSearchParams(Object.entries(FormatData)),
			headers: {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"sec-ch-ua-mobile": "?0",
				"cookie": "_ga=GA1.2.586773459.1621481788; _gid=GA1.2.1576517376.1621481788; _gat_gtag_UA_173445049_1=1"
			},
			referrerPolicy: "strict-origin-when-cross-origin"
		}).then(respon => {
			result.push(respon.data)
		})
	})
	return result[0]
}

async function inews() {
return new Promise((resolve, reject) => {
        axios.get(`https://www.inews.id/news`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#news-list > li ').each(function(a, b) {
                    result = {                    
                    berita: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > div.title-news-update.padding-0px-top').text().trim(),
                    upload_time: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > div.date.margin-10px-left').text().trim().split('|')[0],
                    link: $(b).find('> a').attr('href'),
                    thumbnail: $(b).find('> a > div > div > div.float-left.width-130px.position-absolute > img').attr('data-original'),
                    info_berita: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > p').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

async function bbc() {
	try {
    const hasil = [];
	const link = `https://www.bbc.com/indonesia`;
	const res = await axios.get(link, {
		headers: {
			"User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
		}
	});
	const $ = cheerio.load(res.data);
	$('li.e57qer20.bbc-lpu9rr.eom0ln51').each(function(a, b) {
		let berita = $(b).find("p").text();
		let berita_diupload = $(b).find("time").text();
		let berita_url = $(b).find("a").attr("href");
		const result = {
			berita,
			berita_diupload,
			berita_url: "https://www.bbc.com" + berita_url,
		};
		hasil.push(result);
	});
	akhir = hasil.filter(v => v.berita !== "" && v.berita_diupload !== "");
	return akhir;
	} catch (eror404) {
		return "=> Error =>" + eror404;
	}
};
	
module.exports.cariresep = cariresep
module.exports.inews = inews
module.exports.infoFilm123 = infoFilm123
module.exports.SearchFilm = SearchFilm
module.exports.zerochan = zerochan
module.exports.trendtwit = trendtwit
module.exports.tiktokHastag = tiktokHastag
module.exports.randomtt = randomtt
module.exports.FilmApik23 = FilmApik23
module.exports.asupanfilminfo = asupanfilminfo
module.exports.asupanfilm = asupanfilm
module.exports.metronews = metronews
module.exports.merdekanews = merdekanews
module.exports.goredl = goredl
module.exports.happymoddl = happymoddl
module.exports.rexdldown = rexdldown
module.exports.rexdl = rexdl
module.exports.apkmirror = apkmirror
module.exports.randomgore = randomgore
module.exports.searchgore = searchgore
module.exports.gempa = gempa
module.exports.bacaresep = bacaresep
module.exports.android1 = android1
module.exports.GSMArena = GSMArena
module.exports.cnn = cnn
module.exports.bbc = bbc
module.exports.ytPlay = ytPlay
module.exports.corona = corona
module.exports.RandomCerpen = RandomCerpen
module.exports.emoji = emoji
module.exports.jobstreet = jobstreet
module.exports.anime = anime
module.exports.chara = chara
module.exports.jagokata = jagokata
module.exports.dewabatch = dewabatch
module.exports.igstalk = igstalk
module.exports.anoboydl = anoboydl
module.exports.anoboys = anoboys
module.exports.distance = distance
module.exports.jadwalbola = jadwalbola
module.exports.kompasnews = kompasnews
module.exports.tribunnews = tribunnews
module.exports.devianart = devianart
module.exports.kiryu = kiryu
module.exports.jadwaltv = jadwaltv