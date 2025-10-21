export interface GetWatchesProps {
  search?: string;
  page?: number;
  count?: number;
}

export interface GetWatchesResponseApi {
  success: boolean;
  message: string;
  data: Watch[];
  totalGroups: number;
}

export interface GetWatchesResponse {
  status: string;
  totalResults: number;
  results: Watch[];
  nextPage?: number;
}

export interface Watch {
  id: number;
  brand: string;
  model: string;
  imageFilename: string;
  referenceCode: string;
  sellerId: number;
  price: number;
  messageId: number;
  isSold: boolean;
  dateCreated: string;
  description: string;
}
