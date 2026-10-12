export interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string; // Relacionamento com o cliente
  status: 'Planejamento' | 'Em Andamento' | 'Concluído' | 'Cancelado';
  budget?: number;
  dueDate: Date;
}