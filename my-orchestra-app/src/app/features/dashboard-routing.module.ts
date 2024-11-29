import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            // Vous pouvez ajouter des sous-routes ici
            // { path: 'analytics', component: AnalyticsComponent },
            // { path: 'team', component: TeamComponent },
            // { path: 'projects', component: ProjectsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }