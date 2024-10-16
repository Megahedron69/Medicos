"use client";
import { type FC } from "react";
import Footer from "@/app/Components/Landing/Footer";
import Header from "@/app/Components/Landing/Header";
import Hero from "@/app/Components/Landing/Hero";
import { useColorMode, Box } from "@chakra-ui/react";

const Home: FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="section"
      bgGradient={colorMode === "light" ? "white" : "black"}
      transition="background,border 0.3s ease"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Header />
      <Hero />
      <Footer />
    </Box>
  );
};

export default Home;
