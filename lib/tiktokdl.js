const tiktok_scrape = require('tiktok-scraper')
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const api = require("caliph-api");
const got = require('got');
const vm = require('vm')
const qs = require('qs')
const FormData = require('form-data')

const headers = {
	"user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
	"referer": "https://www.tiktok.com/",
	"cookie": "tt_webid_v2=6976572065375626290; ttwid=1|WphZXEIq_oTph3Rcy7Ybj7o2YmzOAhfdWm23L35UL7Q|1634565622|26309b01156f00c630959974d6ff872e1c6b5d6f6275cbe3aac6738e4f6d50f5; tt_webid=6976572065375626290; tt_csrf_token=KOCPsah2eI6vhK6-F_73Uben; cmpl_token=AgQQAPOgF-RMpbF7dxi_PJ07-rBaZ9U_nbArYPwp_A"
}

async function noWM (Url) {
	return new Promise (async (resolve, reject) => {
		await axios.request({
			url: "https://ttdownloader.com/",
			method: "GET",
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
				"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
			}
		}).then(respon => {
			const $ = cheerio.load(respon.data)
			const token = $('#token').attr('value')
			axios({
				url: "https://ttdownloader.com/req/",
				method: "POST",
				data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
				headers: {
					"accept": "/",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
					"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
				}
			}).then(res => {
				const ch = cheerio.load(res.data)
				const result = {}
				result.videoUrl = ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href')				
				result.nowatermark = ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href')				
				result.music = ch('#results-list > div:nth-child(4)').find('div.download > a').attr('href')
				resolve(result)
			}).catch(reject)
		}).catch(reject)
	})
}

async function savefrom(url) {
	return new Promise(async(resolve, reject) => {
		let req = await got('https://worker.sf-tools.com/savefrom.php',{
			method: 'POST',
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				origin: 'https://id.savefrom.net',
				referer: 'https://id.savefrom.net/',
				'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36'
			},
			form: {
				sf_url: url,
				sf_submit: '',
				new: 2,
				lang: 'id',
				app: '',
				country: 'id',
				os: 'Windows',
				browser: 'Chrome',
				channel: ' main',
				'sf-nomad': 1
			}
		}).text()
		const executeCode = '[]["filter"]["constructor"](b).call(a);'
		if (req.indexOf(executeCode) === -1) console.log(`${req}`)
			req = req.replace(executeCode, `
				try {
					i++;
					if (i === 2) scriptResult = ${executeCode.split('.call')[0]}.toString();
					else (
						${executeCode.replace(/;/, '')}
					);
				} catch {}
				`)
		const context = {
			scriptResult: '',
			i: 0
		}
		vm.createContext(context)
		new vm.Script(req).runInContext(context)
		const json = JSON.parse(context.scriptResult.split('window.parent.sf.videoResult.show(')?.[1].split(');')?.[0])
		resolve(json)
	})
}

async function TiktokDownloader(url) { 
var fullUrl = await fetch(url)
const tiktok = await tiktok_scrape.getVideoMeta(fullUrl.url, {headers})
const tiktok_dl = await api.downloader.tiktok(url)
const tiktok_dll = await savefrom(url)
const obj = {}
obj.id = tiktok.collector[0].id
obj.name = tiktok.collector[0].authorMeta.name
obj.nickName = tiktok.collector[0].authorMeta.nickName
obj.following = tiktok.collector[0].authorMeta.following
obj.fans = tiktok.collector[0].authorMeta.fans
obj.heart = tiktok.collector[0].authorMeta.heart
obj.bio = tiktok.collector[0].authorMeta.signature
obj.desctription = tiktok.collector[0].text
obj.thumbnail = tiktok_dl.thumbnail
obj.likes = tiktok.collector[0].diggCount
obj.share = tiktok.collector[0].shareCount
obj.hashtags = tiktok.collector[0].hashtags
obj.comment = tiktok.collector[0].commentCount
obj.view = tiktok.collector[0].playCount
obj.duration = tiktok_dll.meta.duration
obj.mentions = tiktok.collector[0].mentions
obj.music_name = tiktok.collector[0].musicMeta.musicName
obj.music_author = tiktok.collector[0].musicMeta.musicAuthor
obj.nowatermark = tiktok_dl.nowm
obj.watermark = tiktok_dl.watermark
obj.audio = tiktok_dl.audio
return obj
}

module.exports = { TiktokDownloader }