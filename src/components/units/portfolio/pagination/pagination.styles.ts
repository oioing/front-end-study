import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

interface IPaginationStyleProps {
  selectedPage: number;
  startPage: number;
  lastPage: number;
  index?: number;
}

export const PaginationWrap = styled.div`
  margin-left: 300px;
`;
export const PageNum = styled.span`
  text-decoration: ${(props: IPaginationStyleProps) =>
    (props.index ?? 0) + props.startPage === props.selectedPage
      ? "underline"
      : "none"};
  font-size: 16px;
  color: ${(props: IPaginationStyleProps) =>
    (props.index ?? 0) + props.startPage === props.selectedPage
      ? "#FFD600"
      : "#4f4f4f"};

  font-weight: ${(props: IPaginationStyleProps) =>
    (props.index ?? 0) + props.startPage === props.selectedPage
      ? "700"
      : "400"};

  margin: 40px 20px 20px 20px;
  cursor: pointer;
`;

export const PrevBtn = styled(LeftOutlined)<IPaginationStyleProps>`
  cursor: ${(props: IPaginationStyleProps) =>
    props.startPage === 1 ? "not-allowed" : "pointer"};
  color: ${(props: IPaginationStyleProps) =>
    props.startPage === 1 ? "wheat" : "black"};
`;

export const NextBtn = styled(RightOutlined)<IPaginationStyleProps>`
  cursor: ${(props: IPaginationStyleProps) =>
    props.startPage + 10 > props.lastPage ? "not-allowed" : "pointer"};
  color: ${(props: IPaginationStyleProps) =>
    props.startPage + 10 > props.lastPage ? "wheat" : "black"};
`;
