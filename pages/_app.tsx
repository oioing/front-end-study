//모든 페이지에서 하는 공통설정은 _app.js에서 진행
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/gloabalStyles";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  // JSX.Element는 함수의 return값이 jsx태그라는 걸 말해준다.

  // prettier-ignore
  return (
      <ApolloSetting>
        <>
          <Global styles={globalStyles}/> 
          {/* 이렇게 컴포넌트로도 적용할 수 있음 */}
            <Layout> 
            <Component {...pageProps} />
            </Layout> 
        </>
      </ApolloSetting>
    //어떤 페이지에 접속할때, 해당 페이지의 함수 return부분이 위 컴포넌트를 대체하면서 실행되는 원리다. 
    //즉 각 페이지 함수의 export는 여기로 export 되는 것이다.
    );
  //앞으로 이 componenet에서 client(graphql세팅)를 쓸 수 있도록 전달해줄게. 라는 뜻.
  // apolloprovider로 안감싸주면, graphql을 쓸 수 없다.
} //Component는 우리가 접속하는 페이지다.
