import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gbifitugoahuodqnvmll.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiaWZpdHVnb2FodW9kcW52bWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NDMwMTcsImV4cCI6MjA5MTMxOTAxN30.7hZ8bKc-8D5AqRxuYvJo4CHsBqOC0MQI0unV8MP1DEI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
