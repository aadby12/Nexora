import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/content";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function getAdminSession() {
  if (!isSupabaseConfigured()) {
    return { configured: false as const, user: null };
  }

  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { configured: true as const, user: null };
  }

  const { data: adminUser } = await supabase
    .from("admin_users")
    .select("id, email")
    .eq("user_id", user.id)
    .maybeSingle();

  return {
    configured: true as const,
    user,
    isAdmin: Boolean(adminUser),
  };
}

export async function requireAdmin() {
  const session = await getAdminSession();

  if (!session.configured) {
    return session;
  }

  if (!session.user || !session.isAdmin) {
    redirect("/login");
  }

  return session;
}
