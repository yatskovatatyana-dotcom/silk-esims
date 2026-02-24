import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft, Users, ShoppingCart, DollarSign, TrendingUp, Globe, Smartphone,
  BarChart3, Activity, Repeat, ArrowUpDown, ArrowUp, ArrowDown, Wifi, Clock, CalendarIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/lib/utils";
import type { DateRange } from "react-day-picker";

type Period = "day" | "week" | "month" | "quarter" | "year";
type AdminTab = "dashboard" | "users" | "consumption" | "purchases";
type SortDir = "asc" | "desc";

interface UserData {
  email: string;
  name: string;
  registeredAt: string;
  totalOrders: number;
  totalSpent: number;
  activeEsims: number;
  lastActivity: string;
  country: string;
}

interface ConsumptionData {
  user: string;
  plan: string;
  country: string;
  dataUsedMb: number;
  dataTotalMb: number;
  daysActive: number;
  daysTotal: number;
  status: "active" | "expired" | "paused";
}

interface PurchaseData {
  user: string;
  orderId: string;
  plan: string;
  country: string;
  amount: number;
  date: string;
  status: "completed" | "refunded" | "pending";
}

const periodLabels: Record<Period, string> = {
  day: "День",
  week: "Неделя",
  month: "Месяц",
  quarter: "Квартал",
  year: "Год",
};

const tabLabels: Record<AdminTab, { label: string; icon: typeof Users }> = {
  dashboard: { label: "Дашборд", icon: BarChart3 },
  users: { label: "Пользователи", icon: Users },
  consumption: { label: "Потребление", icon: Wifi },
  purchases: { label: "Покупки", icon: ShoppingCart },
};

