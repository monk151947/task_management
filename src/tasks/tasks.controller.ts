import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {} 

 @Get()
 getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
 }

 @Get('/:id')
 getTaskById(@Param('id') id: string): Task {
  return this.tasksService.getTaskById(id);
 }

 @Post()
 createTasks(@Body() CreateTaskDto): Task {
    return this.tasksService.createTaks(CreateTaskDto);
 }

 @Delete('/:id')
 deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id)
 }

}


