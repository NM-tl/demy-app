import React from 'react';
import { createBtnClasses } from './CreateBtnClass';

interface ButtonProps {
  name?: string;
  type: "button" | "submit" | "reset";
  border: boolean;
  bold: boolean;
  icon?: string;
  iconName?: string;
  background: 'primary' | 'secondary' | 'btn';
  additional?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  name, 
  type, 
  border, 
  bold, 
  icon, 
  iconName, 
  background,
  additional,
  disabled,
  onClick 
}) => {
  if (!name && !icon) {
    throw new Error("Either 'name' or 'icon' must be provided.");
  }

  return (
    <button
      type={type}
      className={createBtnClasses(background, border, name, additional)}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt={iconName ? iconName : 'icon'} className='text-black min-w-6 w-6 h-6' />}
      {!icon && name && 
        <span className={`${bold ? 'font-bold' : 'font-normal'} text-sm capitalize`}>
          {name}
        </span>
      }
    </button>
  );
};

export default Button;
