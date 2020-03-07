import styled from 'styled-components';

const Urlbar = styled.input.attrs({
    type:'text'
}) `
    position:relative;
    top:0px;
    left:7px;
    background-color:rgb(255,255,255);
    color:rgba(0,0,0,0.8);
    font-size:16px;
    font-family: 'NanumBarunGothic', sans-serif;
    letter-spacing: 0px;
    text-align:left;
    vertical-align:middle;
    border-radius:16px;
    border-style:solid;
    border-width:0px;
    width:430px;
    height:44px;
    line-height: 44px;
    padding-left:15px;
    outline: none;
`;

export default Urlbar;