import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 shadow-sm p-5", className)}>
      {children}
    </div>
  );
}
