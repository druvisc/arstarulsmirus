import cx from "classnames";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  inverse?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  inverse,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cx([
        className,
        "py-4 px-8 rounded-3xl text-center tracking-brand lg:text-base",
        inverse
          ? "bg-white text-brand border-2 border-solid border-brand"
          : "bg-brand text-white",
      ])}
    >
      {children}
    </button>
  );
};
