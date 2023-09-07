import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomsComponent } from './rooms/rooms.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HealthInfosComponent } from './health-infos/health-infos.component';
import { MatTableModule } from '@angular/material/table';
import { CreateHealthInfoComponent } from './create-health-info/create-health-info.component';
import { HealthInfoDetailComponent } from './health-info-detail/health-info-detail.component';
import { UpdateHealthInfoComponent } from './update-health-info/update-health-info.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: CreateRoomComponent },
  { path: 'rooms/:id', component: RoomDetailComponent },
  { path: 'rooms/:id/update', component: UpdateRoomComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: CreateUserComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'users/:id/update', component: UpdateUserComponent },
  { path: 'healthInfos', component: HealthInfosComponent },
  { path: 'healthInfos/add', component: CreateHealthInfoComponent },
  { path: 'healthInfos/:id', component: HealthInfoDetailComponent },
  { path: 'healthInfos/:id/update', component: UpdateHealthInfoComponent },
];

@NgModule({
  declarations: [
    RoomsComponent,
    RoomDetailComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    CreateUserComponent,
    UsersComponent,
    UserDetailComponent,
    UpdateUserComponent,
    HealthInfosComponent,
    CreateHealthInfoComponent,
    HealthInfoDetailComponent,
    UpdateHealthInfoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [RouterModule],
})
export class HospitalModule {}
