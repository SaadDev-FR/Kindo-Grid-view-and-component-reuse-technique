import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataListRoutingModule } from './data-list-routing.module';
import { DataListingComponent } from './data-listing/data-listing.component';
import { SharedModule } from "../shared/shared/shared.module";


@NgModule({
    declarations: [
        DataListingComponent
    ],
    imports: [
        CommonModule,
        DataListRoutingModule,
        SharedModule
    ]
})
export class DataListModule { }
