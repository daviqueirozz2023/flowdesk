import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
} from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header implements OnInit, OnDestroy {
  pageTitle = signal('Dashboard');
  pageEyebrow = signal('Visão geral');

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.updatePageInfo();

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd =>
            event instanceof NavigationEnd,
        ),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.updatePageInfo();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updatePageInfo(): void {
    let route = this.activatedRoute.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const routeData = route.snapshot.data;

    this.pageTitle.set(routeData['title'] ?? 'FlowDesk');
    this.pageEyebrow.set(routeData['eyebrow'] ?? '');
  }
}