import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { VectorMapDemoComponent } from './components/vector-map-demo/vector-map-demo.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'global-search', component: GlobalSearchDemoComponent },
    { path: 'vector-map', component: VectorMapDemoComponent}
];