import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, FormsModule],
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly dataService = inject(DataService);

  readonly isModalOpen = signal(false);

  // Campos do formulário para novo projeto
  newTitle = '';
  newDescription = '';
  newClientId = '1';
  newStatus: Project['status'] = 'Em Andamento';
  newDueDate = '';

  openModal() {
    this.isModalOpen.set(true);
    this.newTitle = '';
    this.newDescription = '';
    this.newClientId = '1';
    this.newStatus = 'Em Andamento';
    this.newDueDate = '';
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  createProject() {
    if (!this.newTitle.trim()) return;

    this.dataService.addProject({
      title: this.newTitle.trim(),
      description: this.newDescription.trim(),
      clientId: this.newClientId,
      status: this.newStatus,
      dueDate: this.newDueDate ? new Date(this.newDueDate) : new Date()
    });

    this.closeModal();
  }
}