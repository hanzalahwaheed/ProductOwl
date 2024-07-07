"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";

const isValidAmazonProductUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostName = parsedUrl.hostname;

    if (
      hostName.includes("amazon.com") ||
      hostName.includes("amazon.") ||
      hostName.endsWith("amazon")
    ) {
      return true;
    } else return false;
  } catch (error) {
    return false;
  }
};

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductUrl(searchPrompt);
    if (!isValidLink) return alert("Please provide a valid Amazon Link!");
    try {
      setIsLoading(true);
      await scrapeAndStoreProduct(searchPrompt);      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap mt-12 gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ""}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
