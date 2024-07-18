import { useRouter } from "next/router";
import { Container, Divider, MenuBtn, Wrapper } from "./style";
import { Fragment, MouseEvent } from "react";

export default function LayoutNav(): JSX.Element {
  const router = useRouter();

  const NAVIGATE_MENUS = [
    { name: "자유게시판", page: "/boards" },
    { name: "중고마켓", page: "/market" },
    { name: "마이페이지", page: "/mypage" },
  ];

  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };

  return (
    <Wrapper>
      {NAVIGATE_MENUS.map((el) => (
        <Fragment key={el.page}>
          <Divider></Divider>
          <MenuBtn id={el.page} onClick={onClickMenu}>
            {el.name}
          </MenuBtn>
        </Fragment>
      ))}
      <Divider></Divider>
    </Wrapper>
  );
}
