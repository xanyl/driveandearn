/* The code you provided is a TypeScript React component called `StoryPage`. It is a form that allows
users to generate a story based on keywords and language selection. */

import React, { useState } from "react";
import axios from "axios";

const StoryPage = () => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [currentKeyword, setCurrentKeyword] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [story, setStory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleKeywordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentKeyword(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && currentKeyword.trim() !== "") {
      addKeyword();
    }
  };

  const addKeyword = () => {
    if (currentKeyword.trim() !== "") {
      setKeywords((prevKeywords) => [...prevKeywords, currentKeyword.trim()]);
      setCurrentKeyword("");
    }
  };

  const removeKeyword = (index: number) => {
    setKeywords((prevKeywords) => prevKeywords.filter((_, i) => i !== index));
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  const generateStory = async () => {
    setLoading(true);
    setError("");
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
      console.log(apiKey);

      // const response = await axios.post(
      //   "https://api.openai.com/v1/engines/davinci/completions",
      //   {
      //     prompt: `Once upon a time, in a land far, far away, there was ${keywords.join(
      //       ", "
      //     )}.`,
      //     max_tokens: 500,
      //     temperature: 0.5,
      //     stop: "\n\n",
      //     n: 1,
      //     language: language.toLowerCase(),
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${apiKey}`,
      //     },
      //   }
      // );
      const response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },

        body: JSON.stringify({
          prompt: `Once upon a time, in a land far, far away, there was ${keywords.join(
            ", "
          )}.`,
          max_tokens: 500,
          temperature: 0.5,
          stop: "\n\n",
          n: 1,
          language: language.toLowerCase(),
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
          setStory(data.choices[0].text);
        }
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Failed to generate story");
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center rounded-md">
      <h1 className="text-4xl font-bold my-4">Story App</h1>
      <div className="bg-white p-8 rounded shadow-md w-96 max-w-full mb-4">
        <label htmlFor="keywords" className="block mb-2">
          Keywords:
        </label>
        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className="bg-pink-200 rounded px-2 py-1 flex items-center"
            >
              <span className="mr-2">{keyword}</span>
              <button
                onClick={() => removeKeyword(index)}
                className="text-red-600 font-semibold"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <input
          type="text"
          id="keywords"
          value={currentKeyword}
          onChange={handleKeywordsChange}
          onKeyDown={handleKeyDown}
          placeholder="Press Enter to add a keyword"
          className="border rounded py-2 px-3 mb-4 w-full"
        />

        <label htmlFor="language" className="block mb-2">
          Language:
        </label>
        <select
          id="language"
          onChange={handleLanguageChange}
          className="border rounded py-2 px-3 mb-4 w-full"
        >
          <option value="">Select Language</option>
          <option value="Nepali">Nepali</option>
          <option value="Japanese">Japanese</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
          <option value="Hinglish">Hinglish</option>
          <option value="Korean">Korean</option>
        </select>

        <button
          onClick={generateStory}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-gray-400"
        >
          Generate Story
        </button>

        {loading && (
          <h2 className="loading text-lg mt-4">Generating story...</h2>
        )}
        {error && (
          <h2 className="error text-lg mt-4 text-red-600">Error: {error}</h2>
        )}
        {story && <div className="story-container mt-4">{story}</div>}
      </div>
    </div>
  );
};

export default StoryPage;
