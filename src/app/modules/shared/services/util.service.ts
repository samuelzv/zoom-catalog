import {Injectable} from '@angular/core';

@Injectable()
export class UtilService {
  constructor() {}

  // get a random number between 1 and maxNumber (default 200)
  getRandomNumber(maxNumber: number = 200): number {
    return Math.floor(Math.random() * maxNumber) + 1;
  }

}
