import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import
  {
    Award,
    Book,
    Briefcase,
    Calculator,
    ChartNoAxesColumn,
    ChartPie,
    Clock,
    DollarSign,
    FileText,
    GraduationCap,
    HeartPulse,
    Landmark,
    LucideAngularModule,
    Mail,
    MapPin,
    Phone,
    PiggyBank,
    RefreshCw,
    Shield,
    Sliders,
    TrendingUp,
    UserCheck,
    UserPlus,
    Users
  } from 'lucide-angular';
import { AngularMaterialModule } from '../material/angular-material.module';
import { AdditionalFormComponent } from './components/additional-form/additional-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { InsuranceTypeFormComponent } from './components/insurance-type-form/insurance-type-form.component';
import { PartnerFormComponent } from './components/partner-form/partner-form.component';
import { SucessDialogComponent } from './components/sucess-dialog/sucess-dialog.component';
import { LandingComponent } from './landing.component';
import { LandingRoutes } from './landing.routes';
import { BusinessPlatformComponent } from './pages/business-platform/business-platform.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  imports: [
    RouterModule.forChild(LandingRoutes),
    CommonModule,
    AngularMaterialModule,
    NgOptimizedImage,
    GeneralFormComponent,
    PartnerFormComponent,
    ClientFormComponent,
    AdditionalFormComponent,
    InsuranceTypeFormComponent,
    SucessDialogComponent,
    LucideAngularModule.pick({
      PiggyBank,
      Shield,
      GraduationCap,
      Landmark,
      HeartPulse,
      FileText,
      Briefcase,
      UserCheck,
      Calculator,
      DollarSign,
      RefreshCw,
      Sliders,
      Users,
      ChartNoAxesColumn,
      TrendingUp,
      UserPlus,
      Award,
      ChartPie,
      Book,
      Phone,
      Mail,
      Clock,
      MapPin
    }),
  ],
  declarations: [
    LandingComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    BusinessPlatformComponent,
    GetStartedComponent,
  ]
})
export class LandingModule { }
