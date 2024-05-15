"use client";
import InputForm from "@/components/elements/Input";
import Textarea from "@/components/elements/Textarea";
import axios from "axios";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import * as React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface EmailForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function EmailForm() {
  const theme = useTheme();

  const [isLoading, setIsLoading] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Send Message");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailForm>();

  const handleSubmitForm = async (payload: EmailForm) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/email", payload);
      response.status === 200 && toast.success(response.data.message);
      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setButtonText(isLoading ? "Your message is being sent" : "Send Message");
  }, [isLoading]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="primary text-lg font-semibold md:text-xl">
        Or send me an email
      </h2>

      <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-8">
        <div className="md:flex md:gap-4">
          <InputForm
            name="name"
            type="text"
            rule={{ required: true }}
            register={register}
            error={errors}
            placeholder="Enter your name"
          />
          <InputForm
            name="email"
            type="email"
            rule={{ required: true }}
            register={register}
            error={errors}
            placeholder="Enter your email"
          />
        </div>

        <InputForm
          name="subject"
          type="text"
          rule={{ required: true }}
          register={register}
          error={errors}
          placeholder="Enter your subject"
        />

        <Textarea
          name="message"
          rule={{ required: true }}
          register={register}
          error={errors}
          placeholder="Enter your message"
        />

        <button
          type="submit"
          disabled={isLoading}
          className={clsx(
            "primary",
            "mt-8 w-full px-4 py-2",
            "text-sm font-semibold",
            "rounded-md bg-neutral-200",
            "dark:bg-neutral-800",
            "disabled:cursor-not-allowed",
            "disabled:opacity-50",
            "md:text-lg",
          )}
        >
          {buttonText}
        </button>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={theme.theme === "dark" ? "dark" : "light"}
        />
      </form>
    </motion.section>
  );
}
