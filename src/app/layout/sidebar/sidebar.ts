import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideFolderKanban,
  LucideLayoutDashboard,
  LucideListTodo,
  LucideSettings,
  LucideUserRound,
  LucideUsers,
} from '@lucide/angular';

@Component({
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideLayoutDashboard,
    LucideFolderKanban,
    LucideUsers,
    LucideListTodo,
    LucideUserRound,
    LucideSettings,
  ],
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class Sidebar {}