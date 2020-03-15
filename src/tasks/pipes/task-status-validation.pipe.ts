import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidation implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
  ];

  transform(value: any): any {
    value = value.toUpperCase();

    if (!this.isValid(value)) {
      throw new BadRequestException();
    }

    return value;

  }

  isValid(status: any) {
    return this.allowedStatuses.indexOf(status) > -1;
  }
}
