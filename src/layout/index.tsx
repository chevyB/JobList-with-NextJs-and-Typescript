import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { FaChevronLeft } from 'react-icons/fa';

interface AppProps {
  children: React.ReactNode;
  withBack?: boolean;
}

const Layout = ({ children, withBack = true }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Next App with Typescript - Job List</title>
        <meta
          name="description"
          content="Sample next app with typescript by codezro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex items-center justify-between p-4 border-b border-gray-200">
        <div>
          {withBack && (
            <div className="cursor-pointer" onClick={() => router.back()}>
              <FaChevronLeft />
            </div>
          )}
        </div>
        <Link href="/">
          <span className="text-xl font-bold text-blue-500 cursor-pointer">
            JOB BOARD
          </span>
        </Link>
        <Link href="/add-job">
          <span className="text-gray-500 cursor-pointer text-sm font-semibold">
            Add job
          </span>
        </Link>
      </div>

      <div className="px-12 py-5">{children}</div>
    </>
  );
};

export default Layout;
