export interface FindAll<T> {
  data: T[]
}

export interface Update<T> {
  data: T
}

export interface Delete<T> {
  data: T
}

export interface Create<T> {
  data: T
}

export interface FindOne<T> {
  data: T
}

export interface PaginationRequest {
  page: number
  limit: number
}
