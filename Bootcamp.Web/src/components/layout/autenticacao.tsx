interface Props {
  children: React.ReactNode;
}

export default function LayoutAutenticacao({ children }: Props) {
  return (
    <div className="px-12 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-[30px] sm:text-[60px] font-bold mb-10 text-center">
            Vamos começar!
          </p>

          <div className="w-full md:w-[650px] bg-white p-6 rounded-xl text-black">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
