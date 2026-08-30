"use server";

import { rateLimiter } from "@/Utils/rateLimiter";
import { headers } from "next/headers";

export interface FormState {
  success: boolean;
  error: boolean;
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
    await rateLimiter.consume(ip, 2);

    const senderName = FormData.get("SenderName");
    const email = FormData.get("email");
    const sentMessage = FormData.get("message");

    if (!senderName || !email || !sentMessage)
      return returnFormState(false, "form values are empty");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.toString()))
      return returnFormState(false, "Invalid email provided");

    const contact = {
      origin: "adi",
      SenderName: senderName,
      email: email,
      message: sentMessage,
    };

    const ProjectURL = `${process.env.SUPABASE_DATA_API_ENDPOINT}/contact_queries`;
    const res = await fetch(ProjectURL, {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_ANONE_KEY || "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    if (!res.ok) {
      const ErrorResponse = await res.json();
      console.error(
        `\n\nFailed to submit, Error: ${ErrorResponse.message}[${ErrorResponse.code}]`,
      );
      return returnFormState(
        false,
        "Failed to submit, please try again later",
        true,
      );
    }
    // console.log("submited", contact);
    return returnFormState(true, "Form submited");
  } catch (e) {
    console.error(`failed to submit form, error:${e}`);
    return returnFormState(false, "Too Many request");
  }
};

const returnFormState = (
  success: boolean,
  message: string,
  error?: boolean,
) => {
  return {
    success: success,
    message: message,
    error: error ?? false,
  };
};
