import { useState, useEffect } from 'react';
import axios from "axios"
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const usePromise = (deps) => {
    const [steaminfo, setSteaminfo] = useState('');
    const [steamname, setSteamname] = useState('');
    const [icecreamnum, setIcecreamnum] = useState(0);
    const [totalmoney, setTotalmoney] = useState(0);
    const [loading, setloading] = useState(0);
    const [iserror, setIserror] = useState(0);
    

    useEffect(() => {
        const scrolling = () => setTimeout(function() {
            scroll.scrollTo(700)
          }, 200);

        const process = async() =>{
            setIserror(0);
            let steamurl = '';
            let steamurlp = deps + '';
            steamurlp = steamurlp.split('/');
            steamurl = steamurlp[4];
            setloading(1);
            const proxyurl2 = "https://cors-anywhere.herokuapp.com/";
            const url2 = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=08BAB095FED3B0DB92545F1045CB973A&steamids=" +steamurl;
            const Info2 = await axios.get(proxyurl2 + url2);

            if (Info2.data.response.players.length === 0) {
                setIserror(1);
            } else {
                setSteamname(Info2.data.response.players[0].personaname);
            }

            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=08BAB095FED3B0DB92545F1045CB973A&steamid=" + steamurl;
            const Info = await axios.get(proxyurl + url);
            let appids;
            setSteaminfo(Info.data.response.games);
            Info.data.response.games.map(async games => {
                appids = games.appid + "," + appids;
            })
            const Murl = "https://store.steampowered.com/api/appdetails?appids=" + appids + "&cc=KR&filters=price_overview"
            const Minfo = await axios.get(proxyurl + Murl);

            let dataarray = Object.values(Minfo.data);

            let Rtotalmoney = 0;
            dataarray.map(data => {
                if (data.data != null && data.data.price_overview != undefined) {
                    Rtotalmoney = Rtotalmoney + data.data.price_overview.final / 100;
                }
            })
            setTotalmoney(Rtotalmoney);
            setIcecreamnum(parseInt(Rtotalmoney/500));
            setloading(0);
            console.log(iserror);
            if(Rtotalmoney > 0){
                scrolling();
            } 
        }
        process();
        
    }, deps)
    return [steaminfo, steamname, icecreamnum,totalmoney,loading, iserror];
}

export default usePromise