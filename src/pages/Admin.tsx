import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Users, ShoppingCart, DollarSign, TrendingUp, Globe, Smartphone, BarChart3, Activity, Repeat } from "lucide-react";
import { Link } from "react-router-dom";

type Period = "day" | "month" | "quarter" | "year";

const mockData: Record<Period, {
  revenue: number;
  orders: number;
  users: number;
  activeEsims: number;
  avgCheck: number;
  conversionRate: number;
  repeatPurchase: {
    rate: number;
    totalRepeatUsers: number;
    avgOrdersPerUser: number;
    topRepeaters: { user: string; orders: number; totalSpent: number; lastPurchase: string }[];
  };
  topCountries: { country: string; sales: number; revenue: number }[];
  topPlans: { plan: string; sales: number; share: number }[];
  dailyRevenue: { label: string; value: number }[];
}> = {
  day: {
    revenue: 47800,
    orders: 34,
    users: 12,
    activeEsims: 28,
    avgCheck: 1406,
    conversionRate: 4.2,
    repeatPurchase: {
      rate: 18,
      totalRepeatUsers: 2,
      avgOrdersPerUser: 1.2,
      topRepeaters: [
        { user: "user_a1@mail.ru", orders: 3, totalSpent: 3970, lastPurchase: "Сегодня" },
        { user: "travel_fan@gmail.com", orders: 2, totalSpent: 2180, lastPurchase: "Сегодня" },
      ],
    },
    topCountries: [
      { country: "Турция", sales: 12, revenue: 11880 },
      { country: "Таиланд", sales: 8, revenue: 6320 },
      { country: "Италия", sales: 6, revenue: 5940 },
      { country: "Германия", sales: 5, revenue: 4950 },
      { country: "США", sales: 3, revenue: 3570 },
    ],
    topPlans: [
      { plan: "Европа 10 ГБ", sales: 14, share: 41 },
      { plan: "Азия 8 ГБ", sales: 9, share: 26 },
      { plan: "Глобальный 20 ГБ", sales: 6, share: 18 },
      { plan: "США 15 ГБ", sales: 5, share: 15 },
    ],
    dailyRevenue: [
      { label: "00:00", value: 1990 },
      { label: "04:00", value: 790 },
      { label: "08:00", value: 5940 },
      { label: "12:00", value: 12800 },
      { label: "16:00", value: 15200 },
      { label: "20:00", value: 11080 },
    ],
  },
  month: {
    revenue: 1243000,
    orders: 892,
    users: 345,
    activeEsims: 670,
    avgCheck: 1393,
    conversionRate: 5.1,
    repeatPurchase: {
      rate: 24,
      totalRepeatUsers: 83,
      avgOrdersPerUser: 1.8,
      topRepeaters: [
        { user: "user_a1@mail.ru", orders: 5, totalSpent: 7450, lastPurchase: "2 дня назад" },
        { user: "travel_fan@gmail.com", orders: 4, totalSpent: 5960, lastPurchase: "5 дней назад" },
        { user: "nomad_life@ya.ru", orders: 3, totalSpent: 4770, lastPurchase: "1 неделю назад" },
        { user: "world_trip@inbox.ru", orders: 3, totalSpent: 3970, lastPurchase: "2 недели назад" },
      ],
    },
    topCountries: [
      { country: "Турция", sales: 312, revenue: 308880 },
      { country: "Таиланд", sales: 198, revenue: 156420 },
      { country: "Италия", sales: 145, revenue: 143550 },
      { country: "Германия", sales: 112, revenue: 110880 },
      { country: "США", sales: 89, revenue: 105910 },
    ],
    topPlans: [
      { plan: "Европа 10 ГБ", sales: 356, share: 40 },
      { plan: "Азия 8 ГБ", sales: 245, share: 27 },
      { plan: "Глобальный 20 ГБ", sales: 178, share: 20 },
      { plan: "США 15 ГБ", sales: 113, share: 13 },
    ],
    dailyRevenue: [
      { label: "Нед 1", value: 280000 },
      { label: "Нед 2", value: 320000 },
      { label: "Нед 3", value: 345000 },
      { label: "Нед 4", value: 298000 },
    ],
  },
  quarter: {
    revenue: 3890000,
    orders: 2780,
    users: 1120,
    activeEsims: 1890,
    avgCheck: 1399,
    conversionRate: 5.4,
    repeatPurchase: {
      rate: 28,
      totalRepeatUsers: 314,
      avgOrdersPerUser: 2.1,
      topRepeaters: [
        { user: "user_a1@mail.ru", orders: 12, totalSpent: 18900, lastPurchase: "2 дня назад" },
        { user: "travel_fan@gmail.com", orders: 9, totalSpent: 13420, lastPurchase: "5 дней назад" },
        { user: "nomad_life@ya.ru", orders: 8, totalSpent: 11860, lastPurchase: "1 неделю назад" },
        { user: "world_trip@inbox.ru", orders: 7, totalSpent: 9930, lastPurchase: "3 недели назад" },
      ],
    },
    topCountries: [
      { country: "Турция", sales: 890, revenue: 881100 },
      { country: "Таиланд", sales: 620, revenue: 489800 },
      { country: "Италия", sales: 480, revenue: 475200 },
      { country: "Германия", sales: 390, revenue: 386100 },
      { country: "США", sales: 280, revenue: 333200 },
    ],
    topPlans: [
      { plan: "Европа 10 ГБ", sales: 1112, share: 40 },
      { plan: "Азия 8 ГБ", sales: 750, share: 27 },
      { plan: "Глобальный 20 ГБ", sales: 556, share: 20 },
      { plan: "США 15 ГБ", sales: 362, share: 13 },
    ],
    dailyRevenue: [
      { label: "Мес 1", value: 1100000 },
      { label: "Мес 2", value: 1350000 },
      { label: "Мес 3", value: 1440000 },
    ],
  },
  year: {
    revenue: 14560000,
    orders: 10420,
    users: 4200,
    activeEsims: 3500,
    avgCheck: 1397,
    conversionRate: 5.8,
    repeatPurchase: {
      rate: 32,
      totalRepeatUsers: 1344,
      avgOrdersPerUser: 2.5,
      topRepeaters: [
        { user: "user_a1@mail.ru", orders: 38, totalSpent: 56200, lastPurchase: "2 дня назад" },
        { user: "travel_fan@gmail.com", orders: 29, totalSpent: 42800, lastPurchase: "5 дней назад" },
        { user: "nomad_life@ya.ru", orders: 24, totalSpent: 35600, lastPurchase: "1 неделю назад" },
        { user: "world_trip@inbox.ru", orders: 21, totalSpent: 31200, lastPurchase: "3 недели назад" },
      ],
    },
    topCountries: [
      { country: "Турция", sales: 3340, revenue: 3306600 },
      { country: "Таиланд", sales: 2310, revenue: 1824900 },
      { country: "Италия", sales: 1780, revenue: 1762200 },
      { country: "Германия", sales: 1450, revenue: 1435500 },
      { country: "США", sales: 1040, revenue: 1237600 },
    ],
    topPlans: [
      { plan: "Европа 10 ГБ", sales: 4168, share: 40 },
      { plan: "Азия 8 ГБ", sales: 2813, share: 27 },
      { plan: "Глобальный 20 ГБ", sales: 2084, share: 20 },
      { plan: "США 15 ГБ", sales: 1355, share: 13 },
    ],
    dailyRevenue: [
      { label: "Q1", value: 2800000 },
      { label: "Q2", value: 3500000 },
      { label: "Q3", value: 4200000 },
      { label: "Q4", value: 4060000 },
    ],
  },
};

