import BoardPresenter, {
  BoardListPresenter,
  DetailPresenter,
} from "./portfolio.presenter";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  BoardMutation,
  BOARD_QUERY,
  Board_Delete,
  Boards_Query,
  UPDATE_BOARD,
  Create_Comment,
  Fetch_Comment,
  Like_Board,
  Dislike_Board,
} from "./portfolio.queries";
import {
  IBoardListProps,
  IBoardWriteContainerProps,
  ImyVariables,
} from "./portfolio.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationCreateBoardCommentArgs,
  IMutationDeleteBoardArgs,
  IMutationDeleteBoardCommentArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
  IQueryFetchBoardsArgs,
  IUpdateBoardInput,
} from "../../../commons/types/generated/types";
import { Address } from "react-daum-postcode";

export default function BoardsWriteContainer(props: IBoardWriteContainerProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState<string>("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [youtube, setYoutube] = useState("");
  const [gender, setGender] = useState("");

  const [writerError, setWriterError] = useState("");
  const [pwError, setPwError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [youtubeError, setYoutubeError] = useState("");

  const [modalPassword, setModalPassword] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [postCodeModal, setPostCodeModal] = useState<boolean>(false);

  const [zipcode, setZipcode] = useState<string>("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(BoardMutation);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [isActive, setIsActive] = useState(false);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value && pw && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (writer && pw && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (writer && pw && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeAddress1 = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress1(event.target.value);
  };
  const onChangeAddress2 = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress2(event.target.value);
  };
  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutube(event.target.value);
  };
  const onChangeGender = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const onClickUpdate = async () => {
    const updateInput: Partial<IUpdateBoardInput> = {};

    if (writer) updateInput.title = title;
    if (contents) updateInput.contents = contents;
    if (youtube) updateInput.youtubeUrl = youtube;

    if (zipcode || address1 || address2) {
      updateInput.boardAddress = {
        zipcode: zipcode || props.data?.fetchBoard?.boardAddress?.zipcode,
        address: address1 || props.data?.fetchBoard?.boardAddress?.address,
        addressDetail:
          address2 || props.data?.fetchBoard?.boardAddress?.addressDetail,
      };
    }

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: updateInput as IUpdateBoardInput,
          password: String(props.isEdit ? pw : modalPassword),
          boardId: String(router.query.boardId),
        },
      });
      alert("게시물이 수정되었습니다!");
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  const onClickSubmit = async () => {
    let Signal = false;
    if (!writer) {
      setWriterError("이메일을 입력해주세요");
      Signal = true;
    }
    if (!title) {
      setTitleError("제목을 입력해주세요");
      Signal = true;
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요");
      Signal = true;
    }
    if (!address1 && !address2) {
      setAddressError("주소를 입력해주세요");
      Signal = true;
    }
    if (!youtube) {
      setYoutubeError("유튜브 링크를 입력해주세요");
      Signal = true;
    }
    if (Signal === false) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: pw,
              title: title,
              contents: contents,
              youtubeUrl: youtube,
              boardAddress: {
                zipcode: zipcode,
                address: address1,
                addressDetail: address2,
              },
            },
          },
        });
        alert("게시물이 작성되었습니다!");
        void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onChangeModalPw = (event: ChangeEvent<HTMLInputElement>) => {
    setModalPassword(event.target.value);
  };

  const showModal = (): void => {
    setIsModalOpen(true);
  };
  const handleUpdate = async () => {
    if (modalPassword) {
      await onClickUpdate();
    } else {
      alert("비밀번호을 입력하랬잖아!");
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handlePostcodeComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setPostCodeModal(false);

    setAddress1(fullAddress);
    setZipcode(data.zonecode);
  };
  const ShowPostcodeModal = (): void => {
    setPostCodeModal(true);
  };
  const handlePostcodeOk = (): void => {
    setPostCodeModal(false);
  };
  const handlePostcodeCancel = (): void => {
    setPostCodeModal(false);
  };

  return (
    <BoardPresenter
      onChangeWriter={onChangeWriter}
      onChangePw={onChangePw}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeAddress1={onChangeAddress1}
      onChangeAddress2={onChangeAddress2}
      onChangeYoutube={onChangeYoutube}
      onChangeGender={onChangeGender}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      writerError={writerError}
      pwError={pwError}
      titleError={titleError}
      contentsError={contentsError}
      addressError={addressError}
      youtubeError={youtubeError}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      onChangeModalPw={onChangeModalPw}
      showModal={showModal}
      handleUpdate={handleUpdate}
      handleCancel={handleCancel}
      modalPassword={modalPassword}
      isModalOpen={isModalOpen}
      postCodeModal={postCodeModal}
      handlePostcodeComplete={handlePostcodeComplete}
      ShowPostcodeModal={ShowPostcodeModal}
      handlePostcodeOk={handlePostcodeOk}
      handlePostcodeCancel={handlePostcodeCancel}
      zipcode={zipcode}
      address1={address1}
    />
  );
}

