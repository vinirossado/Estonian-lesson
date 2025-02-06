import { useTranslation } from "../contexts/TranslationContext";

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useTranslation();

    return (
        <div >
            {language === 'en' ? (
                <button
                    class="bg-white text-gray-700 font-semibold py-2 px-4 "
                    onClick={() => setLanguage('ru')}>
                    pу
                </button>
            ) : (
                <button
                    class="bg-white text-gray-700 font-semibold py-2 px-4 "
                    onClick={() => setLanguage('en')}>
                    en
                </button>
            )}
        </div>
    );
};