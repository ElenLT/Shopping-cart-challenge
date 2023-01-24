import './Button.css';

function Button({ children }: { children: string }) {
  return <button type="submit">{children}</button>;
}

export default Button;
