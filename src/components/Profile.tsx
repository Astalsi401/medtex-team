import { pageTexts, useAppSelector } from "@store";
import { Button } from "./Button";

type ImageProps = {
  src: string;
  alt: string;
};

export const Profile: React.FC = () => {
  const {
    logoUrl,
    contact: { name, occupation, avatarUrl },
  } = useAppSelector((state) => state.data);
  const lang = useAppSelector((state) => state.lang);
  const teamId = useAppSelector((state) => state.data.teamId);
  return (
    <div className="page-rounded page-bd page-bg-white p-4 d-flex flex-column gap-4">
      <Logo src={logoUrl} alt={`company-logo`} />
      <Avatar src={avatarUrl} alt={`avatar`} />
      <ContactName name={name} occupation={occupation} />
      <Button href={`https://expo.taiwan-healthcare.org/zh/medtex/2024/form?teamId=${teamId}`} className="page-btn fw-bold d-block p-3 mx-auto text-center page-bd-primary page-bg-primary page-text-white">
        {pageTexts.applyForMeeting[lang]}
        <i className="fa-solid fa-chevron-right ms-3" />
      </Button>
    </div>
  );
};

const Logo: React.FC<ImageProps> = ({ src, alt }) => (
  <div className="profile-logo d-block mx-auto">
    <img className="w-100" src={src} alt={alt} />
  </div>
);

const Avatar: React.FC<ImageProps> = ({ src, alt }) => (
  <div className="page-avatar mx-auto overflow-hidden">
    <img className="w-100 h-100" src={src} alt={alt} />
  </div>
);

const ContactName: React.FC<{ name: string; occupation: string }> = ({ name, occupation }) => (
  <div className="text-center d-flex flex-column gap-2">
    <div className="fw-bold page-text-xx-large">{name}</div>
    <div>{occupation}</div>
  </div>
);
