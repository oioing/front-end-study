import {LoadingOutlined} from '@ant-design/icons'
import styled from '@emotion/styled'
import {MouseEvent} from "react"


const MyIcon = styled(LoadingOutlined)`
    color: red;
    font-size: 50px;
`


export default function LibraryIconPage() : JSX.Element{
    
    const onClickDelete = (event :MouseEvent<HTMLElement>) : void =>{
        console.log(event.currentTarget.id)
    }
    // id를 가져오지 못한다.  그 이유는 내가 클릭한 것은 svg. id는 그 위에 span태그에 적용되기 때문이다. 그래서 이때 event bubbling을 이용
    // 그래서 currentTarget으로 div로 id를 올려줌. 
    
    return (
    <div id="삭제할게시글I" onClick={onClickDelete}>
        <MyIcon/>
    
    </div>

    )
}