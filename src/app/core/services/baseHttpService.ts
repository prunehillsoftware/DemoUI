module Core {
    "use strict";

    export class HttpServiceBase {

        isDebug: boolean = true;

        constructor(private baseUrl: string, private serviceID: string, private $http: ng.IHttpService, private logger: Core.Logger) {

        }

        private success = (data, status, headers, config) => {
            this.logger.logSuccess(config.url, data, this.serviceID, this.isDebug);
        };

        private error = (data, status, headers, config) => {
            this.logger.logError(config.url, data, this.serviceID, this.isDebug);
        };

        private createUri(uri: string): string {
            return this.baseUrl + uri;
        }

        public httpGet<T>(uri: string): ng.IHttpPromise<T> {
            var url: string = this.createUri(uri);

            return this.$http.get(url)
                .success(this.success)
                .error(this.error);
        }

        public httpPost<T>(uri: string, data: any): ng.IHttpPromise<T> {
            var url: string = this.createUri(uri);

            return this.$http.post(url, data)
                .success(this.success)
                .error(this.error);
        }

        public httpPut<T>(uri: string, data: any): ng.IHttpPromise<T> {
            var url: string = this.createUri(uri);

            return this.$http.put(url, data)
                .success(this.success)
                .error(this.error);
        }

        public httpDelete<T>(uri: string): ng.IHttpPromise<T> {
            var url: string = this.createUri(uri);

            return this.$http.delete(url)
                .success(this.success)
                .error(this.error);
        }

    }
}
