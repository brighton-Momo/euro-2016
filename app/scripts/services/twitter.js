var Twitter = function(Restangular){
  this.getTweets = function(size, lang){
    return Restangular.one('/tweets?count=' + size + '?lang=' + lang).get();
  };
};

angular.module('euroApp.services')
  .service('Twitter', Twitter);
