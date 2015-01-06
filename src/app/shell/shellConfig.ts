﻿module Shell {
    angular.module("shell", ["core", "owner", "lookup", "ui.router"])
        .config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    views: {
                        "main": {
                            templateUrl: "shell/views/home.html"
                        }
                    }
                })
                .state("owners", {
                    url: "owners",
                    views: {
                        "main": {
                            templateUrl: "owner/views/home.html"
                        }
                    }
                })
                .state("lookup", {
                    url: "lookup",
                    views: {
                        "main": {
                            templateUrl: "modules/lookup/views/home.html"
                        }
                    }
                })
                .state("lookup.assetClass", {
                    url: "assetClass",
                    views: {
                        "lookupBody@lookup": {
                            templateUrl: "modules/lookup/views/assetClass.html",
                            controller: Lookup.LookupAssetClassController,
                            controllerAs: "vm"
                        }
                    }
                })
            ;
        });
}
