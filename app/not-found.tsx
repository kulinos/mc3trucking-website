import Link from "next/link";
import { PageIntro } from "@/components/sections";

export default function NotFound() {
  return <PageIntro label="Page unavailable" title="We couldn’t find that page."><Link className="button" href="/">Return home</Link></PageIntro>;
}
