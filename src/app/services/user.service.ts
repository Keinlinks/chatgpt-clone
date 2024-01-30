import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: User = {
    id: 1,
    name: 'keinlinks',
  };
  constructor() {}
}