// Dashboard mock data
const dashboardData: Record<Period, {
  revenue: number; orders: number; users: number; activeEsims: number;
  avgCheck: number; conversionRate: number;
  repeatPurchase: { rate: number; totalRepeatUsers: number; avgOrdersPerUser: number; topRepeaters: { user: string; orders: number; totalSpent: number; lastPurchase: string }[] };
  topCountries: { country: string; sales: number; revenue: number }[];
  topPlans: { plan: string; sales: number; share: number; revenue: number }[];
  dailyRevenue: { label: string; value: number }[];
  ltvCohorts: { cohort: string; users: number; avgLtv: number; avgOrders: number; retention: number; color: string }[];
}> = {
  day: {
    revenue: 47800, orders: 34, users: 12, activeEsims: 28, avgCheck: 1406, conversionRate: 4.2,
    repeatPurchase: { rate: 18, totalRepeatUsers: 2, avgOrdersPerUser: 1.2, topRepeaters: [
      { user: "user_a1@mail.ru", orders: 3, totalSpent: 3970, lastPurchase: "Сегодня" },
      { user: "travel_fan@gmail.com", orders: 2, totalSpent: 2180, lastPurchase: "Сегодня" },
    ]},
    topCountries: [
      { country: "Турция", sales: 12, revenue: 11880 }, { country: "Таиланд", sales: 8, revenue: 6320 },
      { country: "Италия", sales: 6, revenue: 5940 }, { country: "Германия", sales: 5, revenue: 4950 }, { country: "США", sales: 3, revenue: 3570 },
    ],
    topPlans: [
      { plan: "Европа 10 ГБ", sales: 14, share: 41, revenue: 13860 }, { plan: "Азия 8 ГБ", sales: 9, share: 26, revenue: 7200 },
      { plan: "Глобальный 20 ГБ", sales: 6, share: 18, revenue: 7140 }, { plan: "США 15 ГБ", sales: 5, share: 15, revenue: 5950 },
    ],
    dailyRevenue: [
      { label: "00:00", value: 1990 }, { label: "04:00", value: 790 }, { label: "08:00", value: 5940 },
      { label: "12:00", value: 12800 }, { label: "16:00", value: 15200 }, { label: "20:00", value: 11080 },
    ],
    ltvCohorts: [
      { cohort: "Новички (1 покупка)", users: 8, avgLtv: 1050, avgOrders: 1, retention: 0, color: "bg-[hsl(150,60%,45%)]" },
      { cohort: "Возвращающиеся (2–3)", users: 3, avgLtv: 2400, avgOrders: 2.3, retention: 25, color: "bg-[hsl(200,100%,45%)]" },
      { cohort: "Лояльные (4–10)", users: 1, avgLtv: 5200, avgOrders: 5, retention: 60, color: "bg-[hsl(260,60%,55%)]" },
      { cohort: "VIP (10+)", users: 0, avgLtv: 0, avgOrders: 0, retention: 0, color: "bg-[hsl(35,100%,50%)]" },
    ],
  },
  week: {
    revenue: 312000, orders: 220, users: 85, activeEsims: 180, avgCheck: 1418, conversionRate: 4.6,
    repeatPurchase: { rate: 21, totalRepeatUsers: 18, avgOrdersPerUser: 1.5, topRepeaters: [
      { user: "user_a1@mail.ru", orders: 3, totalSpent: 3970, lastPurchase: "Сегодня" },
      { user: "travel_fan@gmail.com", orders: 3, totalSpent: 3560, lastPurchase: "2 дня назад" },
    ]},
    topCountries: [
      { country: "Турция", sales: 72, revenue: 71280 }, { country: "Таиланд", sales: 48, revenue: 37920 },
      { country: "Италия", sales: 38, revenue: 37620 }, { country: "Германия", sales: 32, revenue: 31680 }, { country: "США", sales: 20, revenue: 23800 },
    ],
    topPlans: [
      { plan: "Европа 10 ГБ", sales: 88, share: 40, revenue: 87120 }, { plan: "Азия 8 ГБ", sales: 59, share: 27, revenue: 47200 },
      { plan: "Глобальный 20 ГБ", sales: 44, share: 20, revenue: 52360 }, { plan: "США 15 ГБ", sales: 29, share: 13, revenue: 34510 },
    ],
    dailyRevenue: [
      { label: "Пн", value: 38000 }, { label: "Вт", value: 42000 }, { label: "Ср", value: 48000 },
      { label: "Чт", value: 51000 }, { label: "Пт", value: 55000 }, { label: "Сб", value: 44000 }, { label: "Вс", value: 34000 },
    ],
    ltvCohorts: [
      { cohort: "Новички (1 покупка)", users: 52, avgLtv: 1180, avgOrders: 1, retention: 0, color: "bg-[hsl(150,60%,45%)]" },
      { cohort: "Возвращающиеся (2–3)", users: 22, avgLtv: 3200, avgOrders: 2.4, retention: 30, color: "bg-[hsl(200,100%,45%)]" },
      { cohort: "Лояльные (4–10)", users: 9, avgLtv: 7800, avgOrders: 5.6, retention: 55, color: "bg-[hsl(260,60%,55%)]" },
      { cohort: "VIP (10+)", users: 2, avgLtv: 14500, avgOrders: 12, retention: 80, color: "bg-[hsl(35,100%,50%)]" },
    ],
  },
  month: {
    revenue: 1243000, orders: 892, users: 345, activeEsims: 670, avgCheck: 1393, conversionRate: 5.1,
    repeatPurchase: { rate: 24, totalRepeatUsers: 83, avgOrdersPerUser: 1.8, topRepeaters: [
      { user: "user_a1@mail.ru", orders: 5, totalSpent: 7450, lastPurchase: "2 дня назад" },
      { user: "travel_fan@gmail.com", orders: 4, totalSpent: 5960, lastPurchase: "5 дней назад" },
      { user: "nomad_life@ya.ru", orders: 3, totalSpent: 4770, lastPurchase: "1 неделю назад" },
    ]},
    topCountries: [
      { country: "Турция", sales: 312, revenue: 308880 }, { country: "Таиланд", sales: 198, revenue: 156420 },
      { country: "Италия", sales: 145, revenue: 143550 }, { country: "Германия", sales: 112, revenue: 110880 }, { country: "США", sales: 89, revenue: 105910 },
    ],
    topPlans: [
      { plan: "Европа 10 ГБ", sales: 356, share: 40, revenue: 352440 }, { plan: "Азия 8 ГБ", sales: 245, share: 27, revenue: 196000 },
      { plan: "Глобальный 20 ГБ", sales: 178, share: 20, revenue: 211820 }, { plan: "США 15 ГБ", sales: 113, share: 13, revenue: 134470 },
    ],
    dailyRevenue: [
      { label: "Нед 1", value: 280000 }, { label: "Нед 2", value: 320000 }, { label: "Нед 3", value: 345000 }, { label: "Нед 4", value: 298000 },
    ],
    ltvCohorts: [
      { cohort: "Новички (1 покупка)", users: 180, avgLtv: 1290, avgOrders: 1, retention: 0, color: "bg-[hsl(150,60%,45%)]" },
      { cohort: "Возвращающиеся (2–3)", users: 98, avgLtv: 3800, avgOrders: 2.6, retention: 34, color: "bg-[hsl(200,100%,45%)]" },
      { cohort: "Лояльные (4–10)", users: 52, avgLtv: 9200, avgOrders: 6.1, retention: 62, color: "bg-[hsl(260,60%,55%)]" },
      { cohort: "VIP (10+)", users: 15, avgLtv: 22400, avgOrders: 14.2, retention: 85, color: "bg-[hsl(35,100%,50%)]" },
    ],
  },
  quarter: {
    revenue: 3890000, orders: 2780, users: 1120, activeEsims: 1890, avgCheck: 1399, conversionRate: 5.4,
    repeatPurchase: { rate: 28, totalRepeatUsers: 314, avgOrdersPerUser: 2.1, topRepeaters: [
      { user: "user_a1@mail.ru", orders: 12, totalSpent: 18900, lastPurchase: "2 дня назад" },
      { user: "travel_fan@gmail.com", orders: 9, totalSpent: 13420, lastPurchase: "5 дней назад" },
      { user: "nomad_life@ya.ru", orders: 8, totalSpent: 11860, lastPurchase: "1 неделю назад" },
    ]},
    topCountries: [
      { country: "Турция", sales: 890, revenue: 881100 }, { country: "Таиланд", sales: 620, revenue: 489800 },
      { country: "Италия", sales: 480, revenue: 475200 }, { country: "Германия", sales: 390, revenue: 386100 }, { country: "США", sales: 280, revenue: 333200 },
    ],
    topPlans: [
      { plan: "Европа 10 ГБ", sales: 1112, share: 40, revenue: 1100880 }, { plan: "Азия 8 ГБ", sales: 750, share: 27, revenue: 600000 },
      { plan: "Глобальный 20 ГБ", sales: 556, share: 20, revenue: 661640 }, { plan: "США 15 ГБ", sales: 362, share: 13, revenue: 430780 },
    ],
    dailyRevenue: [
      { label: "Мес 1", value: 1100000 }, { label: "Мес 2", value: 1350000 }, { label: "Мес 3", value: 1440000 },
    ],
    ltvCohorts: [
      { cohort: "Новички (1 покупка)", users: 520, avgLtv: 1350, avgOrders: 1, retention: 0, color: "bg-[hsl(150,60%,45%)]" },
      { cohort: "Возвращающиеся (2–3)", users: 340, avgLtv: 4200, avgOrders: 2.8, retention: 38, color: "bg-[hsl(200,100%,45%)]" },
      { cohort: "Лояльные (4–10)", users: 190, avgLtv: 12600, avgOrders: 7.3, retention: 68, color: "bg-[hsl(260,60%,55%)]" },
      { cohort: "VIP (10+)", users: 70, avgLtv: 35800, avgOrders: 18.5, retention: 90, color: "bg-[hsl(35,100%,50%)]" },
    ],
  },
  year: {
    revenue: 14560000, orders: 10420, users: 4200, activeEsims: 3500, avgCheck: 1397, conversionRate: 5.8,
    repeatPurchase: { rate: 32, totalRepeatUsers: 1344, avgOrdersPerUser: 2.5, topRepeaters: [
      { user: "user_a1@mail.ru", orders: 38, totalSpent: 56200, lastPurchase: "2 дня назад" },
      { user: "travel_fan@gmail.com", orders: 29, totalSpent: 42800, lastPurchase: "5 дней назад" },
      { user: "nomad_life@ya.ru", orders: 24, totalSpent: 35600, lastPurchase: "1 неделю назад" },
    ]},
    topCountries: [
      { country: "Турция", sales: 3340, revenue: 3306600 }, { country: "Таиланд", sales: 2310, revenue: 1824900 },
      { country: "Италия", sales: 1780, revenue: 1762200 }, { country: "Германия", sales: 1450, revenue: 1435500 }, { country: "США", sales: 1040, revenue: 1237600 },
    ],
    topPlans: [
      { plan: "Европа 10 ГБ", sales: 4168, share: 40, revenue: 4126320 }, { plan: "Азия 8 ГБ", sales: 2813, share: 27, revenue: 2250400 },
      { plan: "Глобальный 20 ГБ", sales: 2084, share: 20, revenue: 2479960 }, { plan: "США 15 ГБ", sales: 1355, share: 13, revenue: 1612450 },
    ],
    dailyRevenue: [
      { label: "Q1", value: 2800000 }, { label: "Q2", value: 3500000 }, { label: "Q3", value: 4200000 }, { label: "Q4", value: 4060000 },
    ],
    ltvCohorts: [
      { cohort: "Новички (1 покупка)", users: 1850, avgLtv: 1400, avgOrders: 1, retention: 0, color: "bg-[hsl(150,60%,45%)]" },
      { cohort: "Возвращающиеся (2–3)", users: 1200, avgLtv: 4800, avgOrders: 3.0, retention: 42, color: "bg-[hsl(200,100%,45%)]" },
      { cohort: "Лояльные (4–10)", users: 780, avgLtv: 16200, avgOrders: 8.5, retention: 72, color: "bg-[hsl(260,60%,55%)]" },
      { cohort: "VIP (10+)", users: 370, avgLtv: 52400, avgOrders: 24, retention: 93, color: "bg-[hsl(35,100%,50%)]" },
    ],
  },
};

