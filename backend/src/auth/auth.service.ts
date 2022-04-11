import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, password, status } = createUserDto
    const data: Prisma.UserCreateInput = {
      name,
      password,
      status,
    }
    return this.prisma.user.create({ data })
  }
}
