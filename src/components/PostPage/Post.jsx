import styled from 'styled-components';
import PageFrame from '../PageFrame/PageFrame';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostContainer = styled.div`
  margin-top: 2vw;
  margin-bottom: 2vw;
  border-radius: 25px;

  width: 50vw;
  box-shadow: 0px 0px 10px 4px rgba(160, 160, 160, 0.5);
  background-color: white;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2vw;
  margin-top: 1vw;
  margin-left: 2vw;
  margin-right: 2vw;
`;

const PageTitle = styled.p`
  font-family: 'PretendardBold';
  font-size: 25px;
`;

const PostInfo = styled.p`
  font-family: 'PretendardSemiBold';
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  font-family: 'PretendardSemiBold';
  font-size: 20px;
  margin-top: 2vw;
  padding-left: 1vw;
  padding-right: 1vw;
  height: 2vw;
`;

const TitleLine = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 3px 5px 0px rgba(160, 160, 160, 0.5);
`;

const Bottom = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
`;

const ImgBox = styled.div`
  display: flex;
  margin-top: 2vw;
  height: 15vw;

  &.center {
    justify-content: center;
  }

  white-space: nowrap; // 가로 스크롤의 핵심
  overflow-x: auto; // 가로 스크롤의 핵심

  &::-webkit-scrollbar {
    border-top: 4px solid white;
    border-bottom: 4px solid white;
    background-color: #b9d967;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-color: #b9d967;
    height: 10px;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const Content = styled.div`
  font-family: 'PretendardSemiBold';
    font-size: 18px;
  margin-top: 2vw;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 5px 0px rgba(160, 160, 160, 0.5);
  height: 18vw;
  padding: 1vw;

  overflow: auto; // 가로 스크롤의 핵심

  &::-webkit-scrollbar {
    display: none;
  }
  출처: https://wooaoe.tistory.com/49 [개발개발 울었다:티스토리]
`;

const Img = styled.img`
  border: 1px solid black;
  height: 14vw;
  min-width: 14vw;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2.5vw;
  margin-bottom: 2vw;
`;

const Button = styled.button`
  cursor: pointer;
  font-family: 'PretendardSemiBold';
  font-size: 16px;
  box-shadow: 0px 0px 5px 1px rgba(160, 160, 160, 0.5);
  border: 1px solid rgba(160, 160, 160, 0.5);
  border-radius: 10px;
  margin-left: 4vw;
  margin-right: 4vw;
  width: 8vw;
  height: 2vw;
  background-color: white;
`;

function makeImages(images) {
  let result = [];

  images.forEach((image) => {
    result.push(<Img src={image} />);
  });

  return result;
}

export default function Post() {
  const navigate = useNavigate();
  const { postIdx, userStudyIdx, purpose } = useParams();

  const [post, setPost] = useState({
    postIsNotice: true,
    postWriterName: '',
    postContents: '',
    postTitle: '',
    postImage: '',
    postCreatedAt: '',
    postUpdatedAt: '',
  });

  const [images, setImages] = useState([]);

  const [isLeader, setIsLeader] = useState(false);

  function getDate() {
    let dateString;
    if (post.postUpdatedAt) {
      dateString = post.postUpdatedAt;
    } else {
      dateString = post.postCreatedAt;
    }
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const fetchPage = async () => {
      try {
        // 토큰 가져오기
        const token = localStorage.getItem('token');
        // 토큰 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // 정보 받아오기
        const response = await axios.get(
          'http://3.38.7.193:8080/api/v1/post/' + postIdx
        );
        // 정보 저장
        if (response.data.httpResponseStatus === 'SUCCESS') {
          setPost(response.data.responseData.post);
          setImages(response.data.responseData.images);
          setIsLeader(response.data.responseData.leader);
          console.log(response.data.responseData);
        } else {
          console.log(response);
        }
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };

    fetchPage();
  }, []);

  function postNavigateHandler(postIdx, userStudyIdx) {
    navigate(`/post/saving/${postIdx}/${userStudyIdx}`);
  }

  return (
    <PageFrame>
      <PageContainer>
        <PostContainer>
          <Top>
            {post.postIsNotice && <PageTitle>공지사항</PageTitle>}
            {!post.postIsNotice && <PageTitle>홍보 게시판</PageTitle>}
            <PostInfo>
              {post.postWriterName}&emsp;{getDate()}
            </PostInfo>
          </Top>
          <Bottom>
            <Title>{post.postTitle}</Title>
            <TitleLine />
            {images.length !== 0 && images.length < 3 && (
              <ImgBox className="center">{makeImages(images)}</ImgBox>
            )}
            {images.length >= 3 && <ImgBox>{makeImages(images)}</ImgBox>}
            <Content>{post.postContents}</Content>
            <ButtonBox>
              {isLeader && (
                <Button
                  onClick={() => postNavigateHandler(postIdx, userStudyIdx)}
                >
                  수정
                </Button>
              )}
              <Button onClick={() => navigate(-1)}>돌아가기</Button>
            </ButtonBox>
          </Bottom>
        </PostContainer>
      </PageContainer>
    </PageFrame>
  );
}

Post.propTypes = {
  postIdx: PropTypes.number.isRequired,
};
