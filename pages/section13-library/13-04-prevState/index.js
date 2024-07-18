import {useState} from 'react' 

export default function CounterLetDocumentPage() {
    
    const [count, setCount] = useState(0)



    function onClickCountUp () {
        // setCount(count + 1)
        // 여기서 setCount를 5번해도, 메모리에 한번씩 누적하는 방식임으로 계속해서 1로 바뀐다. 
        // 따라서 1만 오름. 

        setCount((prev)=> prev + 1) //prev는 임시 저장 값을 가져옴
        setCount((prev)=> prev + 1) //없을 때는 실제 count 값 가져옴. 
        setCount((prev)=> prev + 1)
        setCount((prev)=> prev + 1)
        setCount((prev)=> prev + 1) // 결과적으로 한번 클릭할 때 마다 5오름
    }


    // function onClickCountDown() {
    //     setCount(count - 1)
    // }



    return (
        <div>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!</button>
            {/* <button onClick={onClickCountDown}>카운트 내리기!</button> */}
        </div>

    )
}