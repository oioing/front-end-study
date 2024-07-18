import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'

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
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(myGraphqlSetting)

    const onClickSubmit = async() =>{
        const result = await 나의함수({
            variables: {        //variables가 $역할을 함. 
                writer: writer,
                title: title,
                contents: contents
            }
        }) 
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter = event.target.value
    }
    const onChangeTitle = (event) => {
        setTitle = event.target.value
    }
    
    const onChangeContents = (event) => {
        setContents = event.target.value
    }


    // 한줄일땐 괄호 필요 없음 
    return (
        <div>
            작성자 : <input type="text" onChange={onChangeWriter}/>
            제목 : <input type="text" onChange={onChangeTitle}/>
            내용 : <input type="text" onChange={onChangeContents}/>
            <button   button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>

        </div>

    )
    
}