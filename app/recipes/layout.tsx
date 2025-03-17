import NavBar from "../components/nav/NavBar";

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col w-7xl bg-gray-200">
      <NavBar />
      {children}
    </div>
  );
};
