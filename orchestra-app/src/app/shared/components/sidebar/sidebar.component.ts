import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavigationItem {
    title: string;
    path: string;
    icon: string;
    subItems?: NavigationItem[];
}

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
    isOpen = false;
    
    navigationItems: NavigationItem[] = [
        {
            title: 'Tableau de bord',
            path: '/dashboard',
            icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        },
        {
            title: 'Équipe',
            path: '/dashboard/team',
            icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
        },
    ];
    
    toggleSidebar() {
        this.isOpen = !this.isOpen;
    }

    closeSidebar() {
        this.isOpen = false;
    }
}