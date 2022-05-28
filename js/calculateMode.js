/**
 * Calcuate the mode with any given array and return all modes in an array
 * @param {array} arrayOfElements Given array to evaluate the mode for
 * @returns an array of all modes within the given array
 */
const calculateMode = (arrayOfElements) => {
    /**
     * @param answerKey This is our object that we use to store all unique entries of our given array
     */
    const answerKey = {};

    // Loop through each element within the given array
    for (let idx in arrayOfElements) {
        // At each element we add it to our object and increment the value
        answerKey[arrayOfElements[idx]] = (answerKey[arrayOfElements[idx]] || 0) + 1;
    }

    /**
     * @param nestedAnswerKey Take the object of unique elements from the given array, and make it an array of key/values within an array
     */
    const nestedAnswerKey = Object.entries(answerKey);

    /**
     * @param sortedAnswerKey An inline sort function since this particular sorting doesn't require special logic for sort
     */
    const sortedAnswerKey = nestedAnswerKey.sort((a, b) => a - b);

    /**
     * @param mode Array of modes from the given array
     */
    let mode = [];

    /**
     * @param modeVal We grab the value from the first mode to determine if there are more mode elements within the array
     */
    const modeVal = sortedAnswerKey[0][1];

    // Loop through the array
    for (nestedElement in sortedAnswerKey) {
        // As soon as the element's value is not equal to the mode's value we stop iterating
        if (sortedAnswerKey[nestedElement][1] != modeVal) {
            break;
        }

        // This element's value equals the modeVal so add it to the mode array
        mode.push(sortedAnswerKey[nestedElement][0]);
    }

    // Return the mode array which contains all mode elements from the given array
    return console.log(mode);
}

// Test cases
calculateMode([5, 6, 7, 8]);
calculateMode(["6", "6", "7", "8", "9", "10", "18", "28"]);