
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
