"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/content";

type ActionState = {
  ok?: boolean;
  error?: string;
  message?: string;
};

function splitLines(value: string): string[] {
  return value
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseCheckbox(value: FormDataEntryValue | null): boolean {
  return value === "on" || value === "true";
}

export async function loginAdmin(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  if (!isSupabaseConfigured()) {
    return {
      error:
        "Supabase environment variables are missing. Add them before using admin login.",
    };
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  if (!user) {
    return { error: "Could not load the signed-in user." };
  }

  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError) {
    return {
      error:
        "Login succeeded, but admin access could not be verified yet. Make sure the latest SQL policies have been applied in Supabase.",
    };
  }

  if (!adminUser) {
    await supabase.auth.signOut();
    return {
      error:
        "This account signed in successfully, but it is not listed in the admin_users table yet.",
    };
  }

  redirect("/admin");
}

export async function logoutAdmin() {
  if (!isSupabaseConfigured()) {
    redirect("/login");
  }

  const supabase = await createServerSupabaseClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function upsertProject(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  if (!isSupabaseConfigured()) {
    return { error: "Supabase is not configured yet." };
  }

  const supabase = await createServerSupabaseClient();
  const id = String(formData.get("id") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();

  if (!title || !slug) {
    return { error: "Project title and slug are required." };
  }

  const payload = {
    title,
    slug,
    short_description: String(formData.get("short_description") ?? "").trim(),
    full_description: String(formData.get("full_description") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim(),
    tech_stack: splitLines(String(formData.get("tech_stack") ?? "")),
    live_url: String(formData.get("live_url") ?? "").trim(),
    featured: parseCheckbox(formData.get("featured")),
    sort_order: Number(formData.get("sort_order") ?? 0),
    thumbnail_image: String(formData.get("thumbnail_image") ?? "").trim(),
    thumbnail_alt: String(formData.get("thumbnail_alt") ?? "").trim(),
    key_features: splitLines(String(formData.get("key_features") ?? "")),
  };

  const { data, error } = id
    ? await supabase
        .from("projects")
        .update(payload)
        .eq("id", id)
        .select("id")
        .single()
    : await supabase.from("projects").insert(payload).select("id").single();

  if (error || !data) {
    return { error: error?.message ?? "Could not save project." };
  }

  const galleryImages = splitLines(String(formData.get("gallery_images") ?? ""));
  if (galleryImages.length > 0) {
    await supabase.from("project_images").delete().eq("project_id", data.id);
    await supabase.from("project_images").insert(
      galleryImages.map((imageUrl, index) => ({
        project_id: data.id,
        image_url: imageUrl,
        alt_text: `${title} screenshot ${index + 1}`,
        sort_order: index + 1,
      })),
    );
  }

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/projects");
  revalidatePath(`/projects/${slug}`);

  return { ok: true, message: "Project saved successfully." };
}

export async function deleteProject(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const id = String(formData.get("id") ?? "").trim();
  if (!id) return;

  const supabase = await createServerSupabaseClient();
  await supabase.from("project_images").delete().eq("project_id", id);
  await supabase.from("projects").delete().eq("id", id);

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/projects");
}

export async function toggleFeaturedProject(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const id = String(formData.get("id") ?? "").trim();
  const featured = parseCheckbox(formData.get("featured"));
  if (!id) return;

  const supabase = await createServerSupabaseClient();
  await supabase.from("projects").update({ featured }).eq("id", id);

  revalidatePath("/");
  revalidatePath("/admin/projects");
}

export async function reorderProjects(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const rawOrder = String(formData.get("order") ?? "").trim();
  if (!rawOrder) return;

  let order: string[] = [];

  try {
    order = JSON.parse(rawOrder) as string[];
  } catch {
    return;
  }

  const supabase = await createServerSupabaseClient();
  await Promise.all(
    order.map((id, index) =>
      supabase.from("projects").update({ sort_order: index + 1 }).eq("id", id),
    ),
  );

  revalidatePath("/");
  revalidatePath("/admin/projects");
}

export async function updateService(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  if (!isSupabaseConfigured()) {
    return { error: "Supabase is not configured yet." };
  }

  const supabase = await createServerSupabaseClient();
  const id = String(formData.get("id") ?? "").trim();

  const { error } = await supabase.from("services").upsert({
    id,
    title: String(formData.get("title") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    icon: String(formData.get("icon") ?? "").trim(),
    cta: String(formData.get("cta") ?? "").trim(),
    sort_order: Number(formData.get("sort_order") ?? 0),
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/admin/services");
  return { ok: true, message: "Service saved successfully." };
}

export async function updateSiteSection(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  if (!isSupabaseConfigured()) {
    return { error: "Supabase is not configured yet." };
  }

  const supabase = await createServerSupabaseClient();
  const key = String(formData.get("key") ?? "").trim();
  const rawValue = String(formData.get("value") ?? "").trim();

  if (!key || !rawValue) {
    return { error: "Section key and value are required." };
  }

  let value: unknown;

  try {
    value = JSON.parse(rawValue);
  } catch {
    return { error: "Section value must be valid JSON." };
  }

  const { error } = await supabase
    .from("site_settings")
    .upsert({ key, value }, { onConflict: "key" });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/admin/content");
  return { ok: true, message: "Content section saved successfully." };
}

export async function uploadProjectImage(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  if (!isSupabaseConfigured()) {
    return { error: "Supabase is not configured yet." };
  }

  const file = formData.get("file");
  const folder = String(formData.get("folder") ?? "projects").trim();

  if (!(file instanceof File) || file.size === 0) {
    return { error: "Choose an image file to upload." };
  }

  const supabase = await createServerSupabaseClient();
  const fileNameBase = file.name.replace(/\.[^.]+$/, "").replace(/\s+/g, "-");
  const fileExt = file.name.split(".").pop() ?? "jpg";
  const path = `${folder}/${Date.now()}-${fileNameBase}.${fileExt}`;
  const arrayBuffer = new Uint8Array(await file.arrayBuffer());

  const { error } = await supabase.storage
    .from("project-media")
    .upload(path, arrayBuffer, {
      contentType: file.type,
      upsert: true,
    });

  if (error) {
    return { error: error.message };
  }

  const { data } = supabase.storage.from("project-media").getPublicUrl(path);

  return {
    ok: true,
    message: data.publicUrl,
  };
}
