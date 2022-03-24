import { supabase } from "../api/config";

export const signInWithMagicLink = async (email) => {
  const result = await supabase.auth.signIn({
    email,
  });
  return result;
};

export const logout = async () => {
  const result = await supabase.auth.signOut();
  return result;
};

export const getUserProfile = async () => {
  try {
    const user = supabase.auth.user();

    if (user) {
      const { id, app_metadata, user_metadata } = user;
      if (app_metadata.provider === "google") {
        const { full_name } = user_metadata;
        return { username: full_name };
      }

      const { data, error, status } = await supabase
        .from("profiles")
        .select("id, full_name, updated_at")
        .eq("id", id)
        .single();

      if (error && status === 406) {
        throw new Error("An error has ocurred");
      }

      return {
        username: data.full_name,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
