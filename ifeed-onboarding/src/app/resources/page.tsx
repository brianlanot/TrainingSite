// src/app/resources/page.tsx
import { Suspense } from "react";
import ResourcesContent from "./ResourcesContent";

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div className="text-center p-12 text-gray-500">Loading resources...</div>}>
      <ResourcesContent />
    </Suspense>
  );
}
