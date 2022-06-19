import { Flip, ToastContainer } from 'react-toastify';
import { Login } from './pages';

export default function App() {
  return (
    <>
      <ToastContainer
        transition={Flip}
        theme={'colored'}
      />
      <Login />
    </>
  );
}