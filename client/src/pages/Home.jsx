import React, { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Gallery
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">
          Take a look around what AI has created...
        </p>
      </div>
      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results for <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}
          </>
        )}
      </div>
    </section>
  )
}
