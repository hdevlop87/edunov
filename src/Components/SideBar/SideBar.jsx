import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils";
import Item from './Item'
import { navItems } from '@/lib/navItems'
import Header from './Header'
import { signOut } from "next-auth/react"
import { useSpring, animated } from '@react-spring/web';
import { useTranslations } from 'next-intl';

const SideBar = () => {

  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const sidebarVariants = cva(
    "flex flex-col items-start h-full  bg-purple-normal transition-width duration-300 ",
    {
      variants: {
        isOpen: {
          true: "w-[225px] min-w-[225px]",
          false: "w-[72px] min-w-[72px]"
        }
      },
      defaultVariants: {
        isOpen: true
      }
    }
  );

  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const filterNavItems = (navItems, role) => {
    return navItems.reduce((result, item) => {
      if (!item.allowedRoles || item.allowedRoles.includes(role)) {
        const newItem = { ...item };
        if (newItem.subMenu) {
          newItem.subMenu = newItem.subMenu.filter(subItem => subItem.allowedRoles.includes(role));
          if (newItem.subMenu.length === 1) {
            newItem.route = newItem.subMenu[0].route;
            newItem.name = newItem.subMenu[0].name;
            delete newItem.subMenu;
          }
        }
        return [...result, newItem];
      }
      return result;
    }, []);
  };

  const role = "teacher"; 

  const processedNavItems = filterNavItems(navItems, role);


  return (
    <div className={cn(sidebarVariants({ isOpen }))}>

      <Header isOpen={isOpen} onClick={toggleSidebar} />

      <div className='flex flex-col w-full h-full justify-between pt-16'>

        <div className='flex flex-col  w-full gap-2 px-4'>
          {
            processedNavItems.map(({ route, icon, label, subMenu }, index) => (
              <div key={index} className='flex flex-col justify-start items-start w-full'>
                <Item
                  icon={icon}
                  label={t(`sideBar.${label}`)}
                  selected={!subMenu && pathname === route}
                  onClick={() => !!subMenu ? toggleSubmenu(index) : handleNavigation(route)}
                  collapsed={!isOpen}
                  hasSubmenu={!!subMenu}
                  isOpenMenu={!!subMenu && openSubmenu}
                />
                {
                  !!subMenu &&
                  <animated.div style={useSpring({ height: openSubmenu === index ? subMenu.length * 40 : 0})} className="w-full overflow-hidden">
                    {
                      subMenu.map((subItem, subIndex) => (
                        <Item
                          key={`${index}-${subIndex}`}
                          icon={subItem.icon}
                          label={t(`sideBar.${subItem.name}`)}
                          selected={pathname === subItem.route}
                          onClick={() => handleNavigation(subItem.route)}
                          collapsed={!isOpen}
                          isSubitem
                        />
                      ))
                    }
                  </animated.div>
                }
              </div>
            ))
          }
        </div>
        <div className="flex flex-col justify-start items-start self-stretch mb-4 gap-2 px-4">
          <Item icon='fa6-solid:gear' label='Setting' collapsed={!isOpen} />
          <Item icon='mdi:logout' label='Logout' collapsed={!isOpen} onClick={() => signOut()} />
        </div>
      </div>

    </div>
  )
}

export default SideBar