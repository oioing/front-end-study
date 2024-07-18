import * as S from "../../../../styles/boardcss";
import { faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { getDate } from "./utils";
import {
  IBoardListPresenterProps,
  IBoardPresenterProps,
  IDetailPresenterProps,
} from "./portfolio.types";
import { useState } from "react";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import PaginationContainer from "./pagination/pagination.container";
import InfiniteScroll from "react-infinite-scroller";
import CommentItem from "../portfolio/comment-item/index";

export default function BoardPresenter(props: IBoardPresenterProps) {
  console.log(props.data, "냥냥");

  return (
    <S.Wrap>
      <S.Container>
        <S.Title>게시물 {props.isEdit ? "등록" : "수정"}하기</S.Title>
        <S.Id>
          <S.Writer>
            <S.SubTitle>작성자</S.SubTitle>
            <S.TypeInput
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              readOnly={!!props.data?.fetchBoard.writer}
              // 명시적으로 값이 있다면 true로 넣어주기
            />
            <S.ErrorText>{props.writerError}</S.ErrorText>
          </S.Writer>
          {props.isEdit && (
            <S.Password>
              <S.SubTitle>비밀번호</S.SubTitle>

              <S.TypeInput
                placeholder="비밀전호를 적어주세요."
                onChange={props.onChangePw}
              />
            </S.Password>
          )}
        </S.Id>
        <S.WritingTitle>
          <S.SubTitle>제목</S.SubTitle>
          <S.TypeInput
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.ErrorText>{props.titleError}</S.ErrorText>
        </S.WritingTitle>
        <S.Content>
          <S.SubTitle>내용</S.SubTitle>
          <S.InputContext
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.ErrorText>{props.contentsError}</S.ErrorText>
        </S.Content>
        <S.Address>
          <S.SubTitle>주소</S.SubTitle>
          <S.AddressNum
            placeholder="우편번호"
            readOnly
            value={
              props.zipcode !== ""
                ? props.zipcode
                : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
            }
          />
          <S.AddressSearch onClick={props.ShowPostcodeModal}>
            우편번호 검색
          </S.AddressSearch>
          <S.TypeInput
            onChange={props.onChangeAddress1}
            placeholder="위 버튼을 눌러 주소를 검색해주세요"
            defaultValue={props.data?.fetchBoard.boardAddress?.address ?? ""}
            value={
              props.address1 !== ""
                ? props.address1
                : props.data?.fetchBoard.boardAddress?.address ?? ""
            }
            // value값이 있으면 default value가 무시된다.
          />
          <S.TypeInput
            onChange={props.onChangeAddress2}
            placeholder="상세 주소를 입력해주세요"
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          />
          <S.ErrorText>{props.addressError}</S.ErrorText>
        </S.Address>
        <S.Youtube>
          <S.SubTitle>유튜브</S.SubTitle>
          <S.TypeInput
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutube}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          />
          <S.ErrorText>{props.youtubeError}</S.ErrorText>
        </S.Youtube>
        <S.File>
          <S.SubTitle>사진첨부</S.SubTitle>
          <S.FileUpload>
            <S.UploadBtn>
              <S.PlusBtn>+</S.PlusBtn>
              <S.Uploadtxt>업로드</S.Uploadtxt>
            </S.UploadBtn>
            <S.UploadBtn>
              <S.PlusBtn>+</S.PlusBtn>
              <S.Uploadtxt>업로드</S.Uploadtxt>
            </S.UploadBtn>
            <S.UploadBtn>
              <S.PlusBtn>+</S.PlusBtn>
              <S.Uploadtxt>업로드</S.Uploadtxt>
            </S.UploadBtn>
          </S.FileUpload>
        </S.File>
        <S.MainSetting>
          <S.SubTitle>메인설정</S.SubTitle>
          <S.Setting id="gender">
            <S.SettingRadio type="radio" name="gender" />{" "}
            <S.Option>유튜브</S.Option>
            <S.SettingRadio type="radio" name="gender" />{" "}
            <S.Option>사진</S.Option>
          </S.Setting>
        </S.MainSetting>
        <S.SubmitBtn
          onClick={props.isEdit ? props.onClickSubmit : props.showModal}
          isActive={props.isActive}
        >
          {props.isEdit ? "등록" : "수정"}하기
        </S.SubmitBtn>
        <Modal
          title="게시물 수정을 위해 비밀번호를 입력해주세요"
          open={props.isModalOpen}
          onOk={props.handleUpdate}
          onCancel={props.handleCancel}
        >
          <input type="password" onChange={props.onChangeModalPw} />
        </Modal>
        {props.postCodeModal && (
          <Modal
            title="주소를 검색 후 선택해주세요"
            open={true}
            onCancel={props.handlePostcodeCancel}
            onOk={props.handlePostcodeOk}
          >
            <DaumPostcodeEmbed onComplete={props.handlePostcodeComplete} />
          </Modal>
        )}
      </S.Container>
    </S.Wrap>
  );
}

