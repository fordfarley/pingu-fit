import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import User from "@/components/atoms/User";
import styled from 'styled-components';

import users from "@/data/users";

const UsersWrapper = styled.div`
  display:flex;
  align-items:flex-start;
  height:90%;
  width:90%;
  margin:0 auto;
  flex-wrap:wrap;
  gap:15px;
`;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <UsersWrapper>
        {users.map(elem => <User user={elem}/>)}
      </UsersWrapper>
    </Layout>
  );
}