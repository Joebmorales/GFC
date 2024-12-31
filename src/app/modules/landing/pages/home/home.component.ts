import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  JOURNEY_START_POINTS,
  SERVICES_ITEMS,
  STATS,
} from '../../../../_core/constants/pages/home.const';
import { IStat } from '../../../../_core/models/generic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('statsContainer', { static: true }) statsConatiner!: ElementRef;

  public readonly ServicesItems = SERVICES_ITEMS;
  public readonly JourneyStartPoints = JOURNEY_START_POINTS;
  public readonly stats = STATS;

  constructor(private router: Router) {}

  ngOnInit() {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startCounting();
            statsObserver.disconnect();
          }
        });
      },
      { threshold: 0.50 }
    );

    statsObserver.observe(this.statsConatiner.nativeElement);
  }

  navigateToLink(link: string): void {
    this.router.navigate([link]);
  }

  startCounting() {
    this.stats.forEach((item) => {
      const startValue = 0;
      const duration = 1200; // Total duration of the animation in ms
      const startTime = performance.now();
  
      const updateValue = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Normalize progress (0 to 1)
  
        item.startValue = Math.floor(startValue + progress * item.endValue); // Interpolated value
  
        if (progress < 1) {
          requestAnimationFrame(updateValue); // Continue the animation
        } else {
          item.startValue = item.endValue; // Ensure the final value
        }
      };
  
      requestAnimationFrame(updateValue);
    });
  }

}
