export interface ReversiState {
  isFetching: boolean;
  game: {
    id: number | null;
    squares: {
      [index: string]: "blank" | "white" | "black" | "ready";
    };
    canPlace: boolean;
  };
  user: {
    name: string | null;
    image: string | null;
  };
}

export interface Payloads {
  squaresJsonStr: string;
  user: {
    name: string;
    image: string;
  };
  game: {
    id: string;
    squares: {
      [index: string]: "blank" | "white" | "black" | "ready";
    };
  };
}
