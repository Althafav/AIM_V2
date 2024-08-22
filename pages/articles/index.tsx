import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SpinnerComponent from '@/components/UI/SpinnerComponent';

export default function ArticlesIndex() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        router.replace('/articles/1').finally(() => setLoading(false));
    }, [router]);

    return (
        <>
            {loading && (
                <SpinnerComponent />
            )}
        </>
    );
}

