#include <stdio.h>

int add( int a, int b ) {
	return a + b;
}

int main() {
	int result = add( 5, 25 );
	printf("The result is, %d!\n", result );
	printf("Hello, world.\n");
	return 0;
}