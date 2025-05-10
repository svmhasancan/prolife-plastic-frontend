import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module'; // ✔ doğru isim
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [CommonModule, RouterModule, AdminRoutingModule],
})
export class AdminModule {}
