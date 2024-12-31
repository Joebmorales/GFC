import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { NAVITAGION_ITEMS, SOCIAL_MEDIA_ITEMS } from '../../_core/constants/navigation.const';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit
{
  public readonly NavigationItems = NAVITAGION_ITEMS;
  public readonly SocialMediaItems = SOCIAL_MEDIA_ITEMS;

  @ViewChild('sideNavigationBar') public sideNavigationBar!: MatDrawer;

  constructor(private router: Router) { }

  ngOnInit()
  {
  }

  public toggleSidenav(): void
  {
    const container = document.getElementById("container");
    if(container){
      container.classList.toggle("h-100")
    }
    this.sideNavigationBar.toggle();

  }

  public redirectTo(url: string, target: string = '_blank'): void
  {
    window.open(url, target);
  }

  navigateToHome(): void
  {
    this.router.navigate(['home']);
  }
}
