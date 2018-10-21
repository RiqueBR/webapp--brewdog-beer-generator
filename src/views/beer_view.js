const BeerView = function(element, beer){
  this.element = element;
  this.beer = beer;
};


BeerView.prototype.render = function (beer) {


  // const beerName = document.createElement('li')
  // beerName.textContent = this.beer.name
  // this.element.appendChild(beerName);


  // const beerImage = document.createElement('img')
  // beerImage.src = this.beer.image_url
  // beerImage.classList.add('beer-image')
  // this.element.appendChild(beerImage);

  // const descriptionInfo = document.createElement('p')
  // const descriptionClick = document.createElement('a')
  // descriptionInfo.textContent = "More info";
  // descriptionClick.href = this.beer.description
  // this.element.appendChild(descriptionInfo)
  // this.element.appendChild(descriptionClick)



  // creates main container for including all info in here
    const singleContainer = document.createElement('div')
    singleContainer.classList.add('beer-box')

  // Creates content
    // image content
    const beerImageDiv = document.createElement('div')
    beerImageDiv.classList.add('single-beer')

    const beerImage = document.createElement('img')
    beerImage.src = this.beer.image_url
    beerImage.alt = this.beer.name
    beerImage.classList.add('beer-image')
    // this.element.appendChild(beerImage);
    beerImageDiv.appendChild(beerImage)


    // Text content
    const beerInfo = document.createElement('div')
    beerInfo.classList.add('beer-info')

    const beerName = document.createElement('li')
    beerName.textContent = this.beer.name
    beerInfo.appendChild(beerName);


    const descriptionInfo = document.createElement('p')
    const descriptionClick = document.createElement('a')
    descriptionInfo.textContent = "More info";
    descriptionClick.href = this.beer.description
    beerInfo.appendChild(descriptionInfo)
    beerInfo.appendChild(descriptionClick)

  // wrap all info in the one div
  singleContainer.appendChild(beerImageDiv)
  singleContainer.appendChild(beerInfo)

// And append to its own div
this.element.appendChild(singleContainer)

  return singleContainer;

};

module.exports = BeerView
