export interface Yacht {
  id: string;
  name: string;
  coverImage: {
    url: string;
  };
  buyPrice: {
    EUR: number;
  };
  guestsNumber: number;
  cabinsNumber: number;
  length: {
    meters: string;
  };
}

export interface ApiResponse {
  meta: {
    total: number;
    page: number;
    totalPages: number;
  };
  data: Yacht[];
}
