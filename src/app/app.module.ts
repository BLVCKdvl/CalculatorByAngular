import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { MyCalculatorModule } from "./my-calculator.module";
import { AppRoutingModule } from "./app-routing.module";
import { MyNavigation } from "./components/navigation/navigation.component";
import { MyEmptyPage } from "./components/empty-route/empty-route.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ 
        BrowserModule,
        ReactiveFormsModule,
        AppComponent,
        AppRoutingModule,
        MyCalculatorModule,
        MyNavigation,
        MyEmptyPage,
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}