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
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

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
  // userId!: string;
  birthDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore) {}

  onNoClick() {
    this.dialogRef.close();
  }
  
  // saveUser() {
  //   // this.user.birthDate = this.birthDate.getTime();
  //   console.log('current user is', this.user);
  //   this.loading = true;

  //   const usersCollection = collection(this.firestore, 'users');
  //   addDoc(usersCollection, this.user.toJSON()).then(result => {
  //     this.loading = false;
  //     console.log('user added', result);
  //     this.dialogRef.close();
  //   });
  // }
  saveUser() {
    console.log('current user is', this.user);
    this.loading = true;

    const userDocRef = doc(this.firestore, 'users', this.user.id);
    updateDoc(userDocRef, this.user.toJSON()).then((result) => {
      this.loading = false;
      console.log('user updated', result);
      this.dialogRef.close();
    // }).catch(error => {
    //   console.error('Update failed:', error);
    //   this.loading = false;
    });
  }
}
