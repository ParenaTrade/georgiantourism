import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/types/database';

// İsmi değiştir - createServerSupabaseClient yapın
export const createServerSupabaseClient = () => {
  return createServerComponentClient<Database>({ cookies });
};
