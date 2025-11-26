import { ClockIcon, MessageSquare, BarChart2, FileTextIcon, UserPlusIcon, CreditCardIcon, SettingsIcon, LogOut, Headphones, ChartPieIcon, LucideIcon, MessagesSquareIcon, NewspaperIcon, MegaphoneIcon, LineChartIcon, MessageSquareTextIcon, UsersIcon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: ChartPieIcon,
    },
    {
        href: "/dashboard/campaigns",
        label: "Campaigns",
        icon: MegaphoneIcon
    },
    {
        href: "/dashboard/analytics",
        label: "Analytics",
        icon: LineChartIcon
    },
    {
        href: "/dashboard/posts",
        label: "Posts",
        icon: MessageSquareTextIcon
    },
    {
        href: "/dashboard/engagement",
        label: "Engagement",
        icon: UsersIcon
    },
    {
        href: "/dashboard/billing",
        label: "Billing",
        icon: CreditCardIcon
    },
    {
        href: "/dashboard/settings",
        label: "Settings",
        icon: SettingsIcon
    },
];

export const FOOTER_LINKS = [
    {
        title: "Explore",
        links: [
            { name: "Home", href: "/" },
            { name: "Brand Solutions", href: "/solutions" },
            { name: "Pricing", href: "/pricing" },
            { name: "Contact", href: "/contact" },
            { name: "Start Your Journey", href: "/get-started" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Insights Blog", href: "/blog" },
            { name: "Success Stories", href: "/success-stories" },
            { name: "Workshops & Events", href: "/workshops" },
            { name: "Guides & Playbooks", href: "/guides" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" },
        ],
    },
    {
        title: "Community",
        links: [
            { name: "Mastermind Group", href: "/mastermind" },
            { name: "Support Center", href: "/support" },
            { name: "Partner Network", href: "/partners" },
        ],
    },
];

