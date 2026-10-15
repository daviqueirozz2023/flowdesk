export interface Task {
  id: string;
  title: string;
  description?: string;
  projectId: string; // Relacionamento com o projeto
  status: 'Pendente' | 'Em Progresso' | 'Concluída';
  priority: 'Baixa' | 'Média' | 'Alta';
  dueDate: Date;
  notes?: string[];
}