const axios = require('axios')
const cheerio = require('cheerio')
const ig = require("instatouch");
const request = require('request')
const fetch = require('node-fetch')
const path = process.cwd()
const ra = require('ra-api')
const fs = require('fs')
const got = require('got')
const { sizeFormatter } = require("human-readable");
const fakeUa = require('fake-useragent')
const spotifydlCore = require("spotifydl-core").default
const Spotify = require('spotify-finder')

const client = new Spotify({
    consumer: {
        key: '271f6e790fb943cdb34679a4adcc34cc', // from v2.1.0 is required
        secret: 'c009525564304209b7d8b705c28fd294' // from v2.1.0 is required
    }
})
async function spotifysearch (query) {
    data = await client.search({
        q: query,
        type: 'track',
        limit: 10
    })
    peta = data.tracks.items
    artis = []
    const result = []
    if(peta == undefined) return({status: false, message: 'Song not found!'})
    /*peta.artists.map(s => {
        artis.push({
            name: s.name,
            url: s.external_urls.spotify
        })
    })*/
    for(let i of peta){
        result.push({
            judul: i.name,
            artist: i.artists,
            release_date: i.album.release_date,
            popularity: i.popularity,
            track: i.external_urls.spotify,
            thumbnail: i.album.images[0].url
        })
    }
    return(result != '' ? {
        status: true,
        result:result
    } : {status: false, message: 'Song Not Found'})
}

function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}

const credential = {
    clientId: '271f6e790fb943cdb34679a4adcc34cc',
    clientSecret: 'c009525564304209b7d8b705c28fd294'
}
const spotify = new spotifydlCore(credential)
async function spotifydl (url){
  if(!/open|spotify|track/.test(url)) return({
    status: false,
    message: "Link not valid!"
  })
  const getdata = await spotify.getTrack(url)
  const down = await spotify.downloadTrack(url)
  const filepath = path + `/tmp/${getdata.name}.mp3`
  await fs.writeFileSync(filepath, down)
  const upload = await ra.UploadFile(filepath)
  try{
    fs.unlinkSync(filepath)
    }catch{}
  return({
      status: true,
      ...getdata,
      ...{size: upload.result.size, url: upload.result.namaFile}
  })
}

let formatSize = sizeFormatter({
	std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})

async function GDriveDl(url) {
	let id
	if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
	id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
	if (!id) throw 'ID Not Found'
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) throw 'Link Download Limit!'
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}

async function apkDl(url) {
	let res = await fetch('https://apk.support/gapi/index.php', {
		method: 'post',
		body: new URLSearchParams(Object.entries({ x: 'downapk', t: 1, google_id: url, device_id: '', language: 'en-US', dpi: 480, gl: 'SUQ=', model: '', hl: 'en', de_av: '', aav: '', android_ver: 5.1, tbi: 'arm64-v8a', country: 0, gc: undefined }))
	})
	let $ = cheerio.load(await res.text())
	let fileName = $('div.browser > div.dvContents > ul > li > a').text().trim().split(' ')[0]
	let download = $('div.browser > div.dvContents > ul > li > a').attr('href')
	if (!download) throw 'Can\'t download the apk!'
	let mimetype = (await fetch(download, { method: 'head' })).headers.get('content-type')
	return { fileName, mimetype, download }
}

function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}

function wikimedia(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let hasil = []
            $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                hasil.push({
                    title: $(b).find('img').attr('alt'),
                    source: $(b).attr('href'),
                    image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

function porno() {
    return new Promise((resolve, reject) => {
        axios.get('https://tikporntok.com/?random=1')
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = {}
            hasil.title = $('article > h1').text()
            hasil.source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
            hasil.thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            hasil.desc = $('article > div.intro').text()
            hasil.upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
            hasil.like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
            hasil.dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
            hasil.favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
            hasil.views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
            hasil.tags = $('article > div.post-tags').text()
            hasil.video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            resolve(hasil)
        })
    })
}

function hentai() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
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

async function nickml(id, zoneId) {
return new Promise(async (resolve, reject) => {
axios
.post(
'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
new URLSearchParams(
Object.entries({
productId: '1',
itemId: '2',
catalogId: '57',
paymentId: '352',
gameId: id,
zoneId: zoneId,
product_ref: 'REG',
product_ref_denom: 'AE',
})
),
{
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
Referer: 'https://www.duniagames.co.id/',
Accept: 'application/json',
},
}
)
.then((response) => {
resolve(response.data.data.gameDetail)
})
.catch((err) => {
reject(err)
})
})
}

