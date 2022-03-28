import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../layouts/layout/layout";
import theme from "../styles/theme/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
