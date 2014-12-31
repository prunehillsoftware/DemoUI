
module Lookup {
    "use strict";

    export class LookupService  {

        isDebug = false;

        static $inject = ["globals", "$http", "logger"];

        constructor(private baseUrl: string, private $http: ng.IHttpService, private logger: Core.Logger) {

        }

        getAssetClasses() : ng.IHttpPromise<{}> {
            var url = "lookup/assetClasses";

            return this.$http.get(url)
                .success((data, status, headers, config) => {
                    this.logger.logSuccess(url, data, "LookupService", this.isDebug);
                    return data;
                })
                .error((data, status, headers, config) => {
                    this.logger.logError(url, data, "LookupService", this.isDebug);
                    return data;
                });
        }

        getAssetStatuses() : ng.IHttpPromise<{}> {
            var url = "lookup/assetStatuses";

            return this.$http.get(url)
                .success((data, status, headers, config) => {
                    this.logger.logSuccess(url, data, "LookupService", this.isDebug);
                    return data;
                })
                .error((data, status, headers, config) => {
                    this.logger.logError(url, data, "LookupService", this.isDebug);
                    return data;
                });
        }
    }
} 