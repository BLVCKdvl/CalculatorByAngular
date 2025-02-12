import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { MyCalculatorModule } from "./my-calculator.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    imports: [ 
        BrowserModule,
        ReactiveFormsModule,
        AppComponent,
        AppRoutingModule,
        MyCalculatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}