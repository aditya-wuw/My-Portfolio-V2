import { RateLimiterMemory } from "rate-limiter-flexible";

const opts = {
  points: 6,
  duration: 1,
};

export const rateLimiter = new RateLimiterMemory(opts);
