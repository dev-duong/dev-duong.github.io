import { useState } from "react";
import TextBox from "../../../components/universal/TextBox";
import PageWrapper from "../../universal/animations/PageWrapper";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, techStack, links }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (links && links.length > 1) {
      setShowModal(true);
    } else if (links && links.length === 1) {
      const singleLink = links[0];
      if (singleLink.action === "download") {
        const link = document.createElement("a");
        link.href = singleLink.href;
        link.download = singleLink.href.split("/").pop();
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        window.open(singleLink.href, "_blank", "noopener,noreferrer");
      }
    }
  };

  const handleLinkAction = (link) => {
    if (link.action === "download") {
      const a = document.createElement("a");
      a.href = link.href;
      a.download = link.href.split("/").pop();
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      window.open(link.href, "_blank", "noopener,noreferrer");
    }
    setShowModal(false);
  };

  return (
    <>
      <article
        onClick={handleClick}
        className="cursor-pointer flex flex-col sm:flex-row gap-5 bg-[#686868] bg-opacity-25 hover:bg-opacity-60 transition duration-300 ease-in-out transform hover:-translate-y-1 p-4 rounded-2xl"
      >
        <div className="flex flex-col justify-between gap-3 flex-1">
          <div>
            <h3 className="text-xl font-semibold hover:text-myOrange transition">
              {title}
            </h3>
            <p className="text-gray-400">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tag, index) => (
              <TextBox
                key={index}
                text={tag}
                bgColor="bg-myOrange"
                textColor="text-black"
              />
            ))}
          </div>
        </div>
      </article>

      {showModal && (
        <motion.div
          className="fixed inset-0 bg-[#000000] bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <PageWrapper>
            <div
              className="rounded-lg p-6 max-w-xs w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="mb-4 font-semibold">What would you like to do?</p>
              <div className="flex flex-col gap-3">
                {links.map((link, i) => (
                  <button
                    key={i}
                    onClick={() => handleLinkAction(link)}
                    className="bg-myOrange px-4 py-2 rounded text-black font-semibold hover:bg-orange-600 transition"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </PageWrapper>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
