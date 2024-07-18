import { gql, useQuery } from "@apollo/client"
import { MouseEvent } from "react"
import Checkbox from "./checkbox"

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
    const qqq1 = () =>{
        alert('1번 클릭')
    }
    const qqq2 = () =>{
        alert('2번 클릭')
    }
    const qqq3 = (event) =>{
        event.stopPropagation() //3번만 되고 딱 중단됨. 
        alert('3번 클릭')
    }
    const qqq4 = (event) =>{
        event.stopPropagation() 
        alert('4번 클릭')
    }

    return(

    <div>
        {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={qqq1}>
            <Checkbox/> 
            {/* 중요한건 component로 나눠져 있어도 event bublling은 발생한다. 굉장히 헷갈림 */}
            <span style={{margin: "10px"}} onClick={qqq4}>{el.title}</span> 
            <span style={{margin: "10px"}}>{el.contents}</span> 
            <span style={{margin: "10px"}}>{el.writer}</span>
        </div>
        ))}

    </div>
    )
}