import { IPlaceModel } from 'src/app/_fake/types/place.type';

export const placeModel: IPlaceModel = {
  _id: '',
  title: '',
  subtitle: '',
  description: '',
  address: '',
  subdistrict: '',
  district: '',
  province: '',
  postCode: '',
  logoUrl: '',
  location: {
    lat: 0,
    long: 0,
  },
  contact: {
    mobileNumbers: [],
    facebook: '',
    instagram: '',
    email: '',
    website: '',
  },
  coverImages: [],
  category: {
    name: {
      en: '',
      th: '',
    },
    createdBy: null,
    updatedBy: null,
    _id: '',
    active: true,
    createdAt: '',
    updatedAt: '',
  },
  subcategory: {
    name: {
      en: '',
      th: '',
    },
    createdBy: null,
    updatedBy: null,
    _id: '',
    category: {
      _id: '',
      name: {
        en: '',
        th: '',
      },
    },
    active: true,
    createdAt: '',
    updatedAt: '',
  },
  tags: [],
  isVip: false,
  active: false,
  createdAt: '',
  updatedAt: '',
  updatedBy: '',
  createdBy: null,
};