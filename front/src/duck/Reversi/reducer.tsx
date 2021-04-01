// actions
import { ActionTypes } from "src/duck/Reversi/action";
// types
import { ReversiState, Payloads } from "src/duck/Reversi/types";

import { createBlankSquare } from "src/duck/Reversi/common";

const initialReversiState: ReversiState = {
  isFetching: false,
  game: {
    id: null,
    squares: createBlankSquare(),
    canPlace: false,
  },
  user: {
    name: "",
    image: "",
  },
};

export const reversi = (reversiState = initialReversiState, action: { type: ActionTypes } & Payloads) => {
  switch (action.type) {
    case ActionTypes.postDiscCoordinateRequest:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        isFetching: true,
      };
    case ActionTypes.postDiscCoordinateSuccess:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        game: {
          squares: JSON.parse(action.squaresJsonStr),
        },
        isFetching: false,
      };
    case ActionTypes.postDiscCoordinateFail:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        isFetching: false,
      };

    case ActionTypes.postUserInfoRequest:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        isFetching: true,
      };
    case ActionTypes.postUserInfoSuccess:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        isFetching: false,
        user: {
          name: action.user.name,
          image: action.user.image,
        },
      };
    case ActionTypes.postUserInfoFail:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        isFetching: false,
      };

    case ActionTypes.getUserInfoRequest:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        isFetching: true,
      };
    case ActionTypes.getUserInfoSuccess:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        isFetching: false,
        user: {
          name: action.user.name,
          image: action.user.image,
        },
      };
    case ActionTypes.getUserInfoFail:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        isFetching: false,
      };

    case ActionTypes.getGameStatusRequest:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        isFetching: true,
      };
    case ActionTypes.getGameStatusSuccess:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        isFetching: false,
        game: {
          id: action.game.id,
          squares: action.game.squares,
        },
      };
    case ActionTypes.getGameStatusFail:
      if (reversiState.isFetching) return { ...reversiState };
      return {
        ...reversiState,
        isFetching: false,
      };
    default:
      return { ...reversiState };
  }
};
