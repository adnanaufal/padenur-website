"use server";

import { supabase } from "@/lib/supabase";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Server-side validation
  if (!name || !email || !subject || !message) {
    return { success: false, error: "Semua kolom wajib diisi." };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Format email tidak valid." };
  }

  // Length validation
  if (name.length > 100) {
    return { success: false, error: "Nama terlalu panjang (maks 100 karakter)." };
  }
  if (subject.length > 200) {
    return { success: false, error: "Subjek terlalu panjang (maks 200 karakter)." };
  }
  if (message.length > 5000) {
    return { success: false, error: "Pesan terlalu panjang (maks 5000 karakter)." };
  }

  try {
    const { error } = await supabase.from("contact_messages").insert({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: "Gagal mengirim pesan. Silakan coba lagi." };
    }

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, error: "Terjadi kesalahan server. Silakan coba lagi nanti." };
  }
}
