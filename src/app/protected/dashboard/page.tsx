"use client";
import { Button } from "@/app/components/Button";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a paragraph in the dashboard</p>
      <Button onClick={() => alert("hello")} text="Click me" />
    </div>
  );
};

export default DashboardPage;
