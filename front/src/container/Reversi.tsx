import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Layout } from "src/components/layout/reversi";
import { Squares, SquaresProps } from "src/components/parts/Squares/Squares";
import { Status } from "src/components/parts/Status/Status";
import { ReversiState } from "src/duck/Reversi/types";

export interface MapReversiState {
  reversi: ReversiState;
}

export const Reversi = () => {
  const state = useSelector<MapReversiState, MapReversiState>((state) => state);
  const dispatch = useDispatch();
  const game = {
    id: state.reversi.game.id,
  };
  return (
    <Layout>
      <Squares squares={state.reversi.game.squares}></Squares>
      <Status user={state.reversi.user} game={game}></Status>
    </Layout>
  );
};
