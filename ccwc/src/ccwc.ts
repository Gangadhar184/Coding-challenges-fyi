import * as fs from 'fs';

const args: string[] = process.argv;

if(args.length !== 4){
    console.error("Usage: ccwc -c <filename>");
    process.exit(1);
}

const flag = args[2];
if(flag !== '-c'){
    console.error("unsupported flag -c");
    process.exit(1);
}

const filename = args[3];

try{
    const buffer = fs.readFileSync(filename);
    const byteCount =  buffer.length;
    console.log(byteCount);
}catch(error){
    console.error(`Error reading file "${filename}": ${(error as Error).message}`);
    process.exit(1);
}
