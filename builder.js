const exe = require('@angablue/exe');
    const build = exe({
    entry: '.',
    out: './1336.exe',
    pkg: [ '--public'],
    version: '3.8',
    target: 'node16-win-x64',
    icon: 'icon.ico',
    properties: {
        FileDescription: '1336',
        ProductName: '1336',
        LegalCopyright: '1336',
        OriginalFilename: '1336.exe'
    }
});