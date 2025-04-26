import { createClient as createSupabaseClient } from "@supabase/supabase-js"

let client: ReturnType<typeof createSupabaseClient> | null = null

export function createClient() {
  if (client) return client

  client = createSupabaseClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  return client
}

// Add named export to fix deployment error

// Re-export the createClient function
