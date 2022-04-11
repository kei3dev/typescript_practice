import { ItemStatus } from '@prisma/client'
import { Type } from 'class-transformer'
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  Min,
} from 'class-validator'

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string

  @IsInt()
  @Min(1)
  @Type(() => Number)
  price: number

  @IsString()
  @IsNotEmpty()
  description: string

  @IsEnum(ItemStatus)
  status: ItemStatus
}
