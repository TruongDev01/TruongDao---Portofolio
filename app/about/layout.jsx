import Footer from "@/components/Footer";

export const metadata = {
  title: "TruongDao | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
