declare namespace myInterfaces {
    export interface IgameProps {
        selectedNumbers?: Array<number>;
    }
    export interface IgameState {
        selectedNumbers: Array<number>;
        usedNumbers: Array<number>;
        randomNumberOfStars: number;
        answerIsCorrect?: boolean;
        redraws: number;
        doneStatus: string;
    }
    export interface IstarsProps {
        numberOfStars: number;
    }
    export interface IanswersProps {
        selectedNumbers: Array<number>;
        unselectNumber: Function;
    }
    export interface IanswersState {
        selectedNumbers: Array<number>;
    }
    export interface IbuttonsProps {
        selectedNumbers: Array<number>;
        usedNumbers: Array<number>;
        selectNumber: Function;
        checkAnswer(): void;
        acceptAnswer(): void;
        redraw(): void;
        redraws: number;
        answerIsCorrect?: boolean;
    }
    export interface IbuttonsState {
        selectedNumbers: Array<number>;
    }
}