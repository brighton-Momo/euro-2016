var MainCtrl = function($scope, Twitter){
    Twitter.getTweets(10, 'en').then(function(response){
      $scope.tweets = response.plain().statuses;
    });

    $scope.translate = function(lang){
      Twitter.getTweets(10, lang).then(function(response){
        $scope.tweets = response.plain().statuses;
      });
    };

    $scope.languages = [
      {
        name : 'English',
        flag : 'en'
      },
      {
        name : 'Français',
        flag : 'fr'
      },
      {
        name : 'العربية',
        flag : 'ar'
      },
      {
        name : 'Russian',
        flag : 'ru'
      },
      {
        name : 'Español',
        flag : 'es'
      },
      {
        name : 'Polski',
        flag : 'pl'
      }
    ];
};

angular.module('euroApp',['yaru22.angular-timeago', 'euroApp.services'])
  .controller('MainCtrl', MainCtrl);
