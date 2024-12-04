import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    status: boolean;
    email_verified_at: Date | null;
    role_id: number;
    entreprise_id: number;
    jour_absence: number;
    joined_at: Date;
    created_at: Date;
}