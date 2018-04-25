import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MgrOverviewComponent } from './components/mgr-overview/mgr-overview.component';
import { MgrAssociateViewComponent } from './components/mgr-associate-view/mgr-associate-view.component';

import { AssociateService } from './services/associate.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AttendanceReportComponent } from './components/attendance-report/attendance-report.component';
import { StatusReportComponent } from './components/status-report/status-report.component';
import { ButtonToolbarComponent } from './components/button-toolbar/button-toolbar.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MgrOverviewComponent,
    MgrAssociateViewComponent,
    SidenavComponent,
    NavbarComponent,
    AttendanceReportComponent,
    StatusReportComponent,
    ButtonToolbarComponent,
    EditFormComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AssociateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
