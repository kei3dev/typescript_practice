import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Prisma, User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { CredentialsDto } from './dto/credentials.dto'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const { name, password, status } = createUserDto
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)
    const data: Prisma.UserCreateInput = {
      name,
      password: hashPassword,
      status,
    }
    return this.prisma.user.create({ data })
  }

  async signIn(
    credentialsDto: CredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { name, password } = credentialsDto
    const user = await this.prisma.user.findUnique({
      where: { name },
    })
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { id: user.id, name: user.name }
      const accessToken = this.jwtService.sign(payload)
      return { accessToken }
    }
    throw new UnauthorizedException(
      'ユーザー名またはパスワードを確認してください',
    )
  }
}
