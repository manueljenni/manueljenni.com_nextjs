import React from 'react'
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import path from 'path';
import { promises as fs } from 'fs';
import fetchData from '../../fetchData';

export default async function page(props: any) {
    var article = await fetchData.getArticleById(props.params.articleId);
    var contentMd = await getFile("test");
    var html = await getMarkdownAsHtml(contentMd);

    var tags = article.tags.split(',');
    return (
        <div className="w-full py-24">
            <div className="centerDiv h-full">
                <div className="space-y-16 w-2/3">
                    <div className='centerDiv'>
                        <div className='space-y-12'>
                            <div className='space-y-8'>
                                <div className='space-y-4'>
                                    <h1 className='text-4xl font-medium'>{article.title}</h1>
                                    <h2 className='text-2xl'>{article.subtitle}</h2>
                                </div>
                                <div className='flex space-x-3 text-white text-sm'>
                                    {tags.map((tag: string) =>
                                        <div className='py-1 px-2 bg-main rounded-lg'><p>{'#' + tag}</p></div>
                                    )}
                                </div>
                            </div>
                            <div className="prose space-y-0">
                                <div dangerouslySetInnerHTML={{ __html: html }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

async function getMarkdownAsHtml(content: string) {
    const processedContent = await remark()
        .use(remarkHtml)
        .process(content);

    return processedContent.toString();
}

async function getFile(fileName: string) {
    var filePath = path.join(process.cwd(), '/app/articles/md', fileName + '.md');
    return await fs.readFile(filePath, 'utf8');
}
