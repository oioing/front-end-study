import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IApolloSettingProps{
    children : JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element{
    const client = new ApolloClient({
        uri: "http://backendonline.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(), //컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시 저장해놓기
        // 미리 꺼내와서 저장해두는 습성이 있음
      });

    return(
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    // 이 과정을 합성, 또는 composition이라고 부른다. 
    )
}   