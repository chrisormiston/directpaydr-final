import { createClient } from "./lib/supabase/server"
import { createClient as createClientBrowser } from "./lib/supabase/client"

export const supabase = createClient()
export const supabaseClient = createClientBrowser()
