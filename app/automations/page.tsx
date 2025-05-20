import { client } from "@/sanity/lib/client";
import AutomationGrid from "@/app/automations/automation-grid";
import { SanityTypes } from "@/@types";
import ShowcaseNavbar from "@/components/showcase-navbar";
import Footer from "@/components/footer";

export const revalidate = 60;

const AUTOMATIONS_PER_PAGE = 6;

interface AutomationResponse {
  automations: SanityTypes.Automation[];
  total: number;
}

interface CategoryResponse {
  categories: SanityTypes.AutomationCategory[];
}

async function getCategories(): Promise<CategoryResponse> {
  const query = `{
    "categories": *[_type == "automationCategory"] {
      _id,
      title,
      description
    }
  }`;

  return client.fetch(query);
}

async function getAutomations(page: number, categoryId?: string): Promise<AutomationResponse> {
  const start = (page - 1) * AUTOMATIONS_PER_PAGE;
  const end = start + AUTOMATIONS_PER_PAGE;

  const categoryFilter = categoryId ? `&& category._ref == "${categoryId}"` : '';

  const query = `{
    "automations": *[_type == "automation" ${categoryFilter}] | order(_createdAt desc) [$start...$end] {
      _id,
      title,
      description,
      image,
      "slug": slug.current,
      "category": category->{
        _id,
        title
      },
      _createdAt
    },
    "total": count(*[_type == "automation" ${categoryFilter}])
  }`;

  return client.fetch(query, { start, end });
}

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Automations({ searchParams }: PageProps) {
  const params = await searchParams;
  const pageParam = params?.page;
  const categoryParam = params?.category;
  const currentPage = typeof pageParam === 'string' ? Number(pageParam) : 1;
  const selectedCategory = typeof categoryParam === 'string' ? categoryParam : undefined;
  
  const [{ automations, total }, { categories }] = await Promise.all([
    getAutomations(currentPage, selectedCategory),
    getCategories()
  ]);
  
  const totalPages = Math.ceil(total / AUTOMATIONS_PER_PAGE);

  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <ShowcaseNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Automation Templates for Your Business</h1>
        <AutomationGrid 
          automations={automations} 
          categories={categories}
          currentPage={currentPage} 
          totalPages={totalPages}
          selectedCategory={selectedCategory}
        />
      </main>
      <Footer />
    </div>
  );
}
