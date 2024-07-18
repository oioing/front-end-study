import { Component } from "react";
export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp() {
    console.log(this.state.count); // this 오류
    // this.setState({
    //     count:1
    // })
  }

  render() {
    return (
      // 프리젠터는 여기에 작성
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!</button>
        {/* 자기 자신 안에서 선언된 함수, 변수들을 쓰려면 this를 붙여줘야함.  */}
      </>
    );
  }
}
