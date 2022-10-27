import { supabase } from "./supabaseClient";

export const auth = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (data) return data.session;

  return null;
};
