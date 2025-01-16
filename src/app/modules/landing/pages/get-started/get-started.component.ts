import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FORM_TITLES, SERVICE_OPTIONS } from '../../../../_core/constants/form.const';
import { FORM_TYPE } from '../../../../_core/enums/form.enum';
import { CLIENT_SERVICE_OPTION, SERVICE_OPTION } from '../../../../_core/enums/service.enum';
import { GHL } from '../../../../_core/models/ghl.models';
import { GHLService } from '../../../../_core/services/ghl.service';
import { SucessDialogComponent } from '../../components/sucess-dialog/sucess-dialog.component';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit
{
  public readonly ServiceOptions = SERVICE_OPTIONS;
  public readonly FormTitle = FORM_TITLES;
  public readonly ServiceOption = SERVICE_OPTION;
  public readonly ClientServiceOption = CLIENT_SERVICE_OPTION;
  public readonly FormTypeOption = FORM_TYPE;
  public firstFormValid: boolean = false;
  public formType: FORM_TYPE = FORM_TYPE.None;

  readonly dialog = inject(MatDialog);
  private _clientFormValue!: GHL.IClient;
  private _partnerFormValue!: GHL.IPartner;
  private _generalFormValue !: GHL.IGeneral;


  get title(): string
  {
    return this.FormTitle.get(this.formType)!;
  }

  get showClientForm(): boolean
  {
    return this.formType == FORM_TYPE.Client;
  }

  get showPartnerForm(): boolean
  {
    return this.formType == FORM_TYPE.Partner;
  }

  get showGeneralForm(): boolean
  {
    return this.formType == FORM_TYPE.General;
  }

  get showForm(): boolean
  {
    return this.formType != FORM_TYPE.None;
  }

  constructor(private GHLService: GHLService, private router: Router, private meta: Meta) { }

  ngOnInit()
  {
    this.meta.addTag({ name: 'Get started with Global Financial Catalyst', content: 'This page is a form to start your financial journey and conect with Global Financial Catalyst' });
  }

  public onClientFormCompleted(clientFormValue: GHL.IClient): void
  {
    this.GHLService.postClientForm(clientFormValue).subscribe({
      next: (response: boolean) =>
      {
        this.openDialog();
      },
      error: () =>
      {

      }
    });
  }

  public onPartnerFormCompleted(partnerFormValue: GHL.IPartner): void
  {
    this.GHLService.postPartnerForm(partnerFormValue).subscribe({
      next: (response: boolean) =>
      {
        this.openDialog();
      },
      error: () =>
      {

      }
    });
  }

  public onGeneralFormCompleted(generalFormValue: GHL.IGeneral): void
  {
    this.GHLService.postGeneralForm(generalFormValue).subscribe({
      next: (response: boolean) =>
      {
        this.openDialog();
      },
      error: () =>
      {

      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SucessDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);  
    });
  }

  public resetApplication(): void
  {
    this.formType = FORM_TYPE.None;

    setTimeout(() =>
    {
      const element = document.getElementById('sectionTitle');
      if (element)
      {
        element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "start" });
      }
    }, 100);
  }
}