const mockUsers: Record<Period, UserData[]> = {
  day: [
    { email: "user_a1@mail.ru", name: "Алексей Иванов", registeredAt: "Сегодня", totalOrders: 1, totalSpent: 990, activeEsims: 1, lastActivity: "1 час назад", country: "Россия" },
    { email: "travel_fan@gmail.com", name: "Мария Петрова", registeredAt: "Сегодня", totalOrders: 2, totalSpent: 2180, activeEsims: 2, lastActivity: "30 мин назад", country: "Россия" },
    { email: "new_user@ya.ru", name: "Дмитрий Сидоров", registeredAt: "Сегодня", totalOrders: 1, totalSpent: 1490, activeEsims: 1, lastActivity: "2 часа назад", country: "Казахстан" },
  ],
  week: [
    { email: "user_a1@mail.ru", name: "Алексей Иванов", registeredAt: "3 дня назад", totalOrders: 3, totalSpent: 3970, activeEsims: 2, lastActivity: "1 час назад", country: "Россия" },
    { email: "travel_fan@gmail.com", name: "Мария Петрова", registeredAt: "5 дней назад", totalOrders: 4, totalSpent: 5960, activeEsims: 2, lastActivity: "30 мин назад", country: "Россия" },
    { email: "nomad_life@ya.ru", name: "Елена Козлова", registeredAt: "6 дней назад", totalOrders: 2, totalSpent: 2980, activeEsims: 1, lastActivity: "1 день назад", country: "Беларусь" },
    { email: "world_trip@inbox.ru", name: "Сергей Волков", registeredAt: "4 дня назад", totalOrders: 3, totalSpent: 4470, activeEsims: 2, lastActivity: "3 часа назад", country: "Украина" },
    { email: "new_user@ya.ru", name: "Дмитрий Сидоров", registeredAt: "2 дня назад", totalOrders: 1, totalSpent: 1490, activeEsims: 1, lastActivity: "2 часа назад", country: "Казахстан" },
  ],
  month: [
    { email: "user_a1@mail.ru", name: "Алексей Иванов", registeredAt: "15.01.2026", totalOrders: 5, totalSpent: 7450, activeEsims: 2, lastActivity: "1 час назад", country: "Россия" },
    { email: "travel_fan@gmail.com", name: "Мария Петрова", registeredAt: "03.01.2026", totalOrders: 4, totalSpent: 5960, activeEsims: 2, lastActivity: "30 мин назад", country: "Россия" },
    { email: "nomad_life@ya.ru", name: "Елена Козлова", registeredAt: "10.01.2026", totalOrders: 3, totalSpent: 4770, activeEsims: 1, lastActivity: "1 день назад", country: "Беларусь" },
    { email: "world_trip@inbox.ru", name: "Сергей Волков", registeredAt: "20.01.2026", totalOrders: 3, totalSpent: 3970, activeEsims: 2, lastActivity: "3 часа назад", country: "Украина" },
    { email: "biz_travel@corp.com", name: "Ольга Новикова", registeredAt: "08.01.2026", totalOrders: 6, totalSpent: 8940, activeEsims: 3, lastActivity: "5 часов назад", country: "Россия" },
    { email: "vacation99@mail.ru", name: "Андрей Морозов", registeredAt: "22.01.2026", totalOrders: 2, totalSpent: 2980, activeEsims: 1, lastActivity: "2 дня назад", country: "Россия" },
  ],
  quarter: [
    { email: "user_a1@mail.ru", name: "Алексей Иванов", registeredAt: "01.11.2025", totalOrders: 12, totalSpent: 18900, activeEsims: 2, lastActivity: "1 час назад", country: "Россия" },
    { email: "travel_fan@gmail.com", name: "Мария Петрова", registeredAt: "15.10.2025", totalOrders: 9, totalSpent: 13420, activeEsims: 2, lastActivity: "30 мин назад", country: "Россия" },
    { email: "nomad_life@ya.ru", name: "Елена Козлова", registeredAt: "20.11.2025", totalOrders: 8, totalSpent: 11860, activeEsims: 1, lastActivity: "1 день назад", country: "Беларусь" },
    { email: "world_trip@inbox.ru", name: "Сергей Волков", registeredAt: "05.12.2025", totalOrders: 7, totalSpent: 9930, activeEsims: 2, lastActivity: "3 часа назад", country: "Украина" },
    { email: "biz_travel@corp.com", name: "Ольга Новикова", registeredAt: "10.10.2025", totalOrders: 14, totalSpent: 20860, activeEsims: 3, lastActivity: "5 часов назад", country: "Россия" },
    { email: "vacation99@mail.ru", name: "Андрей Морозов", registeredAt: "01.12.2025", totalOrders: 5, totalSpent: 7450, activeEsims: 1, lastActivity: "2 дня назад", country: "Россия" },
    { email: "globetrotter@pm.me", name: "Наталья Смирнова", registeredAt: "25.10.2025", totalOrders: 6, totalSpent: 8940, activeEsims: 2, lastActivity: "6 часов назад", country: "Грузия" },
  ],
  year: [
    { email: "user_a1@mail.ru", name: "Алексей Иванов", registeredAt: "15.03.2025", totalOrders: 38, totalSpent: 56200, activeEsims: 2, lastActivity: "1 час назад", country: "Россия" },
    { email: "travel_fan@gmail.com", name: "Мария Петрова", registeredAt: "01.02.2025", totalOrders: 29, totalSpent: 42800, activeEsims: 2, lastActivity: "30 мин назад", country: "Россия" },
    { email: "nomad_life@ya.ru", name: "Елена Козлова", registeredAt: "10.04.2025", totalOrders: 24, totalSpent: 35600, activeEsims: 1, lastActivity: "1 день назад", country: "Беларусь" },
    { email: "world_trip@inbox.ru", name: "Сергей Волков", registeredAt: "20.05.2025", totalOrders: 21, totalSpent: 31200, activeEsims: 2, lastActivity: "3 часа назад", country: "Украина" },
    { email: "biz_travel@corp.com", name: "Ольга Новикова", registeredAt: "08.01.2025", totalOrders: 42, totalSpent: 62580, activeEsims: 3, lastActivity: "5 часов назад", country: "Россия" },
    { email: "vacation99@mail.ru", name: "Андрей Морозов", registeredAt: "22.06.2025", totalOrders: 15, totalSpent: 22350, activeEsims: 1, lastActivity: "2 дня назад", country: "Россия" },
    { email: "globetrotter@pm.me", name: "Наталья Смирнова", registeredAt: "25.03.2025", totalOrders: 18, totalSpent: 26820, activeEsims: 2, lastActivity: "6 часов назад", country: "Грузия" },
    { email: "digital_nomad@proton.me", name: "Игорь Лебедев", registeredAt: "14.07.2025", totalOrders: 11, totalSpent: 16390, activeEsims: 1, lastActivity: "12 часов назад", country: "Россия" },
  ],
};

