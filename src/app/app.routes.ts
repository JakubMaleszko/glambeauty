import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricelistComponent } from './pages/pricelist/pricelist.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/strona-glowna', pathMatch: 'full' },
    { path: 'strona-glowna', component: HomeComponent },
    { path: 'o-nas', component: AboutComponent},
    { path: 'uslugi', component: ServicesComponent},
    //{ path: 'kontakt' , }
    { path: 'cennik', component: PricelistComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