async function getToken(url) {
const html = await fetch('https://downvideo.quora-wiki.com/tiktok-video-downloader#url=' + url)
const $ = cheerio.load(await html.text())
const token = $('#token').attr('value')
return token
}
async function metaScrape(url) {
return new Promise(async (resolve, reject) => {
const token = await getToken(url)
const data = await fetch('https://downvideo.quora-wiki.com/system/action.php', {
method: 'POST',
body: new URLSearchParams(
Object.entries({
url,
token,
})
),
headers: {
Referer: 'https://downvideo.quora-wiki.com/tiktok-video-downloader',
},
})
if (data.status !== 200) return reject(data.status)
const json = await data.json()
resolve(json)
})
}

async function youtube(link){
return new Promise((resolve, reject) => {
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
if (ytIdRegex.test(link)) {
let url =  ytIdRegex.exec(link)
let config = {
'url': 'https://www.youtube.be/' + url,
'q_auto': 0,
'ajax': 1
}
let headerss = {
"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
"Cookie": 'PHPSESSID=6jo2ggb63g5mjvgj45f612ogt7; _ga=GA1.2.405896420.1625200423; _gid=GA1.2.2135261581.1625200423; _PN_SBSCRBR_FALLBACK_DENIED=1625200785624; MarketGidStorage={"0":{},"C702514":{"page":5,"time":1625200846733}}'
}
axios('https://www.y2mate.com/mates/en68/analyze/ajax',{
method: 'POST',
data: new URLSearchParams(Object.entries(config)),
headers: headerss
})
.then(({ data }) => {
const $ = cheerio.load(data.result)
let img = $('div.thumbnail.cover > a > img').attr('src');
let title = $('div.thumbnail.cover > div > b').text();
let size = $('#mp4 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
let size_mp3 = $('#audio > table > tbody > tr:nth-child(1) > td:nth-child(2)').text()
let id = /var k__id = "(.*?)"/.exec(data.result)[1]
let configs = {
type: 'youtube',
_id: id,
v_id: url[1],
ajax: '1',
token: '',
ftype: 'mp4',
fquality: 480
}
axios('https://www.y2mate.com/mates/en68/convert',{
method: 'POST',
data: new URLSearchParams(Object.entries(configs)),
headers: headerss 
})
.then(({data}) => {
const $ = cheerio.load(data.result)
let link = $('div > a').attr('href')
let configss = {
type: 'youtube',
_id: id,
v_id: url[1],
ajax: '1',
token: '',
ftype: 'mp3',
fquality: 128
}
axios('https://www.y2mate.com/mates/en68/convert',{
method: 'POST',
data: new URLSearchParams(Object.entries(configss)),
headers: headerss 
})
.then(({ data }) => {
const $ = cheerio.load(data.result)
let audio = $('div > a').attr('href')
resolve({
id: url[1],
title: title,
size: size,
quality: '480p',
thumb: img,
link: link,
size_mp3: size_mp3,
mp3: audio
})
})
})
})
.catch(reject)
}else reject('link invalid')
})
}

async function igstory(username) {
  let { data } = await axios.get(`https://www.instadownloader.org/data.php?username=${username}&t=${new Date * 1}`)
  const $ = cheerio.load(data)
  let results = []
  $('body > center').each(function (i, el) {
    results.push({
      url: $(el).find('a.download-btn').attr('href'),
      type: $(el).find('video').html() ? 'video' : 'image'
    })
  })
  return results
 }

async function hoax() {
return new Promise((resolve, reject) => {
axios.get(`https://turnbackhoax.id/`).then( tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("figure.mh-loop-thumb").each(function(a, b) {
$("div.mh-loop-content.mh-clearfix").each(function(c, d) {
link = $(d).find("h3.entry-title.mh-loop-title > a").attr('href');
img = $(b).find("img.attachment-mh-magazine-lite-medium.size-mh-magazine-lite-medium.wp-post-image").attr('src');
title = $(d).find("h3.entry-title.mh-loop-title > a").text().trim();
desc = $(d).find("div.mh-excerpt > p").text().trim();
date = $(d).find("span.mh-meta-date.updated").text().trim();
const Data = {

title: title,
thumbnail: img,
desc: desc,
date: date,
link: link
}
hasil.push(Data)
})
})
resolve(hasil)
}).catch(reject)
});
}

