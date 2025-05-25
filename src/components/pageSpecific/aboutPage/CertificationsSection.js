import Divider from "../../universal/Divider";

const CertificationsSection = () => (
  <section className="flex flex-col mb-8 gap-7">
    <Divider title="other info" />
    <article className="flex flex-col sm:flex-row gap-7 bg-[#686868] bg-opacity-25 hover:bg-opacity-60 transition duration-300 ease-in-out transform hover:-translate-y-1 p-4 rounded-2xl">
      <h3>CERTIFICATIONS</h3>
      <div className="flex flex-col gap-3 text-gray-400">
        <p>Australian Open "O" Class Driver's Licence</p>
        <p>Forklift License (LF)</p>
        <p>Responsible Service of Alcohol (RSA)</p>
      </div>
    </article>
  </section>
);

export default CertificationsSection;
