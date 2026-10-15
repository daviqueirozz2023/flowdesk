import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './tasks.scss',
  templateUrl: './tasks.html',
})
export class Tasks {
  protected readonly dataService = inject(DataService);

  readonly selectedTask = signal<Task | null>(null);
  newNoteText: string = '';

  openTaskModal(task: Task) {
    this.selectedTask.set(task);
    this.newNoteText = '';
  }

  closeTaskModal() {
    this.selectedTask.set(null);
    this.newNoteText = '';
  }

  addNote() {
    const currentTask = this.selectedTask();
    if (currentTask && this.newNoteText.trim()) {
      this.dataService.addNoteToTask(currentTask.id, this.newNoteText);
      
      // Atualiza a referência da tarefa selecionada no modal para refletir a nova nota imediatamente
      const updatedTask = this.dataService.tasks().find((t) => t.id === currentTask.id);
      if (updatedTask) {
        this.selectedTask.set(updatedTask);
      }

      this.newNoteText = '';
    }
  }
}