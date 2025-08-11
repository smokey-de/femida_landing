import { notFound } from "next/navigation";

import { people } from "@/entities/people/data";
import PersonDetailsClient from "@/pages/person/index";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function PersonPage({ params }: PageProps) {
  const person = people.find((p) => p.slug === params.slug);

  if (!person) return notFound();

  return <PersonDetailsClient person={person} />;
}
