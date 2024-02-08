import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Searchbox,
  MemberList,
  MemberBox,
} from './SearchCss.jsx';
export default function Search() {
  const [Data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const filter = Data.filter((info) =>
    info.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')//더미데이터
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Box>
      <div style={{ margin: '0 auto' }}>
        <Searchbox
          placeholder="추가하실 친구의 닉네임을 검색하세요"
          onChange={onChange}
          value={search}
        />
      </div>
      <MemberList>
        {Data &&
          filter.map((monster) => (
            <MemberBox className="monster" key={monster.id}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                height: '20px',
                margin: '5px'
              }}
              >
                <Text>{monster.name}&nbsp;|&nbsp;</Text>
                <Text>{monster.email}</Text>
              </div>
            </MemberBox>
          ))}
      </MemberList>
    </Box>
  )
}

export const Text = styled.div`
  color: #000;
  font-family: 'PretendardBold';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
`;
