#include <stdio.h>

int main() 
{
    // Declare and initialize character variables
    char char1 = 'W';
    char char2 = 'Y';
    char char3 = 'F';

    // Print the original and reversed characters
    printf("The reverse of %c%c%c is %c%c%c\n",
        char1, char2, char3,
        char3, char2, char1);

    return(0);
}