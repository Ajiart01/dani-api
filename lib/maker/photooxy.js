const axios = require('axios')
const cheerio = require('cheerio')
const cookie = require('cookie')
const FormData = require('form-data')

function oxypost(url, formdata = {}, headers = {}) {
    //console.log(formdata)
    let e = encodeURIComponent
    let body = Object.keys(formdata).map(key => {
        let out = []
        if (typeof formdata[key] === 'object') {
            for (kiys in formdata[key]) out.push(`${key}[${kiys}]=${formdata[key][kiys]}`)
        } else {
            let vals = formdata[key]
            let isArray = Array.isArray(vals)
            let keyq = e(key + (isArray ? '[]': ''))
            if (!isArray) vals = [vals]
            for (let valq of vals) out.push(e(key) + '=' + e(valq))
        }
        return out.join('&')
    }).join('&')
    //console.log(body)
    return axios(url,
    {
        method: 'POST',
        headers: {
            accept: '*/*',
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
            // ...form.getHeaders(),
            ...headers
        },
        data: body
    })
}

const temaoxy = {
    whitestone: 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html',
    lovemessage: 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html',
    shadow: 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html',
    cup: 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html',
    naruto: 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html',
    sumernaturebg: 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html',
    darkmetal: 'https://photooxy.com/other-design/create-dark-metal-text-with-special-logo-160.html',
    coolaov: 'https://photooxy.com/league-of-kings/cool-league-of-kings-avatar-153.html',
    lolrankboder: 'https://photooxy.com/league-of-legends/create-avatar-lol-with-your-rank-151.html',
    loltiktok: 'https://photooxy.com/other-design/retro-avatar-league-of-legends-147.html',
    shinebanner: 'https://photooxy.com/league-of-legends/shine-banner-skins-of-league-of-legends-145.html',
    crossfirefb: 'https://photooxy.com/cross-fire/nice-cross-fire-cover-137.html',
    glowpentakil: 'https://photooxy.com/other-design/glow-pentakill-cover-lol-136.html',
    warfacefb: 'https://photooxy.com/warface/make-warface-cover-online-135.html',
    overwactfb: 'https://photooxy.com/overwatch/cover-overwatch-with-heros-134.html',
    lolgreat: 'https://photooxy.com/league-of-legends/make-great-cover-lol-133.html',
    csgofb: 'https://photooxy.com/cs-go/great-cs-go-banner-131.html',
    lolpentakil: 'https://photooxy.com/league-of-legends/make-your-logo-pentakill-lol-128.html',
    woodheart: 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html',
    woodenboard: 'https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html',
    wolfmetal: 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html',
    nature3d: 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html',
    underwaterocean: 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html',
    typography: 'https://photooxy.com/logo-and-text-effects/create-a-layered-leaves-typography-text-effect-354.html',
    underquotes: 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html',
    whitecube: 'https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html',
    neonlight: 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html',
    rainbowshine: 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html',
    camuflage: 'https://photooxy.com/logo-and-text-effects/army-camouflage-fabric-text-effect-221.html',
    '3dglowing': 'https://photooxy.com/logo-and-text-effects/create-a-3d-glowing-text-effect-220.html',
    vintage: 'https://photooxy.com/other-design/vintage-text-style-219.html',
    candy: 'https://photooxy.com/logo-and-text-effects/honey-text-effect-218.html',
    gradientavatar: 'https://photooxy.com/logo-and-text-effects/gradient-avatar-text-effect-207.html',
    glowrainbow: 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html',
    stars: 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html',
    fur: 'https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html',
    flaming: 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html',
    crispchrome: 'https://photooxy.com/logo-and-text-effects/create-a-crisp-chromed-text-effect-196.html',
    rainbowbg: 'https://photooxy.com/other-design/create-3d-text-on-rainbow-online-189.html',
    metalicglow: 'https://photooxy.com/other-design/create-metallic-text-glow-online-188.html',
    striking3d: 'https://photooxy.com/other-design/striking-3d-text-effect-online-187.html',
    watermelon: 'https://photooxy.com/logo-and-text-effects/watermelon-text-style-186.html',
    underwebmatrix: 'https://photooxy.com/logo-and-text-effects/text-under-web-matrix-effect-185.html',
    multimaterial: 'https://photooxy.com/logo-and-text-effects/multi-material-text-effect-184.html',
    butterfly: 'https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html',
    harrypotter: 'https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html',
    coffee: 'https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html',
    luxuryroyal: 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html',
    gerbang: 'https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html',
    woodblock: 'https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html',
    smoketypography: 'https://photooxy.com/logo-and-text-effects/smoke-typography-text-effect-170.html',
    sweetcandy: 'https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html',
    silk: 'https://photooxy.com/logo-and-text-effects/simple-text-on-the-silk-167.html',
    bevel: 'https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html',
    flowertypo: 'https://photooxy.com/art-effects/flower-typography-text-effect-164.html',
    partyneon: 'https://photooxy.com/logo-and-text-effects/create-party-neon-text-effect-161.html',
    grenleaves: 'https://photooxy.com/logo-and-text-effects/make-great-quotes-on-nature-211.html',
    modernmetal: 'https://photooxy.com/logo-and-text-effects/create-wallpaper-with-modern-metal-text-179.html',
    romance: 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html',
    "smoketype-effect": "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
    "funnycup": "https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
    burnpaper: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
    quotesgrass: "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
    "romantic-doubleheart": "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html",
    "coffee-heartcup": "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
    flowertext: "https://photooxy.com/logo-and-text-effects/text-inside-the-flower-heart-369.html",
    summertext: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
    "3dnature": "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html",
    yellowroses: "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html",
    graffititext: "https://photooxy.com/banner-cover/graffiti-text-cover-222.html",
    embroiderytext: "https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html",
    birthdaycake: "https://photooxy.com/logo-and-text-effects/text-on-appy-birthday-cake-190.html",
    "3dwoodenblack": "https://photooxy.com/logo-and-text-effects/3d-wood-text-black-style-182.html",
    "illuminated-metallic": "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
    "orchids-flower": "https://photooxy.com/logo-and-text-effects/text-under-flower-165.html",
};

