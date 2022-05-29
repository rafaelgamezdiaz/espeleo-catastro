import { HttpStatus } from '@nestjs/common';

export interface BaseResponse<T> {
 // statusCode: number;
 // message: string;
  data?: T;
}

export function successResponse(
  data: any,
  status: HttpStatus,
  message: string,
) {
  return {
    data,
    statusCode: status,
    message,
  };
}