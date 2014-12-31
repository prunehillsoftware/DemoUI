module Core {
    export interface IOwner {
        ownerID: number;
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
        assetIDs: Array<number>;
    }
}