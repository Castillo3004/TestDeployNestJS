import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {

    constructor(private tasksService: TasksService ){}


    @Get()
    getAllTasks(@Query() query: any ){
        console.log(query); 
        return this.tasksService.getTasks();
    }


    @Get('/:id') 
    getTask(@Param('id') id: string){
        return this.tasksService.getTask(parseInt(id));
    }



    @Post()
    createTask(@Body() task: CreateTaskDTO){
        return this.tasksService.createTasks(task);
    }

    
    @Put()
    updateTask(@Body() task: UpdateTaskDTO){
        return this.tasksService.updateTasks(task);
    }


    @Delete()
    deleteTask(){
        return this.tasksService.deleteTasks();
    }


    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
    }

}
