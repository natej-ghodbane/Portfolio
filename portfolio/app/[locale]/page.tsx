import { notFound } from "next/navigation";

import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Experience from "@/app/components/Experience";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale } from "@/lib/i18n-config";

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} dictionary={dictionary.navbar} />

      <main className="main-container">
        <Hero dictionary={dictionary.hero} />
        <About dictionary={dictionary.about} />
        <Projects dictionary={dictionary.projects} />
        <Experience dictionary={dictionary.experience} />
        <Contact dictionary={dictionary.contact} />
        <Footer dictionary={dictionary.footer} />
      </main>
    </>
  );
}
