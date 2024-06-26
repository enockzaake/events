"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Pencil } from "lucide-react";
import { UUID } from "crypto";

export const EditTicketLimits = ({ event_id }: { event_id: UUID }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex items-center bg-gray-900 text-white h-10 rounded-md px-4 gap-1">
        <Pencil className="h-3.5 w-3.5" />
        Edit ticket limits
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-red-900 w-[900px]">
        <AlertDialogHeader>
          <AlertDialogTitle>EditTicketLimits</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