export function DetailPresenter(props: IDetailPresenterProps) {
  return (
    <S.Wrap>
      <S.Container>
        <S.Header>
          <S.Icon icon={faUser}></S.Icon>
          <S.ProfileData>
            <S.Name>{props.data?.fetchBoard?.writer}</S.Name>
            <S.Date>Date: {getDate(props.DateFormat)}</S.Date>
          </S.ProfileData>
          <S.MapIconContainer>
            <S.MapIcon icon={faLocationDot}></S.MapIcon>
            <S.HoverContent className="hover-content">
              {props.data?.fetchBoard.boardAddress?.address}
              <br />
              {props.data?.fetchBoard.boardAddress?.addressDetail}
            </S.HoverContent>
          </S.MapIconContainer>
        </S.Header>
        <S.DivideLine></S.DivideLine>
        <S.BoardArea>
          <S.BoardTitle>
            {props.data ? props.data.fetchBoard.title : "Loading..."}
          </S.BoardTitle>
          <S.BoardContents>
            {props.data ? props.data.fetchBoard.contents : "Loading.."}
          </S.BoardContents>
          <S.YoutubeBlock
            url={String(props.data?.fetchBoard.youtubeUrl)}
            controls={false}
            muted={true}
            // playing={true}
          />
          <S.ReactionPart>
            <S.LikePart onClick={props.onClickLike}>
              <S.LikeIcon twoToneColor={"#FFD600"} />
              <S.LikeCount>{props.like}</S.LikeCount>
            </S.LikePart>
            <S.DisLikePart onClick={props.onClickDislike}>
              <S.DisLikeIcon twoToneColor={"#82c5ff"} />
              <S.DisLikeCount>{props.dislike}</S.DisLikeCount>
            </S.DisLikePart>
          </S.ReactionPart>
        </S.BoardArea>
      </S.Container>

      <S.BtnArea>
        <S.DetailBtn onClick={props.onClickMoveToList}> 목록으로</S.DetailBtn>
        <S.DetailBtn onClick={props.onClickMoveUpdate}> 수정하기</S.DetailBtn>
        <S.DetailBtn onClick={props.onClickDelete}>삭제하기</S.DetailBtn>
      </S.BtnArea>
      <S.Comment>
        <S.DivideLine></S.DivideLine>
        <S.CommentHeader>
          <S.CommentIcon />
          <S.CommentTitle>댓글</S.CommentTitle>
        </S.CommentHeader>
        <S.CommentArea>
          <S.UserArea>
            <S.CommentInfo
              onChange={props.onChangeComments}
              placeholder="작성자"
              value={props.commentInput.CommentWriter}
              id="CommentWriter"
            ></S.CommentInfo>
            <S.CommentInfo
              onChange={props.onChangeComments}
              placeholder="비밀번호"
              //value={props.commentInput.CommentPw}
              id="CommentPw"
            ></S.CommentInfo>
            <S.StarRate onChange={props.onChangeStarRate} />
          </S.UserArea>
          <S.InputBox>
            <S.TextArea
              onChange={props.onChangeComments}
              maxLength={100}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              //value={props.commentInput.CommentContents}
              id="CommentContents"
            />
            <S.TextBottom>
              <S.TextCount>{props.commentCount}/500</S.TextCount>
              <S.CommentBtn onClick={props.onClickCommentSubmit}>
                등록하기
              </S.CommentBtn>
            </S.TextBottom>
          </S.InputBox>
        </S.CommentArea>
      </S.Comment>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        <S.Comment>
          {props.CommentData?.fetchBoardComments.map((el) => (
            <CommentItem
              key={el._id}
              el={el}
              onChangeComments={props.onChangeComments}
              onChangeStarRate={props.onChangeStarRate}
              commentCount={props.commentCount}
              commentInput={props.commentInput}
              setCommentInput={props.setCommentInput}
              starRate={props.starRate}
              CommentData={props.CommentData}
              refetch={props.refetch}
            />
          ))}
        </S.Comment>
      </InfiniteScroll>
    </S.Wrap>
  );
}

export function BoardListPresenter(props: IBoardListPresenterProps) {
  console.log(props.data);

  return (
    <S.Wrap>
      <S.Container1>
        <S.Table>
          <S.THead>
            <S.TableRow>
              <S.TableHead>number</S.TableHead>
              <S.TableHead>작성자</S.TableHead>
              <S.TableHead>제목</S.TableHead>
              <S.TableHead>작성일</S.TableHead>
            </S.TableRow>
          </S.THead>
          <S.TBody>
            {props.data?.fetchBoards.map((el, index) => (
              <S.TableRow key={el._id}>
                <S.TableData>
                  {index + 1 + (props.selectedPage - 1) * 10}
                </S.TableData>
                <S.TableTitle id={el._id} onClick={props.onClickDetail}>
                  {el.title}
                </S.TableTitle>
                <S.TableData>{el.writer}</S.TableData>
                <S.TableData>{getDate(el.createdAt)}</S.TableData>
              </S.TableRow>
            ))}
          </S.TBody>
        </S.Table>
        <S.UnderTable>
          <PaginationContainer
            data={props.data}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
            lastPage={props.lastPage}
            refetch={props.refetch}
            selectedPage={props.selectedPage}
            setSelectedPage={props.setSelectedPage}
          />
          <S.AddBtn onClick={props.onClickAdd}>게시물 등록하기</S.AddBtn>
        </S.UnderTable>
      </S.Container1>
    </S.Wrap>
  );
}
