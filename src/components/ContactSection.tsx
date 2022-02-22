import { useEffect, useRef, useState } from "react";

import { handleSubmit, scrollIntoView } from "../utils";

import { Button } from "./Button";
import { Animate } from "./Animate";

export const ContactSection = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState<
    "" | "error" | "loading" | "success"
  >("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setFormState("loading");

    try {
      handleSubmit(e, {
        ...formData,
        subject: `Jauna ziņa no ${window.location.host}: ${formData.name}`,
      });
      setFormState("success");
    } catch (err) {
      setFormState("error");
    }
  };

  useEffect(() => {
    if (isFormVisible && ref.current) {
      scrollIntoView(ref.current);
    }
  }, [isFormVisible]);

  const { name, email, message } = formData;

  return (
    <section className="relative px-[10%] mb-20 lg:mb-28 flex flex-col items-center">
      <Animate animation={formState ? "animate-fade-out" : "animate-fade-in"}>
        <Button inverse onClick={() => setIsFormVisible(!isFormVisible)}>
          Sazinies ar mani
        </Button>
      </Animate>

      <Animate
        animate={!!formState}
        animation="animate-fade-in"
        className="absolute h-full flex items-center text-4xl lg:text-6xl"
      >
        {formState === "error" && (
          <>Atvaino! Notika kļūda, raksti arstarulsmirus@gmail.com.</>
        )}

        {formState === "success" && <>Paldies!</>}
      </Animate>

      {isFormVisible && (
        <Animate
          animation={formState ? "animate-fade-out" : "animate-fade-in-fast"}
        >
          <form
            ref={ref}
            name={form.name}
            onSubmit={onSubmit}
            className="mt-16 w-[700px] max-w-full flex flex-col space-y-8"
          >
            <input type="hidden" name="form-name" value={form.name} />
            <input type="hidden" name="subject" value="" />

            {form.honeypot && (
              <div hidden aria-hidden="true">
                <label>
                  <input name={form.honeypot} />
                </label>
              </div>
            )}

            <div>
              <label hidden htmlFor="name">
                Vārds
              </label>

              <input
                required
                type={form.input.name.type}
                name={form.input.name.name}
                placeholder="Vārds"
                value={name}
                onChange={onChange}
              />
            </div>

            <div>
              <label hidden htmlFor="email">
                E-pasts
              </label>

              <input
                required
                type={form.input.email.type}
                name={form.input.email.name}
                placeholder="E-pasts"
                value={email}
                onChange={onChange}
              />
            </div>

            <div>
              <label hidden htmlFor="message">
                Ziņa
              </label>

              <textarea
                required
                name={form.textarea.message.name}
                placeholder="Ziņa"
                value={message}
                onChange={onChange}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <Button type="submit" disabled={!!formState}>
                Sūtīt
              </Button>
            </div>
          </form>
        </Animate>
      )}
    </section>
  );
};

const form = {
  name: "contact",
  honeypot: "honeypot",
  subject: "",
  input: {
    name: {
      type: "text",
      name: "name",
    },
    email: {
      type: "text",
      name: "email",
    },
  },
  textarea: {
    message: {
      name: "message",
    },
  },
};

export const ContactForm = () => (
  <form hidden name={form.name} data-netlify netlify-honeypot={form.honeypot}>
    <input type={form.input.name.type} name={form.input.name.name} />
    <input type={form.input.email.type} name={form.input.email.name} />
    <textarea name={form.textarea.message.name}></textarea>
  </form>
);
