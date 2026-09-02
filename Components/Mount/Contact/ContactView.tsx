"use client";
import {
  CircleCheckBigIcon,
  MessageSquareIcon,
  SendIcon,
  SendIconHandle,
} from "@animateicons/react/lucide";
import { AnimatePresence, motion } from "motion/react";
import {
  SubmitEvent,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { FormState, SubmitAction } from "./SubmitAction";
import { CgClose } from "react-icons/cg";

const initialState: FormState = {
  success: false,
  error: false,
  message: "",
};

export default function ContactView() {
  const [Reset, setReset] = useState(0);
  return (
    <ContactComponent
      key={Reset}
      onReset={() => setReset((prev) => prev + 1)}
    />
  );
}

function ContactComponent({ onReset }: { onReset: () => void }) {
  const SubmitButtonIconRef = useRef<SendIconHandle | null>(null);
  const [state, formAction, isPending] = useActionState(
    SubmitAction,
    initialState,
  );

  //reset the form after 3 seconds
  useEffect(() => {
    if (!state.success && !state.error) return;
    const timer = setTimeout(() => {
      onReset();
    }, 3000);
    return () => clearTimeout(timer);
  }, [state, onReset]);

  const HandleValdiation = (e: SubmitEvent<HTMLFormElement>) => {
    const formValid = e.currentTarget.checkValidity();
    if (!formValid) {
      e.preventDefault();
      SubmitButtonIconRef.current?.stopAnimation();
    }
    SubmitButtonIconRef.current?.startAnimation();
  };

  return (
    <div className="w-full h-full rounded-2xl bg-white dark:bg-black dark:text-white/80 text-black border border-black/10 dark:border-white/10 p-4">
      <h1 className="flex items-center gap-2 px-2">
        <MessageSquareIcon duration={1} />
        <span className="text-md font-semibold">Contact</span>
      </h1>

      <section>
        <AnimatePresence>
          <div className="h-8 px-2 my-2">
            {state.success ? (
              <motion.div
                key="success"
                className={`h-full bg-green-700 text-white/90 px-2 rounded-xl text-sm flex justify-between items-center gap-1`}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-1 max-md:text-xs">
                  <CircleCheckBigIcon size={20} duration={1} color="#11ff00" />{" "}
                  {state.error
                    ? state.message
                    : "Thank you, we'll get in touch soon :)"}
                </div>
                <CgClose onClick={() => onReset()} />
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                className={`text-sm dark:text-white/70 text-black/70 ${state.error && "bg-red-500 text-white p-2 rounded-md"}`}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                {state.error ? (
                  <motion.span
                    className="flex gap-2 items-center justify-between"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 100 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    {state.message}
                    <CgClose onClick={() => onReset()} />
                  </motion.span>
                ) : (
                  "Got a project in mind? Let’s chat"
                )}
              </motion.div>
            )}
          </div>
        </AnimatePresence>
        <form
          action={formAction}
          className="flex flex-col gap-2 p-2 w-full text-start"
          onSubmit={(e) => HandleValdiation(e)}
        >
          <label htmlFor="SenderName" className="flex flex-col">
            Name
            <input
              required
              id="SenderName"
              name="SenderName"
              type="text"
              placeholder="Makoto Yuki"
              className="outline-none dark:bg-white/10 bg-black/10 p-2 mt-2 rounded-md"
            />
          </label>
          <label htmlFor="email" className="mt-2 flex flex-col">
            Email
            <input
              required
              id="email"
              name="email"
              pattern=".*@.*"
              title="Enter a valid email"
              type="email"
              placeholder="yukimakoto@example.com"
              className="outline-none dark:bg-white/10 bg-black/10 p-2 mt-2  rounded-md"
            />
          </label>
          <label htmlFor="message" className="mt-2 flex flex-col gap-2">
            Message
            <textarea
              required
              id="message"
              maxLength={200}
              name="message"
              placeholder="within 200 characters"
              className="resize-none outline-none h-20 w-full p-2 dark:bg-white/10 bg-black/10 scrollbar-none rounded-md"
            />
          </label>
          <button
            type="submit"
            className={`${isPending ? "bg-blue-600/70" : "bg-blue-600/80"} hover:bg-blue-600 text-white rounded-xl mt-1 py-2 flex-center gap-2 pop-in shadow-inner shadow-blue-300`}
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
