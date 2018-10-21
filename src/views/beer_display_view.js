const PubSub = require('../helpers/pub_sub.js')
const BeerView = require('./beer_view.js')


const BeerDisplay = function (container){
  this.container = container // takes a container due to display reasons i.e. beers will be displayed in this container.
}


BeerDisplay.prototype.bindEvents = function () {
  PubSub.subscribe('Beer:beer-display-ready', (event) => {
    const allBeers = event.detail;
    // console.log(allBeers);
    this.render(allBeers);
  })
};

BeerDisplay.prototype.render = function (allBeers) {
  allBeers.forEach((beer) => {
    const beerView = new BeerView(this.container, beer)
    // console.log(beerView);
    beerView.render();
  })
};







module.exports = BeerDisplay;
