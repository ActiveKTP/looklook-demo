import {
  ICategoryModel,
  ISubCategoryModel,
} from '../services/place-management/category.service';

export interface DataTablesRecipe {
  success: boolean;
  places: IPlaceModel[];
  pageSize: number;
  currentPage: number;
  total: number;
}

export interface ICoverImage {
  _id: string;
  url: string;
  default: boolean;
}

export interface ILocation {
  lat: number;
  long: number;
}

export interface IContact {
  mobileNumbers: string[];
  facebook: string;
  instagram: string;
  email: string;
  website: string;
}

// * Main Place Management Call
export interface IPlaceModel {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  address: string;
  subdistrict: string;
  district: string;
  province: string;
  postCode: string;
  logoUrl: string;
  location: ILocation;
  contact: IContact;
  coverImages: ICoverImage[];
  category: ICategoryModel;
  subcategory: ISubCategoryModel | null;
  tags: string[];
  isVip: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
  createdBy: string | null;
}

export interface ICreatePlaceModel
  extends Omit<
    IPlaceModel,
    'logoUrl' | 'subcategory' | 'coverImages' | 'category'
  > {
  logo: File;
  coverImages: FileList;
  category: string;
}