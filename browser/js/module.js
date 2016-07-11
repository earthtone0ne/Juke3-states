'use strict';

var juke = angular.module('juke', ['ui.router']);
juke.config(function ($stateProvider) {
   $stateProvider.state('albums', albumsStateConfig);
   $stateProvider.state('artists', artistsStateConfig);
   $stateProvider.state('album', albumStateConfig);
   $stateProvider.state('artist', artistStateConfig);
   $stateProvider.state('artist.albums', artistAlbumStateConfig);
   $stateProvider.state('artist.songs', artistSongsStateConfig)
});
