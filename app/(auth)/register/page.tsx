import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Register() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password1">Password</Label>
            <Input id="password1" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password2">Re-enter password</Label>
            <Input id="password2" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
