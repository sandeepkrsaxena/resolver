import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserlistService } from './userlist.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverResolver implements Resolve<boolean> {
  constructor(private userListService: UserlistService){}
  resolve(): Observable<any> {
    return this.userListService.getUsersList()
  }
}
