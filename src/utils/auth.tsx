import { supabase } from '@/lib/supabase';

export async function signIn(email: string, password: string) {
  return await supabase.auth.signInWithPassword({ email, password });
}

export async function signUp(email: string, password: string, userData?: any) {
  return await supabase.auth.signUp({ 
    email, 
    password,
    options: {
      data: userData // Kullanıcı tipi vb. ek veriler
    }
  });
}

export async function signOut() {
  return await supabase.auth.signOut();
}

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const getSession = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
};
