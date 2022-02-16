import React, { useState } from "react";

import { Animate, AnimateProps } from "./Animate";

type StrippedAnimateProps = Omit<AnimateProps, "animate" | "onAnimationEnd">;

export type AnimationSequenceProps = StrippedAnimateProps & {
  sequence: (StrippedAnimateProps & {
    node: React.ReactNode;
  })[];
};

export const AnimationSequence = ({
  as,
  animation: parentAnimation,
  sequence,
  ...props
}: AnimationSequenceProps) => {
  // Start by animating only the first element.
  const [animate, setAnimate] = useState<boolean[]>([
    true,
    ...Array(sequence.length - 1).fill(false),
  ]);

  const onAnimationEnd = (i: number) => {
    if (i + 1 === animate.length) return;

    const newAnimate = [...animate];
    newAnimate[i + 1] = true;
    setAnimate(newAnimate);
  };

  return React.createElement(
    as || "div",
    props,
    sequence.map(({ animation, node, ...rest }, i) => (
      <Animate
        {...rest}
        key={i}
        animation={animation || parentAnimation}
        animate={animate[i]}
        onAnimationEnd={() => {
          onAnimationEnd(i);
        }}
      >
        {node}
      </Animate>
    ))
  );
};
