// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vwxgxazxjdnnfojwwhlu.supabase.co'
const supabaseAnonKey = 'sb_publishable_HqVgWvVHzfNpH2J4_a3q4w_UdOjlvDC'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)