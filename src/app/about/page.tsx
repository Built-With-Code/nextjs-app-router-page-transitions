"use client";

import Nav from "@/components/Nav";
import PageWrapper from "@/components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <Nav />
      <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        About page
      </main>
    </PageWrapper>
  );
};

export default About;
