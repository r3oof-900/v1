import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export function SectionHeader({ title, subtitle, viewAllHref, viewAllLabel = "عرض الكل" }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold text-main">{title}</h2>
        {subtitle && <p className="text-sm text-muted mt-1">{subtitle}</p>}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
        >
          {viewAllLabel}
          <ArrowLeft className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
