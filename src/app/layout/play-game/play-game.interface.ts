import { EGameLevel } from "src/app/enums/battleship.enum";

export interface IGameLevelData {
    gameLevel: EGameLevel,
    amountOfShips: number,
    amountOfRows: number,
    squaresPerRow: number,
    amountOfSquares: number,
}

export interface IStateMsgs {
    win: string,
}