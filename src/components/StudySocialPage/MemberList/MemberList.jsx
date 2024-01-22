import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, NameAndId, College, Position, Container } from './MemberListCss.jsx';

export default function MemberList({ currentIndex }) {
    const [studyData, setStudyData] = useState(null);
    const navigate = useNavigate();
    const [projectIndex, setProjectIndex] = useState(0);

    const handleProjectSelect = (index) => {
        setProjectIndex(index);
    };

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
                console.log('소셜 페이지에서의 인덱스:', currentIndex);
            } catch (error) {
                console.error('Error fetching study information:', error);
            }
        };

        fetchData();
    }, [currentIndex]);
    return (
        <Container>
            {studyData && (
                <>
                    {studyData[currentIndex].social.members.map((member, memberIndex) => (
                        <Box key={memberIndex}>
                            <NameAndId>{member.name} / {member.id}</NameAndId>
                            <College>{member.universityName} {member.majorName}</College>
                            <Position>{member.status}</Position>
                        </Box>
                    ))}
                </>
            )}
        </Container>
    )
}

MemberList.propTypes = {
    currentIndex: PropTypes.number.isRequired,
};
