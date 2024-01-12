import React from 'react'
import { Container, Title, MemberList, MemberItem } from './MemberContainerCss.jsx';
export default function MemberContainer() {
  const membersData = [
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
    { id: 3, name: 'Bob Johnson', role: 'Tester' },
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
    { id: 3, name: 'Bob Johnson', role: 'Tester' },
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
    { id: 3, name: 'Bob Johnson', role: 'Tester' },
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
    { id: 3, name: 'Bob Johnson', role: 'Tester' },
    // Add more members as needed
  ];
  return (
    <Container>
      <Title>Members</Title>
      <MemberList>
        {membersData.map((member) => (
          <MemberItem key={member.id}>
            <div>{member.name}</div>
            <div>{member.role}</div>
          </MemberItem>
        ))}
      </MemberList>
    </Container>
  )
}
