import React from 'react'
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import path from 'path';
import { promises as fs } from 'fs';
import fetchData from '../../fetchData';

export default async function page(props: any) {
    var article = await fetchData.getArticleById(props.params.articleId);
    var html = await getMarkdownAsHtml("test");
    var tags = article.tags.split(',');

    return (
        <div>
            <div className='text-center centerDiv'>
                <div className='space-y-6 mb-12'>
                    <div className='space-y-4'>
                        <h1 className='text-4xl font-medium'>{article.title}</h1>
                        <h2 className='text-2xl'>{article.subtitle}</h2>
                    </div>
                    <div className="centerDiv">
                        <div className='flex space-x-3 text-white text-sm'>
                            {tags.map((tag: string) =>
                                <div className='py-1 px-2 bg-main rounded-lg'><p>{'#' + tag}</p></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}

async function getMarkdownAsHtml(fileName: string) {
    var filePath = path.join(process.cwd(), '/app/articles/md', fileName + '.md');
    var content = await fs.readFile(filePath, 'utf8');

    const processedContent = await remark()
        .use(remarkHtml)
        .process(content);

    return processedContent.toString();
}