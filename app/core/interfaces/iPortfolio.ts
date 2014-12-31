module Core {
    export interface IPortfolio {
        portfolioID: number;
        firstName: string;
        lastName: string;
        shippingAddress: IAddress;
        email: string;
        homePhoneNumber: string;
        cellPhoneNumber: string;
        workPhoneNumber: string;
        lastModified: string;
        notes: string;
        statusCode: IDescriptiveEnum;
        statusDate: string;
        ownerIDs: Array<number>;
    }
}