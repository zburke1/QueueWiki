'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function($scope, $stateParams, $location, Authentication, Articles) {
		
		/* QWiki solution $scope Variables */
		$scope.authentication = Authentication;
		$scope.categories = ['Cooking', 'Sports', 'Technology'];
		$scope.materials = [];

		/* QWiki solution inital checks/functions */

		// Make sure at least one element in materials array
		if(!$scope.materials.length) {
			$scope.materials.push({'name' : ''});
		}

		/* QWiki solution function defintions */

		$scope.addMaterial = function() {
			var last = $scope.materials.length - 1;
			
			if($scope.materials[last].name !== '') {
				$scope.materials.push({'name' : ''});
			}

			if($scope.materials.length > 1) {
				for(var i = 0; i < $scope.materials.length; i++) {
					if($scope.materials[i].name === undefined) {
						$scope.materials.splice(i,1);
					}
				}
			}
		};

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};
	}
]);