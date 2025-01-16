import { Component, OnInit } from '@angular/core';
import { CONTACT_INFO } from '../../../../_core/constants/pages/contact.const';
import { GHL } from '../../../../_core/models/ghl.models';
import { GHLService } from '../../../../_core/services/ghl.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public readonly ContactInfo = CONTACT_INFO;

  constructor(private GHLService: GHLService) {}

  ngOnInit() {}

  public onGeneralFormCompleted(generalFormValue: GHL.IGeneral): void {
    this.GHLService.postGeneralForm(generalFormValue).subscribe({
      next: (response: boolean) => {},
      error: () => {},
    });
  }

  public scrollToForm(): void {
    const formElement = document.querySelector('form') as HTMLElement;
    if (formElement) {
      const offset = -300; 
      const elementPosition =
        formElement.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  }
}
