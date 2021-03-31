import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

export enum ActionTypes {
  postDiscCoordinateRequest,
  postDiscCoordinateSuccess,
  postDiscCoordinateFail,

  postUserInfoRequest,
  postUserInfoSuccess,
  postUserInfoFail,

  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFail,

  getGameStatusRequest,
  getGameStatusSuccess,
  getGameStatusFail,
}

const postDiscCoordinateRequest = () => ({
  type: ActionTypes.postDiscCoordinateRequest,
});
const postDiscCoordinateSuccess = (squaresJson: JSON) => ({
  type: ActionTypes.postDiscCoordinateSuccess,
  posts: squaresJson,
});
const postDiscCoordinateFail = () => ({
  type: ActionTypes.postDiscCoordinateFail,
});
export const postDiscCoordinate = (userName: string, coordinate: string) => async (dispatch: Dispatch) => {
  dispatch(postDiscCoordinateRequest());

  const config = {
    data: {
      userName,
      coordinate,
    },
  };
  return axios
    .get("localhost:8080", config)
    .then((res) => dispatch(postDiscCoordinateSuccess(res.data)))
    .catch(() => dispatch(postDiscCoordinateFail()));
};

const postUserInfoRequest = () => ({
  type: ActionTypes.postUserInfoRequest,
});
const postUserInfoSuccess = (res: AxiosResponse) => ({
  type: ActionTypes.postUserInfoSuccess,
  user: {
    name: res.data.name,
    image: res.data.image,
  },
});
const postUserInfoFail = (err: { errMessage: string }) => ({
  type: ActionTypes.postUserInfoSuccess,
  err,
});
export const postUserInfo = (userName: string) => async (dispatch: Dispatch) => {
  dispatch(postUserInfoRequest());

  const config = {
    data: {
      userName,
    },
  };
  return axios
    .get("localhost:8080", config)
    .then((res) => dispatch(postUserInfoSuccess(res)))
    .catch((err) => dispatch(postUserInfoFail(err)));
};

const getUserInfoRequest = () => ({
  type: ActionTypes.postUserInfoRequest,
});
const getUserInfoSuccess = (res: AxiosResponse) => ({
  type: ActionTypes.postUserInfoSuccess,
  user: {
    name: res.data.name,
    image: res.data.image,
  },
});
const getUserInfoFail = () => ({
  type: ActionTypes.postUserInfoSuccess,
});
export const getUserInfo = (userName: string) => async (dispatch: Dispatch) => {
  dispatch(getUserInfoRequest());

  const config = {
    data: {
      userName,
    },
  };
  return axios
    .get("localhost:8080", config)
    .then((res) => dispatch(getUserInfoSuccess(res)))
    .catch((err) => dispatch(getUserInfoFail()));
};

const getGameStatusRequest = () => ({
  type: ActionTypes.postUserInfoRequest,
});
const getGameStatusSuccess = (res: AxiosResponse) => ({
  type: ActionTypes.postUserInfoSuccess,
  squares: res.data.squares,
});
const getGameStatusFail = () => ({
  type: ActionTypes.postUserInfoSuccess,
});
export const getGameStatus = (gameId: number, userName: string) => async (dispatch: Dispatch) => {
  dispatch(getGameStatusRequest());
  const config = {
    data: {
      gameId,
      userName,
    },
  };
  return axios
    .get("localhost:8080", config)
    .then((res) => dispatch(getGameStatusSuccess(res)))
    .catch((err) => dispatch(getGameStatusFail()));
};
