import Modal from '../UI/Modal';
import ProductDetail from '../Art/ArtistInfo';;
import CartTotal from './CartTotal';
import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import {
  cartLi,
  cartUl,
  closeBtn,
} from '../../styles/cart-style';
import { AiOutlineClose } from 'react-icons/ai';
import Form from './Form';
import axios from 'axios';
import EmptyCart from './EmptyCart';

const Cart = (props) => {
  const { items } = useContext(CartContext);
  const [page, setPage] = useState(1);

  const nextPageHandler = () => {
    setPage((prev) => prev + 1);
  };

  const prevPageHandler = () => {
    setPage((prev) => prev - 1);
  };

  const closeHandler = () => {
    props.onClose();
  };

  const requestOrder = async (userData) => {
    try {
      const response = await axios.post('orders.json', {
        items,
        user: userData,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const orderHandler = (userData) => {
    requestOrder(userData); // 서버에 보내기
    props.onClose(); // 모달창 닫기
  };

  const productDetail = items.map((item) => (
    <li key={item.id} css={cartLi}>
      <ProductDetail
        id={item.id}
        title={item.title}
        price={item.price}
        amount={item.amount}
        src={item.imageUrl}
      />
    </li>
  ));

  let content =
    page === 1 ? (
      <>
        <ul css={cartUl}>{productDetail}</ul>
        <CartTotal page={page} onNext={nextPageHandler} />
      </>
    ) : (
      <Form
        onOrder={orderHandler}
        onPrev={prevPageHandler}
      />
    );
  if (items.length === 0) {
    content = <EmptyCart onClose={props.onClose} />;
  }

  return (
    <Modal onClose={props.onClose}>
      <div css={closeBtn}>
        <button onClick={closeHandler}>
          <AiOutlineClose />
        </button>
      </div>
      {content}
    </Modal>
  );
};

export default React.memo(Cart);
