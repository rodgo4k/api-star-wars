import styled from 'styled-components';

export const Container = styled.div`
    background: #1D1726;
    width: 100%;
    height: 100%;
`;

export const TopBar = styled.div`
    background: #1D1726;
    padding: 20px;

`;

export const List = styled.ul`
    list-style: none;
    display: flex;

    > li {
        border: 1px solid #B820FF;
        box-shadow: 2px 2px 2px 2px #B820FF;
        border-radius: 5px;
        background: #B820FF;
        font-size: 30px;

        padding: 5px;
        margin-right: 15px;
        cursor: pointer;

        &:hover {
            border: 1px solid #B820D9;
            background: #B820D9;
            box-shadow: 2px 2px 2px 2px #B820D9;
        }
    }
`;

export const Wrapper = styled.div`

`;