const {formatTrack, formatArtists, formatGenres} = require('./models/formatting');
const formInput = [
	{firstName: 'Paul', Surname: 'Copley', Age: 31, AgeRange: {min:25, max:35}, Email: 'pkcopley@gmail.com', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrfhg', Bio: 'I am Paul'},
	{firstName: 'Megan', Surname: 'Field', Age: 25, AgeRange: {min:26, max:35}, Email: 'megan.field@hotmail.co.uk', Gender: 'Female', GenderPreference: ['Male', 'Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am Megan'},
	{firstName: 'Anat', Surname: 'Dean', Age: 21, AgeRange: {min:21, max:27}, Email: 'anat62442@hotmail.co.uk', Gender: 'Female', GenderPreference: ['Male'], Area: 'Manchester', picture: 'https://ipojearhg', Bio: 'I am Anat'},
	{firstName: 'Sam', Surname: 'Lea', Age: 28, AgeRange: {min:26, max:35}, Email: 'dj_sam_lea@hotmai.com', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am Sam'},
	{firstName: 'Marge', Surname: 'Baird', Age: 23, AgeRange: {min:22, max:29}, Email: 'marge.baird@hotmail.com', Gender: 'Female', GenderPreference: ['Male', 'Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am marge'},
	{firstName: 'John', Surname: 'Lawson', Age: 34, AgeRange: {min:28, max: 38}, Email: 'john.l@hotmail.co.uk', Gender: 'Male', GenderPreference: ['Male'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am john'},
	{firstName: 'Joseph', Surname: 'jackson', Age: 19, AgeRange: {min:18, max:23}, Email: 'josephjkson@hotmail.com', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am joe'},
	{firstName: 'Charlotte', Surname: 'Base', Age: 25, AgeRange: {min:23, max:30}, Email: 'xoxchazbase@hotmail.co.uk', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am charlotte'}
];

const spotifyResults = [
	{Email: 'dj_sam_lea@hotmail.com', 
		tracks: [
			'All Falls Down - Todd Edwards Remix',
			'Big Brown Eyes',
			'All We Do For Love',
			'Each Other',
			'Can We Try',
			'Night of the Long Knives',
			'Realize',
			'It\'s Just (House of Dupree)',
			'Birds of a Feather, We Rock Together',
			'Another New Day',
			'Honey Bee',
			'Dreams',
			'Sully Suite',
			'King Size',
			'Cherokee',
			'Rosalinda\'s Eyes',
			'This Is a Samba',
			'Boys',
			'Downstream',
			'Beez in the Trap - Instrumental Version'
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
	{Email: 'pkcopley@gmail.com', 
		tracks: [
			'Red Eyes',
			'Just Another Girl',
			'The Awakening',
			'10 Years Today',
			'Fear Of The Dark - 1998 Remastered Version',
			'Worlds Collide',
			'Find Me',
			'10 Years Today',
			'Zwitter',
			'Testify',
			'The Trooper - 1998 Remastered Version',
			'Run For Cover',
			'Run to the Hills - 1998 Remastered Version',
			'Cries In Vain',
			'All These Things I Hate (Revolve Around Me)',
			'That Ain’t Country',
			'Anthem',
			'Forever Yours',
			'Country Boy (feat. George Jones & Charlie Daniels)',
			'All These Things That I\'ve Done'
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
				'The All-American Rejects',
				71
			],
			[
				'Onlap',
				50
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
			'pop rap': 1,
			'pop rock': 1,
			'post-teen pop': 1,
			'post-screamo': 1
		}
	},
	{Email: 'anat62442@hotmail.co.uk', 
		tracks: [
			'Money, Money, Money',
			'Papaoutai',
			'Cheap Thrills',
			'Voulez-Vous',
			'It\'s Just My Skin',
			'Find Me',
			'Broken Crown',
			'Detroit',
			'Toxic',
			'Circus',
			'You',
			'Skinny Love',
			'Towers',
			'Orange Sky',
			'We Turn Red',
			'Leaving It Up to You',
			'Dog Days Are Over',
			'Applause',
			'You\'ve Got Time',
			'In Your Hands'], 
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
	{Email: 'megan.field@hotmail.co.uk', 
		tracks: [      
			'Chill Out',
			'Leaned Out',
			'5050',
			'It\'s A Vibe',
			'The Healer',
			'Sky Walker',
			'Diddy Bop (feat. Cam O\'bi & Raury)',
			'Never Played Me',
			'Love$ick (feat. A$AP Rocky)',
			'4 AM',
			'Patience (Freestyle)',
			'Murder She Wrote',
			'Signs',
			'The Way (feat. Chance the Rapper)',
			'4r Da Squaw',
			'Talk to Me',
			'Locket',
			'Wifey vs. WiFi / / / P.M.S. (feat. BR3)',
			'Polaroids',
			'P.Y.T. (Pretty Young Thing)'], 
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
	}

==========================================================

	{Email: 'marge.baird@hotmail.com', 
		tracks: [
			'Just Another Girl',
			'The Awakening',
			'10 Years Today',
			'Worlds Collide',
			'Find Me',
			'10 Years Today',
			'Mr Brightside',
			'Nowhere Man',
			'Yellow Submarine',
			'Octopus\'s Garden',
			'Taxman',
			'Here Comes the Sun',
			'Hey Jude',
			'Revolution',
			'Revolution 5',
			'Happy',
			'Eleanor Rigby',
			'Downstream',
			'Beez in the Trap - Instrumental Version',
			'Jane'
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
	}

	{Email: 'john.l@hotmail.co.uk', 
		tracks: [
			'All Falls Down - Todd Edwards Remix',
			'Big Brown Eyes',
			'All We Do For Love',
			'Each Other',
			'Can We Try',
			'Night of the Long Knives',
			'Realize',
			'It\'s Just (House of Dupree)',
			'Just Another Girl',
			'The Awakening',
			'10 Years Today',
			'Fear Of The Dark - 1998 Remastered Version',
			'Worlds Collide',
			'Find Me',
			'All Falls Down - Todd Edwards Remix',
			'Big Brown Eyes',
			'All We Do For Love',
			'Each Other',
			'Papaoutai',
			'Girls'
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
	}

	{Email: 'josephjkson@hotmail.com', 
		tracks: [
			'All Falls Down - Todd Edwards Remix',
			'Love Love Love',
			'All We Do For Love',
			'Sweet Child O Mine',
			'I want to break free',
			'Waterpolo',
			'M&Ms',
			'Help ive got tissue up my nose',
			'Crazy In Love',
			'Californication',
			'Shake it Off',
			'G-d Save the Queen',
			'Worlds Collide',
			'Find Me',
			'All Falls Down - Todd Edwards Remix',
			'Macarana',
			'Like a Virgin',
			'Money Money Money',
			'I was Made for Loving you Baby',
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
	}

	{Email: 'xoxchazbase@hotmail.co.uk', 
		tracks: [
			'Snickers',
			'Twix',
			'Terrys Choco orange',
			'Watsits',
			'Tiffins',
			'Apple',
			'M&Ms',
			'Tangerine',
			'Pringles',
			'Sunbites',
			'Mango',
			'Blueberry',
			'Popcorn',
			'She\'s blowing up like a balloon! like a blueberry',
			'gobstoppers',
			'gravy',
			'pus',
			'strawberry milk',
			'un cafe',
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


];
module.exports = {formInput, spotifyResults};

