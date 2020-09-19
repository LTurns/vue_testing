<template>
<div>
   <ul>
        <li v-bind="message in messages">
            {{ message }}
        </li>
    </ul>
    </div>
</template>

<script>
export default ({
  name: 'list', 
  props: ['messages']
})
</script>