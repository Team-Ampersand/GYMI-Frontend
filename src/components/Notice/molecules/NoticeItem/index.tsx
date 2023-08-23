import * as S from './style';
import { NoticeProfileIcon } from 'asset/svg';
import EmptyImg from '../../../../asset/svg/EmptyImg.svg';

const NoticeItem = () => {
  return (
    <S.Layer>
      <S.LeftSection>
        <S.UserInfo>
          <NoticeProfileIcon />
          <h3>작성자</h3>
        </S.UserInfo>
        <S.ContentBox>
          <h2>제목</h2>
          <p>내용내용내용내용내용내용내용</p>
        </S.ContentBox>
        <S.Date>2023.03.23</S.Date>
      </S.LeftSection>
      <S.ImgBox>
        <EmptyImg />
      </S.ImgBox>
    </S.Layer>
  );
};

export default NoticeItem;