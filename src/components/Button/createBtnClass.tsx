const defaultSkin = "px-3 py-2 transition-transform hover:scale-105";

export const createBtnClasses = (background: string, border: boolean, name?: string) => {
    let classNames = '';

    classNames += background === 'secondary' ? 'text-white bg-secBtnBg ' : 'text-black bg-transparent ';
    classNames += defaultSkin + ' ';
    classNames += border ? 'border ' : '';
    classNames += name ? 'w-fit min-w-20' : '';

    return classNames.trim();
};