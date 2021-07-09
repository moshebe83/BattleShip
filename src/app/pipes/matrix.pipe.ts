import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matrixPipe'
})

export class MatrixPipe implements PipeTransform {

  transform(squareIndex: number, rowIndex: number, squaresPerRow: number): unknown {
    let rowFirstSquare = squareIndex + 1 > rowIndex * squaresPerRow;
    let rowLastSquare = squareIndex < (rowIndex + 1) * squaresPerRow;

    return rowFirstSquare && rowLastSquare;
  }

}
