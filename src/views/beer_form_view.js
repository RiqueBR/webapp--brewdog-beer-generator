const PubSub = require('../helpers/pub_sub.js')
const BeerView = require('./beer_view.js')


const BeerFormView = function(element){
  this.element = element
}

BeerFormView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (event) => {
    event.preventDefault();
    const tagName = event.target['beer-input'].value;
    PubSub.publish('BeerFormView:form-submitted', tagName)
    this.element.reset();
  })
};


module.exports = BeerFormView;
