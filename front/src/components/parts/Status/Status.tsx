import { ChangeEventHandler } from "react";
import styled from "styled-components";
import React, { useState } from "react";

import { Button } from "src/components/parts/Button/Button";
import { Input } from "src/components/parts/Input/Input";

interface StatusProps {
  user: {
    name: string | null;
  };
  game: {
    id: number | null;
  };
  dispatcher: {
    registrationDispatcher: Function;
    loginDispatcher: Function;
    startDispatcher: Function;
  };
}

export const Status = ({ user, game, dispatcher }: StatusProps) => {
  const name = user.name ? user.name : "";
  const id = game.id ? game.id : "";

  const [inputName, setInputName] = useState("");
  const [inputId, setInputId] = useState();

  return (
    <StyledStatus>
      <StyledForm>
        {name ? (
          <LoginedUserViewBox>
            <StyledText>ユーザー：{name}</StyledText>
          </LoginedUserViewBox>
        ) : (
          <LogoutedUserViewBox>
            <StyledText>ユーザー：未登録</StyledText>
            <Input onChange={createHandleInput(inputName, setInputName)} value={inputName} placeholder={"ユーザー名"} margin={"10px 0"} />
            <CenteringInlineBlockWrapper>
              <Button onClick={() => dispatcher.loginDispatcher(inputName)}>ログイン</Button>
              <Button onClick={() => dispatcher.registrationDispatcher(inputName)} margin={"0 0 0 10px"}>
                登録
              </Button>
            </CenteringInlineBlockWrapper>
          </LogoutedUserViewBox>
        )}
        {(() => {
          if (id && name) {
            return (
              <StartedGameViewBox>
                <StyledText>ゲームID：{id}</StyledText>
              </StartedGameViewBox>
            );
          } else if (name) {
            return (
              <UnStartedGameViewBox>
                <Input onChange={createHandleInput(inputId, setInputId)} value={inputName} placeholder={"ゲームidを入力"} margin={"10px 0"} />
                <CenteringInlineBlockWrapper>
                  <Button onClick={() => dispatcher.startDispatcher(id, name)} margin={"0 auto"}>
                    ゲーム開始
                  </Button>
                </CenteringInlineBlockWrapper>
              </UnStartedGameViewBox>
            );
          }
        })()}
      </StyledForm>
    </StyledStatus>
  );
};

const StyledStatus = styled.div`
  width: 300px;
  padding: 20px;
  border: solid 1px #666;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const CenteringInlineBlockWrapper = styled.div`
  text-align: center;
`;

const LoginedUserViewBox = styled.div``;
const LogoutedUserViewBox = styled.div`
  margin-top: 20px;
`;
const StartedGameViewBox = styled.div`
  margin-top: 20px;
`;
const UnStartedGameViewBox = styled.div`
  margin-top: 20px;
`;

const StyledText = styled.p`
  margin-bottom: 10px;
`;

const createHandleInput = (state: string | number | undefined, setState: Function): ChangeEventHandler<HTMLInputElement> => () => {
  return (event: { target: HTMLInputElement }) => {
    setState({ state: event.target.value });
  };
};