const mockConsumption: Record<Period, ConsumptionData[]> = {
  day: [
    { user: "user_a1@mail.ru", plan: "Европа 10 ГБ", country: "Турция", dataUsedMb: 3200, dataTotalMb: 10240, daysActive: 1, daysTotal: 30, status: "active" },
    { user: "travel_fan@gmail.com", plan: "Азия 8 ГБ", country: "Таиланд", dataUsedMb: 1800, dataTotalMb: 8192, daysActive: 1, daysTotal: 14, status: "active" },
  ],
  week: [
    { user: "user_a1@mail.ru", plan: "Европа 10 ГБ", country: "Турция", dataUsedMb: 7500, dataTotalMb: 10240, daysActive: 5, daysTotal: 30, status: "active" },
    { user: "travel_fan@gmail.com", plan: "Азия 8 ГБ", country: "Таиланд", dataUsedMb: 4200, dataTotalMb: 8192, daysActive: 6, daysTotal: 14, status: "active" },
    { user: "nomad_life@ya.ru", plan: "Глобальный 20 ГБ", country: "Германия", dataUsedMb: 5600, dataTotalMb: 20480, daysActive: 4, daysTotal: 30, status: "active" },
    { user: "world_trip@inbox.ru", plan: "США 15 ГБ", country: "США", dataUsedMb: 8100, dataTotalMb: 15360, daysActive: 7, daysTotal: 30, status: "active" },
  ],
  month: [
    { user: "user_a1@mail.ru", plan: "Европа 10 ГБ", country: "Турция", dataUsedMb: 9800, dataTotalMb: 10240, daysActive: 25, daysTotal: 30, status: "active" },
    { user: "travel_fan@gmail.com", plan: "Азия 8 ГБ", country: "Таиланд", dataUsedMb: 7900, dataTotalMb: 8192, daysActive: 12, daysTotal: 14, status: "active" },
    { user: "nomad_life@ya.ru", plan: "Глобальный 20 ГБ", country: "Германия", dataUsedMb: 14200, dataTotalMb: 20480, daysActive: 28, daysTotal: 30, status: "active" },
    { user: "world_trip@inbox.ru", plan: "США 15 ГБ", country: "США", dataUsedMb: 15360, dataTotalMb: 15360, daysActive: 30, daysTotal: 30, status: "expired" },
    { user: "biz_travel@corp.com", plan: "Европа 10 ГБ", country: "Италия", dataUsedMb: 6400, dataTotalMb: 10240, daysActive: 18, daysTotal: 30, status: "active" },
    { user: "vacation99@mail.ru", plan: "Азия 8 ГБ", country: "Таиланд", dataUsedMb: 2048, dataTotalMb: 8192, daysActive: 5, daysTotal: 14, status: "paused" },
  ],
  quarter: [
    { user: "user_a1@mail.ru", plan: "Европа 10 ГБ", country: "Турция", dataUsedMb: 10240, dataTotalMb: 10240, daysActive: 30, daysTotal: 30, status: "expired" },
    { user: "travel_fan@gmail.com", plan: "Глобальный 20 ГБ", country: "Таиланд", dataUsedMb: 18500, dataTotalMb: 20480, daysActive: 28, daysTotal: 30, status: "active" },
    { user: "nomad_life@ya.ru", plan: "Глобальный 20 ГБ", country: "Германия", dataUsedMb: 20480, dataTotalMb: 20480, daysActive: 30, daysTotal: 30, status: "expired" },
    { user: "world_trip@inbox.ru", plan: "США 15 ГБ", country: "США", dataUsedMb: 12800, dataTotalMb: 15360, daysActive: 22, daysTotal: 30, status: "active" },
    { user: "biz_travel@corp.com", plan: "Европа 10 ГБ", country: "Италия", dataUsedMb: 9200, dataTotalMb: 10240, daysActive: 27, daysTotal: 30, status: "active" },
    { user: "globetrotter@pm.me", plan: "Азия 8 ГБ", country: "Таиланд", dataUsedMb: 8192, dataTotalMb: 8192, daysActive: 14, daysTotal: 14, status: "expired" },
  ],
  year: [
    { user: "user_a1@mail.ru", plan: "Глобальный 20 ГБ", country: "Турция", dataUsedMb: 19500, dataTotalMb: 20480, daysActive: 28, daysTotal: 30, status: "active" },
    { user: "travel_fan@gmail.com", plan: "Европа 10 ГБ", country: "Италия", dataUsedMb: 8900, dataTotalMb: 10240, daysActive: 20, daysTotal: 30, status: "active" },
    { user: "nomad_life@ya.ru", plan: "Глобальный 20 ГБ", country: "Германия", dataUsedMb: 20480, dataTotalMb: 20480, daysActive: 30, daysTotal: 30, status: "expired" },
    { user: "biz_travel@corp.com", plan: "Европа 10 ГБ", country: "Франция", dataUsedMb: 7600, dataTotalMb: 10240, daysActive: 15, daysTotal: 30, status: "active" },
    { user: "digital_nomad@proton.me", plan: "США 15 ГБ", country: "США", dataUsedMb: 14200, dataTotalMb: 15360, daysActive: 25, daysTotal: 30, status: "active" },
  ],
};

