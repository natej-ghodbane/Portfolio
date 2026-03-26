import type { Dictionary } from "@/lib/get-dictionary";

type FooterProps = {
  dictionary: Dictionary["footer"];
};

export default function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Natej Ghodbane</span>
      <span>{dictionary.tagline}</span>
    </footer>
  );
}
