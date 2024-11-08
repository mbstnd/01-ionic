import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


interface Task {
  title: string;
  description: string;
  isEditing?: boolean;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TasksPage implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { title: '', description: '' };

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  addTask() {
    if (this.newTask.title.trim() && this.newTask.description.trim()) {
      this.tasks.push({ ...this.newTask, isEditing: false });
      this.newTask = { title: '', description: '' };
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleEditTask(index: number){
    this.tasks[index].isEditing = !this.tasks[index].isEditing;
  }
}