const mockPurchases: Record<Period, PurchaseData[]> = {
  day: [
    { user: "user_a1@mail.ru", orderId: "ORD-1001", plan: "Европа 10 ГБ", country: "Турция", amount: 990, date: "17.02.2026 14:30", status: "completed" },
    { user: "travel_fan@gmail.com", orderId: "ORD-1002", plan: "Азия 8 ГБ", country: "Таиланд", amount: 790, date: "17.02.2026 12:15", status: "completed" },
    { user: "travel_fan@gmail.com", orderId: "ORD-1003", plan: "Европа 10 ГБ", country: "Италия", amount: 990, date: "17.02.2026 10:45", status: "completed" },
    { user: "new_user@ya.ru", orderId: "ORD-1004", plan: "Глобальный 20 ГБ", country: "Германия", amount: 1490, date: "17.02.2026 09:20", status: "pending" },
  ],
  week: [
    { user: "user_a1@mail.ru", orderId: "ORD-0990", plan: "Европа 10 ГБ", country: "Турция", amount: 990, date: "17.02.2026 14:30", status: "completed" },
    { user: "user_a1@mail.ru", orderId: "ORD-0985", plan: "Азия 8 ГБ", country: "Таиланд", amount: 790, date: "15.02.2026 10:00", status: "completed" },
    { user: "travel_fan@gmail.com", orderId: "ORD-0982", plan: "Глобальный 20 ГБ", country: "Германия", amount: 1490, date: "14.02.2026 16:45", status: "completed" },
    { user: "world_trip@inbox.ru", orderId: "ORD-0978", plan: "США 15 ГБ", country: "США", amount: 1190, date: "13.02.2026 08:30", status: "completed" },
    { user: "nomad_life@ya.ru", orderId: "ORD-0975", plan: "Европа 10 ГБ", country: "Италия", amount: 990, date: "12.02.2026 20:15", status: "refunded" },
    { user: "world_trip@inbox.ru", orderId: "ORD-0970", plan: "Европа 10 ГБ", country: "Турция", amount: 990, date: "11.02.2026 11:00", status: "completed" },
  ],
  month: [
    { user: "biz_travel@corp.com", orderId: "ORD-0950", plan: "Европа 10 ГБ", country: "Италия", amount: 990, date: "15.02.2026 09:00", status: "completed" },
    { user: "user_a1@mail.ru", orderId: "ORD-0945", plan: "Глобальный 20 ГБ", country: "Турция", amount: 1490, date: "12.02.2026 14:30", status: "completed" },
    { user: "travel_fan@gmail.com", orderId: "ORD-0940", plan: "Азия 8 ГБ", country: "Таиланд", amount: 790, date: "08.02.2026 11:20", status: "completed" },
    { user: "nomad_life@ya.ru", orderId: "ORD-0935", plan: "Глобальный 20 ГБ", country: "Германия", amount: 1490, date: "05.02.2026 16:00", status: "completed" },
    { user: "world_trip@inbox.ru", orderId: "ORD-0930", plan: "США 15 ГБ", country: "США", amount: 1190, date: "02.02.2026 10:45", status: "refunded" },
    { user: "biz_travel@corp.com", orderId: "ORD-0925", plan: "Азия 8 ГБ", country: "Таиланд", amount: 790, date: "28.01.2026 15:30", status: "completed" },
    { user: "vacation99@mail.ru", orderId: "ORD-0920", plan: "Европа 10 ГБ", country: "Турция", amount: 990, date: "25.01.2026 09:15", status: "completed" },
    { user: "user_a1@mail.ru", orderId: "ORD-0915", plan: "Европа 10 ГБ", country: "Италия", amount: 990, date: "20.01.2026 12:00", status: "completed" },
  ],
  quarter: [
    { user: "biz_travel@corp.com", orderId: "ORD-0800", plan: "Глобальный 20 ГБ", country: "Италия", amount: 1490, date: "10.02.2026", status: "completed" },
    { user: "user_a1@mail.ru", orderId: "ORD-0750", plan: "Европа 10 ГБ", country: "Турция", amount: 990, date: "01.02.2026", status: "completed" },
    { user: "globetrotter@pm.me", orderId: "ORD-0700", plan: "Азия 8 ГБ", country: "Таиланд", amount: 790, date: "15.01.2026", status: "completed" },
    { user: "travel_fan@gmail.com", orderId: "ORD-0650", plan: "Глобальный 20 ГБ", country: "Германия", amount: 1490, date: "01.01.2026", status: "completed" },
    { user: "nomad_life@ya.ru", orderId: "ORD-0600", plan: "США 15 ГБ", country: "США", amount: 1190, date: "15.12.2025", status: "refunded" },
    { user: "world_trip@inbox.ru", orderId: "ORD-0550", plan: "Европа 10 ГБ", country: "Турция", amount: 990, date: "01.12.2025", status: "completed" },
  ],
  year: [
    { user: "biz_travel@corp.com", orderId: "ORD-0500", plan: "Глобальный 20 ГБ", country: "Франция", amount: 1490, date: "10.02.2026", status: "completed" },
    { user: "user_a1@mail.ru", orderId: "ORD-0400", plan: "Европа 10 ГБ", country: "Турция", amount: 990, date: "01.01.2026", status: "completed" },
    { user: "travel_fan@gmail.com", orderId: "ORD-0300", plan: "Азия 8 ГБ", country: "Таиланд", amount: 790, date: "15.09.2025", status: "completed" },
    { user: "nomad_life@ya.ru", orderId: "ORD-0200", plan: "Глобальный 20 ГБ", country: "Германия", amount: 1490, date: "01.07.2025", status: "completed" },
    { user: "digital_nomad@proton.me", orderId: "ORD-0150", plan: "США 15 ГБ", country: "США", amount: 1190, date: "15.05.2025", status: "completed" },
    { user: "world_trip@inbox.ru", orderId: "ORD-0100", plan: "Европа 10 ГБ", country: "Италия", amount: 990, date: "01.04.2025", status: "refunded" },
  ],
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(value);

const formatNumber = (value: number) =>
  new Intl.NumberFormat("ru-RU").format(value);

// Parse Russian date strings like "17.02.2026 14:30", "15.01.2026", "01.12.2025"
function parseRuDate(dateStr: string): Date | null {
  // Match dd.MM.yyyy or dd.MM.yyyy HH:mm
  const match = dateStr.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2}))?$/);
  if (!match) return null;
  const [, day, month, year, hours, minutes] = match;
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hours || "0"), parseInt(minutes || "0"));
}

