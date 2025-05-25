import Divider from "../../universal/Divider";
import Icons from "./Icons";

const ToolsSection = ({ tools }) => (
  <section className="flex flex-col mb-8 gap-4 w-full">
    <Divider title="tools" />
    <article className="flex justify-center">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg flex justify-center">
        <Icons icons={tools} />
      </div>
    </article>
  </section>
);

export default ToolsSection;
