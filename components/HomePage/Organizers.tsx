import t from "@/public/constant/content";
import { useOrganizers } from "@/components/hooks/useContributors";
import PeopleLink from "./PeopleLink";
import PeopleSection from "./PeopleSection";

const Organizers = () => {
  const { organizers } = useOrganizers();

  return (
    <PeopleSection
      title={t.homepage.organizers}
      subtitle={t.homepage.organizerSubtitle}
      iconSrc="/images/icons/butterfly-green.svg"
      iconSize={36}
      paddingStyle={{
        default: "120px 40px",
        mobile: "60px 24px",
      }}
    >
      {organizers.map((organizer, index) => (
        <PeopleLink person={organizer} key={index} />
      ))}
    </PeopleSection>
  );
};

export default Organizers;
