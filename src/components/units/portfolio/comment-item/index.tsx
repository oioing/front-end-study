import { ChangeEvent, MouseEvent, useState } from "react";
import * as S from "../../../../../styles/boardcss";
import { getDate } from "../utils";
import { ICommentItemProps } from "../portfolio.types";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  Fetch_Comment,
  UPDATE_COMMENT,
} from "../portfolio.queries";
import { useRouter } from "next/router";

export default function CommentItem(props: ICommentItemProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  const [UpdateComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_COMMENT);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickInput = () => {
    setIsEdit(true);
  };
  console.log(props.CommentData, "commentData");
  console.log(props.el, "el");

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    // const password = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: Fetch_Comment,
            variables: { page: 1, boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>,
  ): void => {
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(event.target.value);
  };

  const onClickUpdateSubmit = async () => {
    if (props.starRate === 0) {
      alert("별점을 최소 1점이상 선택해주세요");
      return;
    }
    if (props.commentInput.CommentContents.trim() === "") {
      alert("댓글을 입력해주세요");
      return;
    }
    try {
      const result = await UpdateComment({
        variables: {
          updateBoardCommentInput: {
            contents: props.commentInput.CommentContents,
            rating: props.starRate,
          },
          password: props.commentInput.CommentPw,
          boardCommentId: props.el._id,
        },
      });
      if (result.data) {
        alert("댓글이 성공적으로 수정되었습니다");
        await props.refetch();
      }
    } catch (error) {
      console.log(error);
      alert("댓글 수정에 실패했습니다.");
    }
    setIsEdit?.(false);
    props.setCommentInput({
      CommentWriter: "",
      CommentPw: "",
      CommentContents: "",
    });
  };

  return (
    <div>
      {isOpenDeleteModal && (
        <S.PasswordModal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {isEdit ? (
        <S.CommentArea>
          <S.UserArea>
            <S.CommentInfo
              onChange={props.onChangeComments}
              disabled
              value={String(props.el.writer)}
              id="CommentWriter"
            ></S.CommentInfo>
            <S.CommentInfo
              onChange={props.onChangeComments}
              placeholder="비밀번호"
              value={props.commentInput.CommentPw}
              id="CommentPw"
            ></S.CommentInfo>
            <S.StarRate onChange={props.onChangeStarRate} />
          </S.UserArea>
          <S.InputBox>
            <S.TextArea
              onChange={props.onChangeComments}
              maxLength={100}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              value={props.commentInput.CommentContents}
              id="CommentContents"
            />
            <S.TextBottom>
              <S.TextCount>{props.commentCount}/500</S.TextCount>
              <S.CommentBtn onClick={onClickUpdateSubmit}>
                수정하기
              </S.CommentBtn>
            </S.TextBottom>
          </S.InputBox>
        </S.CommentArea>
      ) : (
        <S.CommentArea>
          <S.UserArea>
            <S.UserIcon twoToneColor={"#b4b4b4"}></S.UserIcon>
            <S.UserName>{props.el.writer}</S.UserName>
            <S.StarRate disabled defaultValue={props.el.rating} />
            <S.EditBtn onClick={onClickInput}></S.EditBtn>
            <S.DeleteBtn onClick={onClickOpenDeleteModal}></S.DeleteBtn>
          </S.UserArea>
          <S.CommentContents>{props.el.contents}</S.CommentContents>
          <S.CommentDate>{getDate(props.el.createdAt)}</S.CommentDate>
          <S.DivideLine></S.DivideLine>
        </S.CommentArea>
      )}
    </div>
  );
}
