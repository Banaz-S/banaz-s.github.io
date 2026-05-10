const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050816] text-white transition-all duration-500">
      {children}
    </div>
  );
};

export default MainLayout;