function umma(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let image = []
            $('#article-content > div').find('img').each(function (a, b) {
                image.push($(b).attr('src')) 
            })
            let hasil = {
                title: $('#wrap > div.content-container.font-6-16 > h1').text().trim(),
                author: {
                    name: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.user-ame.font-6-16.fw').text().trim(),
                    profilePic: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.profile-photo > img.photo').attr('src')
                },
                caption: $('#article-content > div > p').text().trim(),
                media: $('#article-content > div > iframe').attr('src') ? [$('#article-content > div > iframe').attr('src')] : image,
                type: $('#article-content > div > iframe').attr('src') ? 'video' : 'image',
                like: $('#wrap > div.bottom-btns > div > button:nth-child(1) > div.text.font-6-12').text(),
            }
            resolve(hasil)
        })
    })
}

function ringtone(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://meloboom.com/en/search/'+title)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let hasil = []
            $('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function (a, b) {
                hasil.push({ title: $(b).find('h4').text(), source: 'https://meloboom.com/'+$(b).find('a').attr('href'), audio: $(b).find('audio').attr('src') })
            })
            resolve(hasil)
        })
    })
}

function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

function halal(query, page) {
return new Promise((resolve, reject) => {
axios.get(`https://www.halalmui.org/mui14/searchproduk/search/?kategori=nama_produk&katakunci=${query}&page=${page}`).then( tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("tr > td").each(function(c, d) {
name = $(d).find("span").eq(0).text()
namee = name.replace('Nama Produk :', '')
nmr = $(d).find("span").eq(1).text()
nmrr = nmr.replace('Nomor Sertifikat :', '')
const Data = {
title: namee,
nomorsertifikat: nmrr
}
hasil.push(Data)
resolve(hasil)
}).catch(reject)
})
})
}

function mcpedl(query) {
return new Promise((resolve, reject) => {
axios.get(`https://mcpedl.com/?s=${query}`).then(async tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("div.post").each(function(c, d) {
name = $(d).find("h2.post__title").text().trim();
date = $(d).find("div.post__date").text().trim();
desc = $(d).find("p.post__text").text().trim();
category = $(d).find("div.post__category > a").text().trim();
link = $(d).find("a").attr('href')
link2 = `https://mcpedl.com${link}`
const Data = {
name: name,
category: category,
date: date,
desc: desc,
link: link2
}
hasil.push(Data)

})
 resolve(hasil)
}).catch(reject)
});
}

const newsCnn = async(genre) => {
const res = await axios.get(`https://www.cnnindonesia.com/${genre}`) 
const $ = cheerio.load(res.data)
const hasil = []
$('article').each(function(a, b) {
const link = $(b).find('a').attr('href')
const thumb = $(b).find('img').attr('src') 
const judul = $(b).find('img').attr('alt')
hasil.push({ judul, link, thumb })
}) 
return hasil
}

const jadwalSolat = async(tempat) => {
const url = `https://m.dream.co.id/jadwal-salat/${tempat}`
const res = await axios.get(url)
const $ = cheerio.load(res.data)
const a = $('table').find('tbody > tr > td')
hasil = []
const emror = "_[ ! ] Error Daerah Tidak DiTemukan_"
const daerah = url.split('/')[4]
const tanggal = $(a).eq(0).text()
const shubuh = $(a).eq(1).text()
const dzuhur = $(a).eq(2).text()
const ashar = $(a).eq(3).text()
const maghrib = $(a).eq(4).text()
const isya = $(a).eq(5).text()
hasil.push({ daerah, tanggal, shubuh, dzuhur, ashar, maghrib, isya})
return hasil
}

function komiku(judul) {
	return new Promise(async(resolve,reject) => {
	axios.get('https://data3.komiku.id/cari/?post_type=manga&s=' + encodeURIComponent(judul))
	.then(({ data }) => {
	const $ = cheerio.load(data)
	const hasil = [];
	$('body > main > section > div.daftar').each(function (a,b) {
		const img = $(b).find('div:nth-child(1) > div.bgei > a').find('img').attr('data-src')
		const ind = $(b).find('div:nth-child(1) > div.kan > span').text().trim()
		const or = $(b).find('div:nth-child(1) > div.kan > a > h3').text().trim()
		const up = $(b).find('div:nth-child(1) > div.kan > p').text().trim()
		const des = $('div:nth-child(1) > div.kan > p').text().trim()
		const result = {
			image: img,
			title: or,
			indo: ind,
			update: up.split('.')[0],
			desc: des.split('. ')[1]
		}
		hasil.push(result)
		if ($(b).find('div:nth-child(1) > div.bgei > a').find('img').attr('data-src') !== undefined) {
		resolve(hasil)
	} else {
		reject({status: 404,message:'Not Found'})
	}
	})
})
	.catch(reject)
})

}

