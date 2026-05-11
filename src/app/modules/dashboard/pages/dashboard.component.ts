import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
<<<<<<< HEAD
import { Sidenav } from '../../shared/components/sidenav/sidenav';
=======
>>>>>>> 2bbccb1dc63647eab3ac8ed41b196faca291417f


@Component({
  selector: 'app-dashboard',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, RouterLink,Sidenav],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
=======
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 

>>>>>>> 2bbccb1dc63647eab3ac8ed41b196faca291417f
})
export class DashboardComponent {}
