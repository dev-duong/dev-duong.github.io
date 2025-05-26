import Divider from "../../universal/Divider";
import Icons from "./Icons";

const SkillsSection = ({ skills }) => (
  <section className="flex flex-col mb-8 gap-7 w-full">
    <Divider title="skills" />
    <article className="flex justify-center">
      <div className="w-full max-w-xs sm:max-w-md flex justify-center">
        <Icons icons={skills} />
      </div>
    </article>
  </section>
);

export default SkillsSection;
