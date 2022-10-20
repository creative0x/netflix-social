import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../hooks/useAuth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}
