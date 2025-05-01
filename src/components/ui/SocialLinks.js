import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 fixed p-5 bottom-0 right-0">
      {/* GitHub Link */}
      <a
        href="https://github.com/dev-duong"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8"
      >
        <GitHub className="w-8 h-8" />
      </a>

      {/* Linkedin Link */}
      <a
        href="https://www.linkedin.com/in/dat-tan-duong/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8"
      >
        <Linkedin className="w-8 h-8" />
      </a>

      {/* Mail Link */}
      <a
        href="mailto:datduong.connect@gmail.com?subject=Your%20Subject&body=Hello%20there!"
        className="w-8 h-8 cursor-pointer"
      >
        <Mail className="w-8 h-8" />
      </a>
    </div>
  );
};

export default SocialLinks;
