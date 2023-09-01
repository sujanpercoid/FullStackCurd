export interface ProductInfo {
    productId: number;
    productName: string;
    count: number;
    total: number;
  }
  
  export interface CartData {
    productInfo: ProductInfo[];
    grandTotal: number;
  }
  