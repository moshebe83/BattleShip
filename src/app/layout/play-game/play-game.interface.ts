export interface IGameLevelsList {
    [key: number]: IGameLevelData
}

export interface IGameLevelData {
    amountOfShips: number,
    amountOfRows: number,
    squaresPerRow: number
}