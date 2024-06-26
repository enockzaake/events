"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PlusCircle } from "lucide-react";
import { UUID } from "crypto";

import { newEventTicket } from "@/actions/organiserActions";
import { Button } from "./ui/button";

export const NewTicket = ({ event_id }: { event_id: UUID }) => {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submitting form...");
    const form = new FormData(e.target as HTMLFormElement);
    await newEventTicket(event_id, form);
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex items-center bg-gray-900 text-white h-10 rounded-md px-4 gap-1 ml-6 my-4">
        <PlusCircle className="h-4 w-4" />
        Add ticket
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[900px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>Descrption</AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-2 gap-2">
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price:</label>
              <input
                type="number"
                name="price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Type:</label>
              <input
                type="text"
                name="type"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Quantity:</label>
              <input
                type="number"
                name="quantity"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Status:</label>
              <input
                type="text"
                name="status"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Start Sale:</label>
              <input
                type="datetime-local"
                name="start_sale"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">End Sale:</label>
              <input
                type="datetime-local"
                name="end_sale"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button>Continue</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