// Flat list of ALL purchases across all periods (deduplicated by orderId)
const allPurchasesFlat: (PurchaseData & { parsedDate: Date })[] = (() => {
  const seen = new Set<string>();
  const result: (PurchaseData & { parsedDate: Date })[] = [];
  for (const period of Object.values(mockPurchases)) {
    for (const p of period) {
      if (seen.has(p.orderId)) continue;
      seen.add(p.orderId);
      const parsed = parseRuDate(p.date);
      if (parsed) result.push({ ...p, parsedDate: parsed });
    }
  }
  return result.sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime());
})();

// Flat list of ALL users across all periods (deduplicated by email, take the richest record)
const allUsersFlat: (UserData & { parsedDate: Date | null })[] = (() => {
  const map = new Map<string, UserData>();
  // Later periods have more complete data, so overwrite
  for (const period of ["day", "week", "month", "quarter", "year"] as Period[]) {
    for (const u of mockUsers[period]) {
      map.set(u.email, u);
    }
  }
  return Array.from(map.values()).map(u => ({
    ...u,
    parsedDate: parseRuDate(u.registeredAt),
  }));
})();

function filterByDateRange<T extends { parsedDate: Date | null }>(items: T[], range: DateRange | undefined): T[] {
  if (!range?.from) return items;
  const from = new Date(range.from);
  from.setHours(0, 0, 0, 0);
  const to = range.to ? new Date(range.to) : new Date(range.from);
  to.setHours(23, 59, 59, 999);
  return items.filter(item => {
    if (!item.parsedDate) return true;
    return item.parsedDate >= from && item.parsedDate <= to;
  });
}

const statusLabels: Record<string, { label: string; className: string }> = {
  active: { label: "Активна", className: "bg-green-500/10 text-green-600" },
  expired: { label: "Истекла", className: "bg-muted text-muted-foreground" },
  paused: { label: "Пауза", className: "bg-yellow-500/10 text-yellow-600" },
  completed: { label: "Оплачен", className: "bg-green-500/10 text-green-600" },
  refunded: { label: "Возврат", className: "bg-destructive/10 text-destructive" },
  pending: { label: "Ожидание", className: "bg-yellow-500/10 text-yellow-600" },
};

function SortButton({ column, currentSort, currentDir, onSort }: {
  column: string;
  currentSort: string;
  currentDir: SortDir;
  onSort: (col: string) => void;
}) {
  const isActive = currentSort === column;
  return (
    <Button variant="ghost" size="sm" className="h-auto p-0 hover:bg-transparent" onClick={() => onSort(column)}>
      {isActive ? (currentDir === "asc" ? <ArrowUp className="h-3 w-3 ml-1" /> : <ArrowDown className="h-3 w-3 ml-1" />) : <ArrowUpDown className="h-3 w-3 ml-1 opacity-40" />}
    </Button>
  );
}

function useSortable<T>(data: T[], defaultSort: string) {
  const [sortCol, setSortCol] = useState(defaultSort);
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const toggle = (col: string) => {
    if (sortCol === col) {
      setSortDir(d => d === "asc" ? "desc" : "asc");
    } else {
      setSortCol(col);
      setSortDir("desc");
    }
  };

  const sorted = useMemo(() => {
    const arr = [...data];
    arr.sort((a, b) => {
      const va = (a as Record<string, unknown>)[sortCol];
      const vb = (b as Record<string, unknown>)[sortCol];
      let cmp = 0;
      if (typeof va === "number" && typeof vb === "number") cmp = va - vb;
      else cmp = String(va).localeCompare(String(vb), "ru");
      return sortDir === "asc" ? cmp : -cmp;
    });
    return arr;
  }, [data, sortCol, sortDir]);

  return { sorted, sortCol, sortDir, toggle };
}

