import styled from "styled-components";

export const Header = styled.div`
  background-color: rgb(66 125 103);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
`;

export const Navigations = styled.div`
  display: flex;
  gap: 50px;
`;

export const Logo = styled.h3`
  color: white;
  cursor: pointer;
`;

export const Link = styled.p`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const CartIcon = styled.img`
  height: 25px;
  width: 25px;
  transform: scaleX(-1);
  cursor: pointer;
`;

export const DownArrowIcon = styled.img`
  height: 12px;
  width: 12px;
  cursor: pointer;
`;
