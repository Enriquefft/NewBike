"use server";

import { emails } from "@/db/schema/schema";
import { db } from "@/db";

/**
 * @param formData - FormData object with email field
 */
export async function submitEmail(formData: FormData) {
  console.log("formData", formData.get("email"));
  console.log("formData", formData.has("email"));
  console.log("formData", typeof formData.get("email"));

  if (!formData.has("email") || typeof formData.get("email") !== "string") {
    throw new Error("Invalid email");
  }

  await db.insert(emails).values({
    email: formData.get("email") as string,
  });
}
