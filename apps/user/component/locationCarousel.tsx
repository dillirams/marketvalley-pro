"use client";

import { Button } from "@repo/ui/button";

export function LocationCarousel() {
  return (
    <div
      className="
        flex gap-2
        overflow-x-auto
        scroll-smooth
        snap-x snap-mandatory
        no-scrollbar
        py-2
      "
    >
      {["All Locations", "Tsirang", "Thimphu", "Paro", "Punakha", "Phuentsholing"].map(
        (location) => (
          <div key={location} className="snap-start shrink-0">
            <Button
              title={location}
              variant="primary"
              size="sm"
              font="normal"
              click={() => alert(location)}
            />
          </div>
        )
      )}
    </div>
  );
}
