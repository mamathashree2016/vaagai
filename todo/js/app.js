/*global angular */

/**
 * The main todomvc app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute '])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html',
			resolve: {
				store: function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	})

// 	.controller('commonCtrl', function commonCtrl($scope) {
// console.log("common ctrl");
// $scope.phones = [
//       {
//         type: 'Home',
//         number: '(555) 251-1234',
//         options: {
//           icon: 'communication:phone'
//         }
//       },
//       {
//         type: 'Cell',
//         number: '(555) 786-9841',
//         options: {
//           icon: 'communication:phone',
//           avatarIcon: true
//         }
//       },
//       {
//         type: 'Office',
//         number: '(555) 314-1592',
//         options: {
//           face : imagePath
//         }
//       },
//       {
//         type: 'Offset',
//         number: '(555) 192-2010',
//         options: {
//           offset: true,
//           actionIcon: 'communication:phone'
//         }
//       }
//     ];




// 	});
