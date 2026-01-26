"use client";

import { Building2, FileText, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectDetailsTab() {
  const organizationInfo = [
    { label: "Issuing entity", value: "Balancer Labs" },
    { label: "LBPs lauched", value: "+960" },
    { label: "Founded", value: "2018" },
  ];

  const resources = [
    { name: "Whitepaper", url: "https://docs.balancer.fi/whitepaper.pdf" },
    { name: "Documentation", url: "https://docs.balancer.fi" },
    { name: "GitHub", url: "https://github.com/balancer" },
  ];

  const coreTeam = [
    { name: "Fernando", initial: "F" },
    { name: "Nikolai", initial: "N" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Organization Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold">Organization</h3>
        </div>
        <div className="space-y-3">
          {organizationInfo.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center ${
                index < organizationInfo.length - 1 ? "border-b pb-3" : ""
              }`}
            >
              <span className="text-sm text-muted-foreground">
                {item.label}
              </span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold">Resources</h3>
        </div>
        <div className="space-y-2">
          {resources.map((resource, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-between h-auto py-3 px-4 rounded-lg"
              asChild
            >
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full"
              >
                <span>{resource.name}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
