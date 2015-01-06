module Lookup {
    "use strict";

    export class LookupAssetStatusController {
        // privates

        static $inject = ["lookupService", "logger"];

        constructor (private lookupService: LookupService, private logger: Core.Logger) {
            this.init();
        }

        loadAssetStatuses (): void {
            var scope = this;
            this.lookupService.getAssetStatuses();
        }

        private init(): void {
            this.loadAssetStatuses();
        }
    }
}
