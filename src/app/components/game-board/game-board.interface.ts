export interface ISquareItem {
    isShip: boolean,
    isClicked: boolean,
    shipId: number,
    shipSize: number,
    isFirstSquareOfShip?: boolean,
    isShipSunk?: boolean,
}

export interface IAxes {
    x: string[],
    y: number[],
}

export interface IState {
    strikesCounter: number,
    progressCounter: number,
    msg?: string,
}

export interface IShipsAmountsList {
    onBoard: number,
    sunk: number
}
