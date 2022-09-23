import "../styles/globals.css";
import Layout from "../components/Layouts/Layout";
import "tailwindcss/tailwind.css";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline></CssBaseline>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledEngineProvider>
  );
}

export default MyApp;
