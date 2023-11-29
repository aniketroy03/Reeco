import CartImage from "../../assets/images/cart.png";
import DownArrow from "../../assets/images/downArrow.png";
import * as Styles from "./styles";

function NavHeader() {
  return (
    <div>
      <Styles.Header>
        <Styles.Navigations>
          <Styles.Logo>Reeco</Styles.Logo>
          <Styles.Link>Store</Styles.Link>
          <Styles.Link>Orders</Styles.Link>
          <Styles.Link>Analytics</Styles.Link>
        </Styles.Navigations>
        <Styles.UserInfo>
          <Styles.CartIcon src={CartImage} alt="Cart" />
          <Styles.Account>
            <Styles.Link>Hello, James</Styles.Link>
            <Styles.DownArrowIcon src={DownArrow} alt="Arrow" />
          </Styles.Account>
        </Styles.UserInfo>
      </Styles.Header>
    </div>
  );
}

export default NavHeader;
