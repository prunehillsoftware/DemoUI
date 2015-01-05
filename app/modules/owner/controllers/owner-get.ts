module Owner {
    "use strict";

    export class OwnerGetController {

        portfolioOwners: Array<Core.IOwner>;
        ownersLoadError: any;

        // privates
        static $inject = ["ownerService", "logger"];

        constructor (private ownerService: OwnerService, private logger: Core.Logger) {
            this.init();
        }

        loadOwners (portfolioID: number): void {
            var scope = this;
            this.ownerService.getOwnersByPortfolioId(portfolioID)
                .then(
                (successResponse) => {
                    scope.portfolioOwners = [];

                    $.each(successResponse.data, function (key, value) {
                        //scope.portfolioOwners.push(scope.objectMapperService.mapAppointmentFromServer(value));
                        scope.portfolioOwners.push(value);
                    });
                },
                (errorResponse) => {
                    scope.ownersLoadError = { error: errorResponse.status };
                    //scope.ownersLoadError = { error: "Error Loading Owners", reason: errorResponse.status + ": "
                    // + errorResponse.statusText };
                }
            );
                //.finally(() => {
                //
                //});
        }

        private init(): void {
            this.loadOwners(1);
        }
    }
}
