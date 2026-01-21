"use client";
import { Button } from "@repo/ui/button";
import { IconButton } from "@repo/ui/iconButton";
import { User } from "lucide-react";

export default function Page() {
  return (
    <div>
      <Button
        title="click"
        size="sm"
        variant="primary"
        click={() => {
          alert("clciked");
        }}
        font="bold"
      />
      <div className="">
        <IconButton Icon={User} count={3} onclick={() => alert("done") } size={35} />
      </div>
    </div>
  );
}
