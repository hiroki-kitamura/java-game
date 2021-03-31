import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Dispatch } from "redux";

export enum ActionTypes {
  postDiscCoodinateRequest,
  postDiscCoodinateSuccess,
  postDiscCoodinateFail,

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

const postDiscCoodinateRequest = () => ({
  type: ActionTypes.postDiscCoodinateRequest,
});
const postDiscCoodinateSuccess = (squaresJson: JSON) => ({
  type: ActionTypes.postDiscCoodinateSuccess,
  posts: squaresJson,
});
const postDiscCoodinateFail = () => ({
  type: ActionTypes.postDiscCoodinateFail,
});
export const postDiscCoodinate = () => async (dispatch: Dispatch, config: AxiosRequestConfig) => {
  dispatch(postDiscCoodinateRequest());
  return axios
    .get("localhost:8080", config)
    .then((res) => dispatch(postDiscCoodinateSuccess(res.data)))
    .catch(() => dispatch(postDiscCoodinateFail()));
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
export const postUserInfo = () => async (dispatch: Dispatch, config: AxiosRequestConfig) => {
  dispatch(postUserInfoRequest());
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
export const getUserInfo = () => async (dispatch: Dispatch, config: AxiosRequestConfig) => {
  dispatch(getUserInfoRequest());
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
export const getGameStatus = () => async (dispatch: Dispatch, config: AxiosRequestConfig) => {
  dispatch(getGameStatusRequest());
  return axios
    .get("localhost:8080", config)
    .then((res) => dispatch(getGameStatusSuccess(res)))
    .catch((err) => dispatch(getGameStatusFail()));
};
