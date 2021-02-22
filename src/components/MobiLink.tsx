import { links } from "./MobiNav";

interface ILinkProps {
  link: typeof links[0]; // Type of one link object
}

const Link: React.FC<ILinkProps> = ({ link }) => {
  return (
    <div>
      <span className="mr-3">
        <i className={link.icon}></i>
      </span>
    </div>
  );
};

export default Link;
