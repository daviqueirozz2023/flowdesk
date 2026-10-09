import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export type DashboardMetricIcon =
  | 'projects'
  | 'completed'
  | 'tasks'
  | 'clients';

export interface DashboardMetric {
  label: string;
  value: number;
  helper: string;
  trend: string;
  trendType: 'positive' | 'warning';
  icon: DashboardMetricIcon;
}

export interface DashboardDeadline {
  day: string;
  month: string;
  title: string;
  project: string;
  status: string;
  statusType: 'urgent' | 'default';
}

export interface TaskSummaryItem {
  label: string;
  value: number;
  progress: number;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly metrics: DashboardMetric[] = [
    {
      label: 'Projetos ativos',
      value: 12,
      helper: 'Em andamento',
      trend: '+8%',
      trendType: 'positive',
      icon: 'projects',
    },
    {
      label: 'Projetos concluídos',
      value: 28,
      helper: 'Total finalizado',
      trend: '+12%',
      trendType: 'positive',
      icon: 'completed',
    },
    {
      label: 'Tarefas pendentes',
      value: 34,
      helper: 'Aguardando conclusão',
      trend: '6 urgentes',
      trendType: 'warning',
      icon: 'tasks',
    },
    {
      label: 'Clientes',
      value: 18,
      helper: 'Contas cadastradas',
      trend: '+3',
      trendType: 'positive',
      icon: 'clients',
    },
  ];

  private readonly deadlines: DashboardDeadline[] = [
    {
      day: '12',
      month: 'SET',
      title: 'Landing page institucional',
      project: 'Projeto Website Corporativo',
      status: 'Urgente',
      statusType: 'urgent',
    },
    {
      day: '15',
      month: 'SET',
      title: 'Revisão do dashboard',
      project: 'Projeto Analytics',
      status: 'Em breve',
      statusType: 'default',
    },
    {
      day: '18',
      month: 'SET',
      title: 'Apresentação ao cliente',
      project: 'Projeto CRM FlowDesk',
      status: 'Planejado',
      statusType: 'default',
    },
  ];

  private readonly taskSummary: TaskSummaryItem[] = [
    {
      label: 'Pendentes',
      value: 34,
      progress: 68,
    },
    {
      label: 'Em andamento',
      value: 21,
      progress: 48,
    },
    {
      label: 'Concluídas',
      value: 52,
      progress: 82,
    },
  ];

    getMetrics(): Observable<DashboardMetric[]> {
    return of(this.metrics).pipe(delay(800));
    }

    getDeadlines(): Observable<DashboardDeadline[]> {
    return of(this.deadlines).pipe(delay(1000));
    }

    getTaskSummary(): Observable<TaskSummaryItem[]> {
    return of(this.taskSummary).pipe(delay(1200));
    }
}