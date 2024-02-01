import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONSTS } from '../config/constants.config';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string | undefined): string | undefined {
    if (!value) {
      return APP_CONSTS.defaultImg;
    } else {
      return value;
    }
  }
}
