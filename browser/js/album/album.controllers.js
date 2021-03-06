'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, $log, PlayerFactory, AlbumFactory, $stateParams, album) {

  // $scope.$on('viewSwap', function (event, data) {
  //   if (data.name !== 'oneAlbum') return $scope.showMe = false;
  //   $scope.showMe = true;
    // AlbumFactory.fetchById($stateParams.id)
    // .then(function (album) {
    //   $scope.album = album;
    // })
    // .catch($log.error);
  // });
  $scope.album = album;
  // main toggle
  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, albums) {
  //$log, $rootScope, PlayerFactory, AlbumFactory,

    $scope.albums = albums;
  // AlbumFactory.fetchAll()
  // .then(function (albums) {
  //   $scope.albums = albums;
  // })
  // .catch($log.error);

});
