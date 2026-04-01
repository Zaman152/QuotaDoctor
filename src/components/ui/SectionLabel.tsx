interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block bg-[#4AACDE]/10 text-[#4AACDE] font-semibold text-xs tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 ${className}`}
    >
      {children}
    </span>
  );
}
