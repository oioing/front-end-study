import { MouseEvent, useState } from "react";
import { IPaginationContainerPorps } from "../portfolio.types";
import PaginationPresenter from "./pagination.presenter";

export default function PaginationContainer(props: IPaginationContainerPorps) {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    console.log(event.currentTarget.id);
    props.setSelectedPage(Number(event.currentTarget.id));
    void props.refetch({ page: Number(event.currentTarget.id) });
  };
  const onClickPrev = (event: MouseEvent<HTMLElement>): void => {
    if (props.startPage === 1) return;
    props.setStartPage(props.startPage - 10);
    props.setSelectedPage(props.startPage - 10);

    void props.refetch({ page: props.startPage });
  };
  const onClickNext = (event: MouseEvent<HTMLElement>): void => {
    if (props.startPage + 10 > props.lastPage) return;
    props.setStartPage(props.startPage + 10);
    props.setSelectedPage(props.startPage + 10);

    void props.refetch({ page: props.startPage });
  };

  return (
    <PaginationPresenter
      data={props.data}
      setStartPage={props.setStartPage}
      startPage={props.startPage}
      lastPage={props.lastPage}
      refetch={props.refetch}
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      selectedPage={props.selectedPage}
      setSelectedPage={props.setSelectedPage}
    />
  );
}
