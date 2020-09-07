export interface IBasketResponse {
  // Besoin des interface
  id: string;
}

export interface ISetDiscountSponsorshipParameter {
  code: 'string';
}

export interface IClearParameter {
  customerUri: 'string';
}

export interface IBasketAddParameter {
  id: 'string';
  organizationUri: 'string';
  orderId: 'string';
  latitude: number;
  longitude: number;
  productId: 'string';
  orderQuantity: number;
  options: [
    {
      id: 'string';
      items: [
        {
          name: 'string';
          quantity: number;
        },
      ];
    },
  ];
  schedules: [
    {
      id: 'string';
      items: [
        {
          name: 'string';
          quantity: number;
        },
      ];
    },
  ];
  offerId: number;
  metadatas: {};
  customerUri: 'string';
  isFreeTrial: true;
}

export interface ITableNumberParameter {
  tableNumber: 'string';
}

export interface ICommentParameter {
  comment: 'string';
}

export interface IValidateParameter {
  meansOfPayment: {};
  orderId: 'string';
  customerUri: 'string';
}
