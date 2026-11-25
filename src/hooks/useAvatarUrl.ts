import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

/** Signed URL for a path in the private "avatars" bucket (null if there is none). */
export function useAvatarUrl(path: string | null | undefined) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    if (!path) return setUrl(null);
    supabase.storage.from("avatars").createSignedUrl(path, 3600).then(({ data }) => setUrl(data?.signedUrl ?? null));
  }, [path]);
  return url;
}
