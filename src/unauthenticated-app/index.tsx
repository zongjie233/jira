import { Button, Card, Divider } from "antd";
import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import styled from "@emotion/styled";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ShadowCard>
          {isRegister ? <RegisterScreen /> : <LoginScreen />}
          <Divider />
          <a onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "已经有帐号了，直接登录" : "没有账号？注册登录"}
          </a>
        </ShadowCard>
      </div>
    </Container>
  );
};

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem, 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
