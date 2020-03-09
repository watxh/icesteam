import React from 'react';
import Getsteamapi from "./components/organisms/Getsteamapi";
import styled from 'styled-components';
import { useEffect, useState, useMemo } from 'react';

import Page from "./components/atoms/Page"
import Titletext from "./components/atoms/Titletext"
import Subtext from "./components/atoms/Subtext"
import Urlbar from "./components/atoms/Urlbar"
import Glass from "./components/atoms/Glass"


const App = () =>{

  const [steamurl ,setSteamurl] = useState('');
  const [urlon ,setUrlon] = useState(0);

  const onChangesteamurl = e =>{
    setSteamurl(e.target.value);
  }

  const handleKeyPress =(event) =>{
    if(event.key=='Enter'){
      setUrlon(1);
    }
  }

  return (
    <Page>
      <Titlesection>
        <Title>Iceteam</Title>
        <Titletext>거기너</Titletext>
        <Titletext>얼마나</Titletext>
        <Titletext>질렀니</Titletext>
        <Subtext>당신의 과금액을 아이스크림 갯수로 환산해 드립니다.</Subtext>
        <Urlbar placeholder={"스팀 프로필 URL을 입력해 주세요."} value={steamurl} onChange={onChangesteamurl} onKeyPress={handleKeyPress}></Urlbar>
        <Glass src="images/Icons/Glass.png"></Glass>
      </Titlesection>

      <Resultsection>
        {
          urlon === 1
          ?<Getsteamapi props={steamurl} urlon={setUrlon}></Getsteamapi>
          :<>{
            urlon === 2
            ?<><Errorimage src="images/Error/Error.png"/></>
            :<></>
          }</>
        }
      </Resultsection>
      
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
  position:absolute;
  justify-content: center;
  align-items: center;
  text-align:center;
  margin-top:-80px;
`;

const Resultsection = styled.div `
  position:relative;
  top:500px;
  justify-content: center;
  align-items: center;
  text-align:center;
  font-size:32px;
`;

const Errorimage = styled.img `
  position:relative;
  top:-270px;
  width:350px;
`

export default App;