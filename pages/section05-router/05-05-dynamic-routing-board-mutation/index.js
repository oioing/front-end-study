import {useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'

const myGraphqlSetting = gql`
    mutation createBoard($writer:String, $title:String, $contents:String){

        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`
export default function graphqlMutationPage(){
    const router = useRouter()
    const [나의함수] = useMutation(myGraphqlSetting)

    const onClickSubmit = async() =>{
        try{
            // try에 있는 내용을 시도하다가 실패하면, 다음 모두 줄들을 실행하지 않고, catch 내용을 실행함. 
            const result = await 나의함수({
                variables: {        //variables가 $역할을 함. 
                    writer: "뿌뿌",
                    title: "여어 뭐냐구!!",
                    contents: "으하하하하핳하하"
                }
            }) 
            console.log(result)
            console.log(result.data.createBoard.number)
            // router.push("/section05/05-05-dynamic-routing-board-mutation-moved/" + result.data.createBoard.number)
            router.push(`/section05-router/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
        } catch(error){
            alert(error.message)
        }
        
    }

    // 한줄일땐 괄호 필요 없음 
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>


    
    
}