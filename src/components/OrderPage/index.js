import * as Styles from "./styles";
import RightArrow from "../../assets/images/rightArrow.png";
import CategoryIcon from "../../assets/images/category.png";
import SearchIcon from "../../assets/images/search.png";
import PrintIcon from "../../assets/images/print.png";
import FruitPic from "../../assets/images/avocado.jpg";
import Tick from "../../assets/images/tick.png";
import Cross from "../../assets/images/cross.png";
import { useEffect, useState } from "react";

function OrderDetails() {
  return (
    <div>
      <Styles.Container>
        <Styles.ContainerTop>
          <p>Orders</p>
          <Styles.RightArrowIcon src={RightArrow} alt="Arrow" />
          <Styles.OrderItem>Order 32457ABC</Styles.OrderItem>
        </Styles.ContainerTop>
        <Styles.ContainerBottom>
          <div>
            <h2>Order 32457ABC</h2>
          </div>
          <Styles.ContainerBottomButtons>
            <Styles.BackButton>Back</Styles.BackButton>
            <Styles.ApprovedButton>Approve order</Styles.ApprovedButton>
          </Styles.ContainerBottomButtons>
        </Styles.ContainerBottom>
      </Styles.Container>
    </div>
  );
}

function OrdersData() {
  return (
    <Styles.OrdersDataContainer>
      <Styles.OrdersDataContent>
        <Styles.OrdersDataItems>
          <Styles.OrdersDataTitle>Supplier</Styles.OrdersDataTitle>
          <Styles.OrdersDataInfo>East coast fruits & vegetables</Styles.OrdersDataInfo>
        </Styles.OrdersDataItems>
        <Styles.OrdersDataDivider></Styles.OrdersDataDivider>
        <Styles.OrdersDataItems>
          <Styles.OrdersDataTitle>Shipping date</Styles.OrdersDataTitle>
          <Styles.OrdersDataInfo>Thu, Feb 10</Styles.OrdersDataInfo>
        </Styles.OrdersDataItems>
        <Styles.OrdersDataDivider></Styles.OrdersDataDivider>
        <Styles.OrdersDataItems>
          <Styles.OrdersDataTitle>Total</Styles.OrdersDataTitle>
          <Styles.OrdersDataInfo>$ 15,028.3</Styles.OrdersDataInfo>
        </Styles.OrdersDataItems>
        <Styles.OrdersDataDivider></Styles.OrdersDataDivider>
        <Styles.OrdersDataItems>
          <Styles.OrdersDataTitle>Category</Styles.OrdersDataTitle>
          <Styles.categoryContainer>
            <Styles.catIcons src={CategoryIcon} alt="catIcon" />
            <Styles.catIcons src={CategoryIcon} alt="catIcon" />
            <Styles.catIcons src={CategoryIcon} alt="catIcon" />
            <Styles.catIcons src={CategoryIcon} alt="catIcon" />
          </Styles.categoryContainer>
          <Styles.categoryContainer>
            <Styles.catIcons src={CategoryIcon} alt="catIcon" />
            <Styles.catIcons src={CategoryIcon} alt="catIcon" />
            <Styles.catIcons src={CategoryIcon} alt="catIcon" />
            <Styles.catIcons src={CategoryIcon} alt="catIcon" />
          </Styles.categoryContainer>
        </Styles.OrdersDataItems>
        <Styles.OrdersDataDivider></Styles.OrdersDataDivider>
        <Styles.OrdersDataItems>
          <Styles.OrdersDataTitle>Department</Styles.OrdersDataTitle>
          <Styles.OrdersDataInfo>300-444-678</Styles.OrdersDataInfo>
        </Styles.OrdersDataItems>
        <Styles.OrdersDataDivider></Styles.OrdersDataDivider>
        <Styles.OrdersDataItems>
          <Styles.OrdersDataTitle>Status</Styles.OrdersDataTitle>
          <Styles.OrdersDataInfo>Awaiting your approvel</Styles.OrdersDataInfo>
        </Styles.OrdersDataItems>
      </Styles.OrdersDataContent>
    </Styles.OrdersDataContainer>
  );
}

