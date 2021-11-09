 #include <stdio.h>
int reverse(int *p[]);
int main()
{ // reverse an array using pointers
 int a[23],n;
 printf("enter no of elements of array ");
 scanf("%d",&n);
 printf("array elements are\n");
 for(int i=0; i<n ;i++)
 {
      printf("%d element is - ",i+1);
 scanf("%d",&a[i]);
 
 }
// reverse();
 int *p;
 p=a;
   for(int i=0; *(p+i)<n/2; i++){
          int k=*(p+i);
          *(p+i) =*(p+n-1-i);
            *(p+n-1-i)=k;
     }
 for(int i=0; i<n; i++)
 printf("%d",a[i]);
    return 0;
}
 /*int reverse(int *p[]){
   int i,n;
   for( i=0; *(p+i)<=n/2; i++){
          int k=*(p+i);
          *(p+i) =*(p+n-1-i);
            *(p+n-1-i)=k;
   }
     
}*/
