import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    type: 'string',
    description: 'nestjs'
  })
  title: string;

  @ApiProperty({ type: 'string',
  description: 'hello nestjs'})
  description: string;
}