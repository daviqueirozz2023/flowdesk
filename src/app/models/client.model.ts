export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'Ativo' | 'Inativo' | 'Prospecto';
  createdAt: Date;
}