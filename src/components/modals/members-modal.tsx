"use client";

import { UserAvatar } from "@/components/user-avatar";
import { ShieldAlert, ShieldCheck } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "../../../hooks/use-modal-store";
import { ServerWithMembersWithProfiles } from "../../../types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
const roleIconMap = {
  GUEST: null,
  MODERATOR: <ShieldCheck className="h-4 w-4 ml-2 text-indigo-500" />,
  ADMIN: <ShieldAlert className="h-4 w-4 text-rose-500" />,
};
export const MemberModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const [loadingId, setLoadingId] = useState("");
  const isModalOpen = isOpen && type === "members";
  const { server } = data as { server: ServerWithMembersWithProfiles };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Manage Members
          </DialogTitle>
          <DialogDescription>
            {server?.members?.length} Members
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-8 max-h-[420px] pr-6 px-3">
          {server?.members?.map((member) => (
            <div key={member.id} className="flex items-center gap-x-2 mb-6">
              <UserAvatar src={member.profile.imageUrl} />
              <div className="flex flex-col gap-y-1">
                <div className="text-xs font-semibold flex items-center gap-x-1">
                  {member.profile.name}
                  {roleIconMap[member.role]}
                </div>
                <p className="text-xs text-zinc-500">{member.profile.email}</p>
              </div>
              {server.profileId !== member.profileId &&
                loadingId !== member.id && (
                  <div className="ml-auto">Action !</div>
                )}
            </div>
          ))}
        </ScrollArea>
        <div className="p-6">hello members</div>
      </DialogContent>
    </Dialog>
  );
};
