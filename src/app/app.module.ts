import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { MyCalculatorModule } from "./my-calculator.module";

@NgModule({
    imports: [ 
        BrowserModule,
        ReactiveFormsModule,
        AppComponent,
        MyCalculatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}