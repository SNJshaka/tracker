import React from "react";
import { MdDashboard } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { FaUserAlt, FaNutritionix } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const dashboardItems = [
  { name: "Dashboard", link: "/", icon: <MdDashboard /> },
  { name: "Food Log", link: "/diary", icon: <GiNotebook /> },
  { name: "Nutrition", link: "/nutrition", icon: <FaNutritionix /> },
  { name: "Profile", link: "/profile", icon: <FaUserAlt /> },
];

const DashboardNav = () => {
  const dashboardBoxClasses = `bg-[#001b37] p-4 pt-8 mb-2 rounded-lg shadow-lg shadow-black-500/30 justify-center flex gap-6`;
  const linkTextClasses = `text-xs 2xl:text-lg 3xl:text-2xl capitalize`;
  const iconsClasses =
    "group-hover:-translate-y-1.5 duration-200 text-xl 2xl:text-3xl";

  const renderDashboardItems = dashboardItems.map((item) => {
    return (
      <NavLink
        key={item.name}
        to={item.link}
        end={true}
        className={({ isActive }) => (isActive ? `link active` : "link")}
      >
        <span className={iconsClasses}>{item.icon}</span>
        <p className={linkTextClasses}>{item.name}</p>
      </NavLink>
    );
  });

  return <div className={dashboardBoxClasses}>{renderDashboardItems}</div>;
};

export default DashboardNav;