async function komikuu() {
    return new Promise((resolve, reject) => {
      axios.request(`https://data3.komiku.id/pustaka/`, {
            method: "GET",
            data: null,
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
            }
        }).then(respon => {
            const $ = cheerio.load(respon.data)
            let hasil = []
            $('.daftar').each(function (a, b) {
                $(b).find('.bge').each(function (BIT, CH) {
                    let url = $(CH).find('div.bgei > a').attr('href')
                    let title = $(CH).find('div.kan > a > h3').text().trim()
                    let info = $(CH).find('div.kan > span.judul2').text().trim()
                    let desc = $(CH).find('div.kan > p').text().trim()
                    let thumb = $(CH).find('div.bgei > a > img').attr('src')
                    const result = {
                        title: title,
                        info: info,
                        thumb: thumb,
                        url: url,
                        desc: desc
                    }
                     hasil.push(result)
                })
            })
            resolve(hasil)
        })
    })
}

async function otakudesuinfo (url){
    return new Promise((resolve, reject) => {
        axios.get(url).then(({data}) => {
                const $ = cheerio.load(data)
                        result = {                           
                            judul: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(1) > span').text().split(': ')[1],
                            japanese: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(2) > span').text().split(': ')[1],
                            rating: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(3) > span').text().split(': ')[1],
                            produser: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(4) > span').text().split(': ')[1],
                            tipe: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(5) > span').text().split(': ')[1],
                            anime_status: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(6) > span').text().split(': ')[1],
                            total_episode: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(7) > span').text().split(': ')[1],
                            durasi: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(8) > span').text().split(': ')[1],
                            rilis: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(9) > span').text().split(': ')[1],
                            studio: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(10) > span').text().split(': ')[1],
                            genre: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(11)').text().split(': ')[1],
                            download_lengkap: $('#venkonten > div.venser > div:nth-child(10) > ul > li > span:nth-child(1) > a').attr('href'),
                            thumbnail: $('#venkonten > div.venser > div.fotoanime > img').attr('src'),
                            sinopsis: $('#venkonten > div.venser > div.fotoanime > div.sinopc').text().trim()
                        };
                resolve(result)
            }).catch(reject)
    })
}

async function otakudesuongoing () {
    return new Promise((resolve, reject) => {
        axios.get(`https://otakudesu.watch`).then(({data}) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#venkonten > div > div.venser > div.venutama > div > div.rapi > div > ul > li').each(function (a, b) {
                        result = {                            
                            judul: $(b).find('> div > div.thumb > a > div > h2').text().trim(),
                            episode: $(b).find('> div > div.epz').text().trim(),
                            tanggal: $(b).find('> div > div.newnime').text().trim(),
                            hari: $(b).find('> div > div.epztipe').text().trim(),
                            thumbnail: $(b).find('> div > div.thumb > a > div > img').attr('src'),
                            link: $(b).find('> div > div.thumb > a').attr('href')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            }).catch(reject)
    })
}

async function tiktoktrend () {
    return new Promise((resolve, reject) => {
    axios.get("https://brainans.com/").then(async(data) => {
    const $ = cheerio.load(data.data);
    const result = {};
    const plink = [];
    result["status"] = "200";
    result["author"] = author
    result["result"] = [];
    async function getmetadata(link, views) {
        const data = await axios.get("https://brainans.com" + link);
        const $$ = cheerio.load(data.data);
        result["result"].push({
            username: $$("#card-page").find("div.main__user-desc.align-self-center.ml-2 > a").text(),
            upload_time: $$("#card-page").find("div.main__user-desc.align-self-center.ml-2").text().split($$("#card-page").find("div.main__user-desc.align-self-center.ml-2 > a").text())[1].trim(),
            caption: $$("#card-page").find("div.main__list").text(),
            views: views,
            like: $$("#card-page").find("div.content__btns.d-flex > div:nth-child(1) > span").text(),
            comment: $$("#card-page").find("div.content__btns.d-flex > div:nth-child(2) > span").text(),
            share: $$("#card-page").find("div.content__btns.d-flex > div:nth-child(3) > span").text(),
            video: $$("#card-page").find("video").attr("src"),
        });
    }
    $("#welcome_videos > div > div > a").each(function(a, b) {
        plink.push({link: $(b).attr("href"),views: $(b).find("div.video_view_count.bx.bx-show > span").text(),
        });
    });
    for (let i = 0; i < 10; i++) {
        await getmetadata(plink[i].link, plink[i].views);
    }
    resolve(result)
}).catch(reject)
})
};

