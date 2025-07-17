import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  MatDialog,
  // MAT_DIALOG_DATA,
  // MatDialogRef,
  // MatDialogTitle,
  // MatDialogContent,
  // MatDialogActions,
  // MatDialogClose,
} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  user = new User();
  allUsers: User[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore, private router: Router) {}

  ngOnInit(): void {
    const usersRef = collection(this.firestore, 'users');
    collectionData(usersRef, { idField: 'id' }).subscribe((changes: any[]) => {
      console.log('received changes from DB', changes);
      this.allUsers = changes;
    });
  }

  goToUser(id: string) {
    this.router.navigate(['/user', id]);
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
