"use client";
import { Button } from "@repo/ui/button";
import { IconButton } from "@repo/ui/iconButton";
import { User } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-background-main">
      <Button
        title="click"
        size="sm"
        variant="tertiary"
        click={() => {
          alert("clciked");
        }}
        font="bold"
      />
      <div className="">
  
      </div>
    </div>
  );
}
