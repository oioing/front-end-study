import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISubmitBtnProps } from "../src/components/units/portfolio/portfolio.types";
import {
  CommentOutlined,
  DeleteOutlined,
  DislikeTwoTone,
  EditOutlined,
  LikeTwoTone,
  SmileFilled,
  SmileTwoTone,
} from "@ant-design/icons";
import { Modal, Rate } from "antd";
import ReactPlayer from "react-player";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
`;
export const Container1 = styled.div`
  width: 1200px;
  height: 100%;
  margin-top: 55px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 100px 102px 102px;
  margin: 100px;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 80px;
`;

export const Id = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;
export const Writer = styled.div`
  width: 486px;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`;
export const Password = styled.div`
  width: 486px;
  display: flex;
  flex-direction: column;
`;
export const SubTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;
export const TypeInput = styled.input`
  width: 100%;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  /* margin-bottom: 30px; */
`;
export const WritingTitle = styled.div`
  width: 996px;
  margin-bottom: 40px;
`;
export const Content = styled.div`
  width: 996px;
  margin-bottom: 16px;
`;
export const InputContext = styled.textarea`
  width: 996px;
  height: 520px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;
export const Address = styled.div`
  width: 996px;
  margin-bottom: 40px;
`;
export const AddressNum = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
`;
export const AddressSearch = styled.button`
  color: white;
  background-color: black;
  width: 124px;
  height: 52px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const Youtube = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;
export const File = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;
export const FileUpload = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UploadBtn = styled.div`
  background-color: gray;
  width: 78px;
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`;
export const Uploadtxt = styled.span`
  color: black;
  font-size: 12px;
`;
export const PlusBtn = styled.span`
  color: black;
  font-size: 35px;
`;

export const MainSetting = styled.div`
  width: 100%;
  margin-bottom: 80px;
`;
export const Setting = styled.div``;
export const Option = styled.span`
  margin-right: 15px;
`;
export const SettingRadio = styled.input`
  margin-right: 5px;
`;

export const SubmitBtn = styled.button<ISubmitBtnProps>`
  background-color: ${(props) => (props.isActive ? "powderblue" : "gray")};
  width: 180px;
  height: 52px;
  font-size: 16px;
  color: ${(props) => (props.isActive ? "black" : "white")};
  border: none;
  cursor: pointer;
`;

export const ErrorText = styled.div`
  color: red;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Icon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: gray;
  margin-right: 12px;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
export const Date = styled.div`
  color: gray;
`;
export const DivideLine = styled.div`
  width: 100%;
  border: 2px solid #eeeeee;
`;
export const BoardArea = styled.div`
  margin-top: 80px;
`;
export const BoardTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
`;
export const BoardContents = styled.div`
  margin-bottom: 120px;
`;

export const BtnArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
`;

export const DetailBtn = styled.button`
  border: 1px solid #cccccc;
  width: 180px;
  height: 45px;
  margin-bottom: 80px;
  background-color: white;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 1200px;
  height: 584px;
  text-align: center;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin: 40px 0px 40px 0px;
  border-collapse: collapse;
`;
export const UnderTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const THead = styled.thead`
  height: 52px;
`;
export const TBody = styled.tbody``;
export const TableRow = styled.tr``;
export const TableHead = styled.th``;
export const TableData = styled.td`
  border-top: 1px solid #dddddd;
`;
export const TableTitle = styled.td`
  border-top: 1px solid #dddddd;
  width: 600px;
  cursor: pointer;
`;
export const AddBtn = styled.button`
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background-color: white;
  width: 171px;
  height: 51px;
  align-self: flex-end;
  cursor: pointer;
`;
export const Comment = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 45px;
  margin-top: 45px;
`;
export const CommentIcon = styled(CommentOutlined)`
  color: #ffd600;
  font-size: 24px;
`;
export const CommentTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-left: 12px;
`;
export const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const CommentInfo = styled.input`
  width: 180px;
  height: 40px;
  border: 1px solid gray;
  padding-left: 20px;
  margin-right: 24px;
`;

export const StarRate = styled(Rate)`
  font-size: 24px;
`;
export const InputBox = styled.div`
  border: 1px solid gray;
  width: 1200px;
  height: 121px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const TextArea = styled.textarea`
  border: none;
  width: 100%;
  height: 108px;
  border-bottom: 1px solid #eeeeee;
  padding: 20px;

  &::placeholder {
    color: gray;
  }
`;

export const TextBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TextCount = styled.div`
  color: gray;
  font-size: 16px;
  margin-left: 20px;
`;
export const CommentBtn = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  width: 91px;
  height: 51px;
`;
export const UserArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const UserIcon = styled(SmileTwoTone)`
  font-size: 20px;
  color: #dddddd;
`;
export const UserName = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-left: 8px;
  margin-right: 20px;
`;
export const EditBtn = styled(EditOutlined)`
  font-size: 24px;
  color: #bdbdbd;
  margin-left: auto;
`;
export const DeleteBtn = styled(DeleteOutlined)`
  font-size: 24px;
  color: #bdbdbd;
  margin-left: 8px;
`;

export const CommentContents = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const CommentDate = styled.div`
  color: #bdbdbd;
  font-size: 12px;
  margin-bottom: 20px;
`;

export const YoutubeBlock = styled(ReactPlayer)`
  margin: auto;
`;

export const ReactionPart = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 160px;
  gap: 50px;
`;

export const LikePart = styled.div`
  color: #ffd600;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
export const DisLikePart = styled.div`
  color: #82c5ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const LikeIcon = styled(LikeTwoTone)`
  font-size: 30px;
`;
export const LikeCount = styled.div`
  font-size: 18px;
  margin-top: 5px;
`;

export const DisLikeIcon = styled(DislikeTwoTone)`
  font-size: 30px;
`;
export const DisLikeCount = styled.div`
  font-size: 18px;
  margin-top: 5px;
`;
export const MapIconContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: auto;

  &:hover .hover-content {
    opacity: 1;
    visibility: visible;
  }
`;

export const MapIcon = styled(FontAwesomeIcon)`
  color: #ffd600;
  font-size: 30px;
`;

export const HoverContent = styled.div`
  text-align: end;
  position: absolute;
  top: -180%;
  left: -150%;
  transform: translateX(-50%);
  font-size: 16px;
  text-align: end;
  background-color: #f7b500;
  color: white;
  border-radius: 3px;
  padding: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  z-index: 10;
  white-space: nowrap;
  /* 한줄로 쭉 나오게끔 함  */
  width: max-content;
  /* 컨텐츠 넓이의 최대로  */
`;
export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
