import { gql, useMutation, useQuery } from "@apollo/client"
import { Fragment } from "react"

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`
const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number) {
            message
        }
    }
`


export default function StaticRoutingPageMoved() {
    const {data} = useQuery(FETCH_BOARDS)
    const [deleteBoard] = useMutation(DELETE_BOARD)

    console.log(data?.fetchBoards)

    
    const onClickDelete = async(event) =>{
        const result = await deleteBoard({
            variables:{
                number: Number(event.target.id)
            },
            refetchQueries:[{query: FETCH_BOARDS}]
        })
        console.log(result)
        // 다만 이경우 DB에서만 삭제되기 때문에, 삭제하고 refetch 즉 재요청을 해야 화면도 바뀐다.
    }



    return(
    <div>
        {data?.fetchBoards.map(el => (
            // 이때 각 요소별로 key를 안주면 map이 효율적으로 그릴려고 하다보니, 다 비슷한 얘로 인지한다.
            // 그래서 map으로 화면 그릴땐 key는 필수다. 
            // map에는 인덱스가 있어서 다음과 같이 할수도 있다. child.map((el, index) => index + "어린이")
            // index는 key값으로 안됨. index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 key값을 가짐. unique하지 않음
        <>
        {/* 프래그먼트 즉, <></>를 쓰면 한줄로 쭉 늘려줄 수 있다. 특별한 이유 없으면 div보다 fragment div가 좀 느림 */}
        {/* 프래그 먼트에 key값을 넣고 싶을땐, react에서 import 해서 Fragment태그를 쓰면 된다.  */}
            {/* <Fragment key={el.number}>  */}
            <div key={el.number}>
                <span><input type="checkbox" /></span>
                <span style={{margin: "10px"}}>{el.number}</span> 
                <span style={{margin: "10px"}}>{el.title}</span> 
                <span style={{margin: "10px"}}>{el.writer}</span>
                <span><button id={el.number} onClick={onClickDelete}>삭제하기</button></span>
            </div>
        </>
        ))}

    </div>
    )
}