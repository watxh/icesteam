import styled, {css} from 'styled-components';

const Icecream = styled.img `
    position:absolute;
    width:52px;
    ${({left}) => left && css`
        left: ${left}%;
    `};
    ${({top}) => top && css`
        top: ${top*66}px;
    `};
    height:auto;
`;

export default Icecream;