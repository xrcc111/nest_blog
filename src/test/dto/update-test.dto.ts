import { PartialType } from '@nestjs/mapped-types';
import { CreateTestDto } from './create-test.dto';
import { IsNotEmpty } from 'class-validator';
export class UpdateTestDto extends PartialType(CreateTestDto) {
  @IsNotEmpty({ message: 'id不能为空' })
  readonly id: number;
}
