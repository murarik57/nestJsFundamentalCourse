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

@Controller('coffees')
export class CoffeesController {
  //   @Get()
  //   findAll(): string {
  //     return 'This action returns all coffees';
  //   }
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns limit:${limit} & offset:${offset}`;
  }

  //   @Get(':id')
  //   findOne(@Param() params): string {
  //     return `This is ur id :${params.id}`;
  //   }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This is ur id: #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }
  //   @Post()
  //   create(@Body('id') body) {
  //     return body;
  //   }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(body);
    return `This action update coffee of id ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action delete coffee id ${id}`;
  }
}
