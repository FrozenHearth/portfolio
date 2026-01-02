import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://quxpbuzifohzrkoctdpy.supabase.co';
const supabaseServerKey: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1eHBidXppZm9oenJrb2N0ZHB5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDA4MDQ0OCwiZXhwIjoxOTk1NjU2NDQ4fQ.PPL8xWDYxAmWmzeMa1JoP65oi_IbVTP6iWUHaRJAnhg';

const SupabaseAdmin = createClient(supabaseUrl, supabaseServerKey);

export { SupabaseAdmin };
