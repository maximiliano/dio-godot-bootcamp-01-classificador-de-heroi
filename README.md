*(Disclaimer: For anyone wondering here, this is just a silly starting project for a bootcamp, don't mind this and move along)*

# Hero Classifier
You can use the super duper hero classifier to get the might rank of any hero!

## Requirements
You must have `node` properly installed and configured.

## How to use

### Boring way
Run the command line without arguments for a default and boring result:

    $ node src/classify.js

Output:

    =================================
    The hero <John Doe> is Rank Iron!
    =================================
    You can also pass your own hero name and xp!
    Like this: classify.js "Grok the Dwarf" 3000

### Cool way
For the fun way, pass the hero name and xp as arguments:

    $ node src/classify.js "Grok the Smasher" 3500

Output:

    ===========================================
    The hero <Grok the Smasher> is Rank Silver!
    ===========================================

Now go and test this to discover all the ranks!
