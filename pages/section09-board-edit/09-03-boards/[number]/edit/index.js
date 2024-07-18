import { useRouter } from "next/router"
import BoardWrite from "../../../../../src/components/units/board/09-write/BoardWrite.container"
import { gql, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
    query fetchBoard($number:Int){
        fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }
`

export default function graphqlMutationPage(){
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.number)
            // query는 여기서 바로 요청하기 때문에 바로 써준다.
        }
    })


    // 한줄일땐 괄호 필요 없음 
    return (
        <div>
            <div>#######여기는 페이지입니다.#########</div>
            <BoardWrite
            isEdit={true}
            data={data}
            
            />        
        </div>
    )
    
}