import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersData: any = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.usersData = this.activatedRoute.snapshot.data["data"]
   
  }

}
