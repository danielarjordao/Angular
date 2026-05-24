import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Posts } from './posts/posts';
import { Auth } from './auth/auth';

export const routes: Routes = [
	{ path: '', component: Header },
	{ path: 'header', component: Header },
	{ path: 'posts', component: Posts },
	{ path: 'auth', component: Auth },
];
