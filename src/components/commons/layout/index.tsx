import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNav from "./navigation";

const HIDDEN_HEADERS = [""];

interface ILayOutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayOutProps): JSX.Element {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNav />
      <div>{props.children}</div>
    </>
  );
}
