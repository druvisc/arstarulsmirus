import React, { useState } from "react";
import { InView, PlainChildrenProps } from "react-intersection-observer";
import cx from "classnames";

import theme from "../../theme";

const { animation } = theme;
const prefixed = Object.keys(animation).map(
  (k) => `animate-${k as keyof typeof animation}` as const
);
export type Animation = typeof prefixed[0];

export type AnimateProps = Pick<
  PlainChildrenProps,
  "as" | "className" | "threshold" | "onAnimationEnd"
> & {
  animate?: boolean;
  animation?: Animation;
};

export const Animate: React.FC<AnimateProps> = ({
  className,
  children,
  threshold = 0.5,
  animate = true,
  animation,
  ...rest
}) => {
  const [inView, setInView] = useState(false);

  return (
    <InView
      {...rest}
      triggerOnce
      threshold={threshold}
      onChange={(inView) => setInView(inView)}
      className={cx([className, "opacity-0", inView && animate && animation])}
    >
      {children}
    </InView>
  );
};
