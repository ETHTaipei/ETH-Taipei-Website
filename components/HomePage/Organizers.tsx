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
      iconWidth={36}
      iconHeight={36}
      paddingStyle={{
        default: "120px 40px",
        mobile: "60px 24px",
      }}
    >
      {organizers.map((organizer, index) => (
        <PeopleLink person={organizer} key={index} index={index} />
      ))}
    </PeopleSection>
  );
};

export default Organizers;
