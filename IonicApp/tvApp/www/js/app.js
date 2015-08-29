
var app = angular.module('starter', ['ionic', 'ngCordova','firebase']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('menu',{
      url: '/menu',
      templateUrl:'views/menu/menu.html'

    })
    .state('category',{
      url: '/category',
      templateUrl: 'views/category/category.html'
    })
    .state('nasa',{
      url:'/nasa',
      templateUrl:'views/allchannels/nasa.html'
    })
    .state('allchannels',{
      url: '/allchannels',
      templateUrl: 'views/allchannels/allchannels.html',
      controller: 'allChannelsController'
    })
    .state('skysports',{
      url: '/skysports',
      templateUrl: 'views/allchannels/skysports.html'
    })
    .state('ptvsports',{
      url: '/ptvsports',
      templateUrl: 'views/allchannels/ptvsports.html'
    })
    .state('wwe',{
      url: '/wwe',
      templateUrl: 'views/allchannels/wwe.html'
    })
    .state('8xm',{
      url: '/8xm',
      templateUrl: 'views/allchannels/8xm.html'
    })
    .state('92hd',{
      url: '/92hd',
      templateUrl: 'views/allchannels/92hd.html'
    })
    .state('aaj',{
      url: '/aaj',
      templateUrl: 'views/allchannels/aaj.html'
    })
    .state('alquran',{
      url: '/alquran',
      templateUrl: 'views/allchannels/alquran.html'
    })
    .state('ary',{
      url: '/ary',
      templateUrl: 'views/allchannels/ary.html'
    })
    .state('atv',{
      url: '/atv',
      templateUrl: 'views/allchannels/atv.html'
    })
    .state('bbc',{
      url: '/bbc',
      templateUrl: 'views/allchannels/bbc.html'
    })
    .state('bol',{
      url: '/bol',
      templateUrl: 'views/allchannels/bol.html'
    })
    .state('cn',{
      url: '/cn',
      templateUrl: 'views/allchannels/cn.html'
    })
    .state('dawn',{
      url: '/dawn',
      templateUrl: 'views/allchannels/dawn.html'
    })
    .state('din',{
      url: '/din',
      templateUrl: 'views/allchannels/din.html'
    })
    .state('ee',{
      url: '/ee',
      templateUrl: 'views/allchannels/ee.html'
    })
    .state('express',{
      url: '/express',
      templateUrl: 'views/allchannels/express.html'
    })
    .state('geonews',{
      url: '/geonews',
      templateUrl: 'views/allchannels/geonews.html'
    })
    .state('hbo',{
      url: '/hbo',
      templateUrl: 'views/allchannels/hbo.html'
    })
    .state('healthtv',{
      url: '/healthtv',
      templateUrl: 'views/allchannels/healthtv.html'
    })
    .state('hindimovie',{
      url: '/hindimovie',
      templateUrl: 'views/allchannels/hindimovie.html'
    })
    .state('humsitaray',{
      url: '/humsitaray',
      templateUrl: 'views/allchannels/humsitaray.html'
    })
    .state('humtv',{
      url: '/humtv',
      templateUrl: 'views/allchannels/humtv.html'
    })
    .state('jalwa',{
      url: '/jalwa',
      templateUrl: 'views/allchannels/jalwa.html'
    })
    .state('masalatv',{
      url: '/masalatv',
      templateUrl: 'views/allchannels/masalatv.html'
    })
    .state('metro1',{
      url: '/metro1',
      templateUrl: 'views/allchannels/metro1.html'
    })
    .state('minhajtv',{
      url: '/minhajtv',
      templateUrl: 'views/allchannels/minhajtv.html'
    })
    .state('pogotv',{
      url: '/pogotv',
      templateUrl: 'views/allchannels/pogotv.html'
    })
    .state('ptvnews',{
      url: '/ptvnews',
      templateUrl: 'views/allchannels/ptvnews.html'
    })
    .state('skynews',{
      url: '/skynews',
      templateUrl: 'views/allchannels/skynews.html'
    })
    .state('starplus',{
      url: '/starplus',
      templateUrl: 'views/allchannels/starplus.html'
    })
    .state('style',{
      url: '/style',
      templateUrl: 'views/allchannels/style.html'
    })
    .state('times',{
      url: '/times',
      templateUrl: 'views/allchannels/times.html'
    })
    .state('sony',{
      url: '/sony',
      templateUrl: 'views/allchannels/sony.html'
    })
    .state('colors',{
      url: '/colors',
      templateUrl: 'views/allchannels/colors.html'
    })
    .state('urdu1',{
      url: '/urdu1',
      templateUrl: 'views/allchannels/urdu1.html'
    })
    .state('madni',{
      url: '/madni',
      templateUrl: 'views/allchannels/madni.html'
    })
    .state('bar',{
      url: '/bar',
      templateUrl: 'views/allchannels/bar.html'
    })
    .state('mgm',{
      url: '/mgm',
      templateUrl: 'views/allchannels/mgm.html'
    })
    .state('cnn',{
      url: '/cnn',
      templateUrl: 'views/allchannels/cnn.html'
    })
    .state('news',{
      url: '/news',
      templateUrl: 'views/category/news/news.html',
      controller: 'allChannelsController'
    })
    .state('english',{
      url: '/english',
      templateUrl: 'views/category/english/english.html',
      controller: 'allChannelsController'
    })
    .state('indian',{
      url: '/indian',
      templateUrl: 'views/category/indian/indian.html',
      controller: 'allChannelsController'
    })
    .state('information',{
      url: '/information',
      templateUrl: 'views/category/information/information.html',
      controller: 'allChannelsController'
    })
    .state('kids',{
      url: '/kids',
      templateUrl: 'views/category/kids/kids.html',
      controller: 'allChannelsController'
    })
    .state('movies',{
      url: '/movies',
      templateUrl: 'views/category/moives/movies.html',
      controller: 'allChannelsController'
    })
    .state('music',{
      url: '/music',
      templateUrl: 'views/category/music/music.html',
      controller: 'allChannelsController'
    })
    .state('food',{
      url: '/food',
      templateUrl: 'views/category/food/food.html',
      controller: 'allChannelsController'
    })
    .state('religion',{
      url: '/religion',
      templateUrl: 'views/category/religion/religion.html',
      controller: 'allChannelsController'
    })
    .state('sports',{
      url: '/sports',
      templateUrl: 'views/category/sports/sports.html',
      controller: 'allChannelsController'
    })
    .state('bikni',{
      url: '/bikni',
      templateUrl: 'views/category/adult/bikni.html'
    })
    .state('diabolo',{
      url: '/diabolo',
      templateUrl: 'views/category/adult/diabolo.html'
    })
    .state('partygirls',{
      url: '/partygirls',
      templateUrl: 'views/category/adult/partygirls.html'
    })
    .state('russian',{
      url: '/russian',
      templateUrl: 'views/category/adult/russian.html'
    })
    .state('review',{
      url: '/review',
      templateUrl: 'views/review/review.html'
    })
    .state('radio',{
      url: '/radio',
      templateUrl: 'views/radio/radio.html'
    })
    .state('adult',{
      url: '/adult',
      templateUrl: 'views/category/adult/adult.html'
    })
    .state('settings',{
      url: '/settings',
      templateUrl: 'views/settings/settings.html'
    })
    .state('fm106',{
      url: '/fm106',
      templateUrl: 'views/radio/fm106.html'
    })
    .state('fm103',{
      url: '/fm103',
      templateUrl: 'views/radio/fm103.html'
    })
    .state('fm107',{
      url: '/fm107',
      templateUrl: 'views/radio/fm107.html'
    })
    .state('dmasti',{
      url: '/dmasti',
      templateUrl: 'views/radio/dmasti.html'
    })
    .state('fm100',{
      url: '/fm100',
      templateUrl: 'views/radio/fm100.html'
    })
    .state('fm105',{
      url: '/fm105',
      templateUrl: 'views/radio/fm105.html'
    })
    .state('About',{
      url: '/about',
      templateUrl: 'views/About/about.html'
    });

  $urlRouterProvider.otherwise('/menu');

});
app.controller('appCtrl', function ($scope, $firebaseArray) {
  $scope.paus =true;
  $scope.adult = {checked: false};
  $scope.pushNotificationChange = function () {

  };

  $scope.playWebAudioLoop = function()
  {
    $scope.audio = new Audio('http://icy1.abacast.com/humfm-humfmmp3-64');

    $scope.audio.play();
    $scope.paus =false;
    $scope.pla = true;
  };
  $scope.pause = function () {
    $scope.audio.pause();
    $scope.pla = false;
    $scope.paus = true
  };
  $scope.play105 = function()
  {
    $scope.audio = new Audio('http://217.79.179.162:9980/;stream.mp3/playlist.m3u8');
    $scope.audio.play();
    $scope.paus =false;
    $scope.pla = true;
  };
  $scope.play103 = function()
  {
    $scope.audio = new Audio('http://64.202.98.32:6210/;stream.mp3/playlist.m3u8');
    $scope.audio.play();
    $scope.paus =false;
    $scope.pla = true;
  };

  $scope.play107 = function()
  {
    $scope.audio = new Audio('http://76.164.217.100:7065/live');
    $scope.audio.play();
    $scope.paus =false;
    $scope.pla = true;
  };
  $scope.play100 = function()
  {
    $scope.audio = new Audio('http://38.96.175.97:4900/;stream.mp3/playlist.m3u8');
    $scope.audio.play();
    $scope.paus =false;
    $scope.pla = true;
  };
  $scope.playdmasti = function()
  {
    $scope.audio = new Audio('http://rd.dnt.net.pk:8002/;radiostream.mp3');
    $scope.audio.play();
    $scope.paus =false;
    $scope.pla = true;
  };
  $scope.submitReview = function () {
    $scope.review = false;
    $scope.reviewhide = true;
  };
  $scope.seeReview = function () {
    $scope.review = true;
    $scope.reviewhide = false;
  };
     var ref = new Firebase('https://iontv.firebaseio.com/comments');
      $scope.rev = $firebaseArray(ref);

  $scope.clickReview = function(){
       vm = this;
      $scope.rev.$add({
         Review_Name: vm,
          timestamp: Firebase.ServerValue.TIMESTAMP
      });
      };

    });


