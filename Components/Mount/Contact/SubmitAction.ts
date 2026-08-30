"use server";

import { rateLimiter } from "@/Utils/RateLimiter";
import { headers } from "next/headers";

export interface FormState {
  success: boolean;
  message: string;
}

export const SubmitAction = async (
  prevState: FormState,
  FormData: FormData,
): Promise<FormState> => {
  const Headers = await headers();
  const ip =
    Headers.get("x-real-ip") || Headers.get("x-forwarded-for") || "127.0.0.1";

  try {
    rateLimiter.consume(ip, 2);
    console.log("Here are the submited data :", FormData);
    return {
      success: true,
      message: "Form Submited",
    } as FormState;
  } catch (e) {
    console.error(`failed to submit form, error:${e}`);
    return {
      success: false,
      message: "Too many Sumbmits request",
    } as FormState;
  }
};
