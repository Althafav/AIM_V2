import { Blogitems } from '@/models/blogitems';
import Globals from '@/modules/Globals';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Helper from "@/modules/Helper";

export default function SearchResultsPage() {
    const router = useRouter();
    const { query } = router.query;
    const [searchResults, setSearchResults] = useState<any[]>([]);

    useEffect(() => {
        if (query) {
            const fetchData = async () => {
                const datasourceStr: string = await Globals.KontentClient.item("blog_page")
                    .languageParameter(Globals.CURRENT_LANG_CODENAME)
                    .toObservable()
                    .toPromise()
                    .then((r: any) => JSON.stringify(r.item));

                const data = JSON.parse(datasourceStr);


                const filteredResults = data.articlesItems.value.filter((article: Blogitems) =>
                    article.heading.value.toLowerCase().includes(query.toString().toLowerCase()) ||
                    article.content.value.toLowerCase().includes(query.toString().toLowerCase()) ||
                    article.date.value.toLowerCase().includes(query.toString().toLowerCase()) ||
                    article.pageTitle.value.toLowerCase().includes(query.toString().toLowerCase())

                );
                setSearchResults(filteredResults);
            };

            fetchData();
        }
    }, [query]);

    return (
        <>
            <div className="black-replacer-nav">

            </div>
            <div className='search-page'>

                <div className="container">

                    <h3 className='result-tag '>Search Results for &quot;{query}&quot;</h3>
                    <p className='mb-5'>Found {searchResults.length} results</p>
                    {searchResults.length > 0 ? (
                        <div>
                            {searchResults.map((result: Blogitems, index) => (
                                <div key={index} className='result-card mb-5'>
                                    <h5 className='heading'>{result.heading.value}</h5>
                                    <span className='line-clamp-3' dangerouslySetInnerHTML={{ __html: result.content.value }} />
                                    <div className='mt-3'>
                                        <Link href={`/article/${Helper.formatUrlParameter(
                                            result.heading.value
                                        )}`}>
                                            <button className='readmore-btn'>Read More</button>
                                        </Link>

                                    </div>

                                </div>

                            ))}
                        </div>
                    ) : (
                        <p>No results found.</p>
                    )}
                </div>
            </div>

        </>
    );
}
