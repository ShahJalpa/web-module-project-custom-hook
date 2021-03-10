import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (darkModeValue) => {
    const [someValue, setSomeValue] = useLocalStorage(darkModeValue)

    useEffect(() => {
        if (someValue) {
            window.document.body.classList.add('dark-mode');
        } else {
            window.document.body.classList.remove('dark-mode');
        }

    }, [someValue]);

    return [someValue, setSomeValue];
}

export default useDarkMode;

