import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { SharedModule } from "../shared/shared/shared.module";


@NgModule({
    declarations: [
        ProductListingComponent
    ],
    imports: [
        CommonModule,
        ProductListRoutingModule,
        SharedModule
    ]
})
export class ProductListModule { }
