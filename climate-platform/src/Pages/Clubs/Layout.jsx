import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./header";
import Dashboard from "./Dashboard";
import DataCollection from "./DataCollection";
import Projects from "./Projects";
import Earnings from "./Earnings";
import Profile from "./Profile";

export default function Layout() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "projects":
        return <Projects />;
      case "earnings":
        return <Earnings />;
      case "profile":
        return <Profile />;
      case "data-primary":
        return <DataCollection level="Primary" />;
      case "data-highschool":
        return <DataCollection level="High School" />;
      case "data-university":
        return <DataCollection level="University" />;
      default:
        return <div style={{ padding: 20 }}>Select a menu item</div>;
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#ffffff" }}>
      {/* Sidebar on the left */}
      <div style={{ width: 240 }}>
        <Sidebar onSelect={setActivePage} activePage={activePage} />
      </div>

      {/* Main content area */}
      <div style={{ flex: 1, padding: 20, overflowY: "auto" }}>
        <Header>CLIMATE CADETS CLUB</Header>
        {renderContent()}
      </div>
    </div>
  );
}
