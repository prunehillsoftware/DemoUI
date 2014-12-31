module Core {
    export interface IAssetClass {
        assetClassID: number;
        description: string;
        lastName: string;
        shippingAddress: IAddress;
        email: string;
        homePhoneNumber: string;
        cellPhoneNumber: string;
        workPhoneNumber: string;
        lastModified: string;
        notes: string;
    }
}