const periodLabels: Record<Period, string> = {
  day: "День",
  month: "Месяц",
  quarter: "Квартал",
  year: "Год",
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(value);

const formatNumber = (value: number) =>
  new Intl.NumberFormat("ru-RU").format(value);

const Admin = () => {
  const [period, setPeriod] = useState<Period>("month");
  const data = mockData[period];

  const maxRevenue = Math.max(...data.dailyRevenue.map((d) => d.value));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-lg font-bold text-foreground">Silk eSIM — Админ-панель</h1>
              <p className="text-xs text-muted-foreground">Дашборд</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Система работает</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Period Tabs */}
        <Tabs value={period} onValueChange={(v) => setPeriod(v as Period)}>
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            {(Object.keys(periodLabels) as Period[]).map((p) => (
              <TabsTrigger key={p} value={p}>{periodLabels[p]}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Выручка</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{formatCurrency(data.revenue)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Заказы</CardTitle>
              <ShoppingCart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{formatNumber(data.orders)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Новые пользователи</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{formatNumber(data.users)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Активных eSIM</CardTitle>
              <Smartphone className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{formatNumber(data.activeEsims)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Средний чек</CardTitle>
              <BarChart3 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{formatCurrency(data.avgCheck)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Конверсия</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{data.conversionRate}%</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart (simple bar visualization) */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <BarChart3 className="h-5 w-5 text-primary" />
                Выручка по периодам
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.dailyRevenue.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground">{formatCurrency(item.value)}</span>
                    </div>
                    <Progress value={(item.value / maxRevenue) * 100} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Plans */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Globe className="h-5 w-5 text-primary" />
                Популярные тарифы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.topPlans.map((plan) => (
                  <div key={plan.plan} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{plan.plan}</span>
                      <span className="text-muted-foreground">{plan.sales} продаж ({plan.share}%)</span>
                    </div>
                    <Progress value={plan.share} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Repeat Purchases */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Repeat className="h-5 w-5 text-primary" />
              Повторные покупки
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Summary metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">Доля повторных</p>
                <p className="text-3xl font-bold text-primary">{data.repeatPurchase.rate}%</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">Возвращающихся клиентов</p>
                <p className="text-3xl font-bold text-foreground">{formatNumber(data.repeatPurchase.totalRepeatUsers)}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">Ср. заказов на клиента</p>
                <p className="text-3xl font-bold text-foreground">{data.repeatPurchase.avgOrdersPerUser}</p>
              </div>
            </div>

            {/* Top repeat buyers table */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Топ возвращающихся клиентов</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Пользователь</TableHead>
                    <TableHead className="text-right">Заказы</TableHead>
                    <TableHead className="text-right">Потрачено</TableHead>
                    <TableHead className="text-right">Последняя покупка</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.repeatPurchase.topRepeaters.map((row) => (
                    <TableRow key={row.user}>
                      <TableCell className="font-medium">{row.user}</TableCell>
                      <TableCell className="text-right">{row.orders}</TableCell>
                      <TableCell className="text-right">{formatCurrency(row.totalSpent)}</TableCell>
                      <TableCell className="text-right text-muted-foreground">{row.lastPurchase}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Top Countries Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Globe className="h-5 w-5 text-primary" />
              Топ стран по продажам
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Страна</TableHead>
                  <TableHead className="text-right">Продажи</TableHead>
                  <TableHead className="text-right">Выручка</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.topCountries.map((row, i) => (
                  <TableRow key={row.country}>
                    <TableCell className="font-medium text-muted-foreground">{i + 1}</TableCell>
                    <TableCell className="font-medium">{row.country}</TableCell>
                    <TableCell className="text-right">{formatNumber(row.sales)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(row.revenue)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
