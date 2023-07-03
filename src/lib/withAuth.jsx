
'use client';
import React, { useEffect } from 'react';
import { useSession } from "next-auth/react"
import { useRouter, usePathname } from 'next/navigation';
import { navItems } from './navItems';

const getRolesForRoute = (route) => {
    const item = navItems.find((item) => item.route === route);
    return item ? item.allowedRoles : [];
};

const withAuth = (WrappedComponent) => {
    return (props) => {
        const { data: session, status } = useSession();
        const router = useRouter();
        const pathname = usePathname();

        const roles = getRolesForRoute(pathname);

        useEffect(() => {
            if (roles && !roles.includes(session?.user.role)) {
                router.push('/dashboard');

            }
        }, [session]);

        if (roles && !roles.includes(session?.user.role)) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;