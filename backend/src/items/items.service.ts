import { Injectable, NotFoundException } from '@nestjs/common'
import { Item, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateItemDto } from './dto/create-item.dto'

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  private items: Item[] = []

  findAll(): Item[] {
    return this.items
  }

  findById(id: string): Item {
    const found = this.items.find((item) => item.id === id)
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

  updateStatus(id: string): Item {
    const item = this.findById(id)
    item.status = 'SOLD_OUT'
    return item
  }

  delete(id: string): void {
    this.items = this.items.filter((item) => item.id !== id)
  }
}
