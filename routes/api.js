__path = process.cwd()

var express = require('express');

var creatorList = ['@Mzailani8'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];


var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();
var { color, bgcolor } = require(__path + '/lib/color.js');

var {
	SearchKartun,
	Movie,
	Action,
	Adventure,
	Drama,
	Comedy,
	Military
} = require('./../lib');


router.get('/kartun/search', async (req, res, next) => {
	var film = req.query.film

		SearchKartun(film)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/genre/movie', async (req, res, next) => {

		Movie()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/genre/drama', async (req, res, next) => {

		Drama()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/genre/action', async (req, res, next) => {

		Action()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/genre/adventure', async (req, res, next) => {

		Adventure()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/genre/comedy', async (req, res, next) => {

	Comedy()
	.then(result => {
		res.json({
			creator: creator,
			result
		})
	})
	.catch(e => {
		console.log('Error :', color(e, 'red'))
		res.json(loghandler.error)
	})
})

router.get('/genre/military', async (req, res, next) => {

	Military()
	.then(result => {
		res.json({
			creator: creator,
			result
		})
	})
	.catch(e => {
		console.log('Error :', color(e, 'red'))
		res.json(loghandler.error)
	})
})


module.exports = router
