import React from 'react';
import Getsteamapi from "./components/organisms/Getsteamapi";
import styled from 'styled-components';

import Page from "./components/atoms/Page"
import Titletext from "./components/atoms/Titletext"
import Subtext from "./components/atoms/Subtext"
import Urlbar from "./components/atoms/Urlbar"
import Glass from "./components/atoms/Glass"


function App() {
  return (
    <Page>
      <Titlesection>
        <Title>Iceteam</Title>
        <Titletext>거기너</Titletext>
        <Titletext>얼마나</Titletext>
        <Titletext>질렀니</Titletext>
        <Subtext>당신의 과금액을 아이스크림 갯수로 환산해 드립니다.</Subtext>
        <Urlbar placeholder={"스팀 프로필 URL을 입력해 주세요."}></Urlbar>
        <Glass src="images/Icons/Glass.png"></Glass>
      </Titlesection>
    </Page>
  );
}

const Title = styled.div `
  position:fixed;
  left:70px;
  top:30px;
  color:rgb(255,255,255);
  font-size:32px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -3px;
`;

const Titlesection = styled.div `
  position:relative;
  top:-100px;
  justify-content: center;
  align-items: center;
  text-align:center;
`;

export default App;