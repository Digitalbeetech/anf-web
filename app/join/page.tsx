// app/join/page.tsx
import { redirect } from "next/navigation";

export default function JoinPage() {
  // Immediately redirect to membership page
  redirect("/membership");
}
