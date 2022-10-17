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
  async create(createTestDto: CreateTestDto): Promise<Test> {
    return await this.TestRepository.save(createTestDto);
  }

  findAll(): Promise<Test[]> {
    return this.TestRepository.find();
  }

  findOne(id: number): Promise<Test> {
    return this.TestRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateTestDto: UpdateTestDto) {
    console.log(id, updateTestDto);
    return await this.TestRepository.update(id, updateTestDto);
  }

  async remove(id: number): Promise<any> {
    return await this.TestRepository.delete(id);
  }
}
