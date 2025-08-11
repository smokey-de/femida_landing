import { notFound } from "next/navigation";

import Person from "@/shared/ui/person";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function People({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) return notFound();

  return <Person slug={slug} />;
}

export default People;
