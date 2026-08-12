import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Legal from "./pages/Legal";
import Login from "./pages/Login";
import Mockups from "./pages/Mockups";

import { AppStoreProvider } from "./app/store";
import { I18nProvider } from "./app/i18n";
import Splash from "./app/screens/Splash";
import Home from "./app/screens/Home";
import AllCountries from "./app/screens/AllCountries";
import Country from "./app/screens/Country";
import Checkout from "./app/screens/Checkout";
import Install from "./app/screens/Install";
import MyEsim from "./app/screens/MyEsim";
import Profile, { ProfileLoggedIn } from "./app/screens/Profile";
import AppLogin from "./app/screens/Login";
import AppCode from "./app/screens/Code";
import AppRegister from "./app/screens/Register";
import Support from "./app/screens/Support";
import Chat from "./app/screens/Chat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppStoreProvider>
        <I18nProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mockups" element={<Mockups />} />

            {/* Mobile app prototype */}
            <Route path="/app" element={<Splash />} />
            <Route path="/app/home" element={<Home />} />
            <Route path="/app/countries" element={<AllCountries />} />
            <Route path="/app/country/:slug" element={<Country />} />
            <Route path="/app/usa" element={<Country defaultSlug="usa" />} />
            <Route path="/app/europe" element={<Country defaultSlug="europe" />} />
            <Route path="/app/checkout/:slug/:planId" element={<Checkout />} />
            <Route path="/app/checkout/:slug/:planId" element={<Checkout />} />
            <Route path="/app/install/:orderId" element={<Install />} />
            <Route path="/app/my-esim" element={<MyEsim />} />
            <Route path="/app/profile" element={<Profile />} />
            <Route
              path="/app/profile/logged-in"
              element={
                <ProfileLoggedIn
                  auth={{ email: "user@example.com" }}
                  orders={[
                    {
                      id: "ord_demo1",
                      countrySlug: "turkey",
                      countryName: "Turkey",
                      planData: "10 GB",
                      planDays: 30,
                      price: 12,
                      priceLabel: "€12",
                      createdAt: Date.now(),
                      status: "active",
                      usedGb: 3,
                      usedDays: 7,
                    },
                  ]}
                />
              }
            />
            <Route path="/app/login" element={<AppLogin />} />
            <Route path="/app/login/code" element={<AppCode />} />
            <Route path="/app/register" element={<AppRegister />} />
            <Route path="/app/support" element={<Support />} />
            <Route path="/app/support/chat" element={<Chat />} />

            <Route path="/privacy-policy" element={<Navigate to="/legal" replace />} />
            <Route path="/terms-of-service" element={<Navigate to="/legal" replace />} />
            <Route path="/admin" element={<Navigate to="/" replace />} />
            <Route path="/connection-guide" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </I18nProvider>
      </AppStoreProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
