"use server";

import { headers } from "next/headers";

import { API_URL } from "@/config";

export const fetchExtended = async (path: string, options: RequestInit = {}): Promise<Response> => {
  const nextHeaders = await headers();
  const clientIp =
    nextHeaders.get("x-forwarded-for")?.split(",").shift()?.trim() ||
    nextHeaders.get("x-real-ip") ||
    "unknown";

  const requestHeaders: HeadersInit = {
    "Content-Type": "application/json",
    "Accept-Language": "en",
    "X-Forwarded-For": clientIp,
    ...(options.headers || {}),
  };

  return await fetch(`${API_URL}${path}`, {
    next: {
      revalidate: 0,
    },
    ...options,
    headers: requestHeaders,
  });
};
