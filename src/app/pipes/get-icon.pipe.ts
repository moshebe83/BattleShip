import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getIcon'
})

export class GetIconPipe implements PipeTransform {

  transform(shipSize: number): string {
    let iconSrc: string = './assets/';

    switch (shipSize) {
      case 1:
        iconSrc += 'xs_submarine.png'
        break;
      case 2:
        iconSrc += 'small_submarine.svg'
        break;
      case 3: case 4: case 5:
        iconSrc += 'medium_submarine.svg'
        break;
      case 6: case 7: case 8:
        iconSrc += 'large_submarine.svg'
        break;
      default:
        break;
    }

    return iconSrc;
  }

}
