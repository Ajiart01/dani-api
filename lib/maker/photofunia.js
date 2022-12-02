const FormData = require('form-data')
const axios = require('axios')

async function photofuniabaru(link, obj){
    let form = new FormData();
    for(let a in obj) form.append(a, obj[a]);
    const base = axios.create({
        baseURL: 'https://api.photofunia.com',
        headers: {
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/2.7.5',
            ...form.getHeaders()
        }
    });
    let reqna = await base({
        method: 'POST',
        url: `/2.0/effects/${link}`,
        params: {
            access_key: 'e3084acf282e8323181caa61fa305b2a',
            lang: 'in'	
        },
        data: form
        
    });
    if (reqna.data.hasOwnProperty("error")) throw new Error("Something error while proccessing");
    return reqna.data.response.images;
}

let theme = {
    "balloon": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "",
                "maxlength": 20,
                "default": "Your Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "snow-sign": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "",
                "description": "",
                "maxlength": 20,
                "default": "Your Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "noir": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "",
                "description": "",
                "maxlength": 20,
                "default": "Your Text",
                "pattern": "",
                "required": false
            },
            ]
    },
    "christmas-writing": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 20,
                "default": "Your Text",
                "pattern": "^[a-zA-Z0-9\\s\\,\\.\\!\\? ]+$",
                "required": true
            }
            ]
    },
    "beach-sign": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "",
                "description": "",
                "maxlength": 30,
                "default": "Your Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "neon-writing": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "1.",
                "description": "",
                "maxlength": 20,
                "default": "Your Text",
                "pattern": "",
                "required": true
            },
            {
                "type": "text",
                "key": "text2",
                "title": "2.",
                "description": "",
                "maxlength": 20,
                "default": "",
                "pattern": "",
                "required": false
            }
            ]
    },
    "haunted-hotel": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "",
                "description": "",
                "maxlength": 20,
                "default": "Your Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "cinema-ticket": {
        "data": [
            {
                "type": "text",
                "key": "text1",
                "title": "",
                "description": "",
                "maxlength": 15,
                "default": "ADMIT ONE",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text2",
                "title": "Film",
                "description": "",
                "maxlength": 30,
                "default": "Your Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "arrow-signs": {
        "data": [
            {
                "type": "text",
                "key": "text1",
                "title": "—>",
                "description": "",
                "maxlength": 20,
                "default": "Your Text",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text2",
                "title": "<—",
                "description": "",
                "maxlength": 20,
                "default": "",
                "pattern": "",
                "required": false
            }
            ]
    },
    "yacht": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "",
                "description": "",
                "maxlength": 25,
                "default": "Your Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "water-writing": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "",
                "description": "",
                "maxlength": 15,
                "default": "Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "watercolour-text": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "",
                "description": "",
                "maxlength": 20,
                "default": "Text",
                "pattern": "",
                "required": true
            },
            {
                "type": "text",
                "key": "text2",
                "title": "TEXT",
                "description": "",
                "maxlength": 20,
                "default": "Text",
                "pattern": "",
                "required": true
            },
            ]
    },
    "bracelet": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "",
                "maxlength": 30,
                "default": "Your Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "christmas-list": {
        "data": [
            {
                "type": "text",
                "key": "lst",
                "title": "Daftar",
                "description": "",
                "maxlength": 30,
                "default": "Wish List",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text",
                "title": "1.",
                "description": "",
                "maxlength": 30,
                "default": "Your Text",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text2",
                "title": "2.",
                "description": "",
                "maxlength": 30,
                "default": "",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text3",
                "title": "3.",
                "description": "",
                "maxlength": 30,
                "default": "",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text4",
                "title": "4.",
                "description": "",
                "maxlength": 30,
                "default": "",
                "pattern": "",
                "required": false
            }
            ]
    },
    "led-road-sign": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "",
                "maxlength": 69,
                "default": "Your text",
                "pattern": "",
                "required": true
            },
            {
                "type": "text",
                "key": "sign",
                "title": "Tandatangani Teks",
                "description": "",
                "maxlength": 3,
                "default": "",
                "pattern": "",
                "required": false
            }
            ]
    },
    "light-graffiti": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 20,
                "default": "Your Text",
                "pattern": "^[a-zA-Z0-9\\s\\,\\.\\!\\? ]+$",
                "required": true
            }
            ]
    },
    "street-sign": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "",
                "maxlength": 20,
                "default": "YOUR TEXT st",
                "pattern": "",
                "required": false
            }
            ]
    },
    "cemetery-gates": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 20,
                "default": "Your Text",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": false
            }
            ]
    },
    "plane-banner": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "",
                "maxlength": 28,
                "default": "Your Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "love-lock": {
        "data": [
            {
                "type": "textarea",
                "key": "text",
                "title": "Teks",
                "description": "",
                "maxlength": 70,
                "default": "Your Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "fortune-cookie": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "",
                "maxlength": 80,
                "default": "Your Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "einstein": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "",
                "maxlength": 15,
                "default": "E=mc²",
                "pattern": "",
                "required": true
            }
            ]
    },
    "birthday-cake": {
        "data": [
            {
                "type": "text",
                "key": "text1",
                "title": "Baris 1",
                "description": "",
                "maxlength": 15,
                "default": "Your Text",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text2",
                "title": "Baris ke-2",
                "description": "",
                "maxlength": 15,
                "default": "",
                "pattern": "",
                "required": false
            }
            ]
    },
    "lipstick-writing": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 15,
                "default": "Your Text",
                "pattern": "^[a-zA-Z0-9\\s]+$",
                "required": false
            }
            ]
    },
    "typewriter": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "",
                "maxlength": 25,
                "default": "Your Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "lifebuoy": {
        "data": [
            {
                "type": "text",
                "key": "text1",
                "title": "Teks 1",
                "description": "",
                "maxlength": 15,
                "default": "Your",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text2",
                "title": "Teks 2",
                "description": "",
                "maxlength": 15,
                "default": "Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "snow_writing": {
        "data": [
            {
                "type": "text",
                "key": "text1",
                "title": "Baris Teks 1",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 15,
                "default": "Your Text",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": false
            },
            {
                "type": "text",
                "key": "text2",
                "title": "Teks Baris 2",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 15,
                "default": "",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": false
            }
            ]
    },
    "books": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Buku 1",
                "description": "",
                "maxlength": 15,
                "default": "Your",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text2",
                "title": "",
                "description": "",
                "maxlength": 15,
                "default": "Text",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text3",
                "title": "Buku ke-2",
                "description": "",
                "maxlength": 15,
                "default": "",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text4",
                "title": "",
                "description": "",
                "maxlength": 15,
                "default": "",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text5",
                "title": "Buku ke-3",
                "description": "",
                "maxlength": 15,
                "default": "",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text6",
                "title": "",
                "description": "",
                "maxlength": 15,
                "default": "",
                "pattern": "",
                "required": false
            }
            ]
    },
    "tree_carving": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Baris Teks 1",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 15,
                "default": "Your",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "text2",
                "title": "Teks Baris 2",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 12,
                "default": "Text",
                "pattern": "",
                "required": false
            }
            ]
    },
    "soup_letters": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 14,
                "default": "Your Text",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": false
            }
            ]
    },
    "movie_marquee": {
        "data": [
            {
                "type": "text",
                "key": "text1",
                "title": "Baris Teks 1",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 20,
                "default": "Your Text 1",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": false
            },
            {
                "type": "text",
                "key": "text2",
                "title": "Teks Baris 2",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 20,
                "default": "Your Text 2",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": false
            }
            ]
    },
    "cookies_writing": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 20,
                "default": "Cookies",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\_\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": false
            }
            ]
    },
    "blood_writing": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 20,
                "default": "Hello",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\,\\.]+$",
                "required": false
            }
            ]
    },
    "wooden_sign": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "",
                "maxlength": 25,
                "default": "Fun Town",
                "pattern": "",
                "required": false
            }
            ]
    },
    "sand_writing": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 25,
                "default": "Hello Summer",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": false
            }
            ]
    },
    "hogwarts_letter": {
        "data": [
            {
                "type": "select",
                "key": "title",
                "title": "Judul",
                "description": "",
                "values": [
                    {
                        "key": "Mr",
                        "title": "Mr"
                    },
                    {
                        "key": "Mrs",
                        "title": "Mrs"
                    },
                    {
                        "key": "Miss",
                        "title": "Miss"
                    },
                    {
                        "key": "Ms",
                        "title": "Ms"
                    },
                    {
                        "key": "Dr",
                        "title": "Dr"
                    }
                    ],
                    "default": "Mr"
            },
            {
                "type": "text",
                "key": "name",
                "title": "Namamu",
                "description": "",
                "maxlength": 25,
                "default": "John",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "surname",
                "title": "Nama keluarga",
                "description": "",
                "maxlength": 25,
                "default": "Doe",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "address",
                "title": "Baris Alamat 1",
                "description": "",
                "maxlength": 30,
                "default": "The Cupboard Under the Stairs",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "address2",
                "title": "Alamat Baris 2",
                "description": "",
                "maxlength": 30,
                "default": "4 Privet Road",
                "pattern": "",
                "required": false
            },
            {
                "type": "text",
                "key": "address3",
                "title": "Baris Alamat 3",
                "description": "",
                "maxlength": 30,
                "default": "Surrey",
                "pattern": "",
                "required": false
            },
            {
                "type": "checkbox",
                "key": "papertex",
                "title": "Tekstur kertas",
                "description": "",
                "default": true
            }
            ]
    },
    "cross_stitch_text": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 25,
                "default": "Hello Summer",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": true
            },
            {
                "type": "text",
                "key": "text2",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 25,
                "default": "Hello Summer",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": true
            }
            ]
    },
    "pendant": {
        "data": [
            {
                "type": "text",
                "key": "text",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 25,
                "default": "Hello Summer",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": true
            },
            ]
    },
    "breaking-news": {
        "data": [
            {
                "type": "text",
                "key": "title1",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 25,
                "default": "Hello Summer",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": true
            },
            {
                "type": "text",
                "key": "channel",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 25,
                "default": "Hello Summer",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": true
            },
            {
                "type": "text",
                "key": "title2",
                "title": "Teks",
                "description": "This field can only contain numbers and Latin characters.",
                "maxlength": 25,
                "default": "Hello Summer",
                "pattern": "^[a-zA-Z0-9\\s\\?\\!\\%\\^\\&\\*\\(\\)\\[\\]\\-\\+\\=\\:\\;\\,\\.\\@\\~\\/]+$",
                "required": true
            },
            ],
    },
    "foggy_window_writing": {
        data: [
            {
                key: "text"
            },
            ],
    },
    "chalk_writing": {
        data: [
            {
                key: "text"
            },
            ],
    },
    "neon": {
        data: [
            {
                key: "text1"
            },
            {
                key: "text2"
            },
            ],
    },
    "retro-wave": {
        data: [
            {
                key: "text1"
            },
            {
                key: "text2"
            },
            {
                key: "text3"
            },
            ],
    },
    "surfing-board": {
        data: [
            {
                key: "text"
            },
            {
                key: "text2"
            },
            ],
    },
    "denim-emdroidery": {
        data: [
            {
                key: "text"
            },
            ],
    },
    "nightmare-writing": {
        data: [
            {
                key: "text"
            },
            ],
    },
    "airline": {
        data: [
            {
                key: "name"
            },
            ],
    },
    "chalkboard": {
        data: [
            {
                key: "text"
            },
            {
                key: "text2"
            }
            ],
    },
    "frosty-window-writing": {
        data: [
            {
                key: "text"
            },
            ],
    },
    "diploma": {
        data: [
            {
                key: "UniversityName"
            },
            {
                key: "year"
            },
            {
                key: "Name",
            },
            {
                key: "Degree"
            },
            {
                key: "President",
            },
            {
                key: "VicePresident"
            }
            ],
    },
    "keep_calm": {
        data: [
            {
                key: "line1"
            },
            {
                key: "line2"
            },
            {
                key: "line3"
            },
            {
                key: "line4"
            },
            {
                key: "line5"
            },
            ]
    },
    "heart_tattoo": {
        data: [
            {
                key: "text"
            }
            ]
    }
};

let txtresult = {};
async function eksekusi(tema, teksna = [`string`]){
	let effect = theme[tema]
	if(effect === undefined) throw new Error('Effect tidak tersedia')
	if (typeof teksna === 'string') teksna = [teksna];
let txtna = {};
        let hasil = {};		
		let etang = 0
        for(let bisa of effect.data){
			const eusi = teksna[etang++]
			txtna[bisa.key] = eusi
			if(eusi === undefined) txtna[bisa.key] = `add text`
		}
		console.log(txtna)
	 let coba = await photofuniabaru(tema, txtna)
	  return coba.regular.url
}

module.exports = eksekusi