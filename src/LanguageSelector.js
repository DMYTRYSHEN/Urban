// import React from "react";

// const LanguageSelector = () => {
//   const handleLanguageChange = (event) => {
//     const language = event.target.value;

//     if (language) {
//       // Створюємо URL для автоматичного перекладу сторінки
//       const currentUrl = window.location.href;
//       const translateUrl = `https://translate.google.com/translate?hl=${language}&sl=auto&tl=${language}&u=${encodeURIComponent(
//         currentUrl
//       )}`;

//       // Перенаправляємо на URL перекладу
//       window.location.href = translateUrl;
//     }
//   };

//   return (
//     <select
//       id="language"
//       onChange={handleLanguageChange}
//       className="border px-2 py-1 rounded"
//       style={{ width: "125px" }}
//     >
//       <option value="">Language</option>
//       <option value="az">🇦🇿 Azərbaycan</option>
//       <option value="ar">🇸🇦 العربية</option>
//       <option value="be">🇧🇾 Беларуская</option>
//       <option value="de">🇩🇪 Deutsch</option>
//       <option value="en">🇺🇸 English</option>
//       <option value="es">🇪🇸 Español</option>
//       <option value="fr">🇫🇷 Français</option>
//       <option value="hy">🇦🇲 Հայերեն</option>
//       <option value="it">🇮🇹 Italiano</option>
//       <option value="ja">🇯🇵 日本語</option>
//       <option value="ka">🇬🇪 ქართული</option>
//       <option value="kk">🇰🇿 Қазақ</option>
//       <option value="ko">🇰🇷 한국어</option>
//       <option value="ky">🇰🇬 Кыргызча</option>
//       <option value="pt">🇵🇹 Português</option>
//       <option value="ru">🇷🇺 Русский</option>
//       <option value="tr">🇹🇷 Türkçe</option>
//       <option value="uk">🇺🇦 Українська</option>
//       <option value="uz">🇺🇿 Oʻzbek</option>
//       <option value="zh-CN">🇨🇳 中文 (简体)</option>
//     </select>
//   );
// };

// export default LanguageSelector;
import React, { useState } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "no", name: "Norwegian", flag: "🇳🇴" },
  { code: "sv", name: "Swedish", flag: "🇸🇪" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "pl", name: "Polish", flag: "🇵🇱" },
  { code: "uk", name: "Ukrainian", flag: "🇺🇦" },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to English
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);

    // Translate the page
    const currentUrl = window.location.href;
    const translateUrl = `https://translate.google.com/translate?hl=${language.code}&sl=auto&tl=${language.code}&u=${encodeURIComponent(
      currentUrl
    )}`;
    window.location.href = translateUrl;
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown button */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center justify-between w-40 px-4 py-2 border border-gray-300 rounded shadow-sm bg-white hover:bg-gray-100 focus:outline-none"
      >
        <span className="flex items-center">
          <span className="mr-2 text-xl">{selectedLanguage.flag}</span>
          {selectedLanguage.name}
        </span>
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.3l3.72-4.07a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0L5.21 8.3a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div className="absolute left-0 w-40 mt-2 bg-white border border-gray-300 rounded shadow-lg">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              <span className="mr-2 text-xl">{language.flag}</span>
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
