import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JphService } from './jph.service';
import { CreateJphDto } from './dto/create-jph.dto';
import { UpdateJphDto } from './dto/update-jph.dto';

@Controller('jph')
export class JphController {
  constructor(private readonly jphService: JphService) {}

  @Post()
  create(@Body() createJphDto: CreateJphDto) {
    return this.jphService.create(createJphDto);
  }

  @Get()
  findAll() {
    return this.jphService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jphService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJphDto: UpdateJphDto) {
    return this.jphService.update(+id, updateJphDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jphService.remove(+id);
  }
}
