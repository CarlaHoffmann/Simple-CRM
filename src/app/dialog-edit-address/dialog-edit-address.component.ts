import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatProgressBarModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  user!: User;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: Firestore) {}

  onNoClick() {
    this.dialogRef.close();
  }
  
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
