const defaultSkin = "px-3 py-2 transition-transform hover:scale-105";

export const createBtnClasses = (background: string, border: boolean, name?: string, additional?: string) => {
  const getButtonClassNames = (background: string): string => {
    switch (background) {
      case 'primary':
        return 'text-black bg-transparent';
      case 'secondary':
        return 'text-white bg-secBtnBg';
      case 'btn':
        return 'text-white bg-btn';
      default:
        return 'text-black bg-transparent';
    }
  };

  let classNames = getButtonClassNames(background) + ' ';
  classNames += defaultSkin + ' ';
  classNames += border ? 'border ' : '';
  classNames += name ? 'min-w-20' : '';
  classNames += additional ? additional + ' ' : '';

  return classNames.trim();
};
