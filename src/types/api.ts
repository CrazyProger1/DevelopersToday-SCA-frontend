export type Response = {
  success: boolean;
};

export type SuccessfulResponse = {
  success: true;
} & Response;

export type ErrorResponse = {
  type?: string;
  errors?: { code: string; detail: string; attr: string }[];
  success: false;
} & Response;

export type PaginatedResponse<T> = {
  next?: string;
  previous?: string;
  count: number;
  results: T[];
} & SuccessfulResponse;

export type PaginationParams = {
  offset?: string;
  limit?: string;
};

export type HasId = {
  id: number;
};
