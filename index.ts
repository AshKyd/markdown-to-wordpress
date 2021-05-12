import * as fs from 'fs'
import * as path from 'path'
import markdownToWordpress from './markdownToWordpress';

const pathname = '/home/ash/Web/ash.ms/source/_posts/';

const files = fs.readdirSync(pathname)
    .map(file => ({
        path: path.join(pathname, file),
        slug: path.basename(file, '.md')
    }))
    .filter(file => !fs.lstatSync(file.path).isDirectory())
    .filter(file => file.path.match(/\.md$/))
    .map(file => ({
        ...file,
        content: fs.readFileSync(file.path, 'utf8')
    }));

markdownToWordpress({fileArray:files})