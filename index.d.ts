declare namespace myInterfaces {
    export interface IgameProps {
        selectedNumbers?: Array<number>;
    }
    export interface IgameState {
        selectedNumbers: Array<number>;
        randomNumberOfStars:number;
        answerIsCorrect?: boolean;
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
        selectNumber: Function;
        checkAnswer() : void;
        answerIsCorrect?: boolean;
    }
    export interface IbuttonsState {
        selectedNumbers: Array<number>;
    }
}