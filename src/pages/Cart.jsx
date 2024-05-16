import CartList from '../components/CartList/CartList';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AddressInput from '../components/AddressInput/AddressInput';
export default function Cart() {
  return (
    <div>
      <Header />
      <CartList />
      <AddressInput />
      <Footer />
    </div>
  );
}
