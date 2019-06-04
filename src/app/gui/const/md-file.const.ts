export class MdFile {
    constructor(
        private name: string,
        private category: string,
        private directory: string
    ) {}
}

export class MdFileCollection {
    public static files: MdFile[] = [
        new MdFile('《重构-改善即有代码的设计》', 'Book', ''),
        new MdFile('book-list', 'Book', ''),
        new MdFile('C++程序中内嵌git-commit-id', 'CPlusPlus', ''),
        new MdFile('中文乱码问题总结', 'CPlusPlus', ''),
        new MdFile('数据库隔离级别', 'Database', ''),
        new MdFile('关于dep和go modules', 'Go', '')
    ];
}
