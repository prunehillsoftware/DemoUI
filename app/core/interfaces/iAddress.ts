module Core {
    export interface IAddress {
        addressLine1: string;
        addressLine2: string;
        county: string;
        city: string;
        state: string;
        zipCode: string;
        addressValidationStatus: number;
    }
}