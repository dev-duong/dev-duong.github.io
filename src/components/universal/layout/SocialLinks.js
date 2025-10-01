// Assets
import { ReactComponent as GitHub } from "../../../assets/socialLinks/github.svg";
import { ReactComponent as Linkedin } from "../../../assets/socialLinks/linkedin.svg";
import { ReactComponent as Mail } from "../../../assets/socialLinks/mail.svg";

// Sizes
const sizeClasses = {
  sm: "w-7 h-7",
  lg: "w-14 h-14",
};

const SocialLinks = ({ size = "sm" }) => {
  const iconSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className="flex gap-4 p-5">
      {/* GitHub Link */}
      <a
        href="https://github.com/dev-duong"
        target="_blank"
        rel="noopener noreferrer"
        className={
          iconSize +
          "transition duration-200 transform hover:-translate-y-1 hover:shadow-xl"
        }
      >
        <GitHub className={iconSize} />
      </a>

      {/* Linkedin Link */}
      <a
        href="https://www.linkedin.com/in/dat-tan-duong/"
        target="_blank"
        rel="noopener noreferrer"
        className={
          iconSize +
          "transition duration-200 transform hover:-translate-y-1 hover:shadow-xl"
        }
      >
        <Linkedin className={iconSize} />
      </a>

      {/* Mail Link */}
      <a
        href="mailto:datduong.contact@gmail.com?subject=Your%20Subject&body=Hello%20there!"
        target="_blank"
        rel="noopener noreferrer"
        className={
          iconSize +
          "transition duration-200 transform hover:-translate-y-1 hover:shadow-xl"
        }
      >
        <Mail className={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
