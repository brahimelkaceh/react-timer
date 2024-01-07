import { ComponentPropsWithoutRef } from "react";

type buttonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};
type anchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

const isAnchorProps = (
  props: anchorProps | buttonProps
): props is anchorProps => "href" in props;

const Button = (props: anchorProps | buttonProps) => {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
};

export default Button;
