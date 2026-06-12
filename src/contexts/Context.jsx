import { createContext, useEffect, useState } from "react";
import { languages } from "../../data";
import axios from "axios";
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("tr");
  const [langData, setLangData] = useState(() => {
    return languages["tr"];
  });
  useEffect(() => {
    setLangData(languages[lang]);
    fetchLanguageData();
  }, [lang]);

  const fetchLanguageData = () => {
    const dataUrl = `https://reqres.in/api/workintech`;
    axios
      .post(dataUrl, languages[lang])
      .then((res) => {
        setLangData(res.data.data ?? languages[lang]);
      })
      .catch(() => {
        setLangData(languages[lang]);
      });
  };

  function changeLang() {
    if (lang === "tr") {
      setLang("en");
    } else {
      setLang("tr");
    }
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  }
  return (
    <MyContext.Provider
      value={{ toggleDarkMode, darkMode, langData, changeLang, lang }}
    >
      {children}
    </MyContext.Provider>
  );
};
