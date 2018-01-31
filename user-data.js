const { formatTrack, formatArtists, formatGenres } = require('./models/formatting');
const formInput = [
	// { Name: 'Paul Copley', Age: 31, AgeRange: { min: 25, max: 35 }, Email: 'pkcopley@gmail.com', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrfhg', Bio: 'I am Paul' },
	{ Name: 'Megan Field', Age: 25, AgeRange: { min: 26, max: 35 }, Email: 'megan.field@hotmail.co.uk', Gender: 'Female', GenderPreference: ['Male', 'Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am Megan' },
	{ Name: 'Anat Dean', Matched: ['xoxchazbase@hotmail.co.uk', 'damnPeasants@gmail.com'], Age: 21, AgeRange: { min: 21, max: 27 }, Email: 'anat62442@hotmail.co.uk', Gender: 'Female', GenderPreference: ['Male'], Area: 'Manchester', picture: 'https://ipojearhg', Bio: 'I am Anat' },
	{ Name: 'Sam Lea', Age: 28, AgeRange: { min: 26, max: 35 }, Email: 'dj_sam_lea@hotmai.com', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am Sam' },
	{ Name: 'Peter Parker', Age: 20, AgeRange: { min: 18, max: 29 }, Email: 'notspiderman@hotmail.com', Gender: 'Male', GenderPreference: ['Male'], Area: 'New York', picture: 'https://pbs.twimg.com/profile_images/554513294053351425/uFuyrhO2.jpeg', Bio: 'I love shooting translucent stringy fluid from my wrists' },
	{ Name: 'Antonia Blair', Age: 25, AgeRange: { min: 20, max: 34 }, Email: 'iraqioil2003@gmail.com', Gender: 'Female', GenderPreference: ['Female'], Area: 'London', picture: 'http://i.dailymail.co.uk/i/pix/2016/01/03/15/2DBE503300000578-0-image-a-55_1451833248581.jpg', Bio: 'Looking to meet some hot third-way babes' },
	{ Name: 'Jeremy Corbyn', Age: 30, AgeRange: { min: 21, max: 40 }, Email: 'communistmanifesto@live.co.uk', Gender: 'Male', GenderPreference: ['Female'], Area: 'London', picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Official_portrait_of_Jeremy_Corbyn_crop_2.jpg', Bio: 'Keep the red flag flying, yo.' },
	{ Matched: ['pkcopley@gmail.com'], Name: 'Theresa May', Age: 28, AgeRange: { min: 22, max: 32 }, Email: 'bedroom_tax_2017@conservatives.co.uk', Gender: 'Female', GenderPreference: ['Male'], Area: 'Manchester', picture: 'https://img.maximummedia.ie/joe_co_uk/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lY291ay5tYXhpbXVtbWVkaWEuaWUuczMuYW1hem9uYXdzLmNvbVxcXC93cC1jb250ZW50XFxcL3VwbG9hZHNcXFwvMjAxNlxcXC8xMlxcXC8xNTE1MTMzNFxcXC9HZXR0eUltYWdlcy00NjQ3MjcyOTgtMTAyNHg2ODMuanBnXCIsXCJ3aWR0aFwiOjY0NyxcImhlaWdodFwiOjM0MCxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmpvZS5jby51a1xcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZWNvdWtcXFwvbm8taW1hZ2UucG5nP3Y9NFwifSIsImhhc2giOiJmYjdjODNiMmU4N2JmNjI5Njg0ZDhiMTdjY2Y2NDljNDY5MjExOGMzIn0=/gettyimages-464727298-1024x683.jpg', Bio: 'Desperately clinging onto power / your love, honey.' },
	{ Name: 'Luke Fenn', Age: 22, AgeRange: { min: 18, max: 27 }, Email: 'LKBOI@hotmail.com', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am Luke' },
	{ Name: 'Jade Ryan', Age: 28, AgeRange: { min: 28, max: 37 }, Email: 'gatsby123@hotmail.com', Gender: 'Female', GenderPreference: ['Male'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am Jade' },
	{ Name: 'Will Leaf', Age: 35, AgeRange: { min: 23, max: 27 }, Email: 'wileaf@hotmail.com', Gender: 'Male', GenderPreference: ['Male'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am Will' },
	{ Name: 'Amy queue', Age: 27, AgeRange: { min: 32, max: 38 }, Email: 'amy_Q@hotmail.com', Gender: 'Female', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am Amy' },
	{ Name: 'Marge Baird', Age: 23, AgeRange: { min: 22, max: 29 }, Email: 'marge.baird@hotmail.com', Gender: 'Female', GenderPreference: ['Male', 'Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am marge' },
	{ Name: 'John Lawson', Age: 34, AgeRange: { min: 28, max: 38 }, Email: 'john.l@hotmail.co.uk', Gender: 'Male', GenderPreference: ['Male'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am john' },
	{ Name: 'Joseph jackson', Age: 19, AgeRange: { min: 18, max: 23 }, Email: 'josephjkson@hotmail.com', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am joe' },
	{ Name: 'Charlotte Base', Matched: ['anat62442@hotmail.co.uk'], Age: 25, AgeRange: { min: 23, max: 30 }, Email: 'xoxchazbase@hotmail.co.uk', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am charlotte' },
	{ Name: 'John Snow', Age: 24, AgeRange: { min: 20, max: 30 }, Email: 'winter@iscoming.com', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'http://tventhusiast.nintendoenthusiast.com/wp-content/uploads/sites/8/2017/08/promo323718229-1170x658.jpg', Bio: 'The north remembers!' },
	{ Name: 'Jane Jeffries', Age: 21, AgeRange: { min: 20, max: 30 }, Email: 'jane@gmail.com', Gender: 'Female', GenderPreference: ['Male'], Area: 'Manchester', picture: 'https://assets1.cdn-mw.com/mw/images/article/art-wap-article-main/puppy-3143-7cfb4d6a42dfc7d9d1ae7e23126279e8@1x.jpg', Bio: 'A good northern lass.' },
	{ Name: 'Sophie Andrews', Age: 19, AgeRange: { min: 18, max: 25 }, Email: 's.andrews@gmail.com', Gender: 'Female', GenderPreference: ['Male', 'Female'], Area: 'London', picture: 'http://i0.kym-cdn.com/entries/icons/mobile/000/011/365/GRUMPYCAT.jpg', Bio: 'Hey ho, let\'s go!' },
	{ Name: 'Boris Johnson', Matched:['anat62442@hotmail.co.uk'], Age: 22, AgeRange: { min: 18, max: 50 }, Email: 'damnPeasants@gmail.com', Gender: 'Male', GenderPreference: ['Male', 'Female'], Area: 'London', picture: 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2018/01/20/01/boris-johnson.jpg', Bio: 'Ra Ra Ra' },
	{ Name: 'Mitch Llyod', Matched:['anat62442@hotmail.co.uk'], Age: 27, AgeRange: { min: 20, max: 22 }, Email: 'mitcheyMitch@gmail.com', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://files.slack.com/files-pri/T1VHRHZE2-F8VT3409E/mitchfb.jpg', Bio: 'fierce typing!' }
];

const spotifyResults = [
	{
		Email: 'mitcheyMitch@gmail.com',
		"tracks": [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
				"trackName": "Pink Moon",
				"songUri": "spotify:track:1CbPLR6Xjo2nc0Pf13N0RS"
			},
			{
				"trackName": "Cheap Thrills",
				"songUri": "spotify:track:3S4px9f4lceWdKf0gWciFu"
			},
			{
				"trackName": "Voulez-Vous",
				"songUri": "spotify:track:4wZOmbYApgoF2zD9IHznDD"
			},
			{
				"trackName": "It's Just My Skin",
				"songUri": "spotify:track:0B0k37yUWHEB9MMJaBB3Eo"
			},
			{
				"trackName": "Know",
				"songUri": "spotify:track:1oqbUOYw2KuxuUUHdcwMbS"
			},
			{
				"trackName": "Find Me",
				"songUri": "spotify:track:2Wr970IfovsSGnfkE08iMF"
			},
			{
				"trackName": "Above The Clouds Of Pompeii",
				"songUri": "spotify:track:3cnkPRKvkItP5xGfnAPsAg"
			},
			{
				"trackName": "Which Will",
				"songUri": "spotify:track:4OQg4N07cIEI5OJ3L4hiA6"
			},
			{
				"trackName": "Broken Crown",
				"songUri": "spotify:track:5RI4Ecj8kvkH5W7q7mw4HU"
			},
			{
				"trackName": "Detroit",
				"songUri": "spotify:track:5y7IfSDhBHFVnlGj1UrlA1"
			},
			{
				"trackName": "Toxic",
				"songUri": "spotify:track:6I9VzXrHxO9rA9A5euc8Ak"
			},
			{
				"trackName": "Circus",
				"songUri": "spotify:track:7jk7gqyEonmVVYahZN5zhW"
			},
			{
				"trackName": "You",
				"songUri": "spotify:track:2s3IW4qMGuPBR2ka7jI66n"
			},
			{
				"trackName": "Skinny Love",
				"songUri": "spotify:track:1NyFRrFiJAJIaR6icj1goI"
			},
			{
				"trackName": "Towers",
				"songUri": "spotify:track:5mMV6EaKeZWkGFvE1xg13n"
			},
			{
				"trackName": "Free Ride",
				"songUri": "spotify:track:0OsiXfbG1wYhJYVutbfPpr"
			},
			{
				"trackName": "Orange Sky",
				"songUri": "spotify:track:0Y1fueUFu8jQtUxdUmOojf"
			},
			{
				"trackName": "We Turn Red",
				"songUri": "spotify:track:0cv2LgkvEoQiGgFWcZaAMA"
			}
		],
		artists: [
			[
				'Red Hot Chili Peppers',
				86
			],
			[
				'Nick Mulvey',
				65
			],
			[
				'George Ezra',
				73
			],
			[
				'Brothers Moving',
				37
			],
			[
				'Jack Johnson',
				81
			],
			[
				'The Lumineers',
				79
			],
			[
				'Sampha',
				71
			],
			[
				'Britney Spears',
				81
			],
			[
				'ABBA',
				76
			],
			[
				'Sia',
				91
			],
			[
				'Eddie Berman',
				58
			],
			[
				'Lady Gaga',
				84
			],
			[
				'Journey',
				75
			],
			[
				'Bon Iver',
				78
			],
			[
				'The Collection',
				42
			],
			[
				'Bear\'s Den',
				64
			],
			[
				'Bombay Bicycle Club',
				64
			],
			[
				'Mumford & Sons',
				79
			],
			[
				'Christina Aguilera',
				81
			],
			[
				'Kesha',
				83
			]
		],
		genres: {
			'alternative metal': 1,
			'alternative rock': 1,
			'funk metal': 1,
			'funk rock': 1,
			'modern rock': 5,
			'permanent wave': 1,
			'rock': 2,
			'chamber pop': 3,
			'indie anthem-folk': 3,
			'indie folk': 8,
			'indie r&b': 2,
			'neo mellow': 7,
			'folk-pop': 6,
			'neo-singer-songwriter': 1,
			'indie pop': 3,
			'stomp and holler': 3,
			'deep indie r&b': 1,
			'neo soul': 1,
			'pop': 6,
			'dance pop': 5,
			'pop christmas': 3,
			'post-teen pop': 4,
			'r&b': 2,
			'urban contemporary': 2,
			'europop': 1,
			'mellow gold': 2,
			'swedish pop': 1,
			'australian dance': 1,
			'deep new americana': 1,
			'new americana': 2,
			'album rock': 1,
			'classic rock': 1,
			'hard rock': 1,
			'soft rock': 1,
			'indie rock': 2,
			'melancholia': 1,
			'slow core': 1,
			'christian uplift': 1,
			'indiecoustica': 1,
			'stomp and flutter': 1,
			'alt-indie rock': 1,
			'alternative dance': 1,
			'british indie rock': 1,
			'dance-punk': 1,
			'garage rock': 1,
			'indietronica': 1,
			'new rave': 1,
			'shimmer pop': 1,
			'hip pop': 1
		}
	},
	{
		Email: 'dj_sam_lea@hotmail.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
				"trackName": "Pink Moon",
				"songUri": "spotify:track:1CbPLR6Xjo2nc0Pf13N0RS"
			},
			{
						"trackName" : "Red Eyes",
						"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
			},
			{
						"trackName" : "Just Another Girl",
						"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
			},
			{
						"trackName" : "10 Years Today",
						"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
			}
		],
		artists: [
			[
				'Everything Everything',
				59
			],
			[
				'Benny Sings',
				62
			],
			[
				'Johnny Green',
				53
			],
			[
				'Petula Clark',
				50
			],
			[
				'Dutch Uncles',
				35
			],
			[
				'Lone',
				47
			],
			[
				'Royal Stockholm Philharmonic Orchestra',
				47
			],
			[
				'Grizzly Bear',
				67
			],
			[
				'Air',
				64
			],
			[
				'Choir of King\'s College, Cambridge',
				67
			],
			[
				'BBC Philharmonic Orchestra',
				50
			],
			[
				'Leon Vynehall',
				48
			],
			[
				'Sampha',
				71
			],
			[
				'Steve Lacy',
				68
			],
			[
				'Ian Pooley',
				40
			],
			[
				'Jett Rebel',
				42
			],
			[
				'Buddy Rich',
				46
			],
			[
				'Charli XCX',
				82
			],
			[
				'Sister Sledge',
				62
			],
			[
				'Khruangbin',
				62
			]
		],
		genres: {
			'alt-indie rock': 1,
			'alternative dance': 3,
			'chamber psych': 2,
			'dance-punk': 2,
			'indie rock': 2,
			'indietronica': 5,
			'modern rock': 2,
			'new rave': 3,
			'deep indie r&b': 3,
			'hollywood': 1,
			'show tunes': 1,
			'adult standards': 1,
			'brill building pop': 1,
			'bubblegum pop': 1,
			'cabaret': 1,
			'christmas': 1,
			'easy listening': 1,
			'folk rock': 1,
			'lounge': 1,
			'mellow gold': 1,
			'merseybeat': 1,
			'motown': 2,
			'rock-and-roll': 1,
			'soft rock': 1,
			'british indie rock': 1,
			'math pop': 1,
			'bass music': 2,
			'chillwave': 2,
			'downtempo': 2,
			'electronic': 3,
			'escape room': 1,
			'float house': 2,
			'fluxwork': 2,
			'future funk': 1,
			'future garage': 2,
			'glitch': 1,
			'intelligent dance music': 1,
			'microhouse': 2,
			'outsider house': 2,
			'uk garage': 1,
			'vaporwave': 1,
			'wonky': 1,
			'swedish jazz': 1,
			'alternative rock': 1,
			'brooklyn indie': 1,
			'chamber pop': 1,
			'dream pop': 1,
			'folk-pop': 1,
			'freak folk': 1,
			'indie folk': 1,
			'indie pop': 1,
			'lo-fi': 1,
			'neo-psychedelic': 1,
			'new weird america': 1,
			'noise pop': 1,
			'shimmer pop': 1,
			'stomp and holler': 1,
			'synthpop': 1,
			'trip hop': 1,
			'chamber choir': 1,
			'choral': 2,
			'classical christmas': 1,
			'classical performance': 2,
			'orchestral': 2,
			'classical': 1,
			'concert piano': 1,
			'violin': 1,
			'chicago house': 1,
			'deep disco house': 1,
			'deep house': 2,
			'disco house': 3,
			'indie jazz': 2,
			'minimal tech house': 1,
			'tech house': 2,
			'indie r&b': 2,
			'neo soul': 1,
			'pop': 2,
			'dutch rock': 1,
			'bebop': 1,
			'big band': 1,
			'cool jazz': 1,
			'hard bop': 1,
			'jazz': 1,
			'jazz fusion': 1,
			'swing': 1,
			'candy pop': 1,
			'dance pop': 2,
			'metropopolis': 1,
			'post-teen pop': 1,
			'tropical house': 1,
			'classic funk rock': 1,
			'disco': 1,
			'europop': 1,
			'funk': 2,
			'new wave pop': 1,
			'post-disco': 1,
			'quiet storm': 1,
			'soul': 2,
			'vocal house': 1
		}
	},
	// {
	// 	Email: 'pkcopley@gmail.com',
	// 	tracks: [
	// 		{
	// 						"trackName" : "Red Eyes",
	// 						"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
	// 		},
	// 		{
	// 						"trackName" : "Just Another Girl",
	// 						"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
	// 		},
	// 		{
	// 						"trackName" : "10 Years Today",
	// 						"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
	// 		},
	// 		{
	// 						"trackName" : "The Awakening",
	// 						"songUri" : "spotify:track:0X0wvZuhTcTU03Roz9fPJA"
	// 		},
	// 		{
	// 						"trackName" : "Fear Of The Dark - 1998 Remastered Version",
	// 						"songUri" : "spotify:track:0P4JuEXYJmu2Q7BTtQW5nR"
	// 		},
	// 		{
	// 						"trackName" : "Run For Cover",
	// 						"songUri" : "spotify:track:77wm0pMH1wLe2VnBcIEU2r"
	// 		},
	// 		{
	// 						"trackName" : "Find Me",
	// 						"songUri" : "spotify:track:2mwnYvlLVP465u9V9wjUGj"
	// 		},
	// 		{
	// 						"trackName" : "Bad Motherfucker",
	// 						"songUri" : "spotify:track:7MtcHoqyYMFue7J8pmXZ8a"
	// 		},
	// 		{
	// 						"trackName" : "Worlds Collide",
	// 						"songUri" : "spotify:track:09mI7zWburIky0YaG4K3Wc"
	// 		},
	// 		{
	// 						"trackName" : "Blood",
	// 						"songUri" : "spotify:track:104mgrd5IU1W33TeNyFcf8"
	// 		},
	// 		{
	// 						"trackName" : "Megalomaniac",
	// 						"songUri" : "spotify:track:143sZgySA70Q8lzZp8wxsG"
	// 		},
	// 		{
	// 						"trackName" : "Out Of Our Heads",
	// 						"songUri" : "spotify:track:1ziWp8dB8hGHaPmP6wVYd3"
	// 		},
	// 		{
	// 						"trackName" : "10 Years Today",
	// 						"songUri" : "spotify:track:4oOUU9JGGYU14GuA2EGtZu"
	// 		},
	// 		{
	// 						"trackName" : "Zwitter",
	// 						"songUri" : "spotify:track:6lAwdkFyupZ9RKTMhk0RHy"
	// 		},
	// 		{
	// 						"trackName" : "Fake Tales Of San Francisco",
	// 						"songUri" : "spotify:track:7BuzJmV2h6eBbSDdRaDY7C"
	// 		},
	// 		{
	// 						"trackName" : "Testify",
	// 						"songUri" : "spotify:track:7lmeHLHBe4nmXzuXc0HDjk"
	// 		},
	// 		{
	// 						"trackName" : "The Trooper - 1998 Remastered Version",
	// 						"songUri" : "spotify:track:2pxAohyJptQWTQ5ZRWYijN"
	// 		},
	// 		{
	// 						"trackName" : "Hand Of Blood",
	// 						"songUri" : "spotify:track:1EJzHoU6rg1afMozs9t6aM"
	// 		},
	// 		{
	// 						"trackName" : "Dragon Age Inquisition Theme",
	// 						"songUri" : "spotify:track:23HykWgKpB4MkjqDHPbQIX"
	// 		},
	// 		{
	// 						"trackName" : "Run to the Hills - 1998 Remastered Version",
	// 						"songUri" : "spotify:track:2JS1iE5A5RHvUPH5Zl9jlF"
	// 		}
	// 	],
	// 	artists: [
	// 		[
	// 			'Bullet For My Valentine',
	// 			72
	// 		],
	// 		[
	// 			'The Killers',
	// 			82
	// 		],
	// 		[
	// 			'Nightwish',
	// 			67
	// 		],
	// 		[
	// 			'36 Crazyfists',
	// 			50
	// 		],
	// 		[
	// 			'zebrahead',
	// 			54
	// 		],
	// 		[
	// 			'Iron Maiden',
	// 			76
	// 		],
	// 		[
	// 			'Kings of Leon',
	// 			79
	// 		],
	// 		[
	// 			'Sum 41',
	// 			73
	// 		],
	// 		[
	// 			'The War On Drugs',
	// 			70
	// 		],
	// 		[
	// 			'Jeremy Soule',
	// 			63
	// 		],
	// 		[
	// 			'Oasis',
	// 			81
	// 		],
	// 		[
	// 			'Aaron Lewis',
	// 			61
	// 		],
	// 		[
	// 			'Apocalyptica',
	// 			62
	// 		],
	// 		[
	// 			'First Aid Kit',
	// 			73
	// 		],
	// 		[
	// 			'Disturbed',
	// 			79
	// 		],
	// 		[
	// 			'Mindless Self Indulgence',
	// 			56
	// 		],
	// 		[
	// 			'White Lies',
	// 			61
	// 		],
	// 		[
	// 			'Rammstein',
	// 			77
	// 		],
	// 		[
	// 			'The All-American Rejects',
	// 			71
	// 		],
	// 		[
	// 			'Onlap',
	// 			50
	// 		]
	// 	],
	// 	genres: {
	// 		'alternative metal': 11,
	// 		'groove metal': 2,
	// 		'melodic metalcore': 2,
	// 		'metalcore': 2,
	// 		'nu metal': 8,
	// 		'pop punk': 4,
	// 		'post-grunge': 8,
	// 		'rap metal': 3,
	// 		'rap rock': 4,
	// 		'screamo': 1,
	// 		'alternative rock': 3,
	// 		'indie christmas': 1,
	// 		'indie pop': 3,
	// 		'indie rock': 5,
	// 		'modern rock': 8,
	// 		'permanent wave': 2,
	// 		'pop christmas': 1,
	// 		'rock': 4,
	// 		'vegas indie': 1,
	// 		'finnish metal': 1,
	// 		'gothic metal': 1,
	// 		'gothic symphonic metal': 1,
	// 		'power metal': 2,
	// 		'progressive metal': 2,
	// 		'symphonic metal': 1,
	// 		'industrial metal': 3,
	// 		'emo': 2,
	// 		'funk metal': 1,
	// 		'punk': 2,
	// 		'skate punk': 1,
	// 		'album rock': 1,
	// 		'classic rock': 1,
	// 		'hard rock': 1,
	// 		'metal': 2,
	// 		'nwobhm': 1,
	// 		'garage rock': 2,
	// 		'neo mellow': 2,
	// 		'chamber pop': 2,
	// 		'freak folk': 1,
	// 		'indie folk': 2,
	// 		'indietronica': 2,
	// 		'deep chiptune': 1,
	// 		'epicore': 1,
	// 		'scorecore': 1,
	// 		'soundtrack': 1,
	// 		'video game music': 1,
	// 		'britpop': 1,
	// 		'contemporary country': 1,
	// 		'country': 1,
	// 		'country road': 1,
	// 		'modern country rock': 1,
	// 		'outlaw country': 1,
	// 		'redneck': 1,
	// 		'bow pop': 1,
	// 		'cello': 1,
	// 		'classical christmas': 1,
	// 		'heavy christmas': 1,
	// 		'folk-pop': 1,
	// 		'stomp and holler': 1,
	// 		'comic': 1,
	// 		'industrial rock': 2,
	// 		'alternative dance': 1,
	// 		'dance-punk': 1,
	// 		'new rave': 1,
	// 		'synthpop': 1,
	// 		'german metal': 1,
	// 		'industrial': 1,
	// 		'neue deutsche harte': 1,
	// 		'pop': 1,
	// 		'pop rap': 1,
	// 		'pop rock': 1,
	// 		'post-teen pop': 1,
	// 		'post-screamo': 1
	// 	}
	// },
	{
		Email: 'anat62442@hotmail.co.uk',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
				"trackName": "Pink Moon",
				"songUri": "spotify:track:1CbPLR6Xjo2nc0Pf13N0RS"
			},
			{
				"trackName": "Cheap Thrills",
				"songUri": "spotify:track:3S4px9f4lceWdKf0gWciFu"
			},
			{
				"trackName": "Voulez-Vous",
				"songUri": "spotify:track:4wZOmbYApgoF2zD9IHznDD"
			},
			{
				"trackName": "It's Just My Skin",
				"songUri": "spotify:track:0B0k37yUWHEB9MMJaBB3Eo"
			},
			{
				"trackName": "Know",
				"songUri": "spotify:track:1oqbUOYw2KuxuUUHdcwMbS"
			},
			{
				"trackName": "Find Me",
				"songUri": "spotify:track:2Wr970IfovsSGnfkE08iMF"
			},
			{
				"trackName": "Above The Clouds Of Pompeii",
				"songUri": "spotify:track:3cnkPRKvkItP5xGfnAPsAg"
			},
			{
				"trackName": "Which Will",
				"songUri": "spotify:track:4OQg4N07cIEI5OJ3L4hiA6"
			},
			{
				"trackName": "Broken Crown",
				"songUri": "spotify:track:5RI4Ecj8kvkH5W7q7mw4HU"
			},
			{
				"trackName": "Detroit",
				"songUri": "spotify:track:5y7IfSDhBHFVnlGj1UrlA1"
			},
			{
				"trackName": "Toxic",
				"songUri": "spotify:track:6I9VzXrHxO9rA9A5euc8Ak"
			},
			{
				"trackName": "Circus",
				"songUri": "spotify:track:7jk7gqyEonmVVYahZN5zhW"
			},
			{
				"trackName": "You",
				"songUri": "spotify:track:2s3IW4qMGuPBR2ka7jI66n"
			},
			{
				"trackName": "Skinny Love",
				"songUri": "spotify:track:1NyFRrFiJAJIaR6icj1goI"
			},
			{
				"trackName": "Towers",
				"songUri": "spotify:track:5mMV6EaKeZWkGFvE1xg13n"
			},
			{
				"trackName": "Free Ride",
				"songUri": "spotify:track:0OsiXfbG1wYhJYVutbfPpr"
			},
			{
				"trackName": "Orange Sky",
				"songUri": "spotify:track:0Y1fueUFu8jQtUxdUmOojf"
			},
			{
				"trackName": "We Turn Red",
				"songUri": "spotify:track:0cv2LgkvEoQiGgFWcZaAMA"
			}
		],
		artists: [
			[
				'Red Hot Chili Peppers',
				86
			],
			[
				'Nick Mulvey',
				65
			],
			[
				'George Ezra',
				73
			],
			[
				'Brothers Moving',
				37
			],
			[
				'Jack Johnson',
				81
			],
			[
				'The Lumineers',
				79
			],
			[
				'Sampha',
				71
			],
			[
				'Britney Spears',
				81
			],
			[
				'ABBA',
				76
			],
			[
				'Sia',
				91
			],
			[
				'Eddie Berman',
				58
			],
			[
				'Lady Gaga',
				84
			],
			[
				'Journey',
				75
			],
			[
				'Bon Iver',
				78
			],
			[
				'The Collection',
				42
			],
			[
				'Bear\'s Den',
				64
			],
			[
				'Bombay Bicycle Club',
				64
			],
			[
				'Mumford & Sons',
				79
			],
			[
				'Christina Aguilera',
				81
			],
			[
				'Kesha',
				83
			]
		],
		genres: {
			'alternative metal': 1,
			'alternative rock': 1,
			'funk metal': 1,
			'funk rock': 1,
			'modern rock': 5,
			'permanent wave': 1,
			'rock': 2,
			'chamber pop': 3,
			'indie anthem-folk': 3,
			'indie folk': 8,
			'indie r&b': 2,
			'neo mellow': 7,
			'folk-pop': 6,
			'neo-singer-songwriter': 1,
			'indie pop': 3,
			'stomp and holler': 3,
			'deep indie r&b': 1,
			'neo soul': 1,
			'pop': 6,
			'dance pop': 5,
			'pop christmas': 3,
			'post-teen pop': 4,
			'r&b': 2,
			'urban contemporary': 2,
			'europop': 1,
			'mellow gold': 2,
			'swedish pop': 1,
			'australian dance': 1,
			'deep new americana': 1,
			'new americana': 2,
			'album rock': 1,
			'classic rock': 1,
			'hard rock': 1,
			'soft rock': 1,
			'indie rock': 2,
			'melancholia': 1,
			'slow core': 1,
			'christian uplift': 1,
			'indiecoustica': 1,
			'stomp and flutter': 1,
			'alt-indie rock': 1,
			'alternative dance': 1,
			'british indie rock': 1,
			'dance-punk': 1,
			'garage rock': 1,
			'indietronica': 1,
			'new rave': 1,
			'shimmer pop': 1,
			'hip pop': 1
		}
	},
	{
		Email: 'megan.field@hotmail.co.uk',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
				"trackName": "Pink Moon",
				"songUri": "spotify:track:1CbPLR6Xjo2nc0Pf13N0RS"
			},
			{
				"trackName": "Cheap Thrills",
				"songUri": "spotify:track:3S4px9f4lceWdKf0gWciFu"
			},
			{
				"trackName": "Voulez-Vous",
				"songUri": "spotify:track:4wZOmbYApgoF2zD9IHznDD"
			},
			{
				"trackName": "It's Just My Skin",
				"songUri": "spotify:track:0B0k37yUWHEB9MMJaBB3Eo"
			},
			{
				"trackName": "Know",
				"songUri": "spotify:track:1oqbUOYw2KuxuUUHdcwMbS"
			},
			{
				"trackName": "Find Me",
				"songUri": "spotify:track:2Wr970IfovsSGnfkE08iMF"
			},
			{
				"trackName": "Above The Clouds Of Pompeii",
				"songUri": "spotify:track:3cnkPRKvkItP5xGfnAPsAg"
			},
			{
				"trackName": "Which Will",
				"songUri": "spotify:track:4OQg4N07cIEI5OJ3L4hiA6"
			},
			{
				"trackName": "Broken Crown",
				"songUri": "spotify:track:5RI4Ecj8kvkH5W7q7mw4HU"
			},
			{
				"trackName": "Detroit",
				"songUri": "spotify:track:5y7IfSDhBHFVnlGj1UrlA1"
			},
			{
				"trackName": "Toxic",
				"songUri": "spotify:track:6I9VzXrHxO9rA9A5euc8Ak"
			},
			{
				"trackName": "Circus",
				"songUri": "spotify:track:7jk7gqyEonmVVYahZN5zhW"
			},
			{
				"trackName": "You",
				"songUri": "spotify:track:2s3IW4qMGuPBR2ka7jI66n"
			},
			{
				"trackName": "Skinny Love",
				"songUri": "spotify:track:1NyFRrFiJAJIaR6icj1goI"
			},
			{
				"trackName": "Towers",
				"songUri": "spotify:track:5mMV6EaKeZWkGFvE1xg13n"
			},
			{
				"trackName": "Free Ride",
				"songUri": "spotify:track:0OsiXfbG1wYhJYVutbfPpr"
			},
			{
				"trackName": "Orange Sky",
				"songUri": "spotify:track:0Y1fueUFu8jQtUxdUmOojf"
			},
			{
				"trackName": "We Turn Red",
				"songUri": "spotify:track:0cv2LgkvEoQiGgFWcZaAMA"
			}	
		],
		artists: [
			[
				'Prince',
				75
			],
			[
				'RAY BLK',
				58
			],
			[
				'Bryson Tiller',
				85
			],
			[
				'Mos Def',
				68
			],
			[
				'PARTYNEXTDOOR',
				81
			],
			[
				'Aminé',
				77
			],
			[
				'NAO',
				66
			],
			[
				'IAMDDB',
				58
			],
			[
				'A$AP Rocky',
				91
			],
			[
				'Blood Orange',
				62
			],
			[
				'Noname',
				66
			],
			[
				'J HUS',
				75
			],
			[
				'2 Chainz',
				88
			],
			[
				'Romare',
				55
			],
			[
				'Jungle',
				60
			],
			[
				'Marvin Gaye',
				76
			],
			[
				'BJ The Chicago Kid',
				70
			],
			[
				'Drake',
				97
			],
			[
				'Rihanna',
				93
			],
			[
				'Sango',
				61
			]
		],
		genres: {
			'classic funk rock': 2,
			'dance pop': 3,
			'funk': 2,
			'funk rock': 2,
			'motown': 2,
			'soul': 2,
			'soul christmas': 3,
			'deep indie r&b': 8,
			'escape room': 7,
			'indie r&b': 9,
			'uk garage': 1,
			'dwn trap': 3,
			'pop': 8,
			'pop rap': 9,
			'r&b': 5,
			'rap': 8,
			'trap music': 5,
			'alternative hip hop': 1,
			'dirty south rap': 1,
			'east coast hip hop': 2,
			'gangster rap': 1,
			'hardcore hip hop': 1,
			'hip hop': 6,
			'neo soul': 4,
			'southern hip hop': 3,
			'deep pop r&b': 2,
			'urban contemporary': 3,
			'underground hip hop': 4,
			'vapor soul': 2,
			'alternative dance': 1,
			'chamber pop': 1,
			'chillwave': 1,
			'dance-punk': 1,
			'dream pop': 1,
			'freak folk': 1,
			'indie pop': 1,
			'indie rock': 1,
			'indietronica': 3,
			'metropopolis': 1,
			'neo-psychedelic': 1,
			'new rave': 2,
			'shimmer pop': 1,
			'synthpop': 1,
			'house': 1,
			'bass music': 1,
			'chamber psych': 1,
			'electronic': 1,
			'float house': 1,
			'french indietronica': 1,
			'indie jazz': 1,
			'microhouse': 1,
			'ninja': 1,
			'trip hop': 1,
			'adult standards': 1,
			'disco': 1,
			'quiet storm': 1,
			'canadian pop': 1,
			'pop christmas': 1,
			'abstract beats': 1,
			'trap latino': 1,
			'vapor twitch': 1
		}
	},
	{
		Email: 'notspiderman@hotmail.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
				"trackName": "Pink Moon",
				"songUri": "spotify:track:1CbPLR6Xjo2nc0Pf13N0RS"
			},
			{
				"trackName": "Cheap Thrills",
				"songUri": "spotify:track:3S4px9f4lceWdKf0gWciFu"
			},
			{
				"trackName": "Voulez-Vous",
				"songUri": "spotify:track:4wZOmbYApgoF2zD9IHznDD"
			},
			{
				"trackName": "It's Just My Skin",
				"songUri": "spotify:track:0B0k37yUWHEB9MMJaBB3Eo"
			},
			{
				"trackName": "Know",
				"songUri": "spotify:track:1oqbUOYw2KuxuUUHdcwMbS"
			},
			{
				"trackName": "Find Me",
				"songUri": "spotify:track:2Wr970IfovsSGnfkE08iMF"
			},
			{
				"trackName": "Above The Clouds Of Pompeii",
				"songUri": "spotify:track:3cnkPRKvkItP5xGfnAPsAg"
			},
			{
				"trackName": "Which Will",
				"songUri": "spotify:track:4OQg4N07cIEI5OJ3L4hiA6"
			},
			{
				"trackName": "Broken Crown",
				"songUri": "spotify:track:5RI4Ecj8kvkH5W7q7mw4HU"
			},
			{
				"trackName": "Detroit",
				"songUri": "spotify:track:5y7IfSDhBHFVnlGj1UrlA1"
			},
			{
				"trackName": "Toxic",
				"songUri": "spotify:track:6I9VzXrHxO9rA9A5euc8Ak"
			},
			{
				"trackName": "Circus",
				"songUri": "spotify:track:7jk7gqyEonmVVYahZN5zhW"
			},
			{
				"trackName": "You",
				"songUri": "spotify:track:2s3IW4qMGuPBR2ka7jI66n"
			},
			{
				"trackName": "The One and Only",
				"songUri": "spotify:track:0cv2LgkvEoQiGgFWcZaAMA"
			}
		],
		artists: [
			[
				'Michael Jackson',
				75
			],
			[
				'The Police',
				58
			],
			[
				'Bryson Tiller',
				85
			],
			[
				'Mos Def',
				68
			],
			[
				'The Corrs',
				81
			],
			[
				'Paul Simon',
				77
			],
			[
				'Coldplay',
				66
			],
			[
				'Justin Timberlake',
				58
			],
			[
				'A$AP Rocky',
				91
			],
			[
				'Blood Orange',
				62
			],
			[
				'Noname',
				66
			],
			[
				'Claudia',
				75
			],
			[
				'Tears For Fears',
				88
			],
			[
				'Toto',
				55
			],
			[
				'Jungle',
				60
			],
			[
				'Marvin Gaye',
				76
			],
			[
				'The Beatles',
				70
			],
			[
				'Drake',
				97
			],
			[
				'Rihanna',
				93
			],
			[
				'U2',
				61
			]
		],
		genres: {
			'classic funk rock': 2,
			'dance pop': 3,
			'funk': 2,
			'funk rock': 2,
			'motown': 2,
			'soul': 2,
			'soul christmas': 3,
			'deep indie r&b': 8,
			'escape room': 7,
			'indie r&b': 9,
			'quiet storm': 1,
			'art rock': 3,
			'europop': 2,
			'motown': 1
		}
	},
	{
		Email: 'iraqioil2003@gmail.com',
		tracks: [
			{
			"trackName": "Money, Money, Money",
			"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
		},
		{
			"trackName": "Papaoutai",
			"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
		},
		{
			"trackName": "Pink Moon",
			"songUri": "spotify:track:1CbPLR6Xjo2nc0Pf13N0RS"
		},
		{
			"trackName": "Cheap Thrills",
			"songUri": "spotify:track:3S4px9f4lceWdKf0gWciFu"
		},
		{
			"trackName": "Voulez-Vous",
			"songUri": "spotify:track:4wZOmbYApgoF2zD9IHznDD"
		}, 
		{
					"trackName" : "Red Eyes",
					"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
		},
		{
					"trackName" : "Just Another Girl",
					"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
		},
		{
					"trackName" : "10 Years Today",
					"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
		},
		{
					"trackName" : "The Awakening",
					"songUri" : "spotify:track:0X0wvZuhTcTU03Roz9fPJA"
		},
		{
					"trackName" : "Fear Of The Dark - 1998 Remastered Version",
					"songUri" : "spotify:track:0P4JuEXYJmu2Q7BTtQW5nR"
		},
		{
					"trackName" : "Run For Cover",
					"songUri" : "spotify:track:77wm0pMH1wLe2VnBcIEU2r"
		}
		],
		artists: [
			[
				'Rihanna',
				75
			],
			[
				'The Killers',
				58
			],
			[
				'Smash Mouth',
				85
			],
			[
				'Joan Osborne',
				68
			],
			[
				'Bombay Bicycle Club',
				81
			],
			[
				'Aminé',
				77
			],
			[
				'Paul McCartney',
				66
			],
			[
				'The Divine Comedy',
				58
			],
			[
				'A$AP Rocky',
				91
			],
			[
				'David Bowie',
				62
			],
			[
				'Noname',
				66
			],
			[
				'J HUS',
				75
			],
			[
				'a-ha',
				88
			],
			[
				'Crushed Beaks',
				55
			],
			[
				'Curtis Mayfield',
				60
			],
			[
				'Bob James',
				76
			],
			[
				'Dire Straits',
				70
			],
			[
				'Charlie XCX',
				97
			],
			[
				'SOPHIE',
				93
			],
			[
				'Everything Everything',
				61
			]
		],
		genres: {
			'classic funk rock': 2,
			'dance pop': 3,
			'funk': 2,
			'funk rock': 2,
			'motown': 2,
			'rock-and-roll': 1,
			'soft rock': 1,
			'british indie rock': 1,
			'math pop': 1,
			'fluxwork': 2,
			'future funk': 1,
			'future garage': 2,
			'glitch': 1,
			'intelligent dance music': 1,
			'swedish jazz': 1,
			'alternative rock': 1,
			'brooklyn indie': 1,
			'chamber pop': 1
		}
	},
	{
		Email: 'communistmanifesto@live.co.uk',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
				"trackName": "Pink Moon",
				"songUri": "spotify:track:1CbPLR6Xjo2nc0Pf13N0RS"
			},
			{
				"trackName": "Cheap Thrills",
				"songUri": "spotify:track:3S4px9f4lceWdKf0gWciFu"
			},
			{
				"trackName": "Voulez-Vous",
				"songUri": "spotify:track:4wZOmbYApgoF2zD9IHznDD"
			},
			{
				"trackName": "It's Just My Skin",
				"songUri": "spotify:track:0B0k37yUWHEB9MMJaBB3Eo"
			},
			{
				"trackName": "Know",
				"songUri": "spotify:track:1oqbUOYw2KuxuUUHdcwMbS"
			},
			{
				"trackName": "Find Me",
				"songUri": "spotify:track:2Wr970IfovsSGnfkE08iMF"
			}
		],
		artists: [
			[
				'The White Stripes',
				75
			],
			[
				'Zedd',
				58
			],
			[
				'Oasis',
				85
			],
			[
				'Foals',
				68
			],
			[
				'Arcade Fire',
				81
			],
			[
				'Ke$ha',
				77
			],
			[
				'Johnny Cash',
				66
			],
			[
				'Talking Heads',
				58
			],
			[
				'Halsey',
				91
			],
			[
				'Everything Everything',
				59
			],
			[
				'Benny Sings',
				62
			],
			[
				'Johnny Green',
				53
			],
			[
				'Petula Clark',
				50
			],
			[
				'Dutch Uncles',
				35
			],
			[
				'Lone',
				47
			],
			[
				'Grizzly Bear',
				67
			],
			[
				'Air',
				64
			],
			[
				'R.E.M.',
				64
			],
			[
				'ABBA',
				64
			],
			[
				'Kylie Minogue',
				62
			]
		],
		genres: {
			'permanent wave': 2,
			'pop christmas': 1,
			'rock': 4,
			'vegas indie': 1,
			'finnish metal': 1,
			'gothic metal': 1,
			'gothic symphonic metal': 1,
			'power metal': 2,
			'progressive metal': 2,
			'garage rock': 2,
			'neo mellow': 2,
			'chamber pop': 2,
			'freak folk': 1,
			'dance pop': 5,
			'post-teen pop': 4,
			'r&b': 2,
			'urban contemporary': 2,
			'europop': 1,
			'mellow gold': 2,
			'swedish pop': 1,
			'australian dance': 1,
			'deep new americana': 1,
			'new americana': 2,
			'album rock': 1,
			'classic rock': 1,
			'hard rock': 1,
			'soft rock': 1,
			'indie rock': 2,
			'melancholia': 1,
			'scorecore': 1,
			'soundtrack': 1,
		}
	},
	{
		Email: 'bedroom_tax_2017@conservatives.co.uk',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
				"trackName": "Pink Moon",
				"songUri": "spotify:track:1CbPLR6Xjo2nc0Pf13N0RS"
			},
			{
				"trackName" : "Red Eyes",
				"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
			}
		],
		artists: [
			[
				'Bullet For My Valentine',
				72
			],
			[
				'The Killers',
				82
			],
			[
				'Nightwish',
				67
			],
			[
				'Lil Pump',
				50
			],
			[
				'zebrahead',
				54
			],
			[
				'Iron Maiden',
				76
			],
			[
				'Kings of Leon',
				79
			],
			[
				'Sum 41',
				73
			],
			[
				'The War On Drugs',
				70
			],
			[
				'Jeremy Soule',
				63
			],
			[
				'Ellie Goulding',
				81
			],
			[
				'Aaron Lewis',
				61
			],
			[
				'Apocalyptica',
				62
			],
			[
				'First Aid Kit',
				73
			],
			[
				'Disturbed',
				79
			],
			[
				'Adele',
				56
			],
			[
				'White Lies',
				61
			],
			[
				'Arcade Fire',
				77
			],
			[
				'The All-American Rejects',
				71
			],
			[
				'Christina Aguilera',
				50
			]
		],
		genres: {
			'classic funk rock': 2,
			'deep indie r&b': 2,
			'escape room': 4,
			'indie r&b': 2,
			'uk garage': 1,
			'dwn trap': 3,
			'pop': 8,
			'pop rap': 9,
			'r&b': 5,
			'rap': 8,
			'trap music': 5,
			'alternative hip hop': 8,
			'dirty south rap': 1,
			'east coast hip hop': 2,
			'gangster rap': 1,
			'dream pop': 1,
			'freak folk': 1,
			'indie pop': 1,
			'indie rock': 1,
			'indietronica': 3,
			'metropopolis': 1,
			'neo-psychedelic': 6,
			'new rave': 2,
			'shimmer pop': 1,
			'synthpop': 1,
			'adult standards': 5,
			'disco': 1,
			'quiet storm': 3,
			'canadian pop': 1,
			'pop christmas': 1,
			'abstract beats': 1,
			'trap latino': 5,
			'vapor twitch': 1
		}
	},
	{
		Email: 'LKBOI@hotmail.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
				"trackName": "Pink Moon",
				"songUri": "spotify:track:1CbPLR6Xjo2nc0Pf13N0RS"
			}
		],
		artists: [
			[
				'Sampha',
				71
			],
			[
				'Britney Spears',
				81
			],
			[
				'ABBA',
				76
			],
			[
				'Sia',
				91
			],
			[
				'Eddie Berman',
				58
			],
			[
				'Lady Gaga',
				84
			],
			[
				'Journey',
				75
			],
			[
				'Bon Iver',
				78
			],
			[
				'Jett Rebel',
				42
			],
			[
				'Buddy Rich',
				46
			],
			[
				'Charli XCX',
				82
			],
			[
				'Sister Sledge',
				62
			],
			[
				'The Killers',
				82
			],
			[
				'Iron Maiden',
				76
			],
			[
				'Kings of Leon',
				79
			],
			[
				'Sum 41',
				73
			],
			[
				'The War On Drugs',
				70
			],
			[
				'Jeremy Soule',
				63
			],
			[
				'Oasis',
				81
			],
			[
				'Khruangbin',
				62
			]
		],
		genres: {
			'alt-indie rock': 1,
			'alternative dance': 3,
			'chamber psych': 2,
			'dance-punk': 2,
			'indie rock': 2,
			'indietronica': 5,
			'modern rock': 2,
			'indie folk': 2,
			'indietronica': 2,
			'deep chiptune': 1,
			'epicore': 1,
			'scorecore': 1,
			'soundtrack': 1,
			'video game music': 1,
			'britpop': 1,
			'contemporary country': 1,
			'country': 1,
			'country road': 1,
			'modern country rock': 1,
			'outlaw country': 1,
			'redneck': 1,
			'bow pop': 1,
			'cello': 1,
			'classical christmas': 1,
			'heavy christmas': 1,
			'folk-pop': 1,
			'stomp and holler': 1,
			'comic': 1,
			'industrial rock': 2,
			'alternative dance': 1,
			'dance-punk': 1,
			'new rave': 1,
			'synthpop': 1,
			'german metal': 1,
			'industrial': 1,
			'neue deutsche harte': 1,
			'pop': 1,
			'float house': 2,
			'fluxwork': 2,
			'future funk': 1,
			'future garage': 2,
			'glitch': 1,
			'intelligent dance music': 1,
			'microhouse': 2,
			'outsider house': 2,
			'uk garage': 1,
			'vaporwave': 1,
			'wonky': 1,
			'swedish jazz': 1,
			'alternative rock': 1,
			'brooklyn indie': 1,
			'chamber pop': 1,
			'dream pop': 1,
			'alternative metal': 1,
			'alternative rock': 1,
			'funk metal': 1,
			'funk rock': 1,
			'modern rock': 5,
			'permanent wave': 1,
			'rock': 2,
			'chamber pop': 3,
			'indie anthem-folk': 3,
			'indie folk': 8,
			'indie r&b': 2,
			'neo mellow': 7,
			'folk-pop': 6,
			'neo-singer-songwriter': 1,
			'indie pop': 3,
			'stomp and holler': 3,
			'deep indie r&b': 1,
			'neo soul': 1,
			'pop': 6,
			'dance pop': 5,
			'pop christmas': 3,
			'post-teen pop': 4,
			'r&b': 2,
			'urban contemporary': 2,
			'europop': 1,
			'mellow gold': 2,
			'swedish pop': 1,
			'australian dance': 1,
			'deep new americana': 1,
			'new americana': 2,
			'album rock': 1,
			'classic rock': 1,
			'hard rock': 1,
			'soft rock': 1,
			'indie rock': 2,
			'melancholia': 1,
			'slow core': 1,
			'christian uplift': 1,
			'indiecoustica': 1,
			'stomp and flutter': 1,
			'alt-indie rock': 1,
			'alternative dance': 1,
			'british indie rock': 1,
			'dance-punk': 1,
			'garage rock': 1,
			'indietronica': 1,
			'new rave': 1,
			'shimmer pop': 1,
			'hip pop': 1
		}
	},
	{
		Email: 'gatsby123@hotmail.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
				"trackName": "Pink Moon",
				"songUri": "spotify:track:1CbPLR6Xjo2nc0Pf13N0RS"
			},
			{
						"trackName" : "Red Eyes",
						"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
			},
			{
						"trackName" : "Just Another Girl",
						"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
			},
			{
						"trackName" : "10 Years Today",
						"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
			}
		],
		artists: [
			[
				'Bullet For My Valentine',
				72
			],
			[
				'The Killers',
				82
			],
			[
				'Nightwish',
				67
			],
			[
				'36 Crazyfists',
				50
			],
			[
				'zebrahead',
				54
			],
			[
				'Iron Maiden',
				76
			],
			[
				'Kings of Leon',
				79
			],
			[
				'Sum 41',
				73
			],
			[
				'The War On Drugs',
				70
			],
			[
				'Jeremy Soule',
				63
			],
			[
				'Oasis',
				81
			],
			[
				'Aaron Lewis',
				61
			],
			[
				'Apocalyptica',
				62
			],
			[
				'First Aid Kit',
				73
			],
			[
				'Disturbed',
				79
			],
			[
				'Mindless Self Indulgence',
				56
			],
			[
				'White Lies',
				61
			],
			[
				'Rammstein',
				77
			],
			[
				'Bombay Bicycle Club',
				64
			],
			[
				'Mumford & Sons',
				79
			],
		],
		genres: {
			'alt-indie rock': 1,
			'alternative dance': 3,
			'chamber psych': 2,
			'dance-punk': 2,
			'outlaw country': 1,
			'redneck': 1,
			'bow pop': 1,
			'cello': 1,
			'classical christmas': 1,
			'heavy christmas': 1,
			'folk-pop': 1,
			'stomp and holler': 1,
			'comic': 1,
			'industrial rock': 2,
			'alternative dance': 1,
			'dance-punk': 1,
			'new rave': 1,
			'synthpop': 1,
			'german metal': 1,
			'industrial': 1,
			'neue deutsche harte': 1,
			'pop': 1,
			'float house': 2,
			'fluxwork': 2,
			'future funk': 1,
			'future garage': 2,
			'glitch': 1,
			'intelligent dance music': 1,
			'microhouse': 2,
			'outsider house': 2,
			'uk garage': 1,
			'vaporwave': 1,
			'wonky': 1,
			'swedish jazz': 1,
			'alternative rock': 1,
			'brooklyn indie': 1,
			'chamber pop': 1,
			'dream pop': 1,
			'alternative metal': 1,
			'alternative rock': 1,
			'funk metal': 1,
			'progressive metal': 2,
			'symphonic metal': 1,
			'industrial metal': 3,
			'emo': 2,
			'funk metal': 1,
			'punk': 2,
			'skate punk': 1,
			'album rock': 1,
			'classic rock': 1,
			'hard rock': 1,
			'metal': 2,
			'nwobhm': 1,
			'garage rock': 2,
			'neo mellow': 2,
			'chamber pop': 2,
			'freak folk': 1,
			'indie folk': 2,
			'indietronica': 2,
			'deep chiptune': 1,
			'epicore': 1,
			'scorecore': 1,
			'soundtrack': 1,
			'video game music': 1,
			'britpop': 1,
			'contemporary country': 1,
			'country': 1,
			'country road': 1,
			'modern country rock': 1,
		}
	},
	{
		Email: 'amy_Q@hotmail.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
				"trackName": "Pink Moon",
				"songUri": "spotify:track:1CbPLR6Xjo2nc0Pf13N0RS"
			},
			{
						"trackName" : "Red Eyes",
						"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
			},
			{
						"trackName" : "Just Another Girl",
						"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
			},
			{
						"trackName" : "10 Years Today",
						"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
			}
		],
		artists: [
			[
				'A$AP Rocky',
				91
			],
			[
				'Blood Orange',
				62
			],
			[
				'Noname',
				66
			],
			[
				'J HUS',
				75
			],
			[
				'2 Chainz',
				88
			],
			[
				'Romare',
				55
			],
			[
				'Jungle',
				60
			]
		],
		genres: {
			'dance-punk': 1,
			'dream pop': 1,
			'freak folk': 1,
			'indie pop': 1,
			'indie rock': 1,
			'indietronica': 3,
			'metropopolis': 1,
			'neo-psychedelic': 1,
			'new rave': 2,
			'shimmer pop': 1,
			'synthpop': 1,
			'house': 1,
			'bass music': 1,
			'chamber psych': 1,
			'electronic': 1,
			'float house': 1,
			'french indietronica': 1,
			'indie jazz': 1,
			'microhouse': 1,
			'ninja': 1,
			'trip hop': 1,
			'adult standards': 1,
			'disco': 1,
			'quiet storm': 1,
			'canadian pop': 1,
			'pop christmas': 1
		}
	},
	{
		Email: 'wileaf@hotmail.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			}
		],
		artists: [
			[
				'First Aid Kit',
				73
			],
			[
				'Disturbed',
				79
			],
			[
				'Mindless Self Indulgence',
				56
			],
			[
				'White Lies',
				61
			],
			[
				'Rammstein',
				77
			],
			[
				'The All-American Rejects',
				71
			],
			[
				'Onlap',
				50
			]
			[
			'Jungle',
			60
			]
		],
		genres: {
			'dance-punk': 1,
			'dream pop': 1,
			'freak folk': 1,
			'pop': 6,
			'dance pop': 5,
			'pop christmas': 3,
			'post-teen pop': 4,
			'r&b': 2,
			'urban contemporary': 2,
			'europop': 1,
			'mellow gold': 2,
			'swedish pop': 1,
			'australian dance': 1,
			'deep new americana': 1,
			'new americana': 2,
			'album rock': 1,
			'classic rock': 1,
			'hard rock': 1,
			'soft rock': 1,
			'indie rock': 2,
			'melancholia': 1,
			'slow core': 1,
			'christian uplift': 1,
			'indiecoustica': 1,
			'stomp and flutter': 1,
			'alt-indie rock': 1,
			'alternative dance': 1,
			'british indie rock': 1,
			'dance-punk': 1
		}
	},
	{
		Email: 'marge.baird@hotmail.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
						"trackName" : "Red Eyes",
						"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
			},
			{
						"trackName" : "Just Another Girl",
						"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
			},
			{
						"trackName" : "10 Years Today",
						"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
			}
		],
		artists: [
			[
				'Everything Everything',
				59
			],
			[
				'Benny Sings',
				62
			],
			[
				'Johnny Green',
				53
			],
			[
				'Petula Clark',
				50
			],
			[
				'Dutch Uncles',
				35
			],
			[
				'Lone',
				47
			],
			[
				'Royal Stockholm Philharmonic Orchestra',
				47
			],
			[
				'Grizzly Bear',
				67
			],
			[
				'Air',
				64
			],
			[
				'Choir of King\'s College, Cambridge',
				67
			],
			[
				'BBC Philharmonic Orchestra',
				50
			],
			[
				'Leon Vynehall',
				48
			],
			[
				'Sampha',
				71
			],
			[
				'Eddie Berman',
				58
			],
			[
				'Lady Gaga',
				84
			],
			[
				'Journey',
				75
			],
			[
				'Bon Iver',
				78
			],
			[
				'The Collection',
				42
			],
			[
				'Bear\'s Den',
				64
			]
		],
		genres: {
			'alt-indie rock': 1,
			'alternative dance': 3,
			'chamber psych': 2,
			'dance-punk': 2,
			'indie rock': 2,
			'indietronica': 5,
			'modern rock': 2,
			'new rave': 3,
			'deep indie r&b': 3,
			'hollywood': 1,
			'show tunes': 1,
			'adult standards': 1,
			'brill building pop': 1,
			'bubblegum pop': 1,
			'cabaret': 1,
			'christmas': 1,
			'easy listening': 1,
			'folk rock': 1,
			'lounge': 1,
			'mellowdirty south rap': 1,
			'east coast hip hop': 2,
			'gangster rap': 1,
			'hardcore hip hop': 1,
			'hip hop': 6,
			'neo soul': 4,
			'southern hip hop': 3,
			'deep pop r&b': 2,
			'urban contemporary': 3,
			'underground hip hop': 4,
			'vapor soul': 2,
			'chamber pop': 1,
			'chillwave': 1,
			'dream pop': 1,
			'freak folk': 1,
			'indie pop': 1,
			'metropopolis': 1,
			'indie jazz': 2,
			'minimal tech house': 1,
			'tech house': 2,
			'indie r&b': 2,
			'pop': 2,
			'dutch rock': 1,
			'bebop': 1,
			'big band': 1,
			'cool jazz': 1,
			'hard bop': 1,
			'jazz': 1,
			'jazz fusion': 1,
			'swing': 1,
			'candy pop': 1,
			'dance pop': 2,
			'post-teen pop': 1,
			'tropical house': 1,
			'classic funk rock': 1,
			'disco': 1,
			'europop': 1,
			'funk': 2,
			'new wave pop': 1,
			'post-disco': 1,
			'quiet storm': 1,
			'soul': 2,
			'vocal house': 1
		}
	},
	{
		Email: 'john.l@hotmail.co.uk',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
						"trackName" : "Red Eyes",
						"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
			},
			{
						"trackName" : "Just Another Girl",
						"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
			},
			{
						"trackName" : "10 Years Today",
						"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
			}
		],
		artists: [
			[
				'Bon Iver',
				78
			],
			[
				'The Collection',
				42
			],
			[
				'Bear\'s Den',
				64
			],
			[
				'Petula Clark',
				50
			],
			[
				'Dutch Uncles',
				35
			],
			[
				'Lone',
				47
			],
			[
				'Royal Stockholm Philharmonic Orchestra',
				47
			],
			[
				'Grizzly Bear',
				67
			],
			[
				'Air',
				64
			],
			[
				'Choir of King\'s College, Cambridge',
				67
			],
			[
				'BBC Philharmonic Orchestra',
				50
			],
			[
				'Bryson Tiller',
				85
			],
			[
				'A$AP Rocky',
				91
			],
			[
				'Blood Orange',
				62
			],
			[
				'Noname',
				66
			],
			[
				'J HUS',
				75
			],
			[
				'2 Chainz',
				88
			],
			[
				'Romare',
				55
			],
			[
				'Jungle',
				93
			],
			[
				'Sango',
				61
			]
		],
		genres: {
			'german metal': 1,
			'industrial': 1,
			'neue deutsche harte': 1,
			'pop': 1,
			'pop rap': 1,
			'pop rock': 1,
			'post-teen pop': 1,
			'post-screamo': 1,
			'alt-indie rock': 1,
			'alternative dance': 3,
			'chamber psych': 2,
			'dance-punk': 2,
			'indie rock': 2,
			'indietronica': 5,
			'modern rock': 2,
			'new rave': 3,
			'deep indie r&b': 3,
			'hollywood': 1,
			'show tunes': 1,
			'adult standards': 1,
			'brill building pop': 1,
			'bubblegum pop': 1,
			'cabaret': 1,
			'christmas': 1,
			'easy listening': 1,
			'folk rock': 1,
			'lounge': 1,
			'mellowdirty south rap': 1,
			'east coast hip hop': 2,
			'gangster rap': 1,
			'hardcore hip hop': 1,
			'hip hop': 6,
			'neo soul': 4,
			'southern hip hop': 3,
			'deep pop r&b': 2,
			'urban contemporary': 3,
			'underground hip hop': 4,
			'vapor soul': 2,
			'alternative dance': 1,
			'chamber pop': 1,
			'chillwave': 1,
			'dance-punk': 1,
			'dream pop': 1,
			'freak folk': 1,
			'indie pop': 1,
			'indie rock': 1,
			'indietronica': 3,
			'metropopolis': 1,
			'indie jazz': 2,
			'minimal tech house': 1,
			'tech house': 2,
			'indie r&b': 2,
			'indie jazz': 2,
			'minimal tech house': 1,
			'tech house': 2,
			'indie r&b': 2,
			'neo soul': 1,
			'pop': 2,
			'dutch rock': 1,
			'bebop': 1,
			'big band': 1,
			'cool jazz': 1,
			'hard bop': 1,
			'jazz': 1,
			'jazz fusion': 1,
			'swing': 1,
			'candy pop': 1,
			'dance pop': 2,
			'metropopolis': 1,
			'post-teen pop': 1,
		}
	},
	{
		Email: 'josephjkson@hotmail.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
						"trackName" : "Red Eyes",
						"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
			},
			{
						"trackName" : "Just Another Girl",
						"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
			},
			{
						"trackName" : "10 Years Today",
						"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
			}
		],
		artists: [
			[
				'Pitbull',
				89
			],
			[
				'ABBA',
				89
			],
			[
				'Cheeky Girls',
				27
			],
			[
				'Kiss',
				75
			],
			[
				'Queen',
				35
			],
			[
				'Lone',
				47
			],
			[
				'Cinematic  Orchestra',
				47
			],
			[
				'Bryson Tiller',
				85
			],
			[
				'Mos Def',
				68
			],
			[
				'Katy Perry',
				81
			],
			[
				'Aminé',
				77
			],
			[
				'NAO',
				66
			],
			[
				'Billy Ray Cyrus',
				58
			],
			[
				'A$AP Rocky',
				91
			],
			[
				'Blood Orange',
				62
			],
			[
				'Noname',
				66
			],
			[
				'J HUS',
				75
			],
			[
				'Drake',
				97
			],
			[
				'Rihanna',
				93
			],
			[
				'Sango',
				61
			]
		],
		genres: {
			'christmas': 1,
			'easy listening': 1,
			'folk rock': 1,
			'lounge': 1,
			'mellowdirty south rap': 1,
			'east coast hip hop': 2,
			'gangster rap': 1,
			'hardcore hip hop': 1,
			'hip hop': 6,
			'neo soul': 4,
			'southern hip hop': 3,
			'deep pop r&b': 2,
			'urban contemporary': 3,
			'hard bop': 1,
			'jazz': 1,
			'jazz fusion': 1,
			'swing': 1,
			'candy pop': 1,
			'dance pop': 2,
			'metropopolis': 1,
			'post-teen pop': 1,
		}
	},
	{
		Email: 'xoxchazbase@hotmail.co.uk',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
						"trackName" : "Red Eyes",
						"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
			},
			{
						"trackName" : "Just Another Girl",
						"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
			},
			{
						"trackName" : "10 Years Today",
						"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
			}
		],
		artists: [
			[
				'Pitbull',
				89
			],
			[
				'ABBA',
				89
			],
			[
				'Cheeky Girls',
				27
			],
			[
				'Kiss',
				75
			],
			[
				'Queen',
				35
			],
			[
				'Lone',
				47
			],
			[
				'Cinematic  Orchestra',
				47
			],
			[
				'Bryson Tiller',
				85
			],
			[
				'Mos Def',
				68
			],
			[
				'Katy Perry',
				81
			],
			[
				'Aminé',
				77
			],
			[
				'NAO',
				66
			],
			[
				'Billy Ray Cyrus',
				58
			],
			[
				'A$AP Rocky',
				91
			],
			[
				'Blood Orange',
				62
			],
			[
				'Noname',
				66
			],
			[
				'J HUS',
				75
			],
			[
				'Drake',
				97
			],
			[
				'Rihanna',
				93
			],
			[
				'Sango',
				61
			]
		],
		genres: {
			'christmas': 1,
			'easy listening': 1,
			'folk rock': 1,
			'jazz fusion': 1,
			'swing': 1,
			'candy pop': 1,
			'dance pop': 2,
			'metropopolis': 1,
			'post-teen pop': 1,
			'alternative rock': 3,
			'indie christmas': 1,
			'indie pop': 3,
			'indie rock': 5,
			'modern rock': 8,
			'permanent wave': 2,
			'pop christmas': 1,
			'rock': 4,
			'vegas indie': 1,
			'finnish metal': 1,
			'gothic metal': 1,
			'gothic symphonic metal': 1,
			'power metal': 2,
			'progressive metal': 2,
			'symphonic metal': 1,
			'industrial metal': 3,
			'emo': 2,
		}
	},
	{
		Email: 'winter@iscoming.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			}
		],
		artists: [
			[
				'Sampha',
				71
			],
			[
				'Britney Spears',
				81
			],
			[
				'ABBA',
				76
			],
			[
				'Sia',
				91
			],
			[
				'Eddie Berman',
				58
			],
			[
				'Lady Gaga',
				84
			],
			[
				'Journey',
				75
			],
			[
				'Bon Iver',
				78
			],
			[
				'The Collection',
				42
			],
			[
				'Bear\'s Den',
				64
			],
			[
				'Bombay Bicycle Club',
				64
			],
			[
				'Mumford & Sons',
				79
			],
			[
				'Christina Aguilera',
				81
			],
			[
				'Kesha',
				83
			],
			[
				'Charli XCX',
				82
			],
			[
				'Sister Sledge',
				62
			],
			[
				'Khruangbin',
				62
			]
		],
		genres: {
			'classic funk rock': 2,
			'dance pop': 3,
			'funk': 2,
			'funk rock': 2,
			'motown': 2,
			'soul': 2,
			'soul christmas': 3,
			'deep indie r&b': 8,
			'escape room': 7,
			'indie r&b': 9,
			'uk garage': 1,
			'dwn trap': 3,
			'pop': 8,
			'pop rap': 9,
			'r&b': 5,
			'rap': 8,
			'trap music': 5,
			'alternative hip hop': 1,
			'dirty south rap': 1,
			'east coast hip hop': 2,
			'gangster rap': 1,
			'hardcore hip hop': 1,
			'hip hop': 6,
			'neo soul': 4,
			'southern hip hop': 3,
			'deep pop r&b': 2,
			'urban contemporary': 3,
			'underground hip hop': 4,
			'vapor soul': 2,
			'alternative dance': 1,
			'chamber pop': 1,
			'chillwave': 1,
			'dance-punk': 1,
			'dream pop': 1,
			'freak folk': 1,
			'indie pop': 1,
			'indie rock': 1,
			'indietronica': 3,
			'metropopolis': 1,
			'neo-psychedelic': 1,
			'brooklyn indie': 1,
			'folk-pop': 1,
			'indie folk': 1,
			'lo-fi': 1,
			'new weird america': 1,
			'noise pop': 1,
			'shimmer pop': 1,
			'stomp and holler': 1,
			'synthpop': 1,
			'trip hop': 1,
			'chamber choir': 1,
			'choral': 2,
			'classical christmas': 1,
			'classical performance': 2,
			'orchestral': 2,
			'classical': 1,
			'concert piano': 1,
			'violin': 1,
			'chicago house': 1,
			'deep disco house': 1,
			'deep house': 2,
			'disco house': 3,
			'indie jazz': 2,
			'minimal tech house': 1,
			'tech house': 2,
			'dutch rock': 1,
			'bebop': 1,
			'big band': 1,
			'cool jazz': 1,
			'hard bop': 1,
			'jazz': 1,
			'jazz fusion': 1,
			'swing': 1,
			'candy pop': 1,
			'post-teen pop': 1,
			'tropical house': 1,
			'disco': 1,
			'europop': 1,
			'new wave pop': 1,
			'post-disco': 1,
			'quiet storm': 1,
			'vocal house': 1
		}
	},
	{
		Email: 'jane@gmail.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
						"trackName" : "Red Eyes",
						"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
			},
			{
						"trackName" : "Just Another Girl",
						"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
			},
			{
						"trackName" : "10 Years Today",
						"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
			},
			{
						"trackName" : "The Awakening",
						"songUri" : "spotify:track:0X0wvZuhTcTU03Roz9fPJA"
			},
			{
						"trackName" : "Fear Of The Dark - 1998 Remastered Version",
						"songUri" : "spotify:track:0P4JuEXYJmu2Q7BTtQW5nR"
			},
			{
						"trackName" : "Run For Cover",
						"songUri" : "spotify:track:77wm0pMH1wLe2VnBcIEU2r"
			}
		],
		artists: [
			[
				'Bullet For My Valentine',
				72
			],
			[
				'The Killers',
				82
			],
			[
				'Nightwish',
				67
			],
			[
				'36 Crazyfists',
				50
			],
			[
				'zebrahead',
				54
			],
			[
				'Iron Maiden',
				76
			],
			[
				'Kings of Leon',
				79
			],
			[
				'Sum 41',
				73
			],
			[
				'Prince',
				75
			],
			[
				'RAY BLK',
				58
			],
			[
				'Bryson Tiller',
				85
			],
			[
				'Mos Def',
				68
			]
		],
		genres: {
			'bubblegum pop': 1,
			'cabaret': 1,
			'christmas': 1,
			'easy listening': 1,
			'folk rock': 1,
			'lounge': 1,
			'mellow gold': 1,
			'merseybeat': 1,
			'motown': 2,
			'rock-and-roll': 1,
			'soft rock': 1,
			'british indie rock': 1,
			'math pop': 1,
			'bass music': 2,
			'chillwave': 2,
			'downtempo': 2,
			'electronic': 3,
			'escape room': 1,
			'float house': 2,
			'fluxwork': 2,
			'future funk': 1,
			'future garage': 2,
			'glitch': 1,
			'intelligent dance music': 1,
			'microhouse': 2,
			'outsider house': 2,
			'uk garage': 1,
			'vaporwave': 1,
			'wonky': 1,
			'swedish jazz': 1,
			'alternative rock': 1,
			'brooklyn indie': 1,
			'chamber pop': 1,
			'dream pop': 1,
			'folk-pop': 1,
			'freak folk': 1,
			'indie folk': 1,
			'indie pop': 1,
			'lo-fi': 1,
			'neo-psychedelic': 1,
			'new weird america': 1,
			'noise pop': 1,
			'shimmer pop': 1,
			'stomp and holler': 1,
			'synthpop': 1,
			'trip hop': 1,
			'chamber choir': 1,
			'choral': 2,
			'classical christmas': 1,
			'classical performance': 2,
			'orchestral': 2,
			'classical': 1,
			'concert piano': 1,
			'violin': 1,
			'chicago house': 1,
			'deep disco house': 1,
			'deep house': 2,
			'disco house': 3,
			'indie jazz': 2,
			'minimal tech house': 1,
			'tech house': 2,
			'indie r&b': 2,
			'neo soul': 1,
			'pop': 2,
			'dutch rock': 1,
			'bebop': 1,
			'big band': 1,
			'cool jazz': 1,
			'hard bop': 1,
			'jazz': 1,
			'jazz fusion': 1,
			'swing': 1,
			'candy pop': 1,
			'dance pop': 2,
			'metropopolis': 1,
			'post-teen pop': 1,
			'tropical house': 1,
			'classic funk rock': 1,
			'disco': 1,
			'europop': 1,
			'funk': 2,
			'new wave pop': 1,
			'post-disco': 1,
			'quiet storm': 1,
			'soul': 2,
			'vocal house': 1
		}
	},
	{
		Email: 's.andrews@gmail.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
						"trackName" : "Red Eyes",
						"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
			},
			{
						"trackName" : "Just Another Girl",
						"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
			},
			{
						"trackName" : "10 Years Today",
						"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
			},
			{
						"trackName" : "The Awakening",
						"songUri" : "spotify:track:0X0wvZuhTcTU03Roz9fPJA"
			},
			{
						"trackName" : "Fear Of The Dark - 1998 Remastered Version",
						"songUri" : "spotify:track:0P4JuEXYJmu2Q7BTtQW5nR"
			},
			{
						"trackName" : "Run For Cover",
						"songUri" : "spotify:track:77wm0pMH1wLe2VnBcIEU2r"
			}
		],
		artists: [
			[
				'Prince',
				75
			],
			[
				'RAY BLK',
				58
			],
			[
				'Bryson Tiller',
				85
			],
			[
				'Mos Def',
				68
			],
			[
				'Journey',
				75
			],
			[
				'Bon Iver',
				78
			],
			[
				'The Collection',
				42
			],
			[
				'Bear\'s Den',
				64
			],
			[
				'Bombay Bicycle Club',
				64
			],
			[
				'Mumford & Sons',
				79
			],
			[
				'Christina Aguilera',
				81
			],
			[
				'Kesha',
				83
			]
		],
		genres: {
			'metalcore': 2,
			'nu metal': 8,
			'pop punk': 4,
			'post-grunge': 8,
			'rap metal': 3,
			'rap rock': 4
		}
	},
	{
		Email: 'damnPeasants@gmail.com',
		tracks: [
			{
				"trackName": "Money, Money, Money",
				"songUri": "spotify:track:2ijsITOdUkUeF8EW7OfYBr"
			},
			{
				"trackName": "Papaoutai",
				"songUri": "spotify:track:09TcIuH1ZO7i4vicWKoaN2"
			},
			{
				"trackName" : "Red Eyes",
				"songUri" : "spotify:track:71jGGLe5VtEHjIk5dU2W3S"
			},
			{
						"trackName" : "Just Another Girl",
						"songUri" : "spotify:track:6y6KjfkOZMCbzwOPKKDwi0"
			},
			{
						"trackName" : "10 Years Today",
						"songUri" : "spotify:track:51hvz09iP6fsaKVFFBewm0"
			},
			{
						"trackName" : "The Awakening",
						"songUri" : "spotify:track:0X0wvZuhTcTU03Roz9fPJA"
			},
			{
						"trackName" : "Fear Of The Dark - 1998 Remastered Version",
						"songUri" : "spotify:track:0P4JuEXYJmu2Q7BTtQW5nR"
			},
			{
						"trackName" : "Run For Cover",
						"songUri" : "spotify:track:77wm0pMH1wLe2VnBcIEU2r"
			}
		],
		artists: [
			[
				'Britney Spears',
				81
			],
			[
				'ABBA',
				76
			],
			[
				'Sia',
				91
			],
			[
				'Drake',
				97
			],
			[
				'Rihanna',
				93
			],
			[
				'Sango',
				61
			]
		],
		genres: {
			'alternative metal': 11,
			'groove metal': 2,
			'melodic metalcore': 2,
			'metalcore': 2,
			'nu metal': 8,
			'pop punk': 4,
			'post-grunge': 8,
			'rap metal': 3,
			'rap rock': 4,
			'screamo': 1,
			'hip hop': 6,
			'neo soul': 4,
			'southern hip hop': 3,
			'deep pop r&b': 2,
			'urban contemporary': 3,
			'underground hip hop': 4,
			'vapor soul': 2,
			'alternative dance': 1,
			'chamber pop': 1,
			'chillwave': 1
		}
	}
];
module.exports = { formInput, spotifyResults };