import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for the entire application
// This version doesn't try to access cookies at the module level
export const supabase = createClient(process.env.SUPABASE_URL || "", process.env.SUPABASE_ANON_KEY || "")
