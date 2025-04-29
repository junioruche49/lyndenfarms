import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Home() {
  const session: { user: { token: string } } | null = await getServerSession();
  if (!session?.user?.token) {
    return redirect("/signin");
  } else {
    return redirect("/dashboard");
  }
}
