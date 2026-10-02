import {
  ArrowUpRight,
  Link2,
  BriefcaseBusiness,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    description: "Perfil profissional",
    href: "https://www.linkedin.com/in/thiago-torres-de-oliveira-a68070440/",
    icon: Link2,
  },
  {
    name: "Contra",
    description: "Portfólio profissional",
    href: "https://contra.com/thiago_torres_de_olivei_xlmcwru",
    icon: BriefcaseBusiness,
  },
];

export default function SocialLinks() {
  return (
    <div className="space-y-3">
      {socialLinks.map((social) => {
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
              items-center
              justify-between
              border-b
              border-white/10
              py-5
              transition
              duration-300
              hover:border-white/30
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/40
                  transition
                  duration-300
                  group-hover:border-white/30
                  group-hover:text-white
                "
              >
                <Icon size={16} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  {social.name}
                </p>

                <p className="mt-1 text-xs text-white/30">
                  {social.description}
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={17}
              className="
                text-white/25
                transition
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-white
              "
            />
          </a>
        );
      })}
    </div>
  );
}