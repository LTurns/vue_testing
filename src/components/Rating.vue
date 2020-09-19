<template>
 <div>
  <ul>
   <li :class="{ active: star <= initialGrade }" :key="star" v-for="star in maxStars" class="star"></li>
   <!-- this means that for each list item, it will be a star in maxStars (equal to one star of the total stars) -->
   <!--the :class is a conditional class. We are activating only the stars that are less or equal to the sum of the initialGrade - which will be a number passed in by a prop (as below). -->
  </ul>
  <div class="summary">{{ initialGrade }} of {{ maxStars }}</div>
 </div>
</template>

<script>
export default {
 props: {
  maxStars: {
   type: Number
  }, 
  initialGrade: {
   type: Number
  }
  // here we are specifying that the amount of stars will be presented through a prop, which will be a number. 
 }
 
}
</script>