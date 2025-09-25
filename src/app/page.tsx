import Link from "next/link";
import { PAGES } from "@/config";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Button asChild>
        <Link href={PAGES.dashboard}>Dashboard</Link>
      </Button>
    </div>
  );
};

export default Page;
