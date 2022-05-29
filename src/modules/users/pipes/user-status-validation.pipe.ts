import { BadRequestException, PipeTransform } from "@nestjs/common";
import { UsersStatus } from '../enums/users-status.enum';

export class UserStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [UsersStatus.ACTIVE, UsersStatus.INACTIVE];
  transform(value: any): any {
    value = value.toUpperCase();
    if (!this.isUserStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status`)
    }
    return value;
  }

  private isUserStatusValid(value: any) {
    return this.allowedStatuses.includes(value);
  }
}