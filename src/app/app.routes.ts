import { Routes } from '@angular/router';
import { PATHS } from './core/constants/routes.constant';
import { LoginComponent } from './pages/securite/login/login.component';
import { NotFoundComponent } from './pages/securite/not-found/not-found.component';
import { HomeComponent } from './pages/layout/home/home.component';
import { SecuriteComponent } from './pages/securite/securite.component';

export const routes: Routes = [
    {
        path: 'securite',
        component: SecuriteComponent,
        children: [
            {
                path: PATHS.LOGIN,
                component: LoginComponent
            },
            {
                path: '',
                redirectTo: PATHS.LOGIN,
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'securite',
        pathMatch: 'full'
    },
    {
        path: PATHS.HOME,
        component: HomeComponent,
    },

    {
        path: PATHS.NOT_FOUND,
        component: NotFoundComponent
    }
];
