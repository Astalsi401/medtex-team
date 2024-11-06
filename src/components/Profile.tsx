import { Button } from "@components/Button";
import { useAppSelector } from "@store";

type ImageProps = {
  src: string;
  alt: string;
};

export const Profile: React.FC = () => {
  const {
    teamId,
    logoUrl,
    contact: { name, occupation, avatarUrl },
  } = useAppSelector((state) => state.data);
  return (
    <div className="profile page-rounded page-bd page-bg-white p-4 mb-4">
      <Logo src={logoUrl} alt={`company-logo`} />
      <Avatar src={avatarUrl} alt={`avatar`} />
      <ContactName name={name} occupation={occupation} />
      <Button href={`https://expo.taiwan-healthcare.org/zh/medtex/2024/company?teamId=${teamId}`} className="page-btn d-block p-3 my-4 mx-auto text-center page-bd-primary page-bg-primary page-text-white">
        申請商洽
        <i className="ms-3 fa-solid fa-chevron-right" />
      </Button>
    </div>
  );
};

const Logo: React.FC<ImageProps> = ({ src, alt }) => (
  <div className="profile-logo d-block mx-auto my-4">
    <img className="w-100" src={src} alt={alt} />
  </div>
);

const Avatar: React.FC<ImageProps> = ({ src, alt }) => (
  <div className="page-avatar mx-auto my-4 overflow-hidden">
    <img className="w-100 h-100" src={src} alt={alt} />
  </div>
);

const ContactName: React.FC<{ name: string; occupation: string }> = ({ name, occupation }) => (
  <div className="my-4 text-center">
    <div className="my-2 fw-bold page-text-xx-large">{name}</div>
    <div className="my-2">{occupation}</div>
  </div>
);
