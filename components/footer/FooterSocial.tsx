import {
  ArrowUpRight,
  BriefcaseBusiness,
  Link2,
} from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/thiago-torres-de-oliveira-a68070440/",
    icon: Link2,
  },
  {
    name: "Contra",
    href: "https://contra.com/thiago_torres_de_olivei_xlmcwru",
    icon: BriefcaseBusiness,
  },
];

export default function FooterSocial() {
  return (
    <div>
      <p
        className="
          mb-5
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-white/25
        "
      >
        Redes
      </p>

      <div className="flex flex-col gap-3">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                text-sm
                text-white/45
                transition
                duration-300
                hover:text-white
              "
            >
              <Icon
                size={15}
                strokeWidth={1.5}
                className="text-white/30 transition group-hover:text-white"
              />

              {social.name}

              <ArrowUpRight
                size={14}
                className="
                  opacity-0
                  transition
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:opacity-100
                "
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}