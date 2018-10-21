const BeerDisplay = require('./views/beer_display_view.js')
const Beer = require('./models/beer.js')

document.addEventListener('DOMContentLoaded', () => {
  // console.log('Javascript loaded');


  const beerContainer = document.querySelector('#beer-display')
  const beerDisplay = new BeerDisplay(beerContainer)
  beerDisplay.bindEvents();


  const beer = new Beer();
  beer.getData()
})
