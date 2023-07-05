import { ReactElement } from "react";
import Sidebar from "../Sidebar";
import AppContent from "./AppContent";
type LayoutProps = {
  children?: ReactElement;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="bg-dark h-[100vh] text-white flex items-center justify-between">
      <Sidebar />
      <AppContent />
    </section>
  );
}
