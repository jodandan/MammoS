import PageFrame from '../PageFrame/PageFrame';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import reject from '../assets/reject.png';

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
  Attachment,
  AttachmentFont,
  AttachmentLine,
  AttachmentBox,
  DeleteBtn,
  AttatchmentContainer,
} from './PostPageItems/SavingPostItemsCss';

export default function SavingPost() {
  const navigate = useNavigate();
  const { purpose, postIdx, userStudyIdx } = useParams();

  const [post, setPost] = useState({
    postWriterName: '',
    postContents: '',
    postTitle: '',
    postImage: '',
    postCreatedAt: '',
    postUpdatedAt: '',
  });
  const [isLeader, setIsLeader] = useState(false);

  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPage = async () => {
      if (postIdx === undefined || userStudyIdx === undefined) return;

      try {
        // 토큰 가져오기
        const token = localStorage.getItem('token');
        // 토큰 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // 정보 받아오기
        const response = await axios.get(
          'http://localhost:8080/api/v1/post/' + postIdx
        );
        // 정보 저장
        if (response.data.httpResponseStatus === 'SUCCESS') {
          setPost(response.data.responseData.post);
          setIsLeader(response.data.responseData.leader);
          setTitle(response.data.responseData.post.postTitle);
          setContent(response.data.responseData.post.postContents);
        } else {
          console.log(response);
        }
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };

    fetchPage();
  }, []);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    if (selectedFiles.length > 5) {
      alert('이미지는 최대 5개까지만 첨부가 가능합니다.');
      setFiles([]);
      return;
    }

    setFiles(selectedFiles);
  };

  function deleteFileHandler(index) {
    // 파일 목록을 복사하여 새로운 배열 생성
    const updatedFiles = [...files];
    // 해당 인덱스의 파일을 제거
    updatedFiles.splice(index, 1);
    // 변경된 파일 목록을 상태에 설정
    setFiles(updatedFiles);
  }

  async function submitHandler(postIdx, title, content) {
    if (title === '') {
      alert('제목을 입력해주세요.');
      return;
    } else if (content === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('multipartFiles', file);
    });

    let isNotice;
    if (purpose === 'notice') {
      isNotice = true;
    } else {
      isNotice = false;
    }
    formData.append(
      'requestDto',
      new Blob(
        [
          JSON.stringify({
            postTitle: title,
            postContents: content,
            isNotice,
          }),
        ],
        { type: 'application/json' }
      )
    );

    try {
      // 토큰 불러오기
      const token = localStorage.getItem('token');
      // 토큰 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 요청
      if (postIdx === undefined) {
        const temp = purpose;
        console.log(typeof temp);
        // 글 생성할 때
        const response = await axios.post(
          `http://localhost:8080/api/v1/study/${temp}/${userStudyIdx}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              charset: 'utf-8',
            },
          }
        );
      } else {
        // 글 수정할 때
        const response = await axios.patch(
          `http://3.38.7.193:8080/api/v1/post/${postIdx}/${userStudyIdx}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              charset: 'utf-8',
            },
          }
        );
      }
      alert('글이 등록되었습니다.');
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  }

  function inputChangeHandler(input, value) {
    if (input === 'title') {
      setTitle(value);
    } else {
      setContent(value);
    }
  }

  return (
    <PageFrame>
      <PageContainer>
        <PostContainer>
          <Top>
            {purpose === 'notice' && <PageTitle>공지사항</PageTitle>}
            {purpose === 'promotion' && <PageTitle>홍보 게시판</PageTitle>}
          </Top>
          <Bottom>
            <Title
              onChange={(event) =>
                inputChangeHandler('title', event.target.value)
              }
              type="text"
              defaultValue={post.postTitle}
              maxLength="40"
            ></Title>
            <TitleLine />
            <Content
              defaultValue={post.postContents}
              maxLength="1000"
              onChange={(event) =>
                inputChangeHandler('content', event.target.value)
              }
            />
            <AttachmentBox>
              <div style={{ width: '75%' }}>
                <AttatchmentContainer>
                  {files.map((file, index) => (
                    <Attachment key={index}>
                      <AttachmentFont>{file.name}</AttachmentFont>
                      <DeleteBtn
                        key={index}
                        src={reject}
                        onClick={() => deleteFileHandler(index)}
                      />
                    </Attachment>
                  ))}
                </AttatchmentContainer>

                {files.length === 0 && <AttachmentLine className="empty" />}
                {files.length !== 0 && <AttachmentLine />}
              </div>
              <Button
                className="attachment"
                onClick={() => document.getElementById('selectedFile').click()}
              >
                사진 업로드
              </Button>
            </AttachmentBox>

            <input
              id="selectedFile"
              type="file"
              multiple
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: 'none' }}
            />

            <ButtonBox>
              <Button onClick={() => submitHandler(postIdx, title, content)}>
                완료
              </Button>
              <Button onClick={() => navigate(-1)}>돌아가기</Button>
            </ButtonBox>
          </Bottom>
        </PostContainer>
      </PageContainer>
    </PageFrame>
  );
}
