module Shell {
    angular.module("shell", ["core", "examples", "ui.router"])
        .config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    views: {
                        "main": {
                            templateUrl: "app/shell/views/home.html"
                        }
                    }
                })
                .state("examples", {
                    url: "examples",
                    views: {
                        "main": {
                            templateUrl: "app/modules/examples/views/home.html"
                        }
                    }
                })
                .state("examples.datapull", {
                    url: "datapull",
                    views: {
                        "examplebody@examples": {
                            templateUrl: "app/modules/examples/views/example-datapull.html",
                            controller: Examples.ExampleDataPullController,
                            controllerAs: "vm"
                        }
                    }
                })
                .state("examples.dataput", {
                    url: "dataput",
                    views: {
                        "examplebody@examples": {
                            templateUrl: "app/modules/examples/views/example-dataput.html",
                            controller: Examples.ExampleDataPutController,
                            controllerAs: "vm"
                        }
                    }
                })
                .state("examples.dataput2", {
                    url: "dataput2",
                    views: {
                        "examplebody@examples": {
                            templateUrl: "app/modules/examples/views/example-dataput2.html",
                            controller: Examples.ExampleDataPutWithLookupsController,
                            controllerAs: "vm"
                        }
                    }
                })
                .state("examples.datapost", {
                    url: "datapost",
                    views: {
                        "examplebody@examples": {
                            templateUrl: "app/modules/examples/views/example-datapost.html",
                            controller: Examples.ExampleDataPostController,
                            controllerAs: "vm"
                        }
                    }
                })
                .state("examples.listener", {
                    url: "listener",
                    views: {
                        "examplebody@examples": {
                            templateUrl: "app/modules/examples/views/example-listeningforchanges.html",
                            controller: Examples.ExampleSocketListenerController,
                            controllerAs: "vm"
                        }
                    }
                })
                .state("examples.sockets", {
                    url: "sockets",
                    views: {
                        "examplebody@examples": {
                            templateUrl: "app/modules/examples/views/example-sockets.html",
                            controller: Examples.ExamplesWebSocketsController,
                            controllerAs: "vm"
                        }
                    }
                })
            ;
        });
}