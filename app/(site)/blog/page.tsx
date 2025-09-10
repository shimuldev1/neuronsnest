"use client";

import Loading from "@/components/Loading/page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [tags, setTags] = useState("");
  const router = useRouter();

  // Fetch and filter blogs on searchText change
  useEffect(() => {
    setLoading(true);
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((result) => {
        const match = result.filter((p: any) =>
          p.title?.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResult(match);
        setTimeout(() => {
          setLoading(false);
        }, 500); // Optional delay for better UX
      })
      .catch((error) => {
        console.error("Failed to fetch blog data:", error);
        setLoading(false);
      });
  }, [searchText]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleBlog = (id: string) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-25">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="🔍 Search blogs..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 my-5"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["web-development", "app-development", "Marketing", "AI"].map(
          (tag) => (
            <button
              key={tag}
              onClick={() => setTags(tag.toLowerCase())}
              className={`px-4 py-2 text-sm font-medium rounded-full transition duration-200 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark dark:text-white ${
                tags === tag.toLowerCase()
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          )
        )}
      </div>

      {/* Blog Grid */}
      {isLoading ? (
        <Loading></Loading>
      ) : searchResult.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No blogs found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResult
            .filter((b) =>
              tags
                ? b.tags?.includes(tags) || b.categories?.includes(tags)
                : true
            )
            .map((blog) => (
              <div
                key={blog._id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={
                      blog.image?.startsWith("/")
                        ? blog.image
                        : `/images/default.jpg`
                    }
                    alt={blog.title || "Blog image"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between h-[230px]">
                  <div>
                    <h2 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 dark:text-white">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-3 dark:text-gray-400">
                      {blog.content?.[0]?.text?.slice(0, 120) ??
                        "No content available"}
                      ...
                    </p>
                  </div>
                  <button
                    onClick={() => handleBlog(blog._id)}
                    className="mt-4 inline-block w-full bg-black text-white py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
