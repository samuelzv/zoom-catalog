import {Injectable} from '@angular/core';

@Injectable()
export class UtilService {
  constructor() {}

  getRandomNumber(maxNumber: number = 200): number {
    return Math.floor(Math.random() * maxNumber) + 1;
  }

}
