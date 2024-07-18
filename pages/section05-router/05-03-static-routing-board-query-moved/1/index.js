import { gql, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
    query{
        fetchBoard(number:10){
            number
            writer
            title
            contents
        }
    }

`




export default function StaticRoutingPageMoved() {
    const {data} = useQuery(FETCH_BOARD)
    //중괄호는 대괄호안의 변수처럼 마음대로 이름을 못바꾼다.
    // useQuery는 mutation이나 axios랑 다르게 useQuery를 선언한 순간 바로 조회해서 정보를 가져온다. 
    
    //단 위의 쿼리는 받아올때까지 기다려야 하고, 이동안 흰색 화면이 비쳐짐으로 느려보인다. 
    //따라서 아래 하드코딩된 아래 내용들을 미리 보여주려고 한다. 즉 비동기로 노출
    //그래서 data 내부 값을 받아오는 얘들은 한번 더 그리는 방식으로 작동.
    console.log(data)
    

    return(
    <div>
        <div>1번게시글로 이동이 완료되었습니다.</div>
        <div>작성자 : {data?.fetchBoard.writer} </div>
        {/* optional chaining이라고 부르는 방법으로 위와 같이 대체할 수 있다. */}
        <div>제목 : {data ? data.fetchBoard.title: "데이터 로딩중!"}</div>
        삼항연산자. 없으면 text, 있으면 변수로
        <div>내용 : {data?.fetchBoard?.contents}</div>
        {/* fetchBoard에까지 ?를 붙여주면 fetch값이 없어도 실행된다. 빈값으로 */}
        <div>내용 : {data && data.fetchBoard.contents}</div>
        {/* 데이터가 참이면 && 오른쪽, 없으면 &&왼쪽. 근데 어차피 undefied라서 안보임 
        조건부 렌더링이라고 부른다.*/}
        {/* data || datafetchProfile 은 data가 참이면 data실행. 거짓이면 ||오른쪽 실행 */}
        {/* data ?? datafetchProfile 은 data가 비어있으면 (null, undefined) 오른쪽 실행. 비어있지 않으면 ??완쪽 실행 */}

    </div>



    )
    


    
}