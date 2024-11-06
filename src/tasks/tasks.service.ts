import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Injectable()
export class TasksService {

    private tasks = [];


    getTasks(): Array<string>{
        return this.tasks;
    }


    getTask( id: number ){
        const taskFound = this.tasks.find(task => task.id === id);

        if (!taskFound) return new NotFoundException(`La tarea con el id ${id} no fue encontrada`)
    }

    createTasks( task: CreateTaskDTO ){
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task;        
    }

    
    updateTasks(task: UpdateTaskDTO){
        console.log(task);
        return 'Actualizando Tareas!';        
    }


    deleteTasks(){
        return 'Eliminando Tareas!';        
    }


    updateTaskStatus(){
        return 'Actualizando el estado de una Tarea!';        
    }

}
