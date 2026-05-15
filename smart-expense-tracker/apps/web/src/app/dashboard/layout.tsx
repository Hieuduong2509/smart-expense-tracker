
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ReceiptText, PieChart, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Expenses", href: "/dashboard/expenses", icon: ReceiptText },
    { name: "Reports", href: "/dashboard/reports", icon: PieChart },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
                <div className="h-16 flex items-center px-6 border-b border-slate-200">
                    <span className="font-bold text-xl text-slate-800">Smart Expense</span>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.name} href={item.href}>
                                <span
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-slate-100 text-blue-600"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    )}
                                >
                                    <item.icon className={cn("h-5 w-5", isActive ? "text-blue-600" : "text-slate-400")} />
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-200">
                    <button className="flex items-center gap-3 px-3 py-2 w-full text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">
                        <LogOut className="h-5 w-5 text-slate-400 hover:text-red-600" />
                        Đăng xuất
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto">
                { }
                {children}
            </main>
        </div>
    );
}