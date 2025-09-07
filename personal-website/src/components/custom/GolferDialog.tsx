import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function GolferDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="text-primary underline cursor-pointer">golfer</span>
      </DialogTrigger>
  <DialogContent className="sm:max-w-[425px] bg-white dark:bg-background border border-border shadow-lg bg-opacity-100">
        <DialogHeader>
          <DialogTitle>Chris Pickreign - Golfer</DialogTitle>
          <DialogDescription>
            Placeholder data about golfing achievements, stats, or bio goes here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="text-muted-foreground">More details about Chris's golfing journey will be added soon.</div>
        </div>
        <DialogFooter>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mr-4">Golf Domain 1</a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Golf Domain 2</a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
