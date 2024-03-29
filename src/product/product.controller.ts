import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { ProductService } from './product.service';
import { CreateProductDto, EditProductDto } from './dto';
import { GetUser } from '../auth/decorator';
// import { GetStaff } from '../auth/decorator';
// import { Staff } from '@prisma/client';

// @UseGuards(JwtGuard)
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    getAllProduct() {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) productId: number) {
        return this.productService.getProductById(productId);
    }

    @Get('/category/:id')
    getProductsByCategoryId(@Param('id', ParseIntPipe) categoryId: number) {
        return this.productService.getProductsByCategoryId(categoryId);
    }

    @Post('create-many-product')
    createManyProducts(@GetUser('email') email: string, @Body() dto: CreateProductDto[]) {
        return this.productService.createManyProduct(email, dto);
    }

    // @HttpCode(HttpStatus.CREATED)
    // @Post()
    // createProduct(@GetStaff() staff: Staff, @Body() dto: CreateProductDto) {
    //     return this.productService.createProduct(staff, dto);
    // }

    // @Patch(':id')
    // updateProduct(
    //     @GetStaff() staff: Staff,
    //     @Param('id', ParseIntPipe) productId: number,
    //     @Body() dto: EditProductDto,
    // ) {
    //     return this.productService.editProduct(staff, productId, dto);
    // }

    // @Delete(':id')
    // deleteProduct(
    //     @GetStaff() staff: Staff,
    //     @Param('id', ParseIntPipe) productId: number,
    // ) {
    //     return this.productService.deleteProduct(staff, productId);
    // }
}

