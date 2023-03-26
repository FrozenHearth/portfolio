import Navbar from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="antialiased">
      <Navbar />
      <main className="flex-auto min-w-0 md:mt-0 flex flex-col md:pt-12 mx-10vw">
        <section>{children}</section>
      </main>
      <footer className="mt-8 py-4">
        <div className="container mx-auto flex justify-center"></div>
      </footer>
    </div>
  );
}
