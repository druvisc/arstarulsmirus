export const Footer = ({ title }: { title: string }) => {
  return (
    <footer className="whitespace-pre my-5 text-center tracking-brand text-xs opacity-70 lg:flex lg:justify-center">
      <div>All rights reserved</div>
      <div className="whitespace-pre"> @ {title}</div>
    </footer>
  );
};
