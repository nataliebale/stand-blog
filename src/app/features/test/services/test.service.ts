import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  arr: Array<string> = [];

  add (item: string) {
    this.arr.push(item);
  }

  clear () {
    this.arr = [];
  }
}
