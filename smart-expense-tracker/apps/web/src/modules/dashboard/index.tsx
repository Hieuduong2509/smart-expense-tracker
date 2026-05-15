import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ChevronDown, PenLine, Scan, Smile } from "lucide-react";

// Mock Data
const budgetData = {
    monthlyGoal: 5000000,
    spentOfMonth: 2600000,
    currentDailyBudget: 1450000,
    daysRemaining: 20,
};

const chartData = [
    { day: "Sun", value: 5, label: "0:0" },
    { day: "Mon", value: 45, label: "100,000" },
    { day: "Tue", value: 85, label: "200,000" },
    { day: "Wed", value: 35, label: "100,000" },
    { day: "Thu", value: 60, label: "150,000" },
    { day: "Fri", value: 25, label: "50,000" },
    { day: "Sat", value: 50, label: "120,000" },
];

const recentExpenses = [
    { id: 1, date: "01/13/2023", merchant: " Supermarket", category: "Food", amount: 145000, source: "OCR" },
    { id: 2, date: "01/13/2023", merchant: " Coffee", category: "Shopping", amount: 160000, source: "Manual" },
    { id: 3, date: "01/13/2023", merchant: " Coffee", category: "Food", amount: 160000, source: "Manual" },
    { id: 4, date: "01/13/2023", merchant: " Supermarket", category: "Food", amount: 145000, source: "OCR" },
];

export function DashboardModule() {
    const percentSpent = Math.round((budgetData.spentOfMonth / budgetData.monthlyGoal) * 100);


    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentSpent / 100) * circumference;

    return (
        <div className="p-8 pt-6 bg-slate-50 min-h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-800">Dashboard</h2>
            </div>

            <div className="flex flex-col gap-6">
                { }
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    { }
                    <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">

                        { }
                        <Card className="border-slate-200 shadow-sm">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base font-semibold text-slate-800">Monthly Budget Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Current Daily Budget</p>
                                    <div className="text-4xl font-bold text-slate-900">
                                        {budgetData.currentDailyBudget.toLocaleString("vi-VN")} VND
                                    </div>
                                    <p className="text-xs text-slate-400 mt-1">recalculated after yesterday's spend</p>
                                </div>

                                {/* Circular Progress */}
                                <div className="relative h-28 w-28 flex items-center justify-center -mt-10 mr-4">
                                    <svg className="transform -rotate-90 w-full h-full ">
                                        <circle cx="56" cy="56" r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                                        <circle
                                            cx="56"
                                            cy="56"
                                            r={radius}
                                            stroke="currentColor"
                                            strokeWidth="10"
                                            fill="transparent"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={strokeDashoffset}
                                            strokeLinecap="round"
                                            className="text-emerald-500"
                                        />
                                    </svg>
                                    <div className="absolute flex flex-col items-center justify-center">
                                        <span className="text-xl font-bold text-slate-800">{percentSpent}%</span>
                                        <span className="text-[10px] text-slate-400">5,000,000 VND</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        { }
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            { }
                            <Card className="border-slate-200 shadow-sm">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-semibold text-slate-800">Spent Today</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-32 flex items-end justify-between gap-2 mt-4 relative">
                                        {/* Y-axis labels mock */}
                                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-slate-400 pb-6">
                                            <span>300,000</span>
                                            <span>200,000</span>
                                            <span>100,000</span>
                                            <span>0</span>
                                        </div>
                                        {/* Bars */}
                                        <div className="flex items-end justify-between gap-2 w-full pl-12 h-full pb-6">
                                            {chartData.map((data, index) => (
                                                <div key={index} className="flex flex-col items-center gap-2 w-full">
                                                    <div
                                                        className="w-full bg-emerald-500 rounded-t-sm"
                                                        style={{ height: `${data.value}%` }}
                                                    ></div>
                                                </div>
                                            ))}
                                        </div>
                                        { }
                                        <div className="absolute bottom-0 left-12 right-0 flex justify-between text-[10px] text-slate-500">
                                            {chartData.map((data, index) => (
                                                <span key={index}>{data.day}</span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            { }
                            <Card className="border-slate-200 shadow-sm flex flex-col justify-center p-6 gap-4">
                                <Button className="w-full bg-[#1e40af] hover:bg-blue-800 text-white font-medium rounded-lg h-12">
                                    Add New Expense
                                </Button>
                                <div className="grid grid-cols-2 gap-3">
                                    <Button variant="outline" className="flex items-center gap-2 h-10 border-slate-200 text-slate-600 rounded-lg">
                                        <Scan className="w-4 h-4" />
                                        <span className="text-xs font-medium">Scan Receipt (OCR)</span>
                                    </Button>
                                    <Button variant="outline" className="flex items-center gap-2 h-10 border-slate-200 text-slate-600 rounded-lg">
                                        <PenLine className="w-4 h-4" />
                                        <span className="text-xs font-medium">Manual Entry</span>
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>

                    { }
                    <div className="col-span-1">
                        <Card className="h-full border-slate-200 shadow-sm flex flex-col">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-sm font-semibold text-slate-800">Today's Insights (Tier 3 AI)</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <div className="bg-[#fdf6e3] rounded-xl p-6 flex-1 flex flex-col items-center justify-center text-center gap-4 relative">
                                    <AlertTriangle className="w-10 h-10 text-amber-400 stroke-[1.5]" />
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        Overspent slightly? Re-focus on the remaining <span className="font-bold">20 days</span> with a tighter <span className="font-bold">120k/day</span> plan. You can do it!
                                    </p>
                                </div>
                                <div className="mt-4 flex">
                                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-none px-3 py-1.5 flex items-center gap-1.5 rounded-full font-medium">
                                        <Smile className="w-4 h-4" /> Great
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                { }
                { }
                <Card className="border-slate-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between py-4">
                        <CardTitle className="text-base font-semibold text-slate-800">Recent Transactions</CardTitle>
                        <Button variant="outline" size="sm" className="h-8 text-xs font-medium border-slate-200 text-slate-600">
                            New Transactions <ChevronDown className="ml-1 w-3 h-3" />
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-slate-50/50">
                                <TableRow className="border-slate-100">
                                    <TableHead className="text-xs font-medium text-slate-500 h-10 pl-6">Date</TableHead>
                                    <TableHead className="text-xs font-medium text-slate-500 h-10">Merchant</TableHead>
                                    <TableHead className="text-xs font-medium text-slate-500 h-10">Category</TableHead>
                                    <TableHead className="text-xs font-medium text-slate-500 h-10">Amount</TableHead>
                                    <TableHead className="text-xs font-medium text-slate-500 h-10 pr-6">Source</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentExpenses.map((expense) => (
                                    <TableRow key={expense.id} className="border-slate-100">
                                        <TableCell className="text-sm text-slate-600 pl-6 py-3">{expense.date}</TableCell>
                                        <TableCell className="text-sm text-slate-800 font-medium py-3">{expense.merchant}</TableCell>
                                        <TableCell className="text-sm text-slate-600 py-3">{expense.category}</TableCell>
                                        <TableCell className="text-sm text-slate-800 font-medium py-3">
                                            {expense.amount.toLocaleString("vi-VN")} VND
                                        </TableCell>
                                        <TableCell className="py-3 pr-6">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-500">
                                                {expense.source}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}