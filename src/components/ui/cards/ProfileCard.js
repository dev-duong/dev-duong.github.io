import Divider from "../../layout/Divider";
import Profile from "../../../assets/profile.png";

const ProfileCard = () => (
  <section className="flex flex-col lg:flex-row justify-center items-center mb-5 gap-7 text-center lg:text-left bg-[#686868] bg-opacity-25 hover:bg-opacity-60 transition duration-300 ease-in-out transform hover:-translate-y-1 p-8 rounded-2xl">
    <img
      src={Profile}
      alt="Portrait of Dat at college graduation"
      className="w-40 h-40 rounded-full object-cover"
    />
    <article className="flex flex-col gap-7">
      <Divider title="profile" />
      <p className="text-gray-400">
        I'm a Computer Science graduate with a passion for UX/UI design and
        front-end development. I specialize in crafting intuitive, responsive
        web and mobile experiences using HTML, CSS, React.js, and Tailwind.
      </p>
    </article>
  </section>
);

export default ProfileCard;
