import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FAQS_SERVICES_ITEMS } from '../../../../_core/constants/faqs.const';
import { INSURANCE_ITEMS, PARTNERS, STEP_BY_STEP } from '../../../../_core/constants/pages/services.const';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit
{

  public readonly InsuranceItems = INSURANCE_ITEMS;
  public readonly FaqsItems = FAQS_SERVICES_ITEMS;
  public readonly Partners = PARTNERS;
  public readonly StepByStep = STEP_BY_STEP;

  constructor(private router: Router,
    private meta: Meta
  ) { }

  ngOnInit()
  {
    this.meta.addTag({ name: 'Global Financial Catalyst services', content: 'This page content includes all the services provided by Global Financial Catalyst, with a Step by Step formula for a financial sucess plan. Includes all trusted partners and a set of frequently asked questions.' });
  }

  navigateToLink(link: string): void
  {
    this.router.navigate([link]);
  }
}
