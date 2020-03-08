import React, { useEffect, useState, useMemo } from 'react';
import styled, { css } from 'styled-components';
import axios from "axios";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ReactLoading from 'react-loading';

import Icecreamcoll from "../molcules/Icecreamcoll"
import Icecream from "../atoms/Icecream"

const Getsteamapi = (props) =>{
    const [steamid ,setSteamid] = useState('');
    const [steaminfo, setSteaminfo] = useState('');
    const [steamname, setSteamname] = useState('');
    const [icecreamnum, setIcecreamnum] = useState(0);
    const [Rtotalmoney, setTotalmoney] = useState(0);

    const [apiload, setApiload] = useState(0);

    let steamurl = '';
    
    let steamurlp = props;
    steamurlp = steamurlp.props.split('/');
    steamurl = steamurlp[4];

    let totalmoney = 0;

    const onChangeid = e => {
        setSteamid(e.target.value);
    }

    const getInfo = async() =>{
        setApiload(1);
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=08BAB095FED3B0DB92545F1045CB973A&steamid=" + steamurl;
        const Info = await axios.get(proxyurl + url);
        let appids;
        setSteaminfo(Info.data.response.games);
        Info.data.response.games.map(async games=> {
            appids = games.appid + "," + appids;
        })
        const Murl = "https://store.steampowered.com/api/appdetails?appids=" + appids + "&cc=KR&filters=price_overview"
        const Minfo = await axios.get(proxyurl + Murl);

        let dataarray = Object.values(Minfo.data);
        
        dataarray.map(data => {
            if(data.data != null &&data.data.price_overview != undefined){
                totalmoney = totalmoney + data.data.price_overview.final/100;
            }
        })
        setIcecreamnum(parseInt(totalmoney/500));
        setTotalmoney(totalmoney);
    }

    const getname = async() =>{
        const proxyurl2 = "https://cors-anywhere.herokuapp.com/";
        const url2 = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=08BAB095FED3B0DB92545F1045CB973A&steamids=" + steamurl;
        console.log(steamurl);
        const Info2 = await axios.get(proxyurl2 + url2);
        setSteamname(Info2.data.response.players[0].personaname);
    }

    const icecreams = () => {
        const icecreamimage = [];
        for(let i = 0; i < icecreamnum; i++){
            icecreamimage.push(<Icecream src="images/icecream/Choco.png" left={i%40*2.5 -1} top={parseInt(i/40)}></Icecream>)
        }

        return icecreamimage;
    }

    return (
        <>
            {apiload === 0
            ?<>
                {getInfo()}{getname()}
            </>
            :<>
                {
                    steamname === '' || icecreamnum == 0
                    ?<Loadingbar><ReactLoading type={"bars"} height={200} width={100} /></Loadingbar>
                    :<>
                    <Name>
                        {steamname}님이 과금을 안했다면,
                    </Name>
                    <Icecreamcoll height={parseInt(icecreamnum/40)}>
                        {icecreams()}
                    </Icecreamcoll>
                    <Icecreamnum top={icecreamnum/40}>아이스크림 {icecreamnum}개 ({Rtotalmoney}원)</Icecreamnum>
                    {scroll.scrollTo(700)}
                    </>
                }
            </>
            }
        </>
    )
}

const Name = styled.div `
    color:white;
    font-size:30px;
    font-family: 'NanumBarunGothic', sans-serif;
`;

const Loadingbar = styled.div`
    position:absolute;
    top:-300px;
    left:-45px;
`

const Icecreamnum = styled.div `
    position:relative;
    ${({top}) => top && css`
        top: ${top*66 + 300}px;
    `};
    color:white;
    font-size:30px;
    font-family: 'NanumBarunGothic', sans-serif;
    letter-spacing: -1px;
    text-align:left;
`;

export default Getsteamapi;