"use client";
import { Button } from "@repo/ui/button";

export default function Page() {
  return (
    <div className="bg-background-main">
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
