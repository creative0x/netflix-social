import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../hooks/useAuth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AuthProvider>
      <SessionProvider session={session}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </AuthProvider>
  );
}
