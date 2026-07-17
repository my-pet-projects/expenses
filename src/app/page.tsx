import Link from "next/link";
import { Wallet } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold tracking-tight">Expenses</span>
          </div>
          <Link href="/sign-in" className={buttonVariants({ size: "sm" })}>
            Sign in
          </Link>
        </div>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Wallet className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Your finances,<br />under control
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          Track expenses, monitor income, and understand where your money goes — all in one place.
        </p>
        <div className="mt-8">
          <Link href="/sign-in" className={buttonVariants({ size: "lg" })}>
            Get started
          </Link>
        </div>
      </div>
    </main>
  );
}
