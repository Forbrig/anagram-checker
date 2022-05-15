/**
 * Receives an array of strings and returns a two dimensional array,
 * one dimension being the the anagram indexer and the other being the anagrams themselves.
 *
 * @param input Array of strings.
 * @returns Array of grouped anagrams.
 */
export const anagramChecker = (input: Array<string>): Array<Array<string>> => {
  const anagrams: Array<Array<string>> = [[]];

  getAnagrams(input[0], input.slice(1), anagrams, 0);

  return anagrams;
};

/**
 * Group the ```reference``` string and any anagram contained in the ```input``` array.
 * Add the computed group to the anagrams array.
 * Removes all the strings from the ```input``` that matches the ```reference``` string and calls
 * getAnagrams with the new first element of input as ```reference``` and the rest of the inp.
 *
 *
 * @param reference Current string used as reference.
 * @param input Array of strings tested.
 * @param anagrams Array of computed anagrams.
 * @param count Current iteration count (used to index the anagrams group).
 */
const getAnagrams = (
  reference: string,
  input: Array<string>,
  anagrams: Array<Array<string>>,
  count: number
) => {
  const currentGroup: Array<string> = [];
  currentGroup.push(reference);

  const referenceArray = reference.replace(/\s/g, "").split("");

  input.forEach((string, index) => {
    const currentString = string.replace(/\s/g, "").split("");

    if (referenceArray.length === currentString.length) {
      // make sure they have the same lenght first
      for (let i = 0; i < referenceArray.length; i++) {
        for (let j = 0; j < currentString.length; j++) {
          if (referenceArray[i] === currentString[j]) {
            currentString[j] = undefined;
            break; // break when finding one word, we don't want to remove multiple words, this may cause unknow results
          }
        }
      }
    }

    // if we removed every index of the current string this means it matches
    if (currentString.every((e) => e === undefined)) {
      currentGroup.push(string);
      input[index] = undefined; // to remove the string from the original input
    }
  });

  // only after checking all the words we remove them from the array, mainly to not to mess with indexes inside loops
  input = input.filter((e) => e !== undefined);
  anagrams[count] = currentGroup;

  if (input.length > 1) {
    getAnagrams(input[0], input.slice(1), anagrams, count + 1);
  } else if (input.length === 1) {
    anagrams[count + 1] = [input[0]];
  }
};
