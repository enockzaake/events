/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fzKXKIbp9qg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create an Account</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-6">
          <div
            className={`step-1 space-y-4 ${currentStep != 1 ? "hidden" : ""}`}
          >
            <div>
              <h3 className="text-lg font-medium">Personal Information</h3>
              <p className="text-muted-foreground">
                Enter your name and email address.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
          </div>

          <div
            className={`step-1 space-y-4 ${currentStep != 2 ? "hidden" : ""}`}
          >
            <div>
              <h3 className="text-lg font-medium">Account Details</h3>
              <p className="text-muted-foreground">
                Create a secure password for your account.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter a secure password"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
          </div>

          <div
            className={`step-1 space-y-4 ${currentStep != 3 ? "hidden" : ""}`}
          >
            <div>
              <h3 className="text-lg font-medium">Additional Information</h3>
              <p className="text-muted-foreground">
                Provide some additional details about yourself.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  placeholder="Enter your address"
                  className="min-h-[100px]"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="flex justify-between">
          {currentStep > 1 && (
            <Button variant="outline" onClick={handlePrev}>
              Previous
            </Button>
          )}
          {currentStep < 3 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button type="submit">Create Account</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
