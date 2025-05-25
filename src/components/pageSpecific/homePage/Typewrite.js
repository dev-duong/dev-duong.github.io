import { useState, useEffect } from "react";

const Typewriter = ({ words, speed = 150, delay = 1000 }) => {
  const [index, setIndex] = useState(0); // Index of current word
  const [subIndex, setSubIndex] = useState(0); // Index of character
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length) return setIndex(0);

    if (!deleting && subIndex === words[index].length) {
      // Pause before deleting
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (deleting && subIndex === 0) {
      // Move to next word
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, delay]);

  return (
    <h1 className="text-4xl text-myOrange">
      {`${words[index].substring(0, subIndex)}|`}
    </h1>
  );
};

export default Typewriter;
