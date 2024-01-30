import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import User from "@/components/atoms/User";
import styled from 'styled-components';
import Link from "next/link";

import users from "@/data/users";

const UsersWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:90%;
  width:90%;
  margin:0 auto;
  flex-wrap:wrap;
  gap:55px;
`;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <UsersWrapper>
        {users.map(elem => <Link href="/trainings"><User user={elem}/></Link>)}
      </UsersWrapper>
    </Layout>
  );
}