import styled from 'styled-components'
import React from 'react';
import { NavLink } from "react-router-dom";

const NavDiv = styled.div`
    border: 1px solid black;
`;


function Header() {
    const navitems = [
        { name: "공지사항", Path: "/board" },
        { name: "나의 배움터", path: "/mypage" },
        { name: "로그인", path: "/login" },
        { name: "회원가입", path : "/signup" }
    ]
    return (
        <NavDiv className="Header">
            <h1>Main</h1>
            { navitems.map((item, index) => {
                return (
                    <NavLink
                        exact
                        style={{color:"gray", textDecoration: "none"}}
                        to={item.path}
                        key={index}
                        activeStyle={{color:"black"}}
                    >
                        {item}
                    </NavLink>
                )
            })}
        </NavDiv>
    )
}

export default Header