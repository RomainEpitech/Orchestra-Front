import { Component } from '@angular/core';
import { User } from '../../interfaces/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-dashboard.component.html'
})
export class PersonalDashboardComponent {
  isMobileMenuOpen = false;

  users: User[] = [
    {
      id: 1,
      firstname: 'Jean',
      lastname: 'Dupont',
      password: 'hashedpassword1',
      email: 'jean.dupont@example.com',
      status: true,
      email_verified_at: new Date('2024-01-15'),
      role_id: 1,
      entreprise_id: 1,
      jour_absence: 5,
      joined_at: new Date('2023-06-15'),
      created_at: new Date('2023-06-15')
    },
    {
      id: 2,
      firstname: 'Marie',
      lastname: 'Laurent',
      password: 'hashedpassword2',
      email: 'marie.laurent@example.com',
      status: true,
      email_verified_at: new Date('2024-02-01'),
      role_id: 2,
      entreprise_id: 1,
      jour_absence: 2,
      joined_at: new Date('2023-09-01'),
      created_at: new Date('2023-09-01')
    },
    {
      id: 3,
      firstname: 'Pierre',
      lastname: 'Martin',
      password: 'hashedpassword3',
      email: 'pierre.martin@example.com',
      status: true,
      email_verified_at: null,
      role_id: 3,
      entreprise_id: 2,
      jour_absence: 0,
      joined_at: new Date('2024-01-10'),
      created_at: new Date('2024-01-10')
    }
  ];

  getRoleName(roleId: number): string {
    const roles = {
      1: 'Admin',
      2: 'Manager',
      3: 'Employé'
    };
    return roles[roleId as keyof typeof roles] || 'Inconnu';
  }

  selectedUser: User | null = null;
  
  openUserModal(user: User): void {
    this.selectedUser = user;
  }

  closeUserModal(): void {
    this.selectedUser = null;
  }
}