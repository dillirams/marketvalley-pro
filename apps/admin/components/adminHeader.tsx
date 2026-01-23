"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@repo/ui/button";
import { Menu, MessagesSquare, User, X } from "lucide-react";
import { IconButton } from "@repo/ui/iconButton";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@repo/ui/logo";

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
  const [extended, setExtended] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExtended(false);
      }
    };

    if (extended) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [extended]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setExtended(false);
      }
    };

    if (extended) {
      document.addEventListener("mousedown", onClickOutside);
    }

    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [extended]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="flex items-center justify-between px-6 py-3">
          <Logo />

          <div className="flex items-center gap-4">
            {/* Mobile menu toggle */}
            <div className="md:hidden relative w-10 h-10">
              <AnimatePresence mode="wait">
                {!extended ? (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconButton
                      size={40}
                      Icon={Menu}
                      onClick={() => setExtended(true)}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconButton
                      size={40}
                      Icon={X}
                      onClick={() => setExtended(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden md:flex items-center gap-5">
              <IconButton Icon={User} onClick={handleProfile} size={40} />

              <IconButton
                Icon={MessagesSquare}
                onClick={handleMessages}
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
      </div>

      <AnimatePresence>
        {extended && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {extended && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[64px] left-0 right-0 z-50 md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4 items-center"
          >
            <IconButton
              Icon={User}
              onClick={() => {
                handleProfile();
                setExtended(false);
              }}
              size={36}
              label="Profile"
            />

            <IconButton
              Icon={MessagesSquare}
              onClick={() => {
                handleMessages();
                setExtended(false);
              }}
              size={36}
              count={count}
              label="Messages"
            />

            <Button
              title="View my shop"
              click={() => {
                handleShop();
                setExtended(false);
              }}
              size="sm"
              variant="primary"
              font="bold"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminHeader;
