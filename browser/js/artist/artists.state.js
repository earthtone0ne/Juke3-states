var artistsStateConfig = {
   templateUrl: '/js/artist/artists.template.html',
   url: '/artists',
   resolve: {
    artists: function(ArtistFactory) {
      return ArtistFactory.fetchAll();
    }
   },
   controller: 'ArtistsCtrl'
};

var artistStateConfig ={
  templateUrl: '/js/artist/artist.template.html',
  url: '/artists/:id',
  resolve: {
    artist: function(ArtistFactory, $stateParams) {
      return ArtistFactory.fetchById($stateParams.id);
    }
  },
  controller: 'ArtistCtrl'
};

var artistAlbumStateConfig ={
  templateUrl: '/js/artist/artistPage/artistAlbum.template.html',
  url: '/albums',
  controller: 'ArtistCtrl'
};

var artistSongsStateConfig ={
  templateUrl: '/js/artist/artistPage/artistSongs.template.html',
  url: '/songs',
  controller: 'ArtistCtrl'
};