export function DetailContainer() {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") {
    return <></>;
  }

  const [starRate, setStarRate] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  const [CommentSubmit] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(Create_Comment);
  const [DeleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(Board_Delete);
  const [LikeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(Like_Board);
  const [DislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(Dislike_Board);

  const { data, loading, error } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(BOARD_QUERY, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [like, setLike] = useState<number>(Number(data?.fetchBoard.likeCount));
  const [dislike, setDislike] = useState<number>(
    Number(data?.fetchBoard.dislikeCount),
  );
  useEffect(() => {
    if (data) {
      setLike(Number(data.fetchBoard.likeCount));
      setDislike(Number(data.fetchBoard.dislikeCount));
    }
  }, [data]);

  const onClickLike = (): void => {
    const result = LikeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
    });
    setLike((prev) => prev + 1);
  };
  const onClickDislike = (): void => {
    const result = DislikeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
    });
    setDislike((prev) => prev + 1);
  };

  const {
    data: CommentData,
    refetch,
    fetchMore,
  } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(Fetch_Comment, {
    variables: {
      page: 1,
      boardId: String(router.query.boardId),
    },
  });

  const DateFormat = String(data ? data.fetchBoard.createdAt : "Loading...");

  const onLoadMore = (): void => {
    if (CommentData === undefined) return;
    void fetchMore({
      variables: {
        page:
          Math.ceil((CommentData?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const onClickDelete = async () => {
    const result = await DeleteBoard({
      variables: {
        boardId: router.query.boardId as string,
      },
    });
    router.push("/boards");
  };
  const onClickMoveToList = () => {
    router.push("/boards");
  };
  const onClickMoveUpdate = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  const [commentInput, setCommentInput] = useState({
    CommentWriter: "",
    CommentPw: "",
    CommentContents: "",
  });

  const onChangeComments = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setCommentInput((prev) => ({
      ...commentInput,
      [event.target.id]: event.target.value,
    }));
    console.log(commentInput);
    setCommentCount(commentInput.CommentContents.length);
  };

  const onChangeStarRate = (value: number) => {
    setStarRate(value);
  };

  const onClickCommentSubmit = async () => {
    if (starRate === 0) {
      alert("별점을 최소 1점이상 선택해주세요");
      return;
    }
    if (commentInput.CommentContents.trim() === "") {
      alert("댓글을 입력해주세요");
      return;
    }
    try {
      const result = await CommentSubmit({
        variables: {
          createBoardCommentInput: {
            writer: commentInput.CommentWriter,
            password: commentInput.CommentPw,
            contents: commentInput.CommentContents,
            rating: starRate,
          },
          boardId: String(router.query.boardId),
        },
      });
      if (result.data) {
        alert("댓글이 성공적으로 등록되었습니다");
        await refetch();
      }
    } catch (error) {
      console.log(error);
      alert("댓글 등록에 실패했습니다.");
    }
    setCommentInput({ CommentWriter: "", CommentPw: "", CommentContents: "" });
  };

  return (
    <DetailPresenter
      onClickDelete={onClickDelete}
      data={data}
      DateFormat={DateFormat}
      commentCount={commentCount}
      CommentData={CommentData}
      refetch={refetch}
      onClickMoveToList={onClickMoveToList}
      onClickMoveUpdate={onClickMoveUpdate}
      onChangeStarRate={onChangeStarRate}
      onClickCommentSubmit={onClickCommentSubmit}
      like={like}
      dislike={dislike}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      onChangeComments={onChangeComments}
      commentInput={commentInput}
      setCommentInput={setCommentInput}
      onLoadMore={onLoadMore}
      starRate={starRate}
    />
  );
}

export function BoardList(props: IBoardListProps) {
  const router = useRouter();

  const dataFetched = props.data?.fetchBoards;
  console.log(props.data);

  const onClickAdd = () => {
    router.push("/boards/new");
  };

  const onClickDetail = (event: MouseEvent<HTMLTableCellElement>) => {
    if (event.target instanceof HTMLTableCellElement)
      router.push(`/boards/${event.target.id}`);
    // 항상 event.target이 태그가 아닐수도 있다. 그래서 태그가 맞는지 한 번 확인하는 과정을 거치는거다.
  };

  return (
    <BoardListPresenter
      data={props.data}
      startPage={props.startPage}
      setStartPage={props.setStartPage}
      lastPage={props.lastPage}
      onClickAdd={onClickAdd}
      onClickDetail={onClickDetail}
      refetch={props.refetch}
      selectedPage={props.selectedPage}
      setSelectedPage={props.setSelectedPage}
    />
  );
}
