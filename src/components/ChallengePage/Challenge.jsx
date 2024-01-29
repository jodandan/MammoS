import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PageFrame from '../PageFrame/PageFrame';
import EmptyBadge from '../assets/EmptyBadge.png';
import SelectedBadge from '../assets/SelectedBadge.png';
import DefaultBadge from '../assets/Badge.png';
import Modal from './ChallengeItems/Modal/Modal';

import {
  Top,
  Tier,
  TierInfoBox,
  TierInfo,
  GaugeBox,
  Gauge,
  BadgeBox,
  Badge,
  Bottom,
  BadgeLine,
  Button,
  BadgeInfoBox,
  BadgeTitle,
  ModalContent,
} from './ChallengeItems/ChallengeItemsCss';

export default function Challenge() {
  const [tierName, setTierName] = useState('');
  const [tierInfo, setTierInfo] = useState('');
  const [tierProgress, setTierProgress] = useState('');
  const [allBadges, setAllBadges] = useState([]);
  const [representBadges, setRepresentBadges] = useState([]);
  const [selectedBadges, setSelectedBadges] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalBadge, setModalBadge] = useState({
    myBadges: {
      badgeName: '',
      badgeInfo: '',
    },
  });

  function openModal(badge) {
    setModalOpen(true);
    setModalBadge(badge);
  }
  function closeModal() {
    setModalOpen(false);
  }

  async function fetchPage() {
    try {
      // 토큰 가져오기
      const token = localStorage.getItem('token');
      // 토큰 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 정보 받아오기
      const response = await axios.get(
        'http://3.38.7.193:8080/api/v1/challenge'
      );
      // 정보 저장
      if (response.data.httpResponseStatus === 'SUCCESS') {
        setTierName(response.data.responseData.userInfoSection.tier.badgeName);
        setTierInfo(response.data.responseData.userInfoSection.tier.badgeInfo);
        setTierProgress(
          response.data.responseData.userInfoSection.tierProgress
        );
        setRepresentBadges(response.data.responseData.userInfoSection.badges);
        setSelectedBadges(response.data.responseData.userInfoSection.badges);
        setAllBadges(response.data.responseData.badges);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPage();
  }, []);

  function makeBadgeLine() {
    const result = [];

    for (let i = 0; i < 4; i++) {
      result.push(<BadgeLine key={i}>{makeBadges(i)}</BadgeLine>);
    }

    return result;
  }

  function makeBadges(lineIndex) {
    const result = [];

    for (let i = 0; i < 6; i++) {
      const index = lineIndex * 6 + i;
      if (allBadges[index]) {
        if (allBadges[index].represent) {
          result.push(
            <BadgeInfoBox>
              <Badge
                key={index}
                className="section select"
                src={SelectedBadge}
                onDoubleClick={() => badgeClickHandler(index)}
              />
              <BadgeTitle onClick={() => openModal(allBadges[index])}>
                {allBadges[index].myBadges.badgeName}
              </BadgeTitle>
              <Modal open={modalOpen} close={closeModal} header="도전과제">
                <Badge className="modal" src={DefaultBadge} />
                <divs>
                  <ModalContent className="level">
                    획득 난이도: {modalBadge.myBadges.badgeLevel}
                  </ModalContent>
                  <ModalContent className="title">
                    {modalBadge.myBadges.badgeName}
                  </ModalContent>
                  <ModalContent className="info">
                    {modalBadge.myBadges.badgeInfo}
                  </ModalContent>
                </divs>
              </Modal>
            </BadgeInfoBox>
          );
        } else {
          result.push(
            <BadgeInfoBox>
              <Badge
                key={index}
                className="section select"
                src={DefaultBadge}
                onDoubleClick={() => badgeClickHandler(index)}
              />
              <BadgeTitle onClick={() => openModal(allBadges[index])}>
                {allBadges[index].myBadges.badgeName}
              </BadgeTitle>
            </BadgeInfoBox>
          );
        }
      } else {
        result.push(
          <BadgeInfoBox>
            <Badge key={index} className="section" src={EmptyBadge} />
            <BadgeTitle>&nbsp;</BadgeTitle>
          </BadgeInfoBox>
        );
      }
    }

    return result;
  }

  function badgeClickHandler(index) {
    // 클릭된 뱃지의 정보를 가져옵니다.
    const clickedBadge = allBadges[index];

    // 클릭된 뱃지가 존재하고 represent 값을 변경합니다.
    if (clickedBadge) {
      // 대표 뱃지를 4개 이상 등록하려할 때
      if (selectedBadges.length === 3 && !clickedBadge.represent) {
        alert('토큰은 3개까지 등록할 수 있습니다.');
        return;
      }

      clickedBadge.represent = !clickedBadge.represent;

      if (!clickedBadge.represent) {
        // 변경된 allBadges 상태를 업데이트합니다.
        setAllBadges((prevBadges) => {
          // 이전 상태를 복사하여 새로운 배열을 만듭니다.
          const updatedBadges = [...prevBadges];
          // 변경된 뱃지를 새로운 배열에 적용합니다.
          updatedBadges[index] = clickedBadge;
          // 변경된 배열을 반환합니다.
          return updatedBadges;
        });
      }

      // selectedBadge 리로드
      const filteredBadges = Object.values(allBadges).filter(
        (badge) => badge.represent
      );

      const myBadges = filteredBadges.map((badge) => badge.myBadges);
      setSelectedBadges(myBadges);
    }
  }

  async function submitHandler() {
    const userBadgeIdxList = [];
    for (let i = 0; i < selectedBadges.length; i++) {
      userBadgeIdxList.push(selectedBadges[i].badgeIndex);
    }

    // 토큰 가져오기
    const token = localStorage.getItem('token');
    // // 토큰 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // // 정보 받아오기
    const response = await axios.patch(
      'http://3.38.7.193:8080/api/v1/challenge',
      {
        userBadgeIdxList: userBadgeIdxList,
      }
    );

    console.log(response);
    if (response.data.httpResponseStatus === 'SUCCESS') {
      alert('토큰 저장 성공');
      fetchPage();
    }
  }

  return (
    <PageFrame>
      <Top>
        <Tier src={EmptyBadge} />
        <TierInfoBox>
          <TierInfo>{tierInfo}</TierInfo>
          <TierInfo className="title">{tierName}</TierInfo>
          <TierInfo className="gauge">현재 티어 진행도</TierInfo>
          <GaugeBox>
            <Gauge percent={tierProgress} />
          </GaugeBox>
        </TierInfoBox>
        <BadgeBox>
          {!representBadges[0] && <Badge className="top" src={EmptyBadge} />}
          {representBadges[0] && (
            <Badge className="top" src={representBadges[0].badgeIcon} />
          )}
          {!representBadges[1] && <Badge src={EmptyBadge} />}
          {representBadges[1] && <Badge src={representBadges[1].badgeIcon} />}
          {!representBadges[2] && <Badge src={EmptyBadge} />}
          {representBadges[2] && <Badge src={representBadges[2].badgeIcon} />}
        </BadgeBox>
      </Top>
      <Bottom>
        {makeBadgeLine()}
        <Button onClick={submitHandler}>변경</Button>
      </Bottom>
    </PageFrame>
  );
}