async function noveltoons (query){
    return new Promise((resolve, reject) => {
        axios.get(`https://noveltoon.mobi/en/search?word=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#page-content > div.search-content > div > div.search-content-left > a').each(function(a, b) {
                    result = {                   
                    judul: $(b).find('> div > div > p.search-item-title').text(),
                    like: $(b).find('> div > div > p.search-item-like > span:nth-child(2)').text().trim(),
                    genre: $(b).find('> div > div > p.search-item-label').text().trim().replace(/\ /g,'').replace(/\n\n/g,', '),
                    thumbnail: $(b).find('> div > img').attr('src'),
                    url: 'https://noveltoon.mobi' + $(b).attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

async function character(chara){
    return new Promise(async (resolve, reject) => {
        axios.get(`https://myanimelist.net/character.php?q=${chara}&cat=character`).then(async({data}) => {
            const $ = cheerio.load(data)
            url1 = $('#content').find('td:nth-child(2) > a').attr('href')
            const result = {}
            axios.get(url1).then(({data}) => {
                const $$ = cheerio.load(data)
                result.name = $$('#content').find('h2.normal_header').text()
                mentah = $$('#content > table > tbody > tr > td:nth-child(2)').text()
                bio = mentah.split(result.name)[1].split('\n\n')[0]
                spl = bio.split('\n')
                for(let i of spl){
                    if(i.split(': ')[1] != undefined){
                        result[i.split(':')[0].toLowerCase().replace(/ /g, '_')] = i.split(': ')[1]
                    }
                }
                result.picture = []
                axios.get(url1 + 'pics').then(({data}) => {
                    const $$$ = cheerio.load(data)
                    $$$('#content').find('div.picSurround > a').each(function(){
                        result.picture.push($$$(this).attr('href'))
                    })
                    resolve({                       
                        ...result
                    })
                })
            })
        })
    })
}

async function facebook (url) {
    return new Promise(async (resolve, reject) => {
        const param = {
            q: url
        }
        const {
            data
        } = await axios.request({
            url: 'https://fbdownloader.online/api/analyze',
            method: 'post',
            data: new URLSearchParams(Object.entries(param)),
            headers: {
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            }
        })
        resolve(data)
    })
}

async function jadwalmplid(){
    return new Promise(async (resolve, reject) => {
        axios.get('https://id-mpl.com/schedule').then(({
            data
        }) => {
            const $ = cheerio.load(data)
            const result = []
            week = 1
            data1 = []
            data2 = []
            jam = []
            replay = []
            for (let i = 57; i <= 64; i++) {
                $(`#mc-${i} > div > div > div`).each(function() {
                    tanggal = $(this).find('div.ticket-date.mb10.mt20').text()
                    $(this).find('div > span.teams-wrap > div > div.match-team1.text-center').each(function(a, b) {
                        data1.push({
                            a: $(b).find('div > div > b').text(),
                            score: $(b).find('div.font-title').text().trim()
                        })
                        result.push({
                            tanggal: tanggal,
                            week: week,
                            jam: '',
                            match: '',
                            score: '',
                            replay: ''
                        })
                    })
                    $(this).find('div > span.teams-wrap > div > div.match-team2.text-center').each(function(a, b) {
                        data2.push({
                            a: $(b).find('div > div > b').text(),
                            score: $(b).find('div.font-title').text().trim()
                        })
                    })
                    $(this).find('div > span.teams-wrap > div').each(function(a, b) {
                        jam.push($(b).find('div.match-score.center > div > b').text())
                        replay.push($(b).find('div.match-vs.match-link.replay > a').attr('href'))
                    })
                })
                for (let i = 0; i < data1.length; i++) {
                    result[i].match = `${data1[i].a} Vs ${data2[i].a}`
                    result[i].jam = jam[i],
                        result[i].replay = replay[i] ? replay[i] : 'Coming Soon'
                    result[i].score = data1[i].score ? `${data1[i].score} : ${data2[i].score}` : 'Coming Soon'
                }
                week += 1
            }
            resolve(result)
        })
    })
}

