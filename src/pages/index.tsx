import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import User from "@/components/atoms/User";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import users from "@/data/users";
import { useState } from "react";

const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 55px;
`;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);
  const handleSelected = (id: number) => {
    setSelected(id)
    setTimeout(()=>{
      router.push('/trainings/')
    },800)
  };

  return (
    <Layout>
      <UsersWrapper>
        {users.map((elem) => (
          <User
            key={`user-${elem.id}`}
            user={elem}
            selected={selected===elem.id}
            onClick={() => {
              handleSelected(elem.id);
            }}
          />
        ))}
      </UsersWrapper>
    </Layout>
  );
}
