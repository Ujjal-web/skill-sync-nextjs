'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';


const Button = ({ children, variant = 'primary', ...props }) => (
    <button
        className={`px-4 py-2 rounded-lg transition duration-200 font-semibold ${variant === 'primary' ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md' : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
        {...props}
    >
        {children}
    </button>
);


const UserDropdown = ({ user, onLogout }) => {
    const name = user?.name || 'User';
    const email = user?.email || 'email not found';

    return (
        <div className="relative group">
            <button className="flex items-center space-x-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <span className="text-sm font-medium hidden lg:inline">{name}</span>
                {/* Avatar Placeholder */}
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-bold shadow-inner">
                    {name.charAt(0)}
                </div>
            </button>

            {/* Dropdown Content */}
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 
                      opacity-0 group-hover:opacity-100 invisible group-hover:visible 
                      transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top-right">

                {/* User Info Header */}
                <div className="p-4 border-b border-gray-100">
                    <p className="text-sm font-bold text-gray-900 truncate">{name}</p>
                    <p className="text-xs text-gray-500 truncate">{email}</p>
                </div>

                {/* Navigation Links */}
                <div className="py-1">
                    <Link href="/dashboard/add-skill" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                        Add a Skill
                    </Link>
                    <Link href="/dashboard/manage-skills" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Manage My Skills
                    </Link>
                </div>

                {/* Logout */}
                <div className="border-t border-gray-100">
                    <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-b-xl transition flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'The Exchange', href: '/exchange' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
];

/**
 * Primary navigation bar for the SkillSync application.
 */
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname();

    // --- LIVE Authentication State using NextAuth ---
    const { data: session, status } = useSession(); // <-- Fetch session status and data

    const isAuthenticated = status === 'authenticated';
    const user = session?.user; // Access the user object within the session
    const isLoading = status === 'loading';

    const handleLogout = () => {
        // Call NextAuth signOut function and redirect to login page
        signOut({ callbackUrl: '/login' });
    };
    // ----------------------------------------------------------------

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50); // Becomes sticky after 50px scroll
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const baseClasses = `fixed top-0 transition-all duration-300 w-full z-40 ${isSticky ? 'shadow-xl bg-white/95 backdrop-blur-sm border-b border-gray-100 h-14' : 'bg-white h-16'
        }`;

    const linkBaseClasses = 'px-3 py-2 rounded-lg text-sm font-medium transition duration-150';

    // Show a loading state while authentication is being checked
    if (isLoading) {
        return (
            <nav className={baseClasses}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
            </nav>
        );
    }

    return (
        <nav className={baseClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">

                {/* Logo/Brand */}
                <div className="shrink-0">
                    <Link href="/" className="text-2xl font-extrabold text-indigo-700">
                        SkillSync
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex md:items-center md:space-x-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`${linkBaseClasses} ${isActive
                                    ? 'bg-indigo-50 text-indigo-700'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Auth/Action Buttons */}
                <div className="hidden md:block">
                    {isAuthenticated && user ? ( // User must exist to render dropdown
                        <UserDropdown user={user} onLogout={handleLogout} />
                    ) : (
                        <div className="flex items-center space-x-3">
                            <Link href="/login">
                                <Button variant="secondary">Login</Button>
                            </Link>
                            <Link href="/register">
                                <Button variant="primary">Register</Button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-150"
                    >
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> // X icon
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100 shadow-lg`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="pt-4 border-t border-gray-100">
                        {isAuthenticated && user ? (
                            <>
                                <p className="px-3 py-2 text-sm font-semibold text-gray-800 border-b border-gray-100 mb-1">Signed in as: {user.name}</p>
                                <Link href="/dashboard/add-skill" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50">
                                    Add a Skill
                                </Link>
                                <Link href="/dashboard/manage-skills" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50">
                                    Manage My Skills
                                </Link>
                                <button onClick={handleLogout} className="w-full text-left block px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <div className="flex flex-col space-y-2 px-3">
                                <Link href="/register">
                                    <Button className="w-full" variant="primary">Register</Button>
                                </Link>
                                <Link href="/login">
                                    <Button className="w-full" variant="secondary">Login</Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}