import {useMutation, gql} from '@apollo/client'

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

    const [나의함수] = useMutation(myGraphqlSetting)

    const onClickSubmit = async() =>{
        const result = await 나의함수({
            variables: {        //variables가 $역할을 함. 
                writer: "훈이",
                title: "여어 뭐냐구!!",
                contents: "으하하하하핳하하"
            }
        }) 
        console.log(result)
    }

    // 한줄일땐 괄호 필요 없음 
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>


    
    
}