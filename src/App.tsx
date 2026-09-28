import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Academic from "./pages/Academic";
import Quant from "./pages/Quant";
import NotFound from "./pages/NotFound";

const App = () => (
  // Follows the device's light/dark setting unless the visitor picks one with the toggle;
  // the choice is remembered in localStorage under "theme".
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <Toaster />
    <BrowserRouter>
      <Routes>
        {/* Homepage is the professional (quant) page; the academic site lives at /academic */}
        <Route path="/" element={<Quant />} />
        <Route path="/academic" element={<Academic />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
