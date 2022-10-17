import { IsNotEmpty } from 'class-validator';
export class CreateTestDto {
  @IsNotEmpty({ message: '用户名不为空' })
  readonly name: string;

  @IsNotEmpty({ message: '密码不为空' })
  readonly password: string;

  @IsNotEmpty({ message: '年龄不为空' })
  readonly age: number;
}
