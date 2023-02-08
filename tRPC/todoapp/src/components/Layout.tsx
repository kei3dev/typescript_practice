import type { ReactNode } from "react";
import Head from "next/head";

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout = ({ title = "todoapp", children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="This is simple todoapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        {children}
      </main>
    </>
  );
};
