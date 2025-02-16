const compressString = function (initString) {
  if (initString.length == 0) return "";

  let compressedString = "";
  let prevLetter = initString[0];
  let letterRepetition = 1;

  for (i = 1; i < initString.length; i++) {
    if (initString[i] != prevLetter) {
      compressedString += prevLetter + letterRepetition;
      prevLetter = initString[i];
      letterRepetition = 0;
    }

    letterRepetition++;
  }

  compressedString += prevLetter + letterRepetition;

  return compressedString;
};

const decompressString = function (initString) {
  let decompressedStr = "";
  let numberStr = "";
  let letterToDecompress = "";

  for (i = 0; i < initString.length; i++) {
    currLetter = initString[i];

    if (isNaN(currLetter)) {
      if (letterToDecompress.length != 0) {
        decompressedStr += letterToDecompress.repeat(parseInt(numberStr));
        numberStr = "";
      }

      letterToDecompress = currLetter;
    } else {
      numberStr += currLetter;
    }
  }

  decompressedStr += letterToDecompress.repeat(parseInt(numberStr));

  return decompressedStr;
};

strInput = "aaaaabbbbaaaaazzzzzaaavvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvkugelis";

const strCompressed = compressString(strInput);
console.log(`Compressed: ${strCompressed}`);

const strDecompressed = decompressString(strCompressed);
console.log(`Decompressed: ${strDecompressed}`);

if (strInput == strDecompressed)
  console.log("Compressed and decompressed successfully");
else console.log("Compressed and decompressed unsuccessfully");
