import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function CreateProfile() {
  const { userId } = auth();

  async function addNewProfile(formData) {
    "use server";
    const username = formData.get("username");
    const bio = formData.get("bio");

    await sql`INSERT INTO rr_profiles (clerk_user_id, username, bio) VALUES (${userId}, ${username}, ${bio})`;
    revalidatePath("/");
    redirect("/");
  }

  return (
    <div>
      <h2>Create Profile</h2>
      <form action={addNewProfile}>
        <input name="username" placeholder="Username" required/>
        <textarea name="bio" placeholder="Bio" required></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
