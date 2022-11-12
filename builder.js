const exe = require('@angablue/exe');
    const build = exe({
    entry: '.',
    out: './Wyraah.exe',
    pkg: [ '--public'],
    version: '3.8',
    target: 'node16-win-x64',
    icon: 'icon.ico',
    properties: {
        FileDescription: 'Wyraah',
        ProductName: 'Wyraah',
        LegalCopyright: 'Wyraah',
        OriginalFilename: 'Wyraah.exe'
    }
});