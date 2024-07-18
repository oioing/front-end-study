import { Component } from "react";
import Router from "next/router";
export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount(): void {
    console.log("그려지고 나서 실행");
  }
  componentDidUpdate(): void {
    console.log("변경되고 나서 실행 ");
  }
  componentWillUnmount(): void {
    console.log("사라지기 전에 실행");
    // 예) 채팅방 나가기 API
  }

  onClickCountUp() {
    console.log(this.state.count); // this 오류
    this.setState({
      count: 1,
    });
  }

  onClickMove = () => {
    void Router.push("/");
  };

  render() {
    return (
      // 프리젠터는 여기에 작성
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!</button>
        {/* 자기 자신 안에서 선언된 함수, 변수들을 쓰려면 this를 붙여줘야함.  */}
        <button onClick={this.onClickMove}>나가기!</button>
      </>
    );
  }
}
