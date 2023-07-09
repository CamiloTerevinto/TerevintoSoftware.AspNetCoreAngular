import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '../../../auth/components/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './users.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
    {
        path: '', component: UsersComponent,
    }
];

@NgModule({
    declarations: [UsersComponent, EditUserDialogComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTableModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule
        
    ],
    exports: [RouterModule]
})
export class UsersModule { }
