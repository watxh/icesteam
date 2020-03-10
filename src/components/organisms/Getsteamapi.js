import React, { useEffect, useState, useMemo } from 'react';
import styled, { css } from 'styled-components';
import axios from "axios";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ReactLoading from 'react-loading';

import Icecreamcoll from "../molcules/Icecreamcoll"
import Icecream from "../atoms/Icecream"

const Getsteamapi = (props) =>{

    const icecreams = () => {
        const icecreamimage = [];
        for(let i = 0; i < props.icecreamnum; i++){
            icecreamimage.push(<Icecream src="images/icecream/Choco.png" left={i%40*2.5 -1} top={parseInt(i/40)}></Icecream>)
        }

        return icecreamimage;
    }

    return (
        <>
            {
                props.loading === 1
                    ? <Loadingbar><ReactLoading type={"bars"} height={200} width={100} /></Loadingbar>
                    : <>
                        <Name>
                            {props.steamname}님이 과금을 안했다면,
                                </Name>
                        <Icecreamcoll height={parseInt(props.icecreamnum / 40)}>
                            {icecreams()}
                        </Icecreamcoll>
                        <Icecreamnum top={props.icecreamnum / 40}>아이스크림 {props.icecreamnum}개 ({props.totalmoney}원)</Icecreamnum>
                        <Standard>(1개/500원 기준)</Standard>
                        <DDname top={props.icecreamnum / 40} href="www.naver.com">Developed by @Jeong-Min Kang<br />Designed by @전다예(임시)</DDname>
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

const Standard = styled.div `
    position:relative;
    top:30px;
    text-align:right;
    color:white;
    font-size:20px;
    font-family: 'NanumBarunGothic', sans-serif;
    letter-spacing: -1px;
`;

const DDname = styled.div `
    position:relative;
    ${({top}) => top && css`
        top: ${top*66 + 450}px;
    `};
    text-align:center;
    color:white;
    font-size:10px;
    font-family: 'NanumBarunGothic', sans-serif;
    letter-spacing: -1px;

    margin-bottom:20px;
`;

export default Getsteamapi;