function OrdersTable() {
  const [showModal, setShowModal] = useState(false);
  const [productIndex, setProductIndex] = useState(null);
  const [productsData, setProductsData] = useState([]);

  // API Call
  useEffect(() => {
    fetch("productsAPI.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setProductsData(json?.products));
  }, []);

  // Product Status Update
  function productApprove(productIndex) {
    const updatedProduct = { ...productsData[productIndex], approvedStatus: "Approved" };
    const updatedProductsData = [...productsData];
    updatedProductsData[productIndex] = updatedProduct;
    setProductsData(updatedProductsData);
  }

  function productMissing(type) {
    setShowModal(!showModal);
    const updatedProduct = { ...productsData[productIndex], approvedStatus: type === "urgent" ? "Missing - Urgent" : "Missing" };
    const updatedProductsData = [...productsData];
    updatedProductsData[productIndex] = updatedProduct;
    setProductsData(updatedProductsData);
  }

  function setMissingColor(approvedStatus) {
    //rgb(255 87 34 / 85%)
    if (approvedStatus === "Approved") return `rgb(7 196 126)`;
    if (approvedStatus === "Missing") return `rgb(255 87 34 / 75%)`;
    if (approvedStatus === "Missing - Urgent") return `rgb(210 14 0)  `;
  }

  function modalAction(index) {
    setShowModal(!showModal);
    setProductIndex(index);
  }

  function MissingModal() {
    return (
      <div>
        <Styles.ModalContainer>
          <Styles.Modal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontWeight: "bold" }}>Missing Product</p>
              <img src={Cross} alt="CrossIcon" style={{ height: "18px", width: "18px", cursor: "pointer" }} onClick={modalAction} />
            </div>
            <p>Is 'Chicken Breast' urgent?</p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "30px" }}>
              <p style={{ cursor: "pointer" }} onClick={() => productMissing("normal")}>
                No
              </p>
              <p style={{ cursor: "pointer" }} onClick={() => productMissing("urgent")}>
                Yes
              </p>
            </div>
          </Styles.Modal>
        </Styles.ModalContainer>
      </div>
    );
  }

  return (
    <div>
      {showModal && <MissingModal />}
      <Styles.OrdersTableContainer>
        <Styles.OrdersTableContent>
          <Styles.OrdersTableTop>
            <Styles.SearchBox>
              <Styles.SearchInput type="text" placeholder="Search..." />
              <Styles.SearchIcon src={SearchIcon} alt="searchIcon" />
            </Styles.SearchBox>
            <Styles.AddAndPrint>
              <Styles.BackButton>Add Item</Styles.BackButton>
              <Styles.PrintIcon src={PrintIcon} alt="printIcon" />
            </Styles.AddAndPrint>
          </Styles.OrdersTableTop>

          {/* Table */}
          <Styles.OrdersTableBottom>
            <Styles.Table>
              <Styles.HeadRow>
                <Styles.HeadCell>Product Name</Styles.HeadCell>
                <Styles.HeadCell>Brand</Styles.HeadCell>
                <Styles.HeadCell>Price</Styles.HeadCell>
                <Styles.HeadCell>Quantity</Styles.HeadCell>
                <Styles.HeadCell>Total</Styles.HeadCell>
                <Styles.HeadCell style={{ paddingRight: "60px" }}>Status</Styles.HeadCell>
              </Styles.HeadRow>
              {productsData.length > 0 &&
                productsData.map((product, index) => {
                  return (
                    <Styles.Row key={index}>
                      <Styles.Cell>
                        <Styles.FruitIcon src={product.productImage} alt="fruitPic" />
                        <div>{product.product}</div>
                      </Styles.Cell>
                      <Styles.Cell>{product.brand}</Styles.Cell>
                      <Styles.Cell>{product.price}</Styles.Cell>
                      <Styles.Cell>{product.quantity}</Styles.Cell>
                      <Styles.Cell>{product.total}</Styles.Cell>
                      <Styles.Cell style={{ paddingRight: "60px", backgroundColor: "#efefef" }}>
                        <Styles.StatusContainer>
                          {product.approvedStatus ? (
                            <Styles.StatusCloud style={{ backgroundColor: `${setMissingColor(product.approvedStatus)}` }}>{product.approvedStatus}</Styles.StatusCloud>
                          ) : (
                            <Styles.StatusCloud style={{ visibility: "hidden" }}></Styles.StatusCloud>
                          )}
                          <Styles.ActionIcons>
                            <Styles.StatusIcon
                              src={Tick}
                              alt="tickIcon"
                              onClick={() => {
                                productApprove(index);
                              }}
                            />
                            <Styles.StatusIcon src={Cross} alt="CrossIcon" onClick={() => modalAction(index)} />
                            <p>Edit</p>
                          </Styles.ActionIcons>
                        </Styles.StatusContainer>
                      </Styles.Cell>
                    </Styles.Row>
                  );
                })}
            </Styles.Table>
          </Styles.OrdersTableBottom>
        </Styles.OrdersTableContent>
      </Styles.OrdersTableContainer>
    </div>
  );
}

function OrderPage() {
  return (
    <div>
      <OrderDetails />
      <OrdersData />
      <OrdersTable />
    </div>
  );
}

export default OrderPage;
