module Lookup {
    "use strict";

    export class LookupAssetClassController {

        // privates
        static $inject = ["lookupService", "logger"];

        constructor (private lookupService: LookupService, private logger: Core.Logger) {
            this.init();
        }

        loadAssetClasses (): void {
            var scope = this;
            this.lookupService.getAssetClasses();
        }

        private init(): void {
            this.loadAssetClasses();
        }
    }
}
