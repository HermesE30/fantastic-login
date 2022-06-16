import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from "./components";

export default function App() {
  return (
    <>
      <Input
        placeholder={'Email'}
        icon={<FiMail size={24} color={'#828282'} />}
      />
      <Input
        placeholder={'Email'}
        type={'password'}
        icon={<FiLock size={24} color={'#828282'} />}
      />
    </>);
}