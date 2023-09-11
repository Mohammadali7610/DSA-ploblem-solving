// step 1 - creat a function findKthLargest with two parameter nums and k
// step 2 - consider a variable kthLargest that value is 'null' to store the Kth largest value
// step 3 - run a for loop 'k' time to find the kth largest element
// step 4 - consider a variable to keep the trak of the maximum element
// step 5 - run another for loop inside the first loop to find the maximum element
// step 6 - inside the inner loop apply a condition if for checks  the current element is non-zero and greater than the current maximum element.if both condition are proved then  update maxIndex with the value of j. 
// step 7 - after the inner loop kth is updated with the maximum element of index 
// step 8 - set the element at maxIndex in nums array to null
// step 9 - repeat the outer loop run it  k time 
// step 10 - return the kthLargest for the kth largest element


function findKthLargest(nums, k) {
    let kthLargest = null;
  
    for (let i = 0; i < k; i++) {
      let maxIndex = 0;
  
      for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== null && (nums[j] > nums[maxIndex])) {
          maxIndex = j;
        }
      }
  
      kthLargest = nums[maxIndex] ;
      nums[maxIndex] = null; 
    }
    return kthLargest;
}
  
  const nums1 = [-1, -1];
  const k1 = 2;
  console.log(findKthLargest(nums1, k1));
  
  const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
  const k2 = 4;
  console.log(findKthLargest(nums2, k2));
  

//   const nums3 = [3,4,5,6, -6,7,-1,-7];
//   const k3 = 3;
//   console.log(findKthLargest(nums3, k3));