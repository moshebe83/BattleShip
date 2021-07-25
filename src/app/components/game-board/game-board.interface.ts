export interface ISquareItem {
    isShip: boolean,
    isClicked: boolean,
    shipId: number,
    shipSize: number,
    isFirstSquareOfShip?: boolean,
    isShipSunk?: boolean,
    isVertical?: boolean,
}

export interface IAxes {
    x: string[],
    y: number[],
}

export interface IState {
    strikesCounter: number,
    progressCounter: number,
}

export interface IShipsAmountsList {
    onBoard: number,
    sunk: number
}
