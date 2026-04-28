// src/components/ContactCard.tsx
import Card from "@/components/ui/Card";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contacts = [
  { icon: <FaFacebook size={15} />, label: "Facebook", value: "Tristan Dela Cruz Labjata", href: "https://www.facebook.com/tristan.labj" },
  { icon: <FaLinkedin size={15} />, label: "LinkedIn", value: "Tristan Labjata", href: "https://linkedin.com/in/tristan-labjata-423657405" },
  { icon: <MdEmail size={15} />, label: "Email", value: "labjatatristan@gmail.com", href: "mailto:labjatatristan@gmail.com" },
  { icon: <FaGithub size={15} />, label: "GitHub", value: "Tristanityyyyy", href: "https://github.com/Tristanityyyyy" },
];

export default function ContactCard() {
  return (
    <Card className="p-5 h-full">
      <div className="flex flex-col h-full">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Social Links</h2>
        <div className="flex flex-col justify-between flex-1">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 group py-2 border-b border-zinc-100 dark:border-transparent hover:-translate-y-0.5 transition-transform duration-150"
            >
              <div className="flex items-center gap-2">
                <span className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {item.icon}
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.label}</span>
              </div>
              <span className="text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors shrink-0">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}
