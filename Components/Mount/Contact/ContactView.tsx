"use client";
import {
  CircleCheckBigIcon,
  MessageSquareIcon,
  MessageSquareIconHandle,
  SendIcon,
  SendIconHandle,
} from "@animateicons/react/lucide";
import { motion } from "motion/react";
import { useActionState, useRef } from "react";
import { FormState, SubmitAction } from "./SubmitAction";

const initialState: FormState = {
  success: false,
  message: "",
};
export default function ContactView() {
  const IconRef = useRef<MessageSquareIconHandle | null>(null);
  const SubmitButtonIconRef = useRef<SendIconHandle | null>(null);
  const [state, formAction, isPending] = useActionState(
    SubmitAction,
    initialState,
  );

  return (
    <div
      className="w-full h-full rounded-2xl bg-white dark:bg-black dark:text-white/80 text-black border border-black/10 dark:border-white/10 p-4"
      onMouseEnter={() => {
        IconRef.current?.startAnimation();
      }}
    >
      <h1 className="flex items-center gap-2 px-2">
        <MessageSquareIcon duration={1} ref={IconRef} />
        <span className="text-md font-semibold">Contact</span>
      </h1>

      <section>
        <div className="h-8 px-2 my-2">
          {state.success && (
            <motion.div
              className={` h-full bg-green-600 text-white/90 px-2 rounded-xl text-sm flex items-center gap-1`}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 100 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <CircleCheckBigIcon size={20} duration={1} color="#11ff00" />{" "}
              Thank you for, I&apos;ll get back to you soon :)
            </motion.div>
          )}
        </div>
        <form
          action={formAction}
          className="flex flex-col gap-2 p-2 w-full text-start"
        >
          <label htmlFor="SenderName" className="flex flex-col">
            Name
            <input
              id="SenderName"
              name="SenderName"
              type="text"
              placeholder="Makoto Yuki"
              className="outline-none dark:bg-white/10 bg-black/10 p-2 mt-2  rounded-md"
            />
          </label>
          <label htmlFor="email" className="mt-2 flex flex-col">
            email
            <input
              id="email"
              name="email"
              type="text"
              placeholder="yukimakoto@example.com"
              className="outline-none dark:bg-white/10 bg-black/10 p-2 mt-2  rounded-md"
            />
          </label>
          <label htmlFor="message" className="mt-2 flex flex-col gap-2">
            message
            <textarea
              id="message"
              name="message"
              placeholder="with in 200 characters"
              className="resize-none outline-none h-20 w-full p-2 dark:bg-white/10 bg-black/10 scrollbar-none rounded-md"
            />
          </label>
          <button
            type="submit"
            className={`${isPending ? "bg-blue-600/40" : "bg-blue-600/80"} hover:bg-blue-600 text-white rounded-xl mt-1 py-2 flex-center gap-2 pop-in shadow-inner shadow-blue-300`}
            onClick={() => SubmitButtonIconRef.current?.startAnimation()}
            disabled={isPending}
          >
            <SendIcon
              duration={1}
              color="#ffffff"
              isAnimated={false}
              size={18}
              ref={SubmitButtonIconRef}
            />
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
