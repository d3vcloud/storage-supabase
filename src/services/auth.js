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
