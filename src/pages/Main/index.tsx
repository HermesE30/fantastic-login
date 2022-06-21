import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';

export default function Main() {
  const history = useNavigate();

  function handleRegisterPress() {
    history('/register');
  }

  return (
    <Routes>
      <Route index element={<Login onRegisterPress={() => handleRegisterPress()} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
