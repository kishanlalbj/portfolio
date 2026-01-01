type Id = {
  id: number | string;
};
export type Project = Id & {
  title: string;
  image: string;
  techStack: string[];
  description: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

export type Skill = Id & {
  logo: string;
  name: string;
};

export type Work = Id & {
  company: string;
  from: string;
  to: string;
  isPresent: boolean;
  designation: string;
};

export type Achievement = Id & {
  title: string;
  issuer: string;
  date: string;
  expiry: string;
  badge: string;
};

export interface Point {
  x: number;
  y: number;
}

export type Source = {
  personalDetails: {
    firstName: string;
    lastName: string;
    email: string;
    workTitle: string;
    shortIntro: string;
    yearsOfExperience: number;
    resume: string;
    profileImg: string;
    aboutMe1: string;
  };
  skills: Skill[];
  works: Work[];
  projects: Project[];
  social: Id &
    {
      name: string;
      url: string;
    }[];
  achievements: Achievement[];
};
