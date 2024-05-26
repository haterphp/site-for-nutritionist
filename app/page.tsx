'use client';

import { useUserStore } from "@/entities/user";
import { Button, Input } from "@/shared/components";
import { useEffect } from "react";

export default function Home() {
  const user = useUserStore(state => state.user)

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <main className="p-2 flex gap-2">
      <Input label={'Test'} feedback={'test'}/>
      <Button>test</Button>
    </main>
  );
}
