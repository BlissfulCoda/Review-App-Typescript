interface ButtonInterface {
  children: React.ReactNode;
  version: string;
  isDisabled: boolean;
  type?: "submit" | "button";
}

export default function Button({
  type,
  version,
  children,
  isDisabled,
}: ButtonInterface): JSX.Element {
  return (
    <button className={`btn btn-${version}`} disabled={isDisabled} type={type}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  version: "primary",
  isDisabled: false,
  children: "Click Me",
};
