import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { StyleGuide } from './pages/style-guide/style-guide';
import { Component } from '@angular/compiler';
export const routes: Routes = [

    { path: '' , component: Home },
    { path: 'sobre-mi' , component:About},
    { path: 'proyectos' , component:Projects},
    { path: 'contacto' , component:Contact },
    { path: 'guia', component: StyleGuide },
    { path: '**',        redirectTo: '' }, 

];
