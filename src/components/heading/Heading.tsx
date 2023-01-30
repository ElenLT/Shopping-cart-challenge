import './heading.css';

function Heading({ children }: { children: string }) {
  return <h1 className="main">{children}</h1>;
}

export default Heading;
