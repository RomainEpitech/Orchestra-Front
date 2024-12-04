import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
    selector: 'app-dashboard-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, SidebarComponent],
    template: `
        <div class="flex">
            <app-sidebar></app-sidebar>
            <main class="lg:ml-64 transition-all duration-300">
                <div class="min-h-screen bg-neutral-900 text-white p-6">
                    <router-outlet></router-outlet>
                </div>
            </main>
        </div>
    `
})
export class DashboardLayoutComponent {}