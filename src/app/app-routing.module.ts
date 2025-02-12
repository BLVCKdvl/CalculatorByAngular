import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './calculator/components/my-calculator.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';

const routes: Routes = [
    {
        path: 'calculator',
        component: MyCalculatorComponent
    },
    {
        path: '**',
        component: MyEmptyPage,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }