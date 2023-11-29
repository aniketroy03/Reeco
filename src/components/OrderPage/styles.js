import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 0 100px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

export const RightArrowIcon = styled.img`
  height: 12px;
  width: 12px;
  cursor: pointer;
`;

export const OrderItem = styled.p`
  text-decoration: underline;
  cursor: pointer;
  color: rgb(66 125 103);
`;

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerBottomButtons = styled.div`
  display: flex;
  gap: 20px;
`;

export const BackButton = styled.button`
  color: rgb(66 125 103);
  padding: 8px 20px;
  border-width: 2px;
  border-radius: 20px;
  border-color: rgb(66 125 103);
  cursor: pointer;
  background-color: #ffffff;
  font-weight: bold;
`;

export const ApprovedButton = styled.button`
  color: #ffffff;
  padding: 8px 20px;
  border-width: 2px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: rgb(66 125 103);
  font-weight: bold;
`;

export const OrdersDataContainer = styled.div`
  padding: 0 100px;
  height: 100px;
`;

export const OrdersDataContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  border-width: 2px;
  border-radius: 10px;
  border-style: solid;
  border-color: #efefef;
  margin-top: 30px;
  padding: 0px 50px;
`;

export const OrdersDataItems = styled.div`
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const OrdersDataTitle = styled.p`
  color: rgb(66 125 103);
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const OrdersDataInfo = styled.p`
  font-weight: bold;
`;

export const OrdersDataDivider = styled.div`
  width: 0.1rem;
  height: 80px;
  background-color: #efefef;
  margin-top: 25px;
`;

export const categoryContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
`;

export const catIcons = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const OrdersTableContainer = styled.div`
  height: auto;
  margin-top: 55px;
  padding: 0px 100px;
`;

export const OrdersTableContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  border-width: 2px;
  border-radius: 10px;
  border-style: solid;
  border-color: #efefef;
  margin-top: 30px;
  padding: 0px 50px;
`;

export const OrdersTableTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 200px;
  outline: none;
  width: 450px;
`;

export const SearchIcon = styled.img`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const AddAndPrint = styled.div`
  display: flex;
  gap: 40px;
`;

export const PrintIcon = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
`;

export const OrdersTableBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  width: 100%;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  color: #9f8b8b;
  border-bottom: 1px solid #e4d4d4;
`;

export const HeadRow = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px 10px 0 0;
`;

export const HeadCell = styled.div`
  padding: 8px;
  width: 100%;
  text-align: left;
  font-size: 15px;
  font-weight: 500;
  color: #9f8b8b;
  margin-top: 10px;
`;

export const FruitIcon = styled.img`
  height: 50px;
  width: 50px;
`;

export const StatusContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

export const ActionIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StatusIcon = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const StatusCloud = styled.button`
  color: #ffffff;
  padding: 6px 10px;
  border-width: 2px;
  border-radius: 20px;
  border: none;
  background-color: rgb(7 196 126);
  width: 100px;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adjust the alpha value for the desired level of blur */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  border-radius: 2px;
  width: 400px;
  height: 180px;
`;
