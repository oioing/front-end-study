import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IBoardComment,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IQueryFetchBoardsArgs,
  IUpdateBoardInput,
} from "../../../commons/types/generated/types";
import { Address } from "react-daum-postcode";
import { ApolloQueryResult } from "@apollo/client";

export interface IBoardWriteContainerProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ImyVariables {
  updateBoardInput: IUpdateBoardInput;
  password: String;
  boardId: String;
}

export interface IBoardPresenterProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddress1: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress2: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeGender: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  writerError: String;
  pwError: String;
  titleError: String;
  contentsError: String;
  addressError: String;
  youtubeError: String;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  // 처음에는 무조건 undefined이다. 선언될 당시엔
  onChangeModalPw: (event: ChangeEvent<HTMLInputElement>) => void;
  showModal: () => void;
  handleUpdate: () => void;
  handleCancel: () => void;
  modalPassword: String;
  isModalOpen: boolean;
  postCodeModal: boolean;
  handlePostcodeComplete: (data: Address) => void;
  ShowPostcodeModal: () => void;
  handlePostcodeOk: () => void;
  handlePostcodeCancel: () => void;
  zipcode: string;
  address1: string;
}

export interface ISubmitBtnProps {
  isActive: boolean;
}

export interface IDetailPresenterProps {
  onClickDelete: () => void;
  data?: Pick<IQuery, "fetchBoard">;
  DateFormat: string;
  commentCount: number;
  CommentData?: Pick<IQuery, "fetchBoardComments">;
  refetch: (
    variables?: Partial<IQueryFetchBoardCommentsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardComments">>>;
  onChangeStarRate: (value: number) => void;
  onClickMoveToList: () => void;
  onClickMoveUpdate: () => void;
  onClickCommentSubmit: () => void;
  like: number;
  dislike: number;
  onClickLike: () => void;
  onClickDislike: () => void;
  onChangeComments: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  commentInput: {
    CommentWriter: string;
    CommentPw: string;
    CommentContents: string;
  };
  setCommentInput: Dispatch<
    SetStateAction<{
      CommentWriter: string;
      CommentPw: string;
      CommentContents: string;
    }>
  >;
  onLoadMore: () => void;
  starRate: number;
}
export interface ICommentItemProps {
  key: string;
  el: IBoardComment;
  onChangeComments: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onChangeStarRate: (value: number) => void;
  commentCount: number;
  commentInput: {
    CommentWriter: string;
    CommentPw: string;
    CommentContents: string;
  };
  setCommentInput: Dispatch<
    SetStateAction<{
      CommentWriter: string;
      CommentPw: string;
      CommentContents: string;
    }>
  >;
  starRate: number;
  CommentData?: Pick<IQuery, "fetchBoardComments">;
  refetch: (
    variables?: Partial<IQueryFetchBoardCommentsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardComments">>>;
}

export interface IBoardListProps {
  data?: Pick<IQuery, "fetchBoards">;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  lastPage: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  selectedPage: number;
  setSelectedPage: Dispatch<SetStateAction<number>>;
}

export interface IBoardListPresenterProps {
  data?: Pick<IQuery, "fetchBoards">;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  lastPage: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onClickAdd: () => void;
  onClickDetail: (event: MouseEvent<HTMLTableCellElement>) => void;
  selectedPage: number;
  setSelectedPage: Dispatch<SetStateAction<number>>;
}
export interface IPaginationContainerPorps {
  data?: Pick<IQuery, "fetchBoards">;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  lastPage: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  selectedPage: number;
  setSelectedPage: Dispatch<SetStateAction<number>>;
}
export interface IPaginationPresenterProps {
  data?: Pick<IQuery, "fetchBoards">;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  lastPage: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrev: (event: MouseEvent<HTMLElement>) => void;
  onClickNext: (event: MouseEvent<HTMLElement>) => void;
  selectedPage: number;
  setSelectedPage: Dispatch<SetStateAction<number>>;
}
