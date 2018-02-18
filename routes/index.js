// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', function(req, res){
    const env = {
    	navLogo: process.env.NAV_LOGO,
    	facebook: process.env.FACEBOOK,
    	instagram: process.env.INSTAGRAM,
    	yelp: process.env.YELP,
    	name: process.env.NAME,
    	address: process.env.ADDRESS,
    	phone: process.env.PHONE,
    	favIcon: process.env.FAVICON
    }

    const data = {
    	env: env,
    	cdn: process.env.TURBO_CDN,
    	greeting: 'Welcome to my restaurant',
    	description: 'This is a place for business meeting'
    }

    turbo.pageData('home')
    .then(pageConfig => {
        // console.log(JSON.stringify(pageConfig))
        data['page'] = pageConfig
        res.render('index', data)
    })
    .catch(err=>{
    	res.render('index', data)
    })

	// res.render('index', data)
})

module.exports = router
