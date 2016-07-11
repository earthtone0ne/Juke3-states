var albumsStateConfig ={
   templateUrl: '/js/album/albums.template.html',
   url: '/albums',
   controller: 'AlbumsCtrl',
   resolve: {
      albums: function(AlbumFactory){
         return AlbumFactory.fetchAll()
      }
   }

};

var albumStateConfig = {
   templateUrl: '/js/album/album.template.html',
   url: '/albums/:id',
   controller: 'AlbumCtrl',
   resolve: {
      album: function(AlbumFactory,$stateParams){
         return AlbumFactory.fetchById($stateParams.id);
      }
   }
}
