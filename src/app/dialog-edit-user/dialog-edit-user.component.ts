import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatProgressBarModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogEditUserComponent {
  user!: User;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

  onNoClick() {
      this.dialogRef.close();
    }
  
  saveUser() {
    // this.user.birthDate = this.birthDate.getTime();
    // console.log('current user is', this.user);
    // this.loading = true;

    // const usersCollection = collection(this.firestore, 'users');
    // addDoc(usersCollection, this.user.toJSON()).then(result => {
    //   this.loading = false;
    //   console.log('user added', result);
    //   this.dialogRef.close();
    // });
  }
}
