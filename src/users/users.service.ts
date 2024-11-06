import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {


    constructor( private prisma: PrismaService){}


    getUsers() {
        return this.prisma.user.findMany();
    }

    createUser(user: CreateUserDTO){
        return this.prisma.user.create({data: user});
    }

}
