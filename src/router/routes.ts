import { WelcomePage, AboutPage, HomePage } from '@/components/pages';
import { Routes } from './ts';

export const routes = [
    { path: '/', name: Routes.WELCOME, component: WelcomePage },
    { path: '/home', name: Routes.HOME, component: HomePage },
    { path: '/about', name: Routes.ABOUT, component: AboutPage },
];
