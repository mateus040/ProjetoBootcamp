interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="fundo">
        {Array(10)
          .fill("?")
          .map((symbol, index) => (
            <div key={index} className="text-[55px]">
              {symbol}
            </div>
          ))}
      </div>
      {children}
    </>
  );
};
