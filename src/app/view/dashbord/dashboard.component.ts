import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuList } from './menu-list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentSelectedDirection!: string;
  sideMenu = menuList;
  collapse = false;
  userType:any;
  constructor(private router: Router) {}


  ngOnInit(): void {
    this.userType=localStorage.getItem('userType')
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }
  navigateHandler(direction: string) {
    this.router.navigate(['dashbaord/' + `${direction}`]);
  }
}
