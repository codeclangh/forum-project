const Link = ({ link }) => {
  return (
    <div>
      <span className="mr-3">{link.icon}</span>
      <span className="text">{link.title}</span>
    </div>
  );
};

export default Link;
