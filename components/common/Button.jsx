export default function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary: "primary-btn",
    secondary: "secondary-btn",
  };

  return (
    <button className={`${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}