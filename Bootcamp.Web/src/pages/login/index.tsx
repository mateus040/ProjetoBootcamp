export default function Login() {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 h-screen">
      <div className="col-span-5 bg-white">
        <div className="p-10 mt-20">
          <p className="text-4xl font-bold text-center">Acessar conta</p>
          <form>
            <div className="mt-6">
              <label htmlFor="">E-mail</label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-4 mt-2"
                placeholder="Informe seu e-mail"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="">Senha</label>
              {/* TODO: icone do olho (ver / esconder) */}
              <input
                type="password"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-4 mt-2"
                placeholder="Informe sua senha"
                required
              />
            </div>

            <button className="mt-5 bg-black hover:bg-neutral-950 text-white font-bold p-5 rounded w-full">
              Acessar
            </button>
          </form>
        </div>
      </div>
      <div className="hidden lg:block col-span-7 bg-black">
        <div className="p-10 flex flex-col items-center justify-center mt-14">
          <p className="text-5xl text-white font-semibold text-center">
            Bem-vindo
          </p>
          <p className="text-4xl text-white font-semibold text-center mt-16">
            Sistema de Gerenciamento
          </p>
          <p className="text-4xl text-white font-semibold text-center mt-3">
            de tarefas
          </p>
          <p className="mt-12 text-xl text-white text-center">
            Acesse sua conta para continuar
          </p>
        </div>
      </div>
    </div>
  );
}
