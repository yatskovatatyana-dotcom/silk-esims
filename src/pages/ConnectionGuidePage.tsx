import ConnectionGuide from "@/components/ConnectionGuide";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ConnectionGuidePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-6">
        <Button variant="ghost" size="sm" className="gap-2" onClick={() => navigate("/")}>
          <ArrowLeft className="w-4 h-4" />
          На главную
        </Button>
      </div>
      <ConnectionGuide />
      <Footer />
    </div>
  );
};

export default ConnectionGuidePage;
