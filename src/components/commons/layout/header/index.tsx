import { BtnArea } from "../../../../../styles/boardcss";
import { Container, LoginBtn, Logo, SigninBtn, Wrapper } from "./style";

export default function LayoutHeader(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <a href="/boards">
          <Logo src="/logo.png" />
        </a>
        <BtnArea>
          <LoginBtn>로그인</LoginBtn>
          <SigninBtn>회원가입</SigninBtn>
        </BtnArea>
      </Container>
    </Wrapper>
  );
}
