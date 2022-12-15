import React from 'react'
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import path from 'path';
import { promises as fs } from 'fs';

export default async function page(props: any) {
    var articleId = props.params.articleId;
    var contentMd = await getFile("test");
    var html = await getMarkdownAsHtml(contentMd);
    return (
        <div className="w-full py-24">
            <div className="centerDiv h-full">
                <div className="space-y-16 w-2/3">
                    <div className='centerDiv'>
                        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </div>
        </div>
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
