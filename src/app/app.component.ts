import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { MyCalculatorComponent } from './calculator/components/my-calculator.component';
import { MyNavigation } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MyCalculatorComponent, MyNavigation, RouterModule],
})
export class AppComponent {}
