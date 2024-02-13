import PageFrame from '../PageFrame/PageFrame';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  PageContainer,
  PostContainer,
  Top,
  PageTitle,
  PostInfo,
  Title,
  TitleLine,
  Bottom,
  ImgBox,
  Content,
  Img,
  ButtonBox,
  Button,
} from './PostPageItems/PostItemsCss';

function makeImages(images) {
  let result = [];

  images.forEach((image) => {
    result.push(<Img src={image.storeFileUrl} />);
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
    let purpose;
    if (post.postIsNotice) {
      purpose = 'notice';
    } else {
      purpose = 'promotion';
    }

    navigate(`/post/saving/${purpose}/${postIdx}/${userStudyIdx}`);
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