async function layarkita(query){
    return new Promise(async (resolve, reject) => {
        axios
            .get(`http://167.99.71.200/?s=${query}`)
            .then((data) => {
                const $ = cheerio.load(data.data)
                const judul = []
                const genre = []
                const thumb = []
                const link = []
                const format = []
                $('div > div.item-article > header > h2 > a').each(function(a, b) {
                    deta = $(b).text()
                    judul.push(deta)
                })
                $('div > div.item-article > header > div.gmr-movie-on').each(function(a, b) {
                    deta = $(b).text()
                    genre.push(deta)
                })
                $('div > div.content-thumbnail.text-center > a > img').each(function(a, b) {
                    thumb.push($(b).attr('src'))
                })
                $('div > div.item-article > header > div.gmr-watch-movie > a').each(function(a, b) {
                    link.push($(b).attr('href'))
                })
                for (let i = 0; i < judul.length; i++) {
                    format.push({
                        judul: judul[i],
                        genre: genre[i],
                        thumb: thumb[i],
                        link_nonton: link[i],
                    })
                }
                if (format == '') {
                    resolve({
                        status: 'error',
                    })
                } else {
                    resolve(format)
                }
            })
            .catch(reject)
    })
}

async function lirik(query){
    return new Promise(async (resolve, reject) => {
        axios.get('https://www.musixmatch.com/search/' + query).then(({data}) => {
            //console.log(data)
            const $ = cheerio.load(data)
            const link = []
            $('#search-all-results').find('div.media-card-body > div > h2 > a').each(function(){
                link.push($(this).attr('href'))
            })
            axios.get('https://www.musixmatch.com' + link[0]).then(({data}) => {
                const $$ = cheerio.load(data)
                result = {                    
                    title: $$('#site').find('div.mxm-track-title > h1').text().split('Lyrics')[1],
                    artist: $$('#site').find('div.mxm-track-title > h2 > span > a').text(),
                    lyrics: $$('#site').find('div.mxm-lyrics > span').text()
                }
                resolve(result)
            })
        })
    })
}

async function gsmarena (query){
    return new Promise(async (resolve, reject) => {
        try {
            var {
                data
            } = await axios.get('https://www.gsmarena.com/res.php3?sSearch=' + query)
        } catch {
            return ({
                creator: creator,
                status: false
            })
        }
        const $ = cheerio.load(data)
        const result = {}
        link = $('#review-body > div > ul > li > a').attr('href')
        var {
            data
        } = await axios.get('https://www.gsmarena.com/' + link)
        const $$ = cheerio.load(data)
        result['title'] = $$('#body').find('div.article-info-line.page-specs.light.border-bottom > h1').text()
        result['thumbnail'] = $$('#body').find('div > a > img').attr('src')
        $$('#specs-list > table').each(function(a, b) {
            result[$$(b).find('tr > th').text().toLowerCase().replace(/ /g, '')] = $$(b).find('td.nfo').text().trim()
        })
        resolve(result)
    })
}

async function kbbi (kata){
    return new Promise(async (resolve, reject) => {
        axios
            .get(`https://kbbi.kemdikbud.go.id/entri/` + kata)
            .then((data) => {
                const $ = cheerio.load(data.data)
                const arti = []
                const undef = $('body > div.container.body-content > h4:nth-child(6)').text()
                if (undef == ' Entri tidak ditemukan.')
                    resolve({
                        creator: creator,
                        status: false
                    })
                const lema = $('body > div.container.body-content > h2').text()
                $('body > div.container.body-content > ol > li').each(function(a, b) {
                    deta = $(b).text()
                    if (deta.split('a        ')[1] != undefined) arti.push(deta.split('a        ')[1])
                })
                resolve({                    
                    lema: lema,
                    arti: arti,
                })
            })
            .catch(reject)
    })
}

async function jadwaltv (channel){
  return new Promise((resolve, reject) => {
    const time = Math.floor(new Date() / 1000)
    axios.get('https://www.jadwaltv.net/channel/' + channel).then(({ data }) => {
      const $ = cheerio.load(data)
      const acara = []
      const jam = []
      const result = []
      $('div > div > table > tbody > tr').each(function (a, b) {
        if ($(b).find('td:nth-child(1)').text() != 'Jam') {
          jam.push($(b).find('td:nth-child(1)').text())
        }
        if ($(b).find('td:nth-child(2)').text() != 'Acara') {
          acara.push($(b).find('td:nth-child(2)').text())
        }
      })
      for (let i = 0; i < acara.length; i++) {
        result.push({
          acara: acara[i],
          jam: jam[i],
        })
      }
      format = result.filter((mek) => mek.acara != 'Jadwal TV selengkapnya di JadwalTV.Net')
      console.log(acara)
      resolve({       
        channel: channel,
        result: format,
      })
    })
  })
}

