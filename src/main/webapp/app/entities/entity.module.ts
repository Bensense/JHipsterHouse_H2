import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'artikel',
                loadChildren: './artikel/artikel.module#JHipsterHouseH2ArtikelModule'
            },
            {
                path: 'lieferant',
                loadChildren: './lieferant/lieferant.module#JHipsterHouseH2LieferantModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterHouseH2EntityModule {}
