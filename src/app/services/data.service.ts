import { Injectable, signal } from '@angular/core';
import { Client } from '../models/client.model';
import { Project } from '../models/project.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly clients = signal<Client[]>([
    {
      id: '1',
      name: 'Cliente Alpha Ltda',
      company: 'Alpha Corp',
      email: 'contato@alphacorp.com',
      phone: '(11) 98765-4321',
      status: 'Ativo',
      createdAt: new Date('2026-01-10')
    },
    {
      id: '2',
      name: 'Cliente Beta S.A.',
      company: 'Beta Solutions',
      email: 'comercial@betasolutions.com',
      phone: '(11) 91234-5678',
      status: 'Prospecto',
      createdAt: new Date('2026-02-15')
    }
  ]);

  readonly projects = signal<Project[]>([
    {
      id: '1',
      title: 'Redesign do Portal Corporativo',
      description: 'Modernização da interface e migração de componentes.',
      status: 'Em Andamento',
      clientId: '1',
      dueDate: new Date('2026-02-15')
    }
  ]);

  readonly tasks = signal<Task[]>([
    {
      id: '1',
      title: 'Criar wireframes das telas principais',
      description: 'Definir o fluxo de navegação e componentes visuais do dashboard.',
      priority: 'Alta',
      status: 'Concluída',
      projectId: '1',
      dueDate: new Date('2026-02-15'),
      notes: [
        'Wireframes aprovados pela equipe técnica.',
        'Ajustado espaçamento das tabelas.'
      ]
    },
    {
      id: '2',
      title: 'Implementar autenticação e rotas',
      description: 'Configurar interceptores e rotas protegidas no Angular.',
      priority: 'Alta',
      status: 'Em Progresso',
      projectId: '1',
      dueDate: new Date('2026-02-15'),
      notes: [
        'Aguardando validação dos tokens de teste.'
      ]
    }
  ]);

  addNoteToTask(taskId: string, noteText: string) {
    if (!noteText.trim()) return;
    this.tasks.update((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            notes: [...(task.notes || []), noteText.trim()]
          };
        }
        return task;
      })
    );
  }

  addProject(projectData: Omit<Project, 'id'>) {
    const newProject: Project = {
      ...projectData,
      id: Date.now().toString()
    };
    this.projects.update((currentProjects) => [newProject, ...currentProjects]);
  }
}