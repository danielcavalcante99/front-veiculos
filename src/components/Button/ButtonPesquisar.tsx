interface ButtonPesquisarProps {
    handlerClick: () => void;
    children: React.ReactNode;
}

function ButtonPesquisar({handlerClick, children}: ButtonPesquisarProps) {
  return (
      <button type="button" onClick={handlerClick} className="p-2 rounded-3 mb-3 px-5 btn-green">
          {children}
      </button>
  );
}

export default ButtonPesquisar;
