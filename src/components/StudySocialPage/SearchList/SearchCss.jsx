import styled from 'styled-components';



export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    border-radius: 15px;
`;


export const Searchbox = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #CCC;
    color: #555;
    box-sizing: border-box;
    font-size: 18px;
    height: 50px;
    width: 350px;

    &:focus {
        outline: none;  
    }
    &::-webkit-input-placeholder {
        color: #AAA;
        font-size: 14px;
    }  
`;

export const MemberList = styled.div`
    gap: 5px;
    padding-top: 20px;
    padding-left: 30px;
    width: 92%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
    border-left: 9px solid white;
    border-right: 9px solid white;
    background-color: #b9d967;
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border-left: 5px solid white;
    border-right: 5px solid white;
    background-color: #b9d967;
    border-radius: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const MemberBox = styled.div`
    border: 1px solid grey;
    width: 350px;
`;





