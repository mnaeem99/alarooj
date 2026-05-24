import { ExternalLink } from "lucide-react";
import { getActiveDirectoryListings } from "@/lib/business-profile";

export default function ListedOnline() {
  const listings = getActiveDirectoryListings();

  if (listings.length === 0) return null;

  return (
    <div className="mt-8 pt-8 border-t border-white/10">
      <h4 className="text-sm font-bold uppercase tracking-widest text-secondary-cyan mb-4">
        Find us online
      </h4>
      <ul className="flex flex-wrap gap-2">
        {listings.map((item) => (
          <li key={item.id}>
            <a
              href={item.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:text-white hover:border-secondary-cyan/40 transition"
            >
              {item.name}
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
