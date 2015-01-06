/// <reference path="../../../core/services/baseHttpService.ts" />
module Lookup {
    "use strict";

    export class LookupService extends Core.HttpServiceBase {

        isDebug = false;

        static $inject = ["globals", "$http", "logger"];

        constructor(globals, $http: ng.IHttpService, logger: Core.Logger) {
            super(globals.webApiUrl, "lookupService", $http, logger);
        }

        getAssetClasses() : ng.IHttpPromise<Core.IArrayWrapper<Core.IAssetClass>> {
            var url = "lookup/assetClasses";

            return super.httpGet(url);
        }

        getAssetStatuses() : ng.IHttpPromise<Core.IArrayWrapper<Core.IDescriptiveEnum>> {
            var url = "lookup/assetStatuses";

            return super.httpGet(url);
        }
    }
}
