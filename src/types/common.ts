export interface Pageable<T> {
  content: T[];
  page: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}
export interface PaginationParams {
  page?: number;
  perPage?: number;
}
