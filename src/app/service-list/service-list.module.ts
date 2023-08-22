import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceListRoutingModule } from './service-list-routing.module';
import { ServiceListingComponent } from './service-listing/service-listing.component';
import { SharedModule } from "../shared/shared/shared.module";

@NgModule({
    declarations: [
        ServiceListingComponent
    ],
    imports: [
        CommonModule,
        ServiceListRoutingModule,
        SharedModule
    ]
})
export class ServiceListModule { }
