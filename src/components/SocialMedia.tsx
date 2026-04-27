// src/components/ContactCard.tsx

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contacts = [
  {
    icon: <FaFacebook size={15} />,
    label: "Facebook",
    value: "Tristan Dela Cruz Labjata",
    href: "https://www.facebook.com/tristan.labj",
  },
  {
    icon: <FaLinkedin size={15} />,
    label: "LinkedIn",
    value: "Tristan Labjata",
    href: "https://linkedin.com/in/tristan-labjata-423657405",
  },
  {
    icon: <MdEmail size={15} />,
    label: "Email",
    value: "labjatatristan@gmail.com",
    href: "mailto:labjatatristan@gmail.com",
  },
  {
    icon: <FaGithub size={15} />,
    label: "GitHub",
    value: "Tristanityyyyy",
    href: "https://github.com/Tristanityyyyy",
  },
];

const ROW_HEIGHT = 56;
const PADDING_TOP = 20;
const CX = 12;

export default function ContactCard() {
  const svgHeight = PADDING_TOP + (contacts.length - 1) * ROW_HEIGHT + PADDING_TOP;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-zinc-900">Contact</h2>

        {/* Contact list */}
        <div className="flex-1 flex flex-col pl-2">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 group"
              style={{ height: ROW_HEIGHT, paddingTop: index === 0 ? PADDING_TOP - 8 : 0 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-zinc-400 group-hover:text-zinc-700 transition-colors">
                  {item.icon}
                </span>
                <span className="text-sm font-semibold text-zinc-900">{item.label}</span>
              </div>
              <span className="text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors shrink-0">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>
  );
}