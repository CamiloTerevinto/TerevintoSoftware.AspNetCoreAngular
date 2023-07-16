import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    {
        path: '', component: SignUpComponent,
    }
];

@NgModule({
    declarations: [SignUpComponent],
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      MatCardModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule
  ],
    exports: [RouterModule]
})
export class SignupModule { }
