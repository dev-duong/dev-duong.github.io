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
        className="w-7 h-7 transition duration-200 transform hover:-translate-y-1 hover:shadow-xl"
      >
        <GitHub className="w-7 h-7" />
      </a>

      {/* Linkedin Link */}
      <a
        href="https://www.linkedin.com/in/dat-tan-duong/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 transition duration-200 transform hover:-translate-y-1 hover:shadow-xl"
      >
        <Linkedin className="w-7 h-7" />
      </a>

      {/* Mail Link */}
      <a
        href="mailto:datduong.connect@gmail.com?subject=Your%20Subject&body=Hello%20there!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 transition duration-200 transform hover:-translate-y-1 hover:shadow-xl"
      >
        <Mail className="w-7 h-7" />
      </a>
    </div>
  );
};

export default SocialLinks;