async function newphotooxy(url, texts = ['text'], gambar = '') {
	let effect = temaoxy[url]
	if(effect === undefined) throw new Error('Effect tidak tersedia')
    if (!/^https:\/\/photooxy\.com\/.+\.html$/.test(effect)) throw new Error('Invalid URL')
    let res = await axios.get(effect, {
        method: 'GET',
        headers: {
            accept: '*/*',
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
        }})
        let html = res.data
        //console.log(res.headers['set-cookie'])
        // const cfuid = res.headers['set-cookie'][0].split(',').map(v => cookie.parse(v)).reduce((a, c) => { return {...a, ...c} }, {})
        // console.log(res.headers)
        const phpses = res.headers['set-cookie'][0].split(',').map(v => cookie.parse(v)).reduce((a, c) => {
            return {
                ...a, ...c
            }
        }, {})
        cookies = {
            // __cfduid: cfuid.__cfduid,
            PHPSESSID: phpses.PHPSESSID,
        }
        let forms = {
            submit: 'GO',
            token: /name="token".*value="(.+?)"/.exec(html)[1],
            build_server: 'https://e2.yotools.net',
            build_server_id: 1,
        }
        let form = new FormData
        if (typeof texts === 'string') texts = [texts]
        for (let text of texts) form.append('text[]', text)
        for (let key in forms) form.append(key, forms[key])
        form.append('file_image_input', '')
        form.append('image[]', gambar)
        
        cookies = Object.entries(cookies).map(([name, value]) => cookie.serialize(name, value)).join('; ')
        //console.log(cookies)
        let res2 = await axios(effect, {
            method: 'POST',
            headers: {
                accept: '*/*',
                'accept-language': "en-US,en;q=0.9",
                ...form.getHeaders(),
                cookie: cookies,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
            },
            data: form.getBuffer()
        })
        let html2 = res2.data
        // class = "sr-only">
        const $ = cheerio.load(html2)
        let form_value = $('div[id="form_value"]').text()
        //console.log(form_value)
        let tokenval = form_value
        //console.log(JSON.parse(tokenval))
        let res3 = await oxypost('https://photooxy.com/effect/create-image', JSON.parse(tokenval), {
            cookie: cookies
        })
        if (!res3.data.success) {
            throw new Error("Failed to creating image");
        }
        res3.data.image = 'https://e2.yotools.net'+res3.data.image
        return res3.data.image
}

module.exports = newphotooxy