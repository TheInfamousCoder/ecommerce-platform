const PageBanner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary min-h-[150px] flex-item-row-distance">
      <div className="container-rest">{children}</div>
    </div>
  );
};

export default PageBanner;
