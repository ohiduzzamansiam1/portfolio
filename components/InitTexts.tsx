"use client";

import { TextStore, useTexts } from "@/lib/store/useTexts";
import { useEffect, useRef } from "react";

export default function InitTexts({
  title,
  subtitle,
  aboutTitle,
  aboutDescription,
}: TextStore) {
  const initState = useRef(false);

  useEffect(() => {
    if (!initState.current) {
      useTexts.setState({ title, subtitle, aboutTitle, aboutDescription });
    }
    initState.current = true;
  }, [title, subtitle, aboutTitle, aboutDescription]);

  return <></>;
}
