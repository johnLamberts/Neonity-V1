import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { LayoutModule } from '../layouts/layout.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class MainPagesModule { }
