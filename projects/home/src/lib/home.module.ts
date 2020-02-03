import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@my-app/core';
import { MatButtonModule } from '@angular/material/button';
// ag-grid
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ApplicationJobDetaisComponent } from './application-job-detais/application-job-detais.component';
import { CdkTableModule } from '@angular/cdk/table';
// import { MatRadioModule } from '@angular/material';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { preload: true },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [HomeComponent, ApplicationJobDetaisComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSidenavModule,
    ScrollingModule,
    PerfectScrollbarModule,
    MatListModule,
    MatIconModule,
    CdkTableModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [HomeComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class HomeModule {}
