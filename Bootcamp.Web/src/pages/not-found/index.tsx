import { Layout } from "../../components/layout/main";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-5xl text-center font-bold">404 Not Found</p>
        <p className="text-2xl text-center text-semibold mt-5">
          Ops... a página que você está procurando não foi encontrada ou foi
          removida
        </p>
      </div>
    </Layout>
  );
}
