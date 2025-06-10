import * as fs from 'fs';

const args: string[] = process.argv;

if (args.length !== 4) {
    console.error("Usage: ccwc -c <filename>");
    process.exit(1);
}

const flag = args[2];
if (flag !== '-c' && flag !== '-l' && flag !== '-w' && flag !== '-m') {
    console.error("unsupported flags -c, -l, -w, -m");
    process.exit(1);
}

const filename = args[3];

try {
    const buffer = fs.readFileSync(filename);
    if (flag === '-c') {
        const byteCount = buffer.length;
        console.log(byteCount);
    }
    else if (flag === '-l') {
        const content = buffer.toString();
        const lineCount = content.split('\n').length;
        console.log(lineCount);
    } else if (flag === '-w') {
        const content = buffer.toString();
        const words = content.trim().split(/\s+/);
        const wordCount = words.length;
        console.log(wordCount);
    } else if (flag === '-m') {
        const content = buffer.toString();
        const charCount = content.length;
        console.log(charCount);
    }

} catch (error) {
    console.error(`Error reading file "${filename}": ${(error as Error).message}`);
    process.exit(1);
}
