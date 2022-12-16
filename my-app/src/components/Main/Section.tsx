import { useContext } from "react";
import PageContext from "../../contexts/page-context";

const Section = () => {
  const pageCtx = useContext(PageContext);
  const sectionTitles = [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
  ];
  const sectionParagraphs = [
    "Please provide your name, email address, and phone number.",
    "You have the option of monthly or yearly billing.",
    "Add-ons help enhance your gaming experience.",
    "Double-check everything looks OK before confirming.",
  ];

  return (
    <section>
      <h1>{sectionTitles[pageCtx.page]}</h1>
      <p>{sectionParagraphs[pageCtx.page]}</p>
    </section>
  );
};

export default Section;
