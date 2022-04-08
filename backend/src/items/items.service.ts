import { Injectable, NotFoundException } from '@nestjs/common'
import { Item, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateItemDto } from './dto/create-item.dto'

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Item[]> {
    return this.prisma.item.findMany()
  }

  async findById(where: Prisma.ItemWhereUniqueInput): Promise<Item> {
    const found = this.prisma.item.findUnique({ where })
    if (!found) {
      throw new NotFoundException()
    }
    return found
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const { name, price, description } = createItemDto
    const data: Prisma.ItemCreateInput = {
      name,
      price: Number(price),
      description,
      status: 'ON_SALE',
    }
    return this.prisma.item.create({ data })
  }

  async updateStatus(where: Prisma.ItemWhereUniqueInput): Promise<Item> {
    return this.prisma.item.update({
      where,
      data: { status: 'SOLD_OUT' },
    })
  }

  async delete(where: Prisma.ItemWhereUniqueInput): Promise<Item> {
    return this.prisma.item.delete({ where })
  }
}
