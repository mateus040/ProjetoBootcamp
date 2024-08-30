interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="fundo">
        {Array(10)
          .fill("?")
          .map((_, index) => (
            <div key={index} className="text-[65px]">
              ?
            </div>
          ))}
      </div>
      {children}
    </>
  );
};
