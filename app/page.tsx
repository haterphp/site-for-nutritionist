'use client';

import { Button, Input } from "@/shared/ui";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <main className="p-2 flex gap-2">
      {/* <h1 className="text-3xl">Test</h1>
      <h4>Test</h4>
      <p>Test</p> */}
      <Input label={'Test'} feedback={'test'}/>
      <Button>test</Button>
    </main>
  );
}
