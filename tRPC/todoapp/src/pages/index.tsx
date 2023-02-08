import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";

import { Auth } from "../components/Auth";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Layout title="Login">
        <Auth />
      </Layout>
    );
  }

  return (
    <Layout title="Todo App">
      <BiLogOut
        className="h-9 w-9 cursor-pointer hover:text-blue-500"
        onClick={() => void signOut()}
      />
      <p className="my-3 text-xl">{session?.user?.name}</p>
    </Layout>
  );
};

export default Home;
