// lib/rateLimiter.ts
import { NextRequest } from "next/server";

// In-memory store: key is IP, value is array of timestamps (in ms)
const rateLimitStore = new Map<string, number[]>();

// Default config: 5 requests allowed per 30 seconds
const RATE_LIMIT = 5;
const WINDOW_MS = 30_000;

export async function rateLimiter(request: NextRequest): Promise<void> {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();

  // Get previous request timestamps for this IP
  const timestamps = rateLimitStore.get(ip) || [];

  // Filter out timestamps older than 30 seconds
  const recent = timestamps.filter((ts) => now - ts < WINDOW_MS);

  if (recent.length >= RATE_LIMIT) {
    console.warn(`⚠️ IP ${ip} hit rate limit`);
    throw new Error("Rate limit exceeded");
  }

  // Add current timestamp and update the store
  recent.push(now);
  rateLimitStore.set(ip, recent);
}
