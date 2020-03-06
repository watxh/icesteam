import React, { useEffect, useState, useMemo } from 'react';
import styled, { css } from 'styled-components';
import axios from "axios";

const Getsteamapi = () =>{
    const [steamid ,setSteamid] = useState('');
    const [steaminfo, setSteaminfo] = useState('');

    const onChangeid = e => {
        setSteamid(e.target.value);
    }

    const getInfo = async(e) =>{
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=08BAB095FED3B0DB92545F1045CB973A&steamid=" + steamid
        const Info = await axios.get(proxyurl + url);
        console.log(Info.data.response.games);
    }

    return (
        <>
            <input value={steamid} onChange={onChangeid}/> <br/>
            <button onClick={getInfo}>Set</button>
        </>
    )
}

export default Getsteamapi;