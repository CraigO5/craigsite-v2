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
import { Textarea } from "@/components/ui/textarea";

export function ContactCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Let&apos;s get in touch!</CardTitle>
        <CardDescription>
          For urgent/important messages, email me at:
        </CardDescription>
        <h2>craig.brdt505@gmail.com</h2>
        <CardDescription>
          Otherwise, use this contact card. I will check back in a couple days.
        </CardDescription>
      </CardHeader>
      <form
        action="https://formspree.io/f/xkgbylzw"
        method="POST"
        className="flex flex-col"
      >
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Your name here..."
                required
              />
            </div>
            <div className="mb-5 grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Send
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
