import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MedicHomeComponent } from './medic-home/medic-home.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserHomeComponent,
    AdminHomeComponent,
    MedicHomeComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
})
export class PagesModule {}
