<template>
    <div class="blured-wrapper">
      <slot></slot>
    </div>
</template>
  
  <style>
    .blured-wrapper > * {
      filter: blur(15rem);
    }
  </style>