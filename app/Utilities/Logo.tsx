import type { FC } from "react";
import { Image } from "@chakra-ui/react";

export const Logo: FC = (props) => {
  return <Image src="../Public/logo.svg" {...props} alt="company-logo" />;
};
