import { PropsWithChildren } from "react";
import NavBar from "./Navbar";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
