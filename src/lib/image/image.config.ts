import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class ImageConfig {
    size?: number = 64;
    error?: string = './assets/img/logo.svg';
}
