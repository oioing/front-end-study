import { IPaginationPresenterProps } from "../portfolio.types";
import * as A from "./pagination.styles";

export default function PaginationPresenter(props: IPaginationPresenterProps) {
  return (
    <A.PaginationWrap>
      <A.PrevBtn
        onClick={props.startPage === 1 ? undefined : props.onClickPrev}
        startPage={props.selectedPage}
        selectedPage={props.selectedPage}
        lastPage={props.lastPage}
      ></A.PrevBtn>
      {new Array(10)
        .fill(1)
        .filter((_, index) => index + props.startPage <= props.lastPage)
        .map((_, index) => (
          <A.PageNum
            id={String(index + props.startPage)}
            onClick={props.onClickPage}
            index={index}
            selectedPage={props.selectedPage}
            startPage={props.startPage}
            lastPage={props.lastPage}
          >
            {index + props.startPage}
          </A.PageNum>
        ))}

      <A.NextBtn
        startPage={props.selectedPage}
        selectedPage={props.selectedPage}
        lastPage={props.lastPage}
        onClick={
          props.startPage + 10 > props.lastPage ? undefined : props.onClickNext
        }
      ></A.NextBtn>
    </A.PaginationWrap>
  );
}
