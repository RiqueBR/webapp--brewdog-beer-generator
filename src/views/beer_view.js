const BeerView = function(element, beer){
  this.element = element;
  this.beer = beer;
};


BeerView.prototype.render = function (beer) {

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
  beerImageDiv.appendChild(beerImage)


  // Text content
  const beerInfo = document.createElement('div')
  beerInfo.classList.add("toggle-info")

  const beerName = document.createElement('li')
  beerName.textContent = this.beer.name
  beerInfo.appendChild(beerName);

  const descriptionClick = document.createElement('button')
  const descriptionInfo = document.createElement('p')
  descriptionInfo.id = `${this.beer.id}`
  descriptionClick.textContent = "More info";
  descriptionInfo.textContent = this.beer.description;
  descriptionInfo.classList.add('hide')
  beerInfo.appendChild(descriptionInfo)
  beerInfo.appendChild(descriptionClick)


  descriptionClick.addEventListener('click', (event) => {
    const moreInfo = document.getElementById("toggle-info")
    if(moreInfo.style.display === "none"){
      moreInfo.style.display == "block";
    }else{
      moreInfo.style.display == "none";
    }
    console.log(this.beer.name);
  })
  // wrap all info in the one div
  singleContainer.appendChild(beerImageDiv)
  singleContainer.appendChild(beerInfo)

  // And append to its own div
  this.element.appendChild(singleContainer)

  // return singleContainer;
}

module.exports = BeerView;
