"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.icon className="w-8 h-8" />
                            <span className="text-xl font-medium">Nicolas Clay</span>
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="#hero">
                            <Button variant="ghost" size="sm">
                                Login
                            </Button>
                        </Link>
                        <Link href="#hero">
                            <Button size="sm">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    <MobileMenu />
                </div>
            </Wrapper>
        </header>
    );
};

export default Navbar;
