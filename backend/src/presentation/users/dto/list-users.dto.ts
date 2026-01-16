import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class ListUsersDto {
  @ApiPropertyOptional({ example: 18, description: 'Edad mínima' })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  minAge?: number;

  @ApiPropertyOptional({ example: 30, description: 'Edad máxima' })
  @IsOptional()
  @IsInt()
  @Max(120)
  @Type(() => Number)
  maxAge?: number;

  @ApiPropertyOptional({
    example: 1,
    description: 'Número de página',
    default: 1,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page?: number = 1;

  @ApiPropertyOptional({
    example: 10,
    description: 'Límite por página',
    default: 10,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit?: number = 10;
}
