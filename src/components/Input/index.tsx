import { useRef, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import {
  InputContainer,
  IconContainer,
  InputStyled,
} from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  type?: string
}


export default function Input({
  icon,
  type,
  ...props
}: Props) {
  const [viewPassword, setViewPassword] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null);
  const isPassowrdType: boolean = type === 'password';

  function handleChange() {
    const { current: input } = inputRef;

    console.log('teste', input && input.value);

    if (!input || input.value.trim().length === 0) {
      return;
    }
  }

  return (
    <InputContainer>
      {
        icon ? (
          <IconContainer>
            {icon}
          </IconContainer>
        ) : null
      }
      <InputStyled
        onChange={handleChange}
        type={type}
        ref={inputRef}
        {...props}
      />
      {
        isPassowrdType ? (
          <IconContainer
            onClick={() => setViewPassword(!viewPassword)}
          >
            {
              viewPassword ? (
                <FiEye size={24} color={'#828282'} />
              ) : (
                <FiEyeOff size={24} color={'#828282'} />
              )
            }
          </IconContainer>
        ) : null
      }
    </InputContainer>
  );
}