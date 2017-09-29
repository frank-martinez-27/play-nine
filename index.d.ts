declare namespace myInterfaces {
    export interface IgameProps {
        selectedNumbers?: Array<number>;
    }
    export interface IgameState {
        selectedNumbers: Array<number>;
    }
    export interface IstarsProps {
        numberOfStars: number;
    }
    export interface IanswersProps {
        selectedNumbers: Array<number>;  
    }
    export interface IanswersState {
        selectedNumbers: Array<number>;
    }
    export interface IbuttonsProps {
        selectedNumbers: Array<number>;
        selectNumber: Function;
    }
    export interface IbuttonsState {
        selectedNumbers: Array<number>;
    }
}