async function ceritahantu(){
  return new Promise((resolve, reject) => {
    axios.get(`https://cerita-hantu.com/list-cerita-hantu-a-z/`).then(({ data }) => {
      const $ = cheerio.load(data)
      const plink = []
      $('div > div > ul:nth-child(7) > li > a').each(function (a, b) {
        plink.push($(b).attr('href'))
      })
      $('div > div > ul:nth-child(9) > li > a').each(function (a, b) {
        if ($(b).attr('href') != undefined) {
          plink.push($(b).attr('href'))
        }
      })
      $('div > div > ol > li > a').each(function (a, b) {
        if ($(b).attr('href') != undefined) {
          plink.push($(b).attr('href'))
        }
      })
      axios.get(plink[Math.floor(Math.random() * plink.length)]).then(({ data }) => {
        const $$ = cheerio.load(data)
        const clink = []
        $$('div > div > a').each(function (a, b) {
          if ($$(b).attr('href').startsWith('https:')) {
            clink.push($$(b).attr('href'))
          }
        })
        rand = clink[Math.floor(Math.random() * clink.length)]
        axios.get(rand).then(({ data }) => {
          const $$$ = cheerio.load(data)
          resolve({            
            judul: $$$('div > header > div > h1 > a').text(),
            author: $$$('div > header > div > div > span.simple-grid-entry-meta-single-author > span > a').text(),
            author_link: $$$('div > header > div > div > span.simple-grid-entry-meta-single-author > span > a').attr('href'),
            upload_date: $$$('div > header > div > div > span.simple-grid-entry-meta-single-date').text(),
            kategori: $$$('div > header > div > div > span.simple-grid-entry-meta-single-cats > a').text(),
            source: rand,
            cerita: $$$('div > div > p').text().split('Cerita Hantu')[1].split('Copyright')[0],
          })
        })
      })
    })
  })
}

async function snapinsta (link) {
  return new Promise((resolve, reject) => {
    if (link.includes('stories'))
      return resolve({
        status: 'Bukan Untuk Stories,dikarenakan burik',
      })
    const options = {
      method: 'POST',
      url: `https://snapinsta.app/action.php`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'user-agent': fakeUa(),
        cookie: 'PHPSESSID=j3b5aa8u831heqor0sjo8kvk25; _ga=GA1.2.1852581107.1635391790;',
      },
      formData: {
        url: link,
        action: 'post',
      },
    }

    request(options, async function (error, response, body) {
      if (error) throw new Error(error)
      //console.log(body)
      const $ = cheerio.load(body)
      const link = []
      $('section > div > div > div > div.download-items__btn > a').each(function (a, b) {
        link.push($(b).attr('href').startsWith('/dl.php') ? 'https://snapinsta.app' + $(b).attr('href') : $(b).attr('href'))
      })
      resolve({        
        result: link,
      })
    })
  })
}

async function dddtik (link){
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: `https://dddtik.com/down.php`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'user-agent': fakeUa(),
        cookie: 'sc_is_visitor_unique=rx12545292.1635383422.F7DED83AD2BA4F9517A804FC1A0ED021.1.1.1.1.1.1.1.1.1; __gads=ID=b947ab19f44e72c9-22cb5054e4cc00ef:T=1635383422:RT=1635383422:S=ALNI_MZWS0q0Op8F6EpwhOL1pMlFTGjCvQ',
      },
      formData: {
        url: link,
      },
    }

    request(options, async function (error, response, body) {
      if (error) throw new Error(error)
      const $ = cheerio.load(body)
      resolve({       
        caption: $('div > div.ml-3 > span').text(),
        download: {
          source: $('div > div:nth-child(4)').find('a').attr('href'),
          dddtik: $('div > div:nth-child(5)').find('a').attr('href'),
        },
      })
    })
  })
}

async function tiktokder (link){
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: `https://tiktokder.com/get-video`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'user-agent': fakeUa(),
        cookie: '_ga=GA1.2.1043984244.1635384203; _gid=GA1.2.943898217.1635384203; _gat_gtag_UA_158291813_1=1; __gads=ID=9bf807235d36eb92-22ac48cee7cc00a2:T=1635384203:RT=1635384203:S=ALNI_Ma2esxJSFCulj3UsT-EepKd5QlTWw',
      },
      formData: {
        link: link,
      },
    }

    request(options, async function (error, response, body) {
      if (error) throw new Error(error)
      //console.log(body)
      const $ = cheerio.load(body)
      resolve({        
        username: $('div > div.result > div:nth-child(2) > div > a.username').text(),
        nickname: $('div > div.result > div:nth-child(2) > div > a.user-nickname').text(),
        user_avatar: $('div > div.result > div:nth-child(2) > div > img').attr('src'),
        caption: $('div > div.result > div:nth-child(2) > p').text(),
        views: $('div > div.result > div:nth-child(2) > ul > li > span').text(),
        link: $('div > div:nth-child(1) > a').attr('href'),
      })
    })
  })
}

