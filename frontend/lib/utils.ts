export interface IInfoFooter {
  creators: {
    name: string;
    link: string;
  }[];
  social: {
    link: string;
    name: string;
  }[];
}

export const INFO: IInfoFooter = {
  creators: [
    { name: "Luciano Luna", link: "https://github.com/Luciano275" },
    { name: "Fernando Gutierrez", link: "https://github.com/FerchuGtz18" },
    { name: "Santiago Lopez", link: "https://www.instagram.com/_santy_lopez_" },
    // { name: "Enzo Guzman", link: "https://www.instagram.com/enzo_gzm_" },
    { name: "Jorge Flores", link: "https://www.instagram.com/jorgefloreszz_" },
    // { name: "Joaquín Gimenez", link: "https://www.instagram.com/j0ack0gmz_" },
  ],
  social: [
    {
      link: "https://www.facebook.com/profile.php?id=100063505073625",
      name: "facebook",
    },
    {
      link: ".",
      name: "instagram",
    },
  ],
};