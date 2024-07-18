import styled from "@emotion/styled";

export const RedInput = styled.input`
    border-color: red;

`

export const BlueButton = styled.button`
    background-color: ${(props) => props.isActive ? "yellow" : ""}
`/* 함수가 없어. 직접 $(props)로 만들어준다. */