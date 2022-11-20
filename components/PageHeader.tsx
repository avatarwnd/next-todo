export interface PageHeaderProps {
  title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <header className="mb-8 flex w-full justify-center">
      <h1 className="text-6xl font-bold">{title}</h1>
    </header>
  );
};