function PeriodSelector({ period, setPeriod, dateRange, setDateRange }: { period: Period; setPeriod: (p: Period) => void; dateRange?: DateRange; setDateRange?: (d: DateRange | undefined) => void }) {
  const [tempRange, setTempRange] = useState<DateRange | undefined>(dateRange);
  const [open, setOpen] = useState(false);

  const handleOpen = (isOpen: boolean) => {
    if (isOpen) {
      setTempRange(dateRange);
    }
    setOpen(isOpen);
  };

  const handleApply = () => {
    setDateRange?.(tempRange);
    setOpen(false);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <Tabs value={period} onValueChange={(v) => setPeriod(v as Period)}>
        <TabsList className="grid grid-cols-5 w-full max-w-lg">
          {(Object.keys(periodLabels) as Period[]).map((p) => (
            <TabsTrigger key={p} value={p}>{periodLabels[p]}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      {setDateRange && (
        <Popover open={open} onOpenChange={handleOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal h-9 text-xs sm:text-sm",
                !dateRange && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "dd.MM.yyyy", { locale: ru })} —{" "}
                    {format(dateRange.to, "dd.MM.yyyy", { locale: ru })}
                  </>
                ) : (
                  format(dateRange.from, "dd.MM.yyyy", { locale: ru })
                )
              ) : (
                <span>Выберите период</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 flex flex-col" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={tempRange?.from}
              selected={tempRange}
              onSelect={setTempRange}
              numberOfMonths={2}
              className="p-3 pointer-events-auto"
            />
            <div className="p-3 pt-0 flex justify-end">
              <Button size="sm" onClick={handleApply} disabled={!tempRange?.from}>
                Выбрать
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

// ===== Dashboard Tab =====
function DashboardTab({ period, setPeriod, dateRange, setDateRange }: { period: Period; setPeriod: (p: Period) => void; dateRange?: DateRange; setDateRange?: (d: DateRange | undefined) => void }) {
  const data = dashboardData[period];
  const maxRevenue = Math.max(...data.dailyRevenue.map((d) => d.value));

  return (
    <div className="space-y-6">
      <PeriodSelector period={period} setPeriod={setPeriod} dateRange={dateRange} setDateRange={setDateRange} />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Выручка</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{formatCurrency(data.revenue)}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Заказы</CardTitle>
            <ShoppingCart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{formatNumber(data.orders)}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Новые пользователи</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{formatNumber(data.users)}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Активных eSIM</CardTitle>
            <Smartphone className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{formatNumber(data.activeEsims)}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Средний чек</CardTitle>
            <BarChart3 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{formatCurrency(data.avgCheck)}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Конверсия</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{data.conversionRate}%</div></CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
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
            {(() => {
              const totalRevenue = data.topPlans.reduce((s, p) => s + p.revenue, 0);
              return (
                <div className="space-y-4">
                  {data.topPlans.map((plan) => {
                    const revenueShare = totalRevenue ? Math.round(plan.revenue / totalRevenue * 100) : 0;
                    return (
                      <div key={plan.plan} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground font-medium">{plan.plan}</span>
                          <span className="text-muted-foreground">
                            {plan.sales} продаж ({plan.share}%) · {plan.revenue.toLocaleString('ru-RU')} ₽ ({revenueShare}%)
                          </span>
                        </div>
                        <Progress value={plan.share} className="h-3" />
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </CardContent>
        </Card>
      </div>

      {/* LTV Cohorts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <TrendingUp className="h-5 w-5 text-primary" />
            Когорты по LTV
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Когорта</TableHead>
                <TableHead className="text-right">Пользователей</TableHead>
                <TableHead className="text-right">Ср. LTV</TableHead>
                <TableHead className="text-right">Ср. заказов</TableHead>
                <TableHead className="text-right">Retention</TableHead>
                <TableHead>Доля</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.ltvCohorts.map((cohort) => {
                const totalUsers = data.ltvCohorts.reduce((s, c) => s + c.users, 0);
                const share = totalUsers > 0 ? Math.round((cohort.users / totalUsers) * 100) : 0;
                return (
                  <TableRow key={cohort.cohort}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${cohort.color}`} />
                        <span className="font-medium">{cohort.cohort}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{formatNumber(cohort.users)}</TableCell>
                    <TableCell className="text-right font-medium">{formatCurrency(cohort.avgLtv)}</TableCell>
                    <TableCell className="text-right">{cohort.avgOrders}</TableCell>
                    <TableCell className="text-right">{cohort.retention}%</TableCell>
                    <TableCell className="min-w-[100px]">
                      <div className="flex items-center gap-2">
                        <Progress value={share} className="h-2 flex-1" />
                        <span className="text-xs text-muted-foreground w-8">{share}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {data.ltvCohorts.map((cohort) => {
              const totalRevenue = data.ltvCohorts.reduce((s, c) => s + c.users * c.avgLtv, 0);
              const cohortRevenue = cohort.users * cohort.avgLtv;
              const revenueShare = totalRevenue > 0 ? Math.round((cohortRevenue / totalRevenue) * 100) : 0;
              return (
                <div key={cohort.cohort} className="bg-muted/30 rounded-lg p-3 text-center">
                  <div className={`w-3 h-3 rounded-full ${cohort.color} mx-auto mb-2`} />
                  <p className="text-xs text-muted-foreground mb-1">Доля выручки</p>
                  <p className="text-xl font-bold text-foreground">{revenueShare}%</p>
                  <p className="text-xs text-muted-foreground">{formatCurrency(cohortRevenue)}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cohort.users} польз.</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Repeat Purchases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Repeat className="h-5 w-5 text-primary" />
            Повторные покупки
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
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
    </div>
  );
}

// ===== Users Tab =====
function UsersTab({ period, setPeriod, dateRange, setDateRange }: { period: Period; setPeriod: (p: Period) => void; dateRange?: DateRange; setDateRange?: (d: DateRange | undefined) => void }) {
  const [search, setSearch] = useState("");
  const data = mockUsers[period];
  const filtered = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.country.toLowerCase().includes(q));
  }, [data, search]);
  const { sorted, sortCol, sortDir, toggle } = useSortable(filtered, "totalSpent");

  const totalUsers = filtered.length;
  const totalActiveEsims = filtered.reduce((s, u) => s + u.activeEsims, 0);
  const totalSpent = filtered.reduce((s, u) => s + u.totalSpent, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <PeriodSelector period={period} setPeriod={setPeriod} dateRange={dateRange} setDateRange={setDateRange} />
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Поиск по имени, email, стране…" value={search} onChange={e => setSearch(e.target.value)} className="pl-9" maxLength={100} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Пользователей</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{totalUsers}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Активных eSIM</CardTitle>
            <Smartphone className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{totalActiveEsims}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Общая выручка</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{formatCurrency(totalSpent)}</div></CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Пользователь <SortButton column="name" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Страна <SortButton column="country" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead className="text-right">Заказы <SortButton column="totalOrders" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead className="text-right">Потрачено <SortButton column="totalSpent" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead className="text-right">eSIM <SortButton column="activeEsims" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead className="text-right">Последняя активность</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sorted.map((u) => (
                <TableRow key={u.email}>
                  <TableCell className="font-medium">{u.name}</TableCell>
                  <TableCell className="text-muted-foreground">{u.email}</TableCell>
                  <TableCell>{u.country}</TableCell>
                  <TableCell className="text-right">{u.totalOrders}</TableCell>
                  <TableCell className="text-right">{formatCurrency(u.totalSpent)}</TableCell>
                  <TableCell className="text-right">{u.activeEsims}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{u.lastActivity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

// ===== Consumption Tab =====
function ConsumptionTab({ period, setPeriod, dateRange, setDateRange }: { period: Period; setPeriod: (p: Period) => void; dateRange?: DateRange; setDateRange?: (d: DateRange | undefined) => void }) {
  const [search, setSearch] = useState("");
  const data = mockConsumption[period];
  const filtered = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter(d => d.user.toLowerCase().includes(q) || d.plan.toLowerCase().includes(q) || d.country.toLowerCase().includes(q));
  }, [data, search]);
  const { sorted, sortCol, sortDir, toggle } = useSortable(filtered, "dataUsedMb");

  const totalDataUsed = filtered.reduce((s, d) => s + d.dataUsedMb, 0);
  const avgUsage = filtered.length > 0 ? Math.round(filtered.reduce((s, d) => s + (d.dataUsedMb / d.dataTotalMb) * 100, 0) / filtered.length) : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <PeriodSelector period={period} setPeriod={setPeriod} dateRange={dateRange} setDateRange={setDateRange} />
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Поиск по пользователю, тарифу, стране…" value={search} onChange={e => setSearch(e.target.value)} className="pl-9" maxLength={100} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Общий трафик</CardTitle>
            <Wifi className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{(totalDataUsed / 1024).toFixed(1)} ГБ</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ср. использование</CardTitle>
            <BarChart3 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{avgUsage}%</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Активных eSIM</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{filtered.filter(d => d.status === "active").length}</div></CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Пользователь <SortButton column="user" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead>Тариф <SortButton column="plan" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead>Страна <SortButton column="country" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead className="text-right">Использовано <SortButton column="dataUsedMb" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead>Прогресс</TableHead>
                <TableHead className="text-right">Дни <SortButton column="daysActive" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sorted.map((d, i) => {
                const pct = Math.round((d.dataUsedMb / d.dataTotalMb) * 100);
                const st = statusLabels[d.status];
                return (
                  <TableRow key={`${d.user}-${i}`}>
                    <TableCell className="font-medium">{d.user}</TableCell>
                    <TableCell>{d.plan}</TableCell>
                    <TableCell>{d.country}</TableCell>
                    <TableCell className="text-right">{(d.dataUsedMb / 1024).toFixed(1)} / {(d.dataTotalMb / 1024).toFixed(0)} ГБ</TableCell>
                    <TableCell className="min-w-[100px]"><Progress value={pct} className="h-2" /></TableCell>
                    <TableCell className="text-right">{d.daysActive} / {d.daysTotal}</TableCell>
                    <TableCell><span className={`text-xs px-2 py-1 rounded-full font-medium ${st.className}`}>{st.label}</span></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

// ===== Purchases Tab =====
function PurchasesTab({ period, setPeriod, dateRange, setDateRange }: { period: Period; setPeriod: (p: Period) => void; dateRange?: DateRange; setDateRange?: (d: DateRange | undefined) => void }) {
  const [search, setSearch] = useState("");
  
  // Use flat data filtered by dateRange, or period-based data
  const baseData = useMemo(() => {
    if (dateRange?.from) {
      const filtered = filterByDateRange(allPurchasesFlat, dateRange);
      return filtered as PurchaseData[];
    }
    return mockPurchases[period];
  }, [period, dateRange]);

  const filtered = useMemo(() => {
    if (!search.trim()) return baseData;
    const q = search.toLowerCase();
    return baseData.filter(d => d.user.toLowerCase().includes(q) || d.orderId.toLowerCase().includes(q) || d.country.toLowerCase().includes(q) || d.plan.toLowerCase().includes(q));
  }, [baseData, search]);

  const totalRevenue = filtered.reduce((s, p) => s + (p.status === "completed" ? p.amount : 0), 0);
  const completedOrders = filtered.filter(p => p.status === "completed").length;
  const refundedOrders = filtered.filter(p => p.status === "refunded").length;

  const userStats = useMemo(() => {
    const map = new Map<string, { orders: number; spent: number }>();
    filtered.forEach(d => {
      const cur = map.get(d.user) || { orders: 0, spent: 0 };
      cur.orders++;
      if (d.status === "completed") cur.spent += d.amount;
      map.set(d.user, cur);
    });
    return Array.from(map.entries()).sort((a, b) => b[1].spent - a[1].spent);
  }, [filtered]);

  const totalOrders = filtered.length;
  const refunds = refundedOrders;
  const userSummary = userStats;
  const { sorted, sortCol, sortDir, toggle } = useSortable(filtered, "amount");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <PeriodSelector period={period} setPeriod={setPeriod} dateRange={dateRange} setDateRange={setDateRange} />
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Поиск по пользователю, заказу, стране…" value={search} onChange={e => setSearch(e.target.value)} className="pl-9" maxLength={100} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Выручка</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{formatCurrency(totalRevenue)}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Заказов</CardTitle>
            <ShoppingCart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{totalOrders}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Средний чек</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{totalOrders > 0 ? formatCurrency(Math.round(totalRevenue / totalOrders)) : "—"}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Возвратов</CardTitle>
            <Repeat className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-foreground">{refunds}</div></CardContent>
        </Card>
      </div>

      {/* Per-user summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground text-base">
            <Users className="h-4 w-4 text-primary" />
            Покупки по пользователям
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {userSummary.map(([user, stats]) => (
              <div key={user} className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                <div>
                  <p className="font-medium text-sm">{user}</p>
                  <p className="text-xs text-muted-foreground">{stats.orders} заказ(ов)</p>
                </div>
                <p className="font-bold">{formatCurrency(stats.spent)}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All orders */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base text-foreground">Все заказы</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Заказ</TableHead>
                <TableHead>Пользователь <SortButton column="user" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead>Тариф</TableHead>
                <TableHead>Страна <SortButton column="country" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead className="text-right">Сумма <SortButton column="amount" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead>Дата <SortButton column="date" currentSort={sortCol} currentDir={sortDir} onSort={toggle} /></TableHead>
                <TableHead>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sorted.map((p) => {
                const st = statusLabels[p.status];
                return (
                  <TableRow key={p.orderId}>
                    <TableCell className="font-mono text-xs">{p.orderId}</TableCell>
                    <TableCell className="font-medium">{p.user}</TableCell>
                    <TableCell>{p.plan}</TableCell>
                    <TableCell>{p.country}</TableCell>
                    <TableCell className="text-right font-medium">{formatCurrency(p.amount)}</TableCell>
                    <TableCell className="text-muted-foreground">{p.date}</TableCell>
                    <TableCell><span className={`text-xs px-2 py-1 rounded-full font-medium ${st.className}`}>{st.label}</span></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

// ===== Main Admin Component =====
const Admin = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [period, setPeriod] = useState<Period>("month");
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2026, 1, 1),
    to: new Date(),
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-lg font-bold text-foreground">Silk eSIM — Админ-панель</h1>
              <p className="text-xs text-muted-foreground">Управление и аналитика</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground hidden sm:inline">Система работает</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-6">
        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as AdminTab)}>
          <TabsList className="grid grid-cols-4 w-full max-w-2xl">
            {(Object.keys(tabLabels) as AdminTab[]).map((tab) => {
              const Icon = tabLabels[tab].icon;
              return (
                <TabsTrigger key={tab} value={tab} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {tabLabels[tab].label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <DashboardTab period={period} setPeriod={setPeriod} dateRange={dateRange} setDateRange={setDateRange} />
          </TabsContent>
          <TabsContent value="users" className="mt-6">
            <UsersTab period={period} setPeriod={setPeriod} dateRange={dateRange} setDateRange={setDateRange} />
          </TabsContent>
          <TabsContent value="consumption" className="mt-6">
            <ConsumptionTab period={period} setPeriod={setPeriod} dateRange={dateRange} setDateRange={setDateRange} />
          </TabsContent>
          <TabsContent value="purchases" className="mt-6">
            <PurchasesTab period={period} setPeriod={setPeriod} dateRange={dateRange} setDateRange={setDateRange} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
