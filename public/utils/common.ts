import { useRouter } from "next/router";

export const openNewTab = (url: string) => {
  window.open(url, "_blank");
};

export const useRouting = () => {
  const router = useRouter();

  return {
    handleOnClickInternalLink: (url: string) => {
      router.push(url);
    },
    handleOnClickExternalLink: (url: string) => {
      openNewTab(url);
    },
  };
};
