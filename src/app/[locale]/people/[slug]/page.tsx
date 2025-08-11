import { notFound } from "next/navigation";
import { people } from "@/entities/people/data";
import PersonDetailsClient from "@/pages/person/index";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PersonPage({ params }: PageProps) {
  const { slug } = await params; 
  const person = people.find((p) => p.slug === slug);

  if (!person) return notFound();

  return <PersonDetailsClient person={person} />;
}
