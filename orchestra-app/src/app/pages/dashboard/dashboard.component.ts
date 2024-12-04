import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

interface Event {
    date: string;
    dayNumber: string;
    month: string;
    title: string;
    location: string;
    time: string;
    colorClass: string;
}

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterModule, SidebarComponent],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    stats = {
        personnel: {
            total: 156,
            growth: '+12%'
        },
        departments: 8,
        absentToday: 4,
        activeTasks: 12
    };

    events: Event[] = [
        {
            date: '2024-12-15',
            dayNumber: '15',
            month: 'DEC',
            title: 'Réunion d\'équipe',
            location: 'Salle de conférence',
            time: '09:00',
            colorClass: 'blue'
        },
        {
            date: '2024-12-18',
            dayNumber: '18',
            month: 'DEC',
            title: 'Formation DevOps',
            location: 'Salle formation',
            time: '14:00',
            colorClass: 'purple'
        },
        {
            date: '2024-12-22',
            dayNumber: '22',
            month: 'DEC',
            title: 'Repas de Noël',
            location: 'Restaurant Le Grand Chef',
            time: '19:00',
            colorClass: 'green'
        }
    ];

    recentActivities = [
        {
            type: 'join',
            user: 'Marie D.',
            action: 'a rejoint l\'équipe Design',
            colorClass: 'green'
        },
        {
            type: 'project',
            title: 'Nouveau projet',
            description: 'lancé : Application mobile',
            colorClass: 'blue'
        },
        {
            type: 'update',
            title: 'Mise à jour',
            description: 'du système prévue demain',
            colorClass: 'yellow'
        }
    ];
}