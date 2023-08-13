import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  //   @Get()
  //   findAll(): string {
  //     return 'This action returns all coffees';
  //   }
  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
    // return `This action returns limit:${limit} & offset:${offset}`;
  }

  //   @Get(':id')
  //   findOne(@Param() params): string {
  //     return `This is ur id :${params.id}`;
  //   }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
    // return `This is ur id: #${id}`;
  }

  @Post()
  //   @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);

    // return body;
  }
  //   @Post()
  //   create(@Body('id') body) {
  //     return body;
  //   }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    // console.log(body);
    // return `This action update coffee of id ${id}`;
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeesService.remove(id);

    // return `This action delete coffee id ${id}`;
  }
}
