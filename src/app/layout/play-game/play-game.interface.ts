import { EGameLevel } from "src/app/enums/battleship.enum";

export type IGameLevelsList = {
    [key in EGameLevel]: IGameLevelData;
};

export interface IGameLevelData {
    label: string,
    amountOfShips: number,
    amountOfRows: number,
    squaresPerRow: number
}
