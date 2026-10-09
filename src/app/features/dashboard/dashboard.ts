import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import {
  LucideBriefcaseBusiness,
  LucideCheckCircle2,
  LucideClock3,
  LucideUsers,
} from '@lucide/angular';

import { DashboardService } from './services/dashboard';

@Component({
  selector: 'app-dashboard',
  imports: [
    AsyncPipe,
    LucideBriefcaseBusiness,
    LucideCheckCircle2,
    LucideClock3,
    LucideUsers,
  ],
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private readonly dashboardService = inject(DashboardService);

  readonly metrics$ = this.dashboardService.getMetrics();
  readonly deadlines$ = this.dashboardService.getDeadlines();
  readonly taskSummary$ = this.dashboardService.getTaskSummary();
}