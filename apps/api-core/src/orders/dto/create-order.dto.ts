import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    description: 'Nombre del cliente que realiza la compra',
    example: 'Rodrigo Vargas',
  })
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @ApiProperty({
    description: 'Monto total de la compra',
    example: 150000.50,
  })
  @IsNumber()
  @Min(1)
  totalAmount: number;
}