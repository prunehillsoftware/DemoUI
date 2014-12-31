module Core {
    export function OwnerCardDirective(): ng.IDirective {
        var directive: ng.IDirective = {
            restrict: "E",
            scope: {
                carddata: "=",
                index: "=",
                controllerscope: "="
            },
            templateUrl: "./app/core/directives/owner-card/owner-card.html",
            controller: function ($scope) {
                $scope.viewCard = function(carddata) {
                    $scope.expanded = !$scope.expanded;
                    $scope.controllerscope.expandCard(this);
                }

                $scope.performAction = function(action) {
                    $scope.controllerscope.performAction(action, $scope.carddata);
                }

            }
        }
        return directive;
    }
}
