import styled from "styled-components";

import { Button } from "src/components/parts/Button/Button";
import { Input } from "src/components/parts/Input/Input";

interface StatusProps {
  user: {
    name: string | null;
    image: string | null;
  };
  game: {
    id: number | null;
  };
}

export const Status = ({ user, game }: StatusProps) => {
  const name = user.name ? user.name : "";
  const image = user.image ? user.image : "";
  const id = game.id ? game.id : "";
  return (
    <StyledStatus>
      <StyledForm>
        {name ? (
          <LoginedUserViewBox>
            <StyledText>ユーザー：{name}</StyledText>
            <StyledImage src={image}></StyledImage>
          </LoginedUserViewBox>
        ) : (
          <LogoutedUserViewBox>
            <StyledText>ユーザー：未登録</StyledText>
            <Input placeholder={"ユーザー名"} margin={"10px 0"} />
            <CenteringInlineBlockWrapper>
              <Button onClick={() => {}}>ログイン</Button>
              <Button onClick={() => {}} margin={"0 0 0 10px"}>
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
                <Input placeholder={"ゲームidを入力"} margin={"10px 0"} />
                <CenteringInlineBlockWrapper>
                  <Button onClick={() => {}} margin={"0 auto"}>
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
interface StyledImageProps {
  src: string;
}
const StyledImage = styled.img<StyledImageProps>`
  width: 200px;
`;

const StyledText = styled.p`
  margin-bottom: 10px;
`;
