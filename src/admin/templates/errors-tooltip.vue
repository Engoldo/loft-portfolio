<template lang="pug">
  .form__error
    span {{errorText}}
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      default: "Какая-то ошибка"
    }
  }
};
</script>