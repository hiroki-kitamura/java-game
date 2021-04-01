import React from "react";
import { AxiosRequestConfig } from "axios";
import { useSelector, useDispatch } from "react-redux";

import { Layout } from "src/components/layout/reversi";
import { Squares } from "src/components/parts/Squares/Squares";
import { Status } from "src/components/parts/Status/Status";
import { ReversiState } from "src/duck/Reversi/types";

import { postDiscCoordinate, postUserInfo, getUserInfo, getGameStatus } from "src/duck/Reversi/action";

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
      <Squares
        squares={state.reversi.game.squares}
        dispatcher={(coordinate: string) => dispatch(postDiscCoordinate(state.reversi.user.name, coordinate))}
      ></Squares>
      <Status
        user={state.reversi.user}
        game={game}
        dispatcher={{
          registrationDispatcher: (userName: string) => dispatch(postUserInfo(userName)),
          loginDispatcher: (userName: string) => dispatch(getUserInfo(userName)),
          startDispatcher: (gameId: number, userName: string) => dispatch(getGameStatus(gameId, userName)),
        }}
      ></Status>
    </Layout>
  );
};
