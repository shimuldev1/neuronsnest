import { Metadata } from "next";
import Image from "next/image";

declare module "next" {
  interface PageProps {
    params: Record<string, string>;
    searchParams?: Record<string, string | string[] | undefined>;
  }
}

interface BlogContent {
  type: string;
  text: string;
}

interface BlogAuthor {
  name: string;
  email: string;
}

interface Blog {
  _id: string;
  title: string;
  image: string;
  tags?: string[];
  categories?: string[];
  content: BlogContent[];
  author: BlogAuthor;
}

interface PageProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}
async function getBlog(id: string): Promise<Blog | null> {
  try {
    const res = await fetch(`http://localhost:3000/blogs.json`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const blogs: Blog[] = await res.json();
    console.log("Server getBlog: blogs fetched", blogs);
    console.log("Server getBlog: searching for id", id);

    const blog = blogs.find((blog) => blog._id === id);
    console.log("Server getBlog: found blog?", blog ? "Yes" : "No");

    return blog || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = params;
  console.log("Server BlogDetailPage id:", id);

  const blog = await getBlog(id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Blog not found. It might have been moved or deleted.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-16 mt-30">
      {/* Header Section */}
      <header className="mb-12">
        <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {tag}
            </span>
          ))} 
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
            <Image
              width={50}
              height={50}
              src="/images/logo/NeuronsNest_logo.png"
              alt="Logo"
              className="dark:hidden"
            />
            <Image
              width={50}
              height={50}
              src="/images/logo/NeuronsNest_logo_Dark.png"
              alt="Logo"
              className="hidden dark:block"
            />
          </div>

          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              {blog.author.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {blog.author.email}
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {blog.content.map((section, index) => {
          if (!section.text && !section.type) return null;

          return (
            <section key={index} className="mb-8">
              {section.type && (
                <h2 className="text-2xl font-semibold text-primary dark:text-blue-400 mb-4">
                  {section.type}
                </h2>
              )}
              {section.text && (
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.text}
                </p>
              )}
            </section>
          );
        })}
      </div>

      {/* Footer Section */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              Written by {blog.author.name}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {blog.author.email}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {blog.categories?.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
              >
                {/* {category} */}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </article>
  );
}
