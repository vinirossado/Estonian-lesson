import { createContext} from 'preact';
import { ruTranslations } from '../translations/ru';
import { enTranslations } from '../translations/en';
import { ReactNode, useContext, useState } from 'preact/compat';

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translations: { [key: string]: string };
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');
  const translations = language === 'ru' ? ruTranslations : enTranslations;

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
