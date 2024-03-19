import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-per-da',
  standalone: true,
  imports: [LoginComponent, RouterModule],
  templateUrl: './per-da.component.html',
  styles: ``,
})
export class PerDaComponent {}
