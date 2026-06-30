// -------------------------------------------
// Pattern 1: Square Star Pattern
// Output:
// * * * *
// * * * *
// * * * *
// * * * *
// -------------------------------------------

for (let i = 0; i < 4; i++) {
    let row = "";

    // Add 4 stars in every row
    for (let j = 0; j < 4; j++) {
        row = row + "* ";
    }

    // Print the completed row
    console.log(row);
}


// -------------------------------------------
// Pattern 2: Right-Angled Triangle Star Pattern
// Output:
// *
// **
// ***
// ****
// -------------------------------------------

for (let i = 0; i < 4; i++) {
    let row = "";

    // Number of stars depends on the current row (i + 1)
    for (let j = 0; j < i + 1; j++) {
        row = row + "*";
    }

    // Print the completed row
    console.log(row);
}