//var app = angular.module("app", []);
//var app:ng.IModule = angular.module("app", []).controller("myController", function($scope) {
//});
//console.log("application loaded");

var mainApplicationModuleName:string = "main";

//declare angular module
var mainApplicationModule:ng.IModule = angular.module(mainApplicationModuleName, []);

//wait for document to load before bootstrapping  angular application
angular.element(document).ready(function() {
	//now manually bootstrap the angular app
	angular.bootstrap(document, [mainApplicationModuleName]);
	
});