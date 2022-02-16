import { useEffect, useRef, useState } from "react";
import cx from "classnames";

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
      handleSubmit(e, formData);
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
      <Animate animation="animate-fade-in">
        <Button inverse onClick={() => setIsFormVisible(!isFormVisible)}>
          Sazinies ar mani
        </Button>
      </Animate>

      <div
        className={cx([
          "absolute h-full flex items-center text-4xl lg:text-6xl",
          "transition-opacity duration-1000",
          formState ? "opacity-100" : "opacity-0",
        ])}
      >
        {formState === "error" && (
          <>Atvaino! Notika kļūda, raksti arstarulsmirus@gmail.com.</>
        )}

        {formState === "success" && <>Paldies!</>}
      </div>

      {isFormVisible && (
        <form
          ref={ref}
          className={cx(
            "mt-16 w-[700px] max-w-full flex flex-col space-y-8",
            "transition-opacity duration-1000",
            formState ? "opacity-0" : "opacity-100"
          )}
          name="contact"
          onSubmit={onSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="subject" value="" />

          <div hidden aria-hidden="true">
            <label>
              <input name="honeypot" />
            </label>
          </div>

          <div>
            <label hidden htmlFor="name">
              Vārds
            </label>

            <input
              required
              type="text"
              name="name"
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
              type="email"
              name="email"
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
              name="message"
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
      )}
    </section>
  );
};
