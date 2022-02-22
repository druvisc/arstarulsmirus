import { Breakpoint } from "../styles/variables";

// Prefix class by specified breakpoint.
export const getClasses = (breakpoint: Breakpoint, classes: string[]) =>
  classes.map((className) => `${breakpoint}:${className}`).join(" ");

export const scrollIntoView = (el: HTMLElement) =>
  el.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });

export const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  scrollIntoView(el);
};

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  data: any
) => {
  // Prevent page from reloading.
  e.preventDefault();

  return await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": e.currentTarget.getAttribute("name"),
      ...data,
    }),
  });
};

const encode = (data: any) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
