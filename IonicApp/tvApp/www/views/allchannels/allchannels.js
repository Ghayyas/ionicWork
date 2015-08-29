/**
 * Created by Ghayyas on 8/25/2015.
 */
    angular.module('starter')
    .controller('allChannelsController',function($scope){
      $scope.channels = [{
        id: 1,
        name: 'Ary',
        href:  '#/ary',
        category: 'news',
        img: './img/arynews.jpg',
        fav: true
      },
        {id: 2,
        name: 'Express',
        href: '#/express',
        category: 'news',
        img: './img/express-news.png',
         fav: true
        },

        {
          id:3,
          name: 'Aaj News',
          href: '#/aaj',
          news: 'true',
          category: 'news',
          img: './img/aajnews.jpg'
        },
        {
          id: 4,
          name:'Al-Quran',
          href: '#/alquran',
          category: 'religion',
          img: './img/Quran.jpg'
        },
        {
          id: 5,
          name: 'ATV',
          href:  '#/atv', //poovee.net/embed/399'
          category: 'news',
          img: './img/atv.jpg'
        },
        {
          id: 6,
          name: 'Madni Channel',
          href: '#/madni',
          category: 'religion',
          img: './img/madni.png'
        },
        {
          id: 7,
          name: 'BBC',
          href:'#/bbc',
          category: 'news',
          img: './img/bbcnews.jpg'
        },
        {
          id: 8,
          name: 'Bol News',
          href: ' #/bol', //poovee.net/embed/315/'
          category: 'news',
          img: './img/BOL_TV.jpg'
        },
        {
          id: 9,
          name: 'CNN',
          href: '#/cnn',
          category: 'news',
          img: './img/cnn.png'
        },
        {
          id: 10,
          name:'Cartoon Network',
          href: '#/cn',  //www.ibrod.tv/embed.php?chan=tv14&width=1290&height=880'
          category:'kids',
          img: './img/cartoon_network.png'
        },
        {
          id: 11,
          name: 'HBO',
          href: '#/hbo',//http://zerocast.tv/embed.php?a=2006&id=&width=undefined&height=undefined&autostart=true&strech='
          category: 'english',
          img: './img/hbo.jpg'
        },
        {
          id: 12,
          name: 'Colors',
          href: '#/colors',  //www.embedstream.com/colors_tv.php'
          category: 'indian',
          img: './img/colors.png'
        },
        {
          id: 13,
          name: 'Dawn News',
          href: '#/dawn', //poovee.net/embed/323'
          category: 'news',
          img: './img/Dawn-news.jpg'
        },
        {
          id: 14,
          name: 'Din News',
          href: '#/din', //poovee.net/embed/351'
          category:'news',
          img: './img/dinnews.jpg'
        },
        {
          id: 15,
          name: 'Express Entertainment',
          href: '#/ee', //poovee.net/embed/321'
          category: 'entertaiment',
          img: './img/Express-Entertainment.png'
        },
        {
          id: 16,
          name: 'Geo News',
          href: '#/geonews',  //www.eboundservices.com/iframe/new/iframe.php?stream=geonews'
          category: 'news',
          img: './img/geonews.jpg'
        },
        {
          id: 17,
          name: 'Hum Tv',
          href: '#/humtv', //poovee.net/embed/295'
          category: 'entertaiment',
          img: './img/hum.jpg'
        },
        {
          id: 18,
          name: 'Health Tv',
          href: '#/healthtv',  //poovee.net/embed/349'
          category: 'educational',
          img: './img/health.jpg'
        },
        {
          id: 19,
          name: 'Hum Sitaray',
          href: '#/humsitaray', //poovee.net/embed/329'
          category: 'entertaiment',
          img: './img/hum-sitaray.jpg'
        },
        {
          id: 20,
          name: 'Jalwa',
          href: '#/jalwa', //poovee.net/embed/393'
          category: 'music',
          img: './img/jalwa.jpg'
        },
        {
          id: 21,
          name: 'MGM',
          href: '#/mgm', //clients.cdnet.tv/flashbroadcast.php?channel=5656&session=FNmGCpxuRMUm6d4CaZgoXvcMJ798RgGm&date=1409227714&autostart=true'
          category: 'english',
          img: './img/Mgm-logo.jpg'
        },
        {
          id: 22,
          name:'Metro One',
          href: '#/metro1',  //poovee.net/embed/391/?stream=metroone&amp'
          category: 'news',
          img: './img/metro1.jpg'
        },
        {
          id:23,
          name:'Hindi Movie',
          href: '#/hindimovie',//cdn.livestream.com/embed/movieshindi?layout=4&color=0xe7e7e7&autoPlay=true&mute=false&height=undefined&width=undefined'
          category: 'movie',
          img: './img/hindi-movie.png'
        },
        {
          id: 24,
          name: 'Masala Tv',
          href:  '#/masalatv',
          category: 'food',
          img: './img/masalatv.jpg'
        },
        {
          id: 25,
          name: 'Minhaj Tv',
          href:'#/minhajtv',//poovee.net/embed/387'
          category: 'religion',
          img: './img/minhaj.jpg'
        },
        {
          id: 26,
          name: 'NASA TV',
          href:'#/nasa',
          category: 'educational',
          img: './img/nasa.jpg'
        },
        {
          id: 27,
          name: 'Pogo Tv',
          href:  '#/pogotv', //www.zengatv.com/embed?v=Pogo.html&t=live'
          category: 'kids',
          img: './img/pogo.jpg'
        },
        {
          id: 28,
          name:'PTV NEWS',
          href: '#/ptvnews',
          category: 'news',
          img: './img/PTV-News.jpg'
        },
        {
          id: 29,
          name: 'PTV SPORTS',
          href:"#/ptvsports",
          category: 'sports',
          img: './img/ptv-sports.jpg'
        },
        {
          id: 30,
          name: 'Sky News',
          href: '#/skynews',  //live1.wm.skynews.servecast.net/skynews_wmlz_live300k'
          category: 'news',
          img: './img/skynews.png'
        },
        {
          id: 31,
          name: 'Star Plus',
          href:  '#starplus', //live1.wm.skynews.servecast.net/skynews_wmlz_live300k'
          category: 'indian',
          img: './img/starplus.jpg'

        },
        {
          id: 32,
          name: 'Style 360',
          href: '#/style', //poovee.net/embed/307/'
          category: 'entertaiment',
          img: './img/style360.jpg'
        },
        {
          id: 33,
          name: 'Sky Sports',
          href: '#/skysports',
          category: 'sports',
          img: './img/sky-sports.jpeg'
        },
        {
          id: 34,
          name: 'Sony',
          href: '#/sony',
          category: 'indian',
          img: './img/sony-logo.jpg'
        },
        {
          id: 35,
          name: 'Times',
          href: '#/times', //http://poovee.net/embed/397'
          category: 'entertaiment',
          img: './img/times-tv.jpg'
        },
        {
          id: 36,
          name:'Urdu 1',
          href:'#/urdu1',
          category: 'entertaiment',
          img: './img/urdu1.jpg'
        },
        {
          id: 37,
          name: 'WWE',
          href: '#/wwe',
          category: 'sports',
          img: './img/WWE.jpg'
        },
        {
          id: 38,
          name: '8XM',
          href: '#/8xm',//poovee.net/embed/341'
          category: 'music',
          img: './img/8xm.jpg'
        },
        {
          id: 39,
          name: '92HD',
          href: '#/92hd',//poovee.net/embed/325'
          category: 'news',
          img: './img/92hd.jpeg'
        }
      ]

      });


