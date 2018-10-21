const PubSub = require('../helpers/pub_sub.js')
const BeerView = require('./beer_view.js')


const BeerFormView = function(element){
  this.element = element
}

Beer.prototype.bindEvents = function () {
  this.data.addEventListener('submit', (event) => {
    const tagName = event.target['beer-input'].value;
    PubSub.publish('BeerFormView:form-submitted', tagName)
    this.data.reset();
  })
};
