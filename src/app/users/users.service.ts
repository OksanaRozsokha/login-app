import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=21')
      .pipe(map(response => response.json()),
        map(response => response.results),
        map(users => {
          return users.map(u => {
            return {
              name: u.name.first + ' ' + u.name.last,
              image: u.picture.large,
              location: u.location.city
            }
          })
        })
      )
  }
}
