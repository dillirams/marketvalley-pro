import React, { useState } from "react";
import { Button } from "@repo/ui/button";
import { Menu, MessagesSquare, User } from "lucide-react";
import { IconButton } from "@repo/ui/iconButton";

interface adminHeaderProps {
  count: number;
  handleShop: () => void;
  handleProfile: () => void;
  handleMessages: () => void;
}

const AdminHeader = ({
  count,
  handleShop,
  handleMessages,
  handleProfile,
}: adminHeaderProps) => {
  const [extended, setExtended] = useState<boolean>(false);
  return (
    <div
      className={`w-full pb-3 pt-3 flex items-center justify-between bg-white shadow-lg pr-10 pl-10`}
    >
      <div>MarketValley</div>
      <div className="flex items-center justify-center gap-5">
        <div className="md:hidden">
          <IconButton
            size={40}
            Icon={Menu}
            onClick={() => alert("view menu")}
          />
        </div>

        <div className="hidden md:flex items-center justify-center gap-5">
          <IconButton Icon={User} onClick={() => alert("profile")} size={40} />
          <IconButton
            Icon={MessagesSquare}
            onClick={() => alert("messages")}
            size={40}
            count={count}
          />

          <Button
            title="View my shop"
            click={handleShop}
            size="sm"
            variant="primary"
            font="bold"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
