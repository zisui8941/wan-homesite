import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchitecturePortfolioComponent } from './architecture/architecture-portfolio.component';
import { StreetPortfolioComponent } from './street/street-portfolio.component';

const routes: Routes = [
    { path: '', redirectTo: 'architecture' },
    { path: 'architecture', component: ArchitecturePortfolioComponent },
    { path: 'street', component: StreetPortfolioComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PhotographyRoutingModule {}
