import { IOwnerModel } from 'src/app/_fake/services/owner-management/owner.service';

export interface DataTablesResponse {
    success: boolean;
    pets: IPetModel[];
    pageSize: number;
    currentPage: number;
    total: number;
}

export interface IPetGender {
    en: string; // String
    th: string; // String
}

export interface IPetBreed {
    name: {
        en: string,
        th: string
    },
    _id: string
}

export interface PetTypeName {
    en: string;
    th: string;
}

export interface PetType {
    _id: string;
    name: PetTypeName;
    imageUrl: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface PetTypesResponse {
    success: boolean;
    petTypes: PetType[];
}

export interface IPetModel {
    _id: string; // ObjectId
    type: PetType | null; // ObjectId
    breedType: string; // String
    breeds: IPetBreed[] | null;
    photoUrl: string | null; // Null
    name: string; // String
    size: string | null; // Null
    bloodGroup: string | null; // Null
    weight: number | null; // Null
    weightUnit: string | null; // Null
    birthDate: string; // Date in ISO format
    birthYear: number | null; // Null
    adoptionDate: string | null; // Null
    tags: [
        {
            name: {
                en: string,
                th: string
            },
            _id: string
        }
    ] | null; // Array of ObjectId
    about: string | null; // Null
    colors: [
        {
            name: {
                en: string,
                th: string
            },
            _id: string
        }
    ] | null;
    certifiedPedigreeUrl: string | null; // Null
    petMedicals: any[]; // Array (empty)
    //owner: IOwnerModel; // ObjectId
    owner: IOwnerModel | null;
    active: boolean; // Boolean
    deleted: boolean; // Boolean
    deleteReason: {
        reason: string | null; // Null
        remark: string | null; // Null
    };
    groupOfAge: {
        en: string; // String
        th: string; // String
    };
    gender: IPetGender;
    createdAt: string; // Date in ISO format
    updatedAt: string;
}

export interface PetColorName {
    en: string;
    th: string;
}

export interface PetColor {
    _id: string;
    name: PetColorName;
    code: string;
    active: boolean;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
}

export interface PetColorsResponse {
    success: boolean;
    colors: PetColor[];
}

export interface PetTagName {
    en: string;
    th: string;
}

export interface PetTagTypeName {
    name: {
        en: string;
        th: string;
    }
    _id: string;
}

export interface PetTag {
    _id: string;
    name: PetTagName;
    type: PetTagTypeName;
    //active: boolean;
    // createdAt: string;
    // createdBy: string;
    // updatedAt: string;
    // updatedBy: string;
}

export interface PetTagsResponse {
    success: boolean;
    tags: PetTag[];
}