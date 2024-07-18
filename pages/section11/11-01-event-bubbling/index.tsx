import { gql, useQuery } from "@apollo/client"
import { MouseEvent } from "react"

const FETCH_BOARDS = gql`
    query{
        fetchBoards(page: 1){
            _id
            writer
            title
            contents
        }
    }

`
export default function StaticRoutingPageMoved() {
    const {data} = useQuery(FETCH_BOARDS)
    
    console.log(data?.fetchBoards)
     
    const onClickAlert = (event: MouseEvent<HTMLDivElement>) =>{
        // if(event.target instanceof HTMLDivElement) //currentTarget이 아니라면 이걸 써줘야함. + instanceof는 객체의 타입을 확이낳ㄹ 때 씀
        alert(event.currentTarget.id + "님이 작성한 글입니다 ") // currentTarget은 현재 태그의 것을 
    }

    // 그니까 event는 자기가 선택한 것에 대한 정보를 추출하는데, 이러면 부모에 onClick이 되어 있어도, 자식에 대한 정보를 가져온다. 
    // 그런데 여기서 currentTarget을 해버리면, 클릭한 target이 아니라, 지금 onClick이 실행되고 있는 현재 태그를 가져오는 것다. 

    return(
    // 어쩔땐 ""님이 작성했습니다. 라는 빈칸으로 뜬다. 
    // 그 이유는 자식요소를 클릭하면 부모도 클릭이 된다. 즉 자식을 클릭하는데 부모까지 클릭되는데, 이게 이벤트 전파라고 할 수 있다. (propagation) / = 이벤트 버블링
    // 반대로 부모를 클릭했는데, 자식이 클릭되는ㄷ건 이벤트 캡쳐링이다. 

    // 이 경우 선택한 태그가 다른 것이라면 예상하지 못한 event값을 가져오게 된다.
    <div>
        {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={onClickAlert}>
            <span><input type="checkbox" /></span>
            <span style={{margin: "10px"}}>{el.title}</span> 
            <span style={{margin: "10px"}}>{el.contents}</span> 
            <span style={{margin: "10px"}}>{el.writer}</span>
        </div>
        ))}

    </div>
    )
}