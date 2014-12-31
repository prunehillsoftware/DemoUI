/// <reference path="directives/owner-card.ts" />

module Owner {

    var app = angular.module("owner", ["core"])
        .directive("ownerCard", Core.OwnerCardDirective)
        .service("ownerService", OwnerService);
}