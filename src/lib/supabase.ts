import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabaseConfigured = Boolean(url && anon && !url.includes("YOUR-PROJECT"));

// Only the public anon key is ever used in the browser. RLS protects the data.
export const supabase = createClient(
  supabaseConfigured ? url! : "http://localhost:54321",
  supabaseConfigured ? anon! : "missing-anon-key",
);

export type Subject = { id: number; slug: string; name: string; color: string; sort: number };
export type Profile = { id: string; display_name: string; public_tag: string; avatar_url: string | null };
export type Progress = {
  user_id: string;
  lesson_id: string;
  done: boolean;
  flagged: boolean;
  note: string | null;
  updated_at: string;
};
export type EventRow = {
  id: string;
  user_id: string;
  subject_id: number | null;
  title: string;
  kind: "exam" | "test" | "study" | "deadline";
  starts_at: string;
  ends_at: string | null;
  all_day: boolean;
  notes: string | null;
};
export type Paper = {
  id: string;
  file_path: string;
  title: string | null;
  subject_id: number;
  year: number;
  paper: number;
  term: number | null;
  type: "paper" | "memo";
  uploaded_by: string;
  created_at: string;
};
