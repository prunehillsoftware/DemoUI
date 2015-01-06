/// <reference path="../../../core/services/baseHttpService.ts" />
module Owner {
    "use strict";

    export class OwnerService extends Core.HttpServiceBase {
        isDebug = false;

        static $inject = ["globals", "$http", "logger"];

        constructor(globals, $http: ng.IHttpService, logger: Core.Logger) {
            super(globals.webApiUrl, "ownerService", $http, logger);
        }

        getOwnerById(ownerId: number) : ng.IHttpPromise<Core.IOwner> {
            var url = "owners/" + ownerId;

            return super.httpGet(url);
        }

        getOwnersByPortfolioId(portfolioId: number) : ng.IHttpPromise<Core.IArrayWrapper<Core.IOwner>> {
            var url = "owners/portfolio/" + portfolioId;

            return super.httpGet(url);
        }
    }
}
