import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PersonalDashboardComponent } from './pages/personal-dashboard/personal-dashboard.component';
import { DashboardLayoutComponent } from './shared/layout/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {
        path: 'dashboard',
        component: DashboardLayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'team', component: PersonalDashboardComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];