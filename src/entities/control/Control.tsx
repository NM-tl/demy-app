import Button from '../../shared/button/Button';
import cart from '../../shared/ui/icons/cart.svg';
import lang from '../../shared/ui/icons/lang.svg';

interface ControlProps {
  onOpenModal: () => void;
}

export default function Control({ onOpenModal }: ControlProps) {
  return (
    <div className='flex gap-3'>
      <Button
        iconName="cart"
        type="button"
        border={false}
        bold={false}
        icon={cart}
        background="primary"
      />
      <Button
        name='Log in'
        type="button"
        border={true}
        bold={true}
        background="primary"
      />
      <Button
        name='Sign up'
        type="button"
        border={true}
        bold={true}
        background="secondary"
        onClick={onOpenModal}
      />
      <Button
        iconName="lang"
        type="button"
        border={true}
        bold={false}
        icon={lang}
        background="primary"
      />
    </div>
  );
}
