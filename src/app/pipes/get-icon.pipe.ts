import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getIcon'
})

export class GetIconPipe implements PipeTransform {

  transform(shipSize: number): string {
    let iconName: string = '';

    switch (shipSize) {
      case 1:
        iconName = 'xs_submarine.png'
        break;
      case 2:
        iconName = 'small_submarine.svg'
        break;
      case 3 || 4 || 5:
        iconName = 'medium_submarine.svg'
        break;
      case 6 || 7 || 8:
        iconName = 'large_submarine.svg'
        break;
      default:
        break;
    }

    return "./assets/" + iconName;
  }

}
