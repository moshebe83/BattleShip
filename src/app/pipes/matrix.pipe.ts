import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matrixPipe'
})

export class MatrixPipe implements PipeTransform {

  transform(squareIndex: number, rowIndex: number, columns: number): boolean {
    let rowFirstSquare = squareIndex + 1 > rowIndex * columns;
    let rowLastSquare = squareIndex < (rowIndex + 1) * columns;

    return rowFirstSquare && rowLastSquare;
  }

}
