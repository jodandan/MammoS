import React from 'react'
import { Container, Title, NoticeList, NoticeItem } from './NoticeContainerCss.jsx'
export default function NoticeContainer() {
  const noticeItems = [
    { id: 1, title: 'Important Notice 1'},
    { id: 2, title: 'Important Notice 1'},
    { id: 3, title: 'Important Notice 1'},
    { id: 4, title: 'Important Notice 1'},
    { id: 5, title: 'Important Notice 1'},
    { id: 6, title: 'Important Notice 1'},
    { id: 7, title: 'Important Notice 1'},
    { id: 8, title: 'Important Notice 1'},
    // Add more notice items as needed
  ];
  return (
    <Container>
      <Title>Notice</Title>
      <NoticeList>
        {noticeItems.map((notice) => (
          <NoticeItem key={notice.id}>
            <div>
              {notice.title}
            </div>
          </NoticeItem>
        ))}
      </NoticeList>
    </Container>
  )
}
