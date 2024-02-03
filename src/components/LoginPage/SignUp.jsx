import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Logos } from './loginItems/SignupItemCss';
import { useNavigate } from 'react-router-dom';

import {
  PageContainer,
  UserInput,
  Title,
  SelectUniv,
  SelectCollege,
  SelectMajor,
  HorizontalInputBox,
  StyledFieldset,
  StyledLabel,
  StyledInput,
  StyledP,
  EmailInput,
  EmailButton,
  SubmitBtn,
  Top,
} from './loginItems/SignupItemCss';
import { allResolved, async } from 'q';

// 유저가 선택한 대학과 이메일의 일치 여부 Validation 추가
export default function Signup() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [auth, setAuth] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [univMap, setUnivMap] = useState([]);
  const [collegeMap, setCollegeMap] = useState([]);
  const [majorMap, setMajorMap] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [bChecked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');
  const issues = [
    '서비스 이용 약관 동의 (필수)',
    '개인정보 수집 및 이용 동의 (필수)',
    '커뮤니티 이용 규칙 확인 (필수)',
    '본인 명의를 이용하여 가입을 진행하겠습니다. (필수)',
  ];

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.push(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.includes(id)) {
      checkedItems.pop(id);
      setCheckedItems(checkedItems);
    }
  };

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(target.name, target.checked);
  };

  const handleAllCheck = (isChecked) => {
    if (isChecked) {
      // 전체 선택 클릭 시 데이터의 모든 issue를 담은 배열로 checkItems 상태 업데이트
      setCheckedItems(issues);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckedItems([]);
    }
  };

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  async function selectChangeHandler(input, event) {
    try {
      if (input === 'univ') {
        // 대학을 선택했을 때
        const selectedValue = event.target.value;
        setSelectedUniversity(selectedValue);

        const univId = getKeyByValue(univMap, selectedValue);
        // 해당 대학의 단과대학 목록 조회
        const response = await axios.get(
          'http://3.38.7.193:8080/api/v1/signup/college/' + univId
        );

        const { responseData } = response.data;
        setCollegeMap(responseData);
        setSelectedCollege('');
        setSelectedMajor('');
      } else if (input === 'college') {
        // 단과대를 선택했을 때
        setSelectedCollege(event.target.value);

        // 해당 대학의 단과대학에 속한 전공들 조회
        const response = await axios.get(
          'http://3.38.7.193:8080/api/v1/signup/major/' +
            getKeyByValue(collegeMap, event.target.value)
        );

        const { responseData } = response.data;
        setMajorMap(responseData);
        setSelectedMajor('');
      } else {
        // 전공을 선택했을 때
        setSelectedMajor(event.target.value);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => console.log(isSent));

  async function authRequestHandler() {
    try {
      // 이메일 입력 값이 없을 시
      if (!email) {
        alert('이메일을 입력해주세요.');
        return;
      }

      // 이메일 인증
      const checkDuplicateEmail = await axios.post(
        'http://3.38.7.193:8080/api/v1/signup/email',
        {
          email: email,
        }
      );
      console.log(checkDuplicateEmail);
      if (checkDuplicateEmail.data.responseData === false) {
        const response = await axios.post(
          'http://3.38.7.193:8080/api/v1/signup/email',
          {
            email: email,
          }
        );

        const { responseData } = response.data;

        if (responseData.code === 200) {
          // 인증 요청 성공
          alert('인증 번호를 전송했습니다.');
          setIsSent(true);
          console.log(isSent);
        } else {
          // 인증 요청 실패
          console.log(responseData.message);
          alert(responseData.message);
        }
      } else {
        alert(checkDuplicateEmail.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function authCheckHandler() {
    try {
      if (auth) {
        const response = await axios.post(
          'http://3.38.7.193:8080/api/v1/signup/email/certified',
          {
            email: email,
            code: auth,
          }
        );

        const { responseData } = response.data;

        console.log(responseData);
        if (responseData.success === true) {
          // 인증 요청 성공
          setIsAuth(true);
        } else {
          // 인증 요청 실패
          console.log(responseData.message);
          alert(responseData.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function signupHandler() {
    if (
      id &&
      password &&
      name &&
      selectedUniversity &&
      selectedCollege &&
      selectedMajor &&
      email
    ) {
      if (checkedItems.length === 4) {
        if (isAuth) {
          try {
            if (id.length < 5) {
              alert('아이디 5자 이상 입력해주세요');
              return;
            }

            if (name.length < 2) {
              alert('이름을 확인해주세요');
              return;
            }

            const response = await axios.post(
              'http://3.38.7.193:8080/api/v1/signup',
              {
                isCertified: isAuth,
                id: id,
                pwd: password,
                email: email,
                majorIdx: getKeyByValue(majorMap, selectedMajor),
                name: name,
              }
            );
            alert(response.data.message);

            if (response.data.message === 'SUCCESS') {
              navigate('/');
            }
          } catch (error) {
            alert(error);
            console.log(error);
          }
        } else {
          alert('이메일 인증을 완료해주세요.');
          console.log('이메일 인증을 완료해주세요.');
        }
      } else {
        alert('약관을 모두 동의해주세요.');
        console.log('약관을 모두 동의해주세요.');
      }
    } else {
      alert('회원 정보를 모두 입력해주세요.');
      console.log('회원 정보를 모두 입력해주세요.');
    }
  }

  function inputChangeHandler(input, value) {
    if (input === 'id') {
      setId(value);
    } else if (input === 'password') {
      setPassword(value);
    } else if (input === 'name') {
      setName(value);
    } else if (input === 'email') {
      setEmail(value);
    } else if (input === 'auth') {
      setAuth(value);
    }
  }

  async function clearAuth() {
    try {
      console.log('email: ' + email);

      const response = await axios.post(
        'http://3.38.7.193:8080/api/v1/signup/email/reset/' + email
      );
    } catch (error) {
      console.log(error);
    }
  }

  const handleBeforeUnload = async (event) => {
    const message =
      '페이지를 떠나시겠습니까? 작성 중인 내용이 저장되지 않을 수 있습니다.';
    event.returnValue = message;

    try {
      // email 값이 비어 있지 않을 때만 clearAuth 실행
      if (isSent && email) {
        await axios.post(
          'http://3.38.7.193:8080/api/v1/signup/email/reset/' + email
        );
      }
    } catch (error) {
      console.log(error);
    }

    return message;
  };

  useEffect(() => {
    // 이벤트 리스너 등록
    window.addEventListener('beforeunload', handleBeforeUnload);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [email, isSent]); // email이 변경될 때마다 useEffect 실행

  useEffect(() => {
    async function fetchUniversities() {
      try {
        const response = await axios.get(
          'http://3.38.7.193:8080/api/v1/signup/university'
        );
        const { responseData } = response.data;
        // console.log(responseData);
        setUnivMap(responseData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUniversities();
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  return (
    <>
      <Top>
        <Logos />
        <h2>마음 맞게, 모두 스터디</h2>
      </Top>
      <PageContainer>
        <Title>회원가입</Title>
        <UserInput
          style={{ borderRadius: '20px 20px 0px 0px' }}
          type="text"
          name="id"
          value={id}
          required
          placeholder="아이디 (5~15자 사이로 입력해주세요)"
          maxLength="15"
          onChange={(event) => inputChangeHandler('id', event.target.value)}
        />
        <UserInput
          type="password"
          name="password"
          value={password}
          required
          placeholder="비밀번호 (20자 내로 입력해주세요)"
          maxLength="20"
          onChange={(event) =>
            inputChangeHandler('password', event.target.value)
          }
        />
        <SelectUniv
          isHidden={selectedUniversity === ''}
          onChange={(event) => selectChangeHandler('univ', event)}
        >
          <option hidden>대학을 선택해주세요.</option>
          {Object.values(univMap).map((name) => (
            <option key={name}>{name}</option>
          ))}
        </SelectUniv>
        <HorizontalInputBox>
          <SelectCollege
            isHidden={selectedCollege === ''}
            onChange={(event) => selectChangeHandler('college', event)}
            style={{ borderRadius: '0px 0px 0px 20px' }}
          >
            <option value="" hidden>
              단과 대학을 선택해주세요.
            </option>
            {Object.values(collegeMap).map((name) => (
              <option key={name}>{name}</option>
            ))}
          </SelectCollege>
          <SelectMajor
            isHidden={selectedMajor === ''}
            onChange={(event) => selectChangeHandler('major', event)}
            style={{ borderRadius: '0px 0px 20px 0px' }}
          >
            <option value="" hidden>
              전공을 선택해주세요.
            </option>
            {Object.values(majorMap).map((name) => (
              <option key={name}>{name}</option>
            ))}
          </SelectMajor>
        </HorizontalInputBox>

        <UserInput
          style={{ borderRadius: '20px 20px 0px 0px', marginTop: '2%' }}
          type="text"
          name="name"
          value={name}
          required
          maxLength="4"
          placeholder="이름"
          onChange={(event) => inputChangeHandler('name', event.target.value)}
        />
        <EmailInput>
          <UserInput
            type="text"
            name="email"
            value={email}
            required
            placeholder="이메일"
            onChange={(event) =>
              inputChangeHandler('email', event.target.value)
            }
          />
          <EmailButton onClick={authRequestHandler}>인증 요청</EmailButton>
        </EmailInput>
        <EmailInput>
          {!isSent && (
            <UserInput
              style={{
                borderRadius: '0px 0px 20px 20px',
              }}
              type="number"
              name="auth"
              value={auth}
              placeholder="인증번호"
              readOnly
            />
          )}
          {isSent && !isAuth && (
            <UserInput
              style={{
                borderRadius: '0px 0px 20px 20px',
              }}
              type="number"
              name="auth"
              value={auth}
              required
              placeholder="인증번호"
              onChange={(event) =>
                inputChangeHandler('auth', event.target.value)
              }
            />
          )}
          {isSent && isAuth && (
            <UserInput
              style={{
                borderRadius: '0px 0px 20px 20px',
              }}
              type="number"
              name="auth"
              value={auth}
              required
              placeholder="인증번호"
              readOnly
            />
          )}
          {isSent && !isAuth && (
            <EmailButton onClick={authCheckHandler}>인증 확인</EmailButton>
          )}
        </EmailInput>
        {isAuth && (
          <p
            style={{
              marginLeft: '-30%',
              color: 'green',
              marginTop: '10px',
              marginBottom: '-10px',
            }}
          >
            인증이 완료되었습니다.
          </p>
        )}

        <form>
          <StyledFieldset>
            {issues.map((text) => (
              <StyledLabel htmlFor={text} key={text}>
                <StyledInput
                  type="checkbox"
                  name={text}
                  onChange={(event) => checkHandler(event)}
                  checked={checkedItems.includes(text) ? true : false}
                />
                <StyledP>{text}</StyledP>
              </StyledLabel>
            ))}

            <StyledLabel
              style={{ marginTop: '1vw' }}
              htmlFor="위 약관에 모두 동의합니다."
              key="위 약관에 모두 동의합니다."
            >
              <StyledInput
                type="checkbox"
                name="위 약관에 모두 동의합니다."
                onChange={(event) => handleAllCheck(event.target.checked)}
                checked={checkedItems.length === issues.length ? true : false}
              />
              <StyledP isbold="true">위 약관에 모두 동의합니다.</StyledP>
            </StyledLabel>
          </StyledFieldset>
        </form>

        <div style={{ display: 'flex' }}>
          <SubmitBtn onClick={signupHandler}>가입 완료</SubmitBtn>
          <SubmitBtn
            onClick={() => {
              if (isSent) {
                clearAuth();
              }
              navigate('/');
            }}
          >
            뒤로 가기
          </SubmitBtn>
        </div>
      </PageContainer>
    </>
  );
}
