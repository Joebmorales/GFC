import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FAQS_BUSINESS_PLATFORM_ITEMS } from '../../../../_core/constants/faqs.const';
import
  {
    IMPACT_OPTIONS,
    INCOMESTREAM_OPTIONS,
    MARKETING_STRATEGIES,
    PARTNER_PERKS,
    PARTNERTYPES_OPTIONS,
    STARTING_POINTS,
  } from '../../../../_core/constants/pages/business.const';

@Component({
  selector: 'app-business-platform',
  templateUrl: './business-platform.component.html',
  styleUrl: './business-platform.component.css',
})
export class BusinessPlatformComponent implements OnInit
{
  public readonly PartnerTypesOptions = PARTNERTYPES_OPTIONS;
  public readonly IncomeStreamOptions = INCOMESTREAM_OPTIONS;
  public readonly MarketingStrategies = MARKETING_STRATEGIES;
  public readonly ImpactOptions = IMPACT_OPTIONS;
  public readonly StartingPoints = STARTING_POINTS;
  public readonly FaqsItems = FAQS_BUSINESS_PLATFORM_ITEMS;
  public readonly PartnerPerks = PARTNER_PERKS;

  constructor(private router: Router, private meta: Meta)
  {
  }

  ngOnInit()
  {
    this.meta.addTag({ name: 'Global Financial Catalyst Business Platforms', content: 'This page includes information about how to become a Global Financial Catalyst partner, including benefits and 6 ways to partner. A frequently asked questions sectyion regarding becoming a partner' });
  }

  navigateToLink(link: string): void
  {
    this.router.navigate([link]);
  }
}
