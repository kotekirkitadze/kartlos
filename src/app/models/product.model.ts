export interface ApiResponse {
  pageNumber: number;
  pageSize: number;
  result: Product[];
  totalPages: number;
  totalRecords: number;
}

export interface Product {
  categories: [];
  createDate: string;
  description: string;
  descriptionGeo: string;
  id: number;
  name: string;
  nameGeo: string;
  price: number;
  attachments: { url: string }[];
}

export interface Order {
  addresInfo: {
    countryId: 1;
    city: string;
    state: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    phone: number;
    email: string;
    postalCode: string;
  };
  orders: [
    {
      productId: number;
      quantity: number;
    }
  ];

  shippingId: number;
  currencyId: number;
}
