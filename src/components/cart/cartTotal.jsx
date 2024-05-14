/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { totalPriceContainer } from '../../styles/cart-style';
import CartContext from '../../store/cart-context';
import NextPageButton from './NextPageButton';

const CartTotal = (props) => {
  const { totalPrice } = useContext(CartContext);
  const total = `${totalPrice.toLocaleString('ko-KO')}원`;

  return (
    <div css={totalPriceContainer}>
      <div>
        <p>총 주문금액</p>
        <h3>{total}</h3>
      </div>
      <NextPageButton onNext={props.onNext} />
    </div>
  );
};

export default CartTotal;
