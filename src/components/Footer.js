import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/Muzhgan55",
    label: "GitHub Profile",
    icon: <FaGithub />,
  },
  {
    href: "https://linkedin.com/in/Muzhgan",
    label: "LinkedIn Profile",
    icon: <FaLinkedin />,
  },
  {
    href: "https://twitter.com/Muzhgan122",
    label: "Twitter Profile",
    icon: <FaTwitter />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-12 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <p className="text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Muzhgan Rahimi. All rights reserved.
      </p>
    </footer>
  );
}
