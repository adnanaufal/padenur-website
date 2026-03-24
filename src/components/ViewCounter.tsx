"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface ViewCounterProps {
  slug: string;
}

export default function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const trackView = async () => {
      try {
        // Try to increment view count using upsert logic via RPC or direct upsert
        const { data: existing } = await supabase
          .from("publication_stats")
          .select("view_count")
          .eq("slug", slug)
          .single();

        if (existing) {
          // Update existing record
          const { data } = await supabase
            .from("publication_stats")
            .update({ view_count: existing.view_count + 1 })
            .eq("slug", slug)
            .select("view_count")
            .single();

          if (data) setViews(data.view_count);
        } else {
          // Insert new record
          const { data } = await supabase
            .from("publication_stats")
            .insert({ slug, view_count: 1 })
            .select("view_count")
            .single();

          if (data) setViews(data.view_count);
        }
      } catch {
        // Silently fail — views are non-critical
        setViews(null);
      }
    };

    trackView();
  }, [slug]);

  if (views === null) {
    return (
      <span className="text-sm text-gray-400 flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        —
      </span>
    );
  }

  return (
    <span className="text-sm text-gray-400 flex items-center gap-1">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      {views.toLocaleString("id-ID")} views
    </span>
  );
}
