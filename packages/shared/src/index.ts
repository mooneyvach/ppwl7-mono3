export interface HealthCheck {
  status: string
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface User {
  id: number
  email: string 
  name: string | null
}