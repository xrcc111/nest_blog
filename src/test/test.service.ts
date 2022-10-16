import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './entities/test.entity';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private TestRepository: Repository<Test>,
  ) {}
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll(): Promise<Test[]> {
    return this.TestRepository.find();
  }

  findOne(id: number): Promise<Test> {
    debugger;
    console.log(id);
    return this.TestRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
