import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { CommendableTypeService } from './commendable-type.service';
import { CommendableType } from '@prisma/client';

@Controller('commendable-type')
export class CommendableTypeController {
  constructor(
    private readonly commendableTypeService: CommendableTypeService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllCommendableTypes(): Promise<CommendableType[]> {
    return this.commendableTypeService.getAllCommendableTypes();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getCommendableTypeById(
    @Param('id') id: number,
  ): Promise<CommendableType | null> {
    return this.commendableTypeService.getCommendableTypeById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createCommendableType(
    @Body('name') name: string,
  ): Promise<CommendableType> {
    return this.commendableTypeService.createCommendableType(name);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateCommendableType(
    @Param('id', ParseIntPipe) id: number,
    @Body('name') name: string,
  ): Promise<CommendableType> {
    return this.commendableTypeService.updateCommendableType(id, name);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCommendableType(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CommendableType> {
    return this.commendableTypeService.deleteCommendableType(id);
  }

  @Get('counts')
  @HttpCode(HttpStatus.OK)
  async getCommendableTypeCounts(): Promise<{ [key: string]: number }> {
    return this.commendableTypeService.getCommendableTypeCounts();
  }
}
