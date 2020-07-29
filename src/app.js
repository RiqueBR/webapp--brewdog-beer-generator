const BeerDisplay = require('./views/beer_display_view.js')
const Beer = require('./models/beer.js')
const BeerFormView = require('./views/beer_form_view.js')

document.addEventListener('DOMContentLoaded', () => {

  const beerFormView = document.querySelector('#beer-form')
  const beerForm = new BeerFormView(beerFormView)
  beerForm.bindEvents()

  const beerContainer = document.querySelector('#beer-display')
  const beerDisplay = new BeerDisplay(beerContainer)
  beerDisplay.bindEvents();


  const beer = new Beer();
  beer.getData()
  beer.bindEvents();
})
