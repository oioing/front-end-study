import {useMutation} from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWriter.presenter' //{}가 없음. 하나밖에 없다는 뜻. export default
//export default는 이름을 마음대로 지어도 하나만 있어서 상관없다. 
import {myGraphqlSetting} from './BoardWrite.queries' //export는 골라서 가져오기 가능. {} 가 있음

//default와 export가 같이 있을땐 아래와 같이 할 수 있다. 
// import Afunction, {apple} from '' 함께 가져오기

// import * as QQQ from ''
// 사용할땐 QQQ.BlueButton => 이렇게 export 함수를 받아와준다.  

export default function BoardWrite(){
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

    return(
        <div>
            <div>$$$$$$$$$여기는 컨테이너입니다.$$$$$$$</div>
            <BoardWriteUI
            aaa={onClickSubmit} 
            bbb={onChangeWriter}
            ccc={onChangeTitle}
            ddd={onChangeContents}/>
        </div>
        
    )
}