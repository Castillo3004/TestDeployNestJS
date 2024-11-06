import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService ){}

    //@ApiTags('users')
    @Get()
    @ApiOperation({summary: 'Trae todos los usuarios'})
    getUsers(){
        return this.usersService.getUsers();
    }


    @Post()
    createUser(@Body() user: CreateUserDTO){
        return this.usersService.createUser(user);
    }

    
}