async function tiktod (link){
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: 'https://api.tikmate.app/api/lookup',
      headers: {
        accept: '*/*',
        'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        'user-agent': fakeUa(),
      },
      formData: {
        url: link,
      },
    }

    request(options, async function (error, response, body) {
      if (error) throw new Error(error)
      const util = require('util')
      if (body.includes('error'))
        return resolve({
          status: 404,
          message: 'error',
        })
      y = JSON.parse(body)
      if (!y.success) return resolve(y)
      resolve({        
        author_avatar: y.author_avatar,
        author_id: y.author_id,
        author_name: y.author_name,
        create_time: y.create_time,
        comment_count: y.comment_count,
        like_count: y.like_count,
        share_count: y.share_count,
        download: {
          sd: 'https://tikmate.app/download/' + y.token + '/' + y.id + '.mp4',
          hd: 'https://tikmate.app/download/' + y.token + '/' + y.id + '.mp4?hd=1',
        },
      })
    })
  })
}

async function lafadz (query){
  return new Promise((resolve, reject) => {
    axios.get(`http://lafzi.apps.cs.ipb.ac.id/web/search.php?q=${query}&vowel=on`).then(({ data }) => {
      const $ = cheerio.load(data)
      const surah = []
      const arab = []
      const arti = []
      const result = []
      $('#srb-container > div > div.sura-name > span').each(function (a, b) {
        deta = $(b).text()
        surah.push(deta)
      })
      $('#srb-container > div > div.aya_container > div.aya_text').each(function (a, b) {
        deta = $(b).text()
        arab.push(deta)
      })
      $('#srb-container > div > div.aya_container > div.aya_trans').each(function (a, b) {
        deta = $(b).text()
        arti.push(deta)
      })
      for (let i = 0; i < surah.length; i++) {
        result.push({
          surat: surah[i],
          arabic: arab[i],
          arti: arti[i],
        })
      }
      resolve({        
        result: result,
      })
    })
  })
}

async function tiktokStalk(user) {
  let res = await axios.get(`https://urlebird.com/user/${user}/`)
  let $ = cheerio.load(res.data), obj = {}
  obj.pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
  obj.name = $('h1.user').text().trim()
  obj.username = $('div.content > h5').text().trim()
  obj.followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
  obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
  obj.description = $('div.content > p').text().trim()
  return obj
}

async function twitterStalk(user) {
  let res = await axios.get(`https://www.twuko.com/${user}/`)
  let $ = cheerio.load(res.data), obj = {}
  obj.pp_user = $('div[class="relative w-full h-full rounded-full cursor-pointer profile-image"] > img').attr('src')
  obj.name = $('div[class="p-3"] > p[class="text-center text-primary"]').text().trim()
  obj.username = $('div[class="p-3"] > div > span[class="font-bold text-center"]').text().trim()
  obj.followers = $('div[class="mb-4 text-4xl font-bold text-center"]').text()
  $('div[class="flex justify-center"] > div[class="px-4"]').each((idx, el) => {
    let text = $(el).find('div[class="text-xs font-bold text-center text-gray-600 uppercase"]').text()
    obj[text.toLowerCase()] = $(el).find('div[class="text-xl font-bold text-center"]').text()
  })
  obj.description = $('div[class="p-3 border-t border-gray-200"] > p').text().trim().replace(/\n/g, '')
  return obj 
}

module.exports = { twitterStalk, tiktokStalk, apkDl, GDriveDl, lafadz, tiktod, tiktokder, dddtik, snapinsta, ceritahantu, jadwaltv, kbbi, gsmarena, lirik, layarkita, jadwalmplid, facebook, character, spotifydl, spotifysearch, noveltoons, tiktoktrend, otakudesuongoing, otakudesuinfo, komikuu, komiku, jadwalSolat, newsCnn, mcpedl, halal, styletext, ringtone, umma, hoax, nickml, metaScrape, youtube, igstory, pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime , igstalk}