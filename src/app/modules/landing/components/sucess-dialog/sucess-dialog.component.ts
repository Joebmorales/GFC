import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-sucess-dialog',
  templateUrl: './sucess-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ]
})
export class SucessDialogComponent implements OnInit
{

  constructor() { }

  ngOnInit()
  {
  }

}
