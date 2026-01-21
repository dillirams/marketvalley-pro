"use client";
import { Button } from "@repo/ui/button";

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
    </div>
  );
}
