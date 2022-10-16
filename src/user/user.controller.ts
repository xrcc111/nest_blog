import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  queryAllUser(): object {
    return {
      code: 200,
      data: [
        {
          id: 1,
          name: 'zhang',
          age: 10,
        },
      ],
    };
  }
}
