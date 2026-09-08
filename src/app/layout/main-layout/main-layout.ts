import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  imports: [Sidebar, Header, RouterOutlet],
  selector: 'app-main-layout',
  styleUrl: './main-layout.scss',
  templateUrl: './main-layout.html',
})
export class MainLayout {}