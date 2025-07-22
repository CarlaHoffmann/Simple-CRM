import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  userId: string = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe(paramMap => {
    //   this.userId = paramMap.get('id') ?? '';
    // });
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      if (id) {
        this.userId = id;
        console.log('got id', this.userId);
        this.getUser();
      }
    });
  }

  getUser() {
    const userDocRef = doc(this.firestore, 'users', this.userId);
    docData(userDocRef, { idField: 'id' }).subscribe((user) => {
      this.user = new User(user);
      console.log('getUser', this.user);
    });
  }
}
