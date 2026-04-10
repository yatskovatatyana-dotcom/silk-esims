import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('login.inDevelopment'),
      description: t('login.comingSoon'),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">{t('login.back')}</span>
        </button>

        <Card className="border-0 shadow-2xl">
          <CardHeader className="text-center pb-2">
            <div className="inline-flex items-center justify-center gap-2 bg-primary/10 rounded-full px-4 py-2 mx-auto mb-3">
              <span className="text-sm font-semibold text-primary">Silk eSIM</span>
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? t('login.titleLogin') : t('login.titleRegister')}
            </CardTitle>
            <CardDescription>
              {isLogin ? t('login.subtitleLogin') : t('login.subtitleRegister')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">{t('login.name')}</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="name" placeholder={t('login.namePlaceholder')} className="pl-10" />
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">{t('login.email')}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder={t('login.emailPlaceholder')} className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t('login.password')}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                {isLogin ? t('login.loginButton') : t('login.registerButton')}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary hover:underline"
              >
                {isLogin ? t('login.switchToRegister') : t('login.switchToLogin')}
              </button>
            </div>

            <div className="mt-6 p-3 bg-muted rounded-lg text-center">
              <p className="text-xs text-muted-foreground">
                {t('login.devNotice')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
