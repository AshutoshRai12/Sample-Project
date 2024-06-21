import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authRoutes } from '../../auth/auth-routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userData:any ;
  constructor(private route : Router){
    const  data:any = localStorage.getItem('UserData')
     this.userData = JSON.parse(data);
  }

  showSideBar() {
    // Cache the necessary DOM elements for sidebar button
    const sidebarBtn = document.querySelector('.header__button-sidebar');
    const expandSidebar = document.querySelector('.expand-sidebar');
    sidebarBtn?.classList.toggle('collapsed');
    expandSidebar?.classList.toggle('show');
  }

  openDropDown(){
      const hideArrow = document.querySelector('.hide-arrow');
      const toggleMenu = document.querySelector('.toggle-header-menu');
      if (hideArrow && toggleMenu) {
        hideArrow.classList.toggle('show');
        toggleMenu.classList.toggle('show');
     }
  }

  logoutClick(){
    localStorage.removeItem("UserData");
    this.route.navigate([authRoutes.logIn]);

  }
}
