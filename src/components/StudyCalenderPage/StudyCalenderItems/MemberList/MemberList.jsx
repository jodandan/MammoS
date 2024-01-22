import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import {
    PeopleListBox,
    ListTitle,
    PeopleList,
    CheckBoxLabel,
} from './MemberListCss.jsx';
export default function MemberList({ projectIndex, currentIndex }) {
    const [studyData, setStudyData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://3.38.7.193:8080/api/v1/study', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setStudyData(response.data.responseData);
            } catch (error) {
                console.error('Error fetching study information:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <PeopleListBox>
            <ListTitle>참여 인원</ListTitle>
            {studyData && (
                <PeopleList>
                    {studyData[currentIndex].project[projectIndex].projectInMembers.map((member) => (
                        <CheckBoxLabel key={member.id}>
                            <input type="checkbox" />
                            <TextBox>{member.name || '없음'}&nbsp;/&nbsp;</TextBox>
                            <TextBox2>{member.id || '없음'}</TextBox2>
                            <TextBox3>{member.universityName}</TextBox3>
                            <TextBox4>{member.majorName}</TextBox4>
                        </CheckBoxLabel>
                    ))
                    }
                </PeopleList>
            )}
        </PeopleListBox>
    )
}
export const TextBox = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.32px;
`;

export const TextBox2 = styled(TextBox)`
  padding-bottom: 3px;
  width: 80px;
`;

export const TextBox3 = styled(TextBox)`
    color: #959595;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.2px;
    width: 55px;
`;

export const TextBox4 = styled(TextBox)`
    color: #959595;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.2px;
    width: 50px;
`;
MemberList.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    projectIndex: PropTypes.number.isRequired,
};