type socialsType = {
  link: string | null;
  github: string | null;
};

type ProjectDetailsType = {
  id: number;
  projectType: string;
  projectYear: string;
  projectName: string;
  techs: Array<string>;
  description: string | null;
  img: string | null;
  socials: socialsType;
};
