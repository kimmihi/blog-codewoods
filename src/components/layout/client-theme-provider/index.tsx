import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";

interface ClientThemeProviderProps {
  children: React.ReactNode;
}

export default function ClientThemeProvider({
  children,
}: ClientThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
