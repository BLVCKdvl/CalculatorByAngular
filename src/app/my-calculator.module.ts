import { NgModule } from '@angular/core';
import { MyCalculatorComponent } from './components/my-calculator/my-calculator.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [MyCalculatorComponent, FormsModule, CommonModule],
    exports: [MyCalculatorComponent],
    declarations: [],
    providers: [],
})
export class MyCalculatorModule { }
