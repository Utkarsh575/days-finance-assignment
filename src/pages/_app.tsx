import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
