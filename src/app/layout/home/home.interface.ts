import { EGameLevel } from "src/app/services/battleship.enum";

interface IObjectKeys {
    [key: string]: any;
}

export interface IGameLevelData extends IObjectKeys {
    gameLevel?: EGameLevel,
    amountOfShips: number,
    rows: number,
    columns: number,
    amountOfSquares: number,
    isWide?: boolean,
}
