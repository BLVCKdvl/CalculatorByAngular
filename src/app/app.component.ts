import {Component} from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { AppModule } from './app.module';
import { MyCalculatorComponent } from "./calculator/components/my-calculator.component";

@Component ({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss'],
  imports: [MyCalculatorComponent]
})
export class AppComponent{}
