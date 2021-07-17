export interface ISquareItem {
    isShip: boolean,
    isClicked: boolean,
    shipId: number,
    shipSize: number,
    isFirstSquareOfShip?: boolean,
    isShipDestroyed?: boolean,
}
