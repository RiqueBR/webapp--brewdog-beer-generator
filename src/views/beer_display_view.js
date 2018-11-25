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
  this.container.innerHTML = " "
  allBeers.forEach((beer) => {
    const beerView = new BeerView(this.container, beer)
    // this.container.addEventListener('click', (event) => {
    //   // const moreInfo = document.getElementById('more-info')
    //   // if(moreInfo.style.display === "none"){
    //   //   moreInfo.style.display == "block";
    //   // }else{
    //   //   moreInfo.style.display == "none";
    //   // }
    //   console.log('hi');
    // })

    beerView.render();
  })
};







module.exports = BeerDisplay;
