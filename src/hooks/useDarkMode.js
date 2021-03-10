import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (darkValue) => {
    const [someValue, setSomeValue] = useLocalStorage(darkValue)

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

