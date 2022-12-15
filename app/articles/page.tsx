import React from 'react'
import fetchData from '../fetchData';
import RecentArticles from '../RecentArticles';

export default async function page() {
    var articles = await fetchData.fetchArticlesSummary();
    return (
        <div className="w-full py-24">
            <div className="centerDiv h-full">
                <div className="space-y-8">
                    <h1 className="text-3xl font-medium">Articles</h1>
                    <RecentArticles articles={articles} maxSize={999} />
                </div>
            </div>
        </div>
    )
}
