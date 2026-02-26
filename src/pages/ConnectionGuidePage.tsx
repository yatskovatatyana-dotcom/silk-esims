import ConnectionGuide from "@/components/ConnectionGuide";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ConnectionGuidePage = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-6 flex justify-between items-center no-print">
        <Button variant="ghost" size="sm" className="gap-2" onClick={() => navigate("/")}>
          <ArrowLeft className="w-4 h-4" />
          На главную
        </Button>
        <Button variant="outline" size="sm" className="gap-2" onClick={handlePrint}>
          <Download className="w-4 h-4" />
          Скачать PDF
        </Button>
      </div>
      <ConnectionGuide />
      <Footer />
    </div>
  );
};

export default ConnectionGuidePage;
