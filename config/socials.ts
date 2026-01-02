import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Montmont20z",
    icon: Icons.gitHub,
    link: "https://github.com/Montmont20z",
  },
  {
    name: "LinkedIn",
    username: "Melvin Cheah",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/melvin-cheah-3516a0196/",
  },
  {
    name: "Twitter",
    username: "@Montmont20z",
    icon: Icons.twitter,
    link: "https://twitter.com/",
  },
  {
    name: "Gmail",
    username: "melvincheah20",
    icon: Icons.gmail,
    link: "mailto:melvincheah20@gmail.com",
  },
];
