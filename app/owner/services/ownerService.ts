module Owner {
    "use strict";

    export class OwnerService {
        isDebug = false;

        static $inject = ["globals", "$http", "logger"];

        constructor(private baseUrl: string, private serviceID: string, private $http: ng.IHttpService, private logger: Core.Logger) {

        }

        getOwnerById(ownerId: number) : ng.IHttpPromise<{}> {
            var url = "owners/" + ownerId;

            return this.$http.get(url)
                .success((data, status, headers, config) => {
                    this.logger.logSuccess(url, data, "OwnerService", this.isDebug);
                    return data;
                })
                .error((data, status, headers, config) => {
                    this.logger.logError(url, data, "OwnerService", this.isDebug);
                    return data;
                });
        }

        getOwnersByPortfolioId(portfolioId: number) : ng.IHttpPromise<{}> {
            var url = "owners/portfolio/" + portfolioId;

            return this.$http.get(url)
                .success((data, status, headers, config) => {
                    this.logger.logSuccess(url, data, "OwnerService", this.isDebug);
                    return data;
                })
                .error((data, status, headers, config) => {
                    this.logger.logError(url, data, "OwnerService", this.isDebug);
                    return data;
                });
        }
    